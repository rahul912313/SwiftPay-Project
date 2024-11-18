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
  const session = await mongoose.startSession();

  // Start the transaction
  session.startTransaction();

  try {
    const { to, amount } = req.body;

    // Find the account of the user making the transfer
    const account = await User.findOne({ _id: req.userId }).session(session);
    if (!account) {
      return res.status(401).json({
        message: "User not found",
        userId: req.userId,
      });
    } else if (account.balance < amount) {
      return res.status(401).json({
        message: "Not sufficient balance",
      });
    }

    // Find the recipient account
    const toAccount = await User.findOne({ _id: to }).session(session);
    if (!toAccount) {
      return res.status(401).json({
        message: "Recipient user not found",
      });
    }

    // Perform the transaction (debit and credit the respective accounts)
    await Account.updateOne(
      { userId: req.userId },
      { $inc: { balance: -amount } }
    ).session(session);

    await Account.updateOne(
      { userId: to },
      { $inc: { balance: amount } }
    ).session(session);

    // Commit the transaction if everything is successful
    await session.commitTransaction();

    // Send success response
    return res.json({
      message: "Transfer successful",
    });
  } catch (e) {
    // If any error occurs, abort the transaction
    await session.abortTransaction();

    // Send failure response
    return res.status(500).json({
      message: "Transaction failed due to: " + e.message,
    });
  } finally {
    // End session
    await session.endSession();
  }
});

module.exports = router;
