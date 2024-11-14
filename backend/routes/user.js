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

router.get("/", async (req, res) => {
  try {
    // Fetch all users from the database
    const users = await User.find();

    // Map and return user data
    res.json({
      users,
    });
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({
      message: "Failed to fetch users",
      error: error.message,
    });
  }
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
  const filter = req.query.filter || "";

  User.find({
    $or: [
      { firstname: { $regex: filter, $options: "i" } },
      { lastname: { $regex: filter, $options: "i" } },
    ],
  })
    // .lean() // Converts Mongoose documents to plain JavaScript objects
    .then((users) => {
      // Transform each user to only return the desired fields
      const userData = users.map((user) => ({
        username: user.username,
        firstname: user.firstname,
        lastname: user.lastname,
        _id: user._id,
      }));

      res.json({
        users: userData, // Return the filtered and transformed users list
      });
    })
    .catch((err) => {
      res
        .status(500)
        .json({ error: "Internal Server Error", details: err.message });
    });
});

module.exports = router;
