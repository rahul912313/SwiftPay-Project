const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware");
const { User, Account } = require("../db");
const mongoose = require("mongoose");

router.get("/", (req, res) => {
  res.json({
    message: "Hello Im in Account Router",
  });
});

router.get("/balance", authMiddleware, async (req, res) => {
  console.log("Req id in /balance is: ", req.userId);
  try {
    // Convert req.userId to ObjectId
    // const id = mongoose.Types.ObjectId(req.userId);

    const account = await Account.findOne({
      userId: req.userId,
    });

    // If no account is found, return a 404 error
    if (!account) {
      return res.status(404).json({
        message: "Account not found",
      });
    }

    // Respond with the account balance
    res.json({
      balance: account.balance,
    });
  } catch (error) {
    // If any error occurs, return a 500 server error
    console.error("Error retrieving account balance:", error);
    res.status(500).json({
      message: "Error retrieving account balance",
      error: error.message,
    });
  }
});

router.post("/transfer", authMiddleware, async (req, res) => {
  //Initialize session
  const session = await mongoose.startSession();

  //Start the transaction
  session.startTransaction();

  try {
    const { to, amount } = req.body;

    // Find the from account and use .session(session) in every await codeline
    const account = await User.findOne({ userId: req.userId }).session(session);

    if (!account) {
      res.status(401).json({
        message: "User not found",
      });
    } else if (account.balance < amount) {
      res.status(401).json({
        message: "Not sufficient balance",
      });
    }

    // Find the to account and use .session(session) in every await codeline
    const toAccount = await User.findOne({ userId: to }).session(session);
    if (!toAccount) {
      res.status(401).json({
        message: "User not found",
      });
    }

    // Perform the Transaction
    await Account.updateOne(
      { userId: req.userId },
      { $inc: { balance: -amount } }
    ).session(session);

    await Account.updateOne(
      { userId: to },
      { $inc: { balance: amount } }
    ).session(session);

    //After transaction is comnpleted, commit transaction
    await session.commitTransaction();
    res.json({
      message: "Transfer Succesfull",
    });
  } catch (e) {
    await session.abortTransaction();
    res.json({
      message: "Transaction failed due to : ",
      e,
    });
  } finally {
    //End session
    await session.endSession();
  }
});

module.exports = router;
