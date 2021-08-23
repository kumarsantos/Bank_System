const mongoose=require('mongoose')
const {User} =require( './UserModel')
// const {ObjectId} =mongoose.Schema.Types


const transactionSchema = mongoose.Schema({
    user: {
      type:String,
      required:true,
     
    },
    depositedamount: {
      type: Number,
      default: 0,
    },
  
    withdrawalamount: {
      type: Number,
      default: 0,
    },
    openingamount: {
      type: Number,
      default: 0,
    },
    interest: {
      type: Number,
      default: 0,
    },
    outstanding: {
      type: Number,
      default: 0,
    },
   
  },{timestamps:true});

  const Transaction=mongoose.model("transactions",transactionSchema);
  module.exports=Transaction;