const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(express.json());
const PORT = 3000;

let dbConnect = require("./services/dbConnect");

app.use(
  cors({
    origin: "http://localhost:5173",
  }),
);

const userRoutes = require("./routes/userAuthRoutes");
const wordRoutes = require("./routes/wordRoutes");
const charRoutes = require("./routes/characterRoutes");

app.use("/api/user", userRoutes);
app.use("/api/word", wordRoutes);
app.use("/api/char", charRoutes);

app.get("/", (req, res) => {
  res.send("This is a test");
});

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
