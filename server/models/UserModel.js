const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
      select: false,
    },
    openingamount: {
      type: Number,
      required: true,
    },
    category: {
      type: String,
      required: true,
    }
  },
  { timestamps: true }
);

const User = mongoose.model("user", userSchema);


module.exports = User ;
