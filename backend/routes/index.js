const express = require("express");
const userRouter = require("./user");
const accountRouter = require("./accounts");

const router = express.Router();

router.use("/user", userRouter);
router.use("/accounts", accountRouter);

router.get("/", (req, res) => {
  console.log("Router is working");
  res.json({
    message: "Hello im in rootRouter",
  });
});

module.exports = router;
