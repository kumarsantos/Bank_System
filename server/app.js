const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const app = express();
dotenv.config();
app.use(cors());
const { connectDB } = require("./Config/config");
connectDB();
const { generateToken } = require("./utils/generateToken");
const User = require("./models/UserModel");
const Transaction = require("./models/Transaction");

const jwt = require("jsonwebtoken");
app.use(express.json());

const protect = async (req, res, next) => {
  let token = req.headers.authorization.split(" ")[1];

  if (token) {
    try {
      const decode = jwt.verify(token, process.env.JWT_KEY);
      req.user = await User.findById(decode.id);
      next();
    } catch (error) {
      res.json({ message: "UnAuthorized User" });
    }
  } else {
    res.json({ message: "UnAuthorized User" });
  }
};

app.post("/login", async (req, res) => {
  const { email, password, category } = req.body;

  if (!email || !password || !category) {
    return res.json({ err: "Please Enter all field" });
  }

  const user1 = await User.findOne({
    email: email,
    password: password,
    category: category,
  });
  // console.log(user1)
  if (!user1) {
    return res.json({ err: "Invalid email or password" });
  } else if (user1.category === "Saving Account") {
    let data = await Transaction.findOne({ user: user1._id })
      .sort({ updatedAt: -1 })
      .limit(1);

    let { updatedAt, outstanding } = data;
    let predate = new Date(updatedAt);
    let date = new Date();
    let todayTime = date.getTime();
    let totalTimeDifference = date.getTime() - predate.getTime();
    let dayforinterest = Math.ceil(totalTimeDifference / (1000 * 3600 * 24));
    let interestperday = ((parseInt(outstanding) / 100) * 6) / 365;
    let totalinterest = (interestperday * dayforinterest).toFixed(2);
    let totaloutstanding = parseInt(outstanding) + parseInt(totalinterest);

    if (dayforinterest > 1) {
      // await Transaction.findOneAndUpdate(
      //   { user: user1._id },
      //   { $set: { outstanding: totaloutstanding, interest: totalinterest } },
      //   { useFindAndModify: false }
      // ).sort({ createdAt: -1 });
      await Transaction.create({
        user: user1._id,
        outstanding: totaloutstanding,
        interest: totalinterest,
      });
    }

    res.json({
      user:user1,
      token: generateToken(user1._id),
      message: "Successfull login",
      category:user1.category
    });
  } else {
    res.json({
      user:user1,
      token: generateToken(user1._id),
      message: "Successfull login",
      category:user1.category
    });
  }
});

app.get("/alldata", protect, async (req, res) => {
  const result = await Transaction.find({ user: req.user._id }).sort({
    updatedAt: 1,
  });
  res.json(result);
});

app.post("/", protect, async (req, res) => {
  await User.findById(req.user._id)
    .then((user) => {
      if (!user) {
        return res.status(422).json({ error: "Invalid email or password" });
      } else {
        res.json({
          user,
          token: generateToken(user._id),
        });
      }
    })
    .catch((err) => console.log(err));
});
app.post("/register", async (req, res) => {
  const { email, username, password, openingamount, category } = req.body;

  if (!email || !username || !password || !openingamount || !category) {
    return res.json({ err: "Please Enter All The Fields" });
  }

  const userExist = await User.findOne({ email, category });
  if (userExist) {
    return res.json({ err: "User Already Exists !" });
  } else {
    const useraccount = await User.create({
      name: username,
      email: email,
      password: password,
      openingamount: openingamount,
      category: category,
    });

    if (useraccount) {
      await Transaction.create({
        outstanding: useraccount.openingamount,
        openingamount: useraccount.openingamount,
        user: useraccount._id,
      }).then((result) => {
        let token = generateToken(useraccount._id);
        return res.json({
          useraccount,
          token,
          message: "Successfully Registered",
        });
      });
    } else {
      return res.json({ err: "User Not Found" });
    }
  }
});

app.put("/forgetpassword", async (req, res) => {
  const { email, newpassword, confirmpassword, category } = req.body;

  if (!email || !category || !newpassword || !confirmpassword) {
    return res.json({ err: "Please Enter All The Fields" });
  }
  if (newpassword !== confirmpassword) {
    return res.json({ err: "Invalid Credential !" });
  }

  const userExist = await User.findOneAndUpdate(
    { email: email, category: category },
    { $set: { password: newpassword } },
    { new: true, upsert: true, rawResult: true }
  );

  if (!userExist) {
    return res.json({ err: "User Not Exists !" });
  } else {
    return res.json({ message: "Successfully Changed !" });
  }
});

app.post("/withdraw", protect, async (req, res) => {
  const { withdraw } = req.body;

  if (!withdraw) {
    return res.json({ err: "Please Enter The Amount" });
  } else if (withdraw > 10000) {
    return res.json({ err: "Overdraft limit is 10000/day" });
  } else {
    await Transaction.findOne({ user: req.user._id })
      .limit(1)
      .sort({ updatedAt: -1 })
      .then((result) => {
        const { outstanding } = result;
        const afterWithdrawAmount = parseInt(outstanding) - parseInt(withdraw);

        if (afterWithdrawAmount < 10000) {
          return res.json({ err: "InSufficient balance" });
        } else {
          const result = Transaction.create({
            user: req.user._id,
            outstanding: afterWithdrawAmount,
            withdrawalamount: withdraw,
          });

          if (result) {
            return res.json({ message: "Successful Transaction" });
          } else {
            return res.json({ err: "Unauthorized User" });
          }
        }
      });
  }
});

app.post("/deposite", protect, async (req, res) => {
  const { deposite } = req.body;

  if (!deposite) {
    return res.json({ err: "Please Enter The Amount" });
  } else {
    await Transaction.findOne({ user: req.user._id })
      .limit(1)
      .sort({ updatedAt: -1 })
      .then((result) => {
        const { outstanding } = result;

        const afterdepoamt = parseInt(outstanding) + parseInt(deposite);

        const createddata = Transaction.create({
          user: req.user._id,
          outstanding: afterdepoamt,
          depositedamount: deposite,
        });

        if (createddata) {
          return res.json({ message: "Successful Deposited" });
        } else {
          return res.json({ err: "Unauthorized User" });
        }
      });
  }
});

if (process.env.NOD_ENV == "production") {
  app.use(express.static("client/build"));
}

const PORT = 5000 || process.env.PORT;
app.listen(PORT, () => {
  console.log("Server is running on PORT NUMBER " + PORT);
});
