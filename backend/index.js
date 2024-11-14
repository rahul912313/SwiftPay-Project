const express = require("express");
const rootRouter = require("./routes/index");
const cors = require("cors");
const app = express();
const port = 4000;

const corsOptions = {
  origin: "http://localhost:5173",
};

app.use(cors(corsOptions));
// app.options("*", cors());

app.use(express.json());
app.use(cors());

app.use("/api/v1", rootRouter);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
