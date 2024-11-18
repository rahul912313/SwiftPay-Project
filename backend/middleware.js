const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("./config");

const authMiddleware = (req, res, next) => {
  // get the authheader
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    res.status(411).json({
      message: "Some issue in Middleware Auth Header",
    });
  }

  const token = authHeader.split(" ")[1];
  // console.log(token); Just checking if code is working well

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    console.log(decoded);
    if (decoded.userId) {
      req.userId = decoded.userId;
      console.log("Req id is -> ", req.userId);
    }
    next();
  } catch (e) {
    res.status(401).json({
      message: "Some issue in JWT Verification",
      error: e,
    });
  }
};
module.exports = authMiddleware;
