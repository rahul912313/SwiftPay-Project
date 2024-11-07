const express = require("express");
const z = require("zod");
const jwt = require("jsonwebtoken");
const authMiddleware = require("../middleware");

const { JWT_SECRET } = require("../config");
const { User, Account } = require("../db");

const signupbody = z.object({
  username: z.string().email(),
  firstname: z.string(),
  lastname: z.string(),
  password: z.string(),
});

const updatebody = z.object({
  firstname: z.string().optional(),
  lastname: z.string().optional(),
  password: z.string().optional(),
});

const signinbody = z.object({
  username: z.string().email(),
  password: z.string(),
});

const router = express.Router();

router.get("/", (req, res) => {
  console.log("User Router is working");
  res.json({
    message: "Hello Im in User Router",
  });
});

router.post("/signup", async (req, res) => {
  const parsed = signupbody.safeParse(req.body);
  if (!parsed.success) {
    return res.status(411).json({
      message: "Invalid Inputs",
    });
  }

  //Find if existing
  const existing = await User.findOne({
    username: req.body.username,
  });
  if (existing) {
    return res.status(411).json({
      message: "User already exist",
    });
  }

  const user = await User.create({
    username: req.body.username,
    password: req.body.password,
    firstname: req.body.firstname,
    lastname: req.body.lastname,
  });

  const userId = user._id;

  //Already add balance to the user, just some random for testing
  await Account.create({
    userId,
    balance: 1 + Math.random() * 10000,
  });

  const token = jwt.sign({ userId }, JWT_SECRET);

  res.json({
    message: "User Created Sucessfully",
    token: token,
  });
});

router.post("/login", async (req, res) => {
  // const { username, password } = req.body;

  // Respond with the received username and password
  // res.json({
  //   username: username,
  //   password: password,
  // });
  const parsed = signinbody.safeParse(req.body);
  if (!parsed.success) {
    return res.status(411).json({
      message: "Invalid Inputs",
    });
  }
  console.log("Received body:", req.body); // Debugging log to check the request body

  const user = await User.findOne({
    username: req.body.username,
    password: req.body.password,
  });
  if (!user) {
    return res.status(411).json({
      message: "User does not exist",
    });
  } else {
    const userId = user._id;
    const token = jwt.sign({ userId }, JWT_SECRET);

    res.json({
      token: token,
      message: "Login Successfull",
    });
    return;
  }
});

router.post("/", authMiddleware, async (req, res) => {
  const parsed = updatebody.safeParse(req.body);
  if (!parsed.success) {
    res.status(411).json({
      message: "Error while updating information",
    });
  }

  await User.updateOne({ _id: req.userId }, req.body);

  res.json({
    message: "Updated successfully",
  });
});

//Returns all the friend whom you can tranfer money from data

router.get("/bulk", (req, res) => {
  const filter = req.body.filter || "";

  const users = User.find({
    $or: [{ firstName: { $regex: filter } }, { lastName: { $regex: filter } }],
  });

  res.json({
    user: users.map((user) => ({
      username: user.username,
      firstName: user.firstName,
      lastName: user.lastName,
      _id: user._id,
    })),
  });
});

module.exports = router;
