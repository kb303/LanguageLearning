const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(express.json());
const PORT = 3000;

let dbConnect = require("./services/dbConnect");

app.use(
  cors({
    origin: function (origin, callback) {
      // Allow requests with no origin (like mobile apps or curl requests)
      if (!origin) return callback(null, true);

      // Allow localhost on any port during development
      if (origin.includes("localhost") || origin.includes("127.0.0.1")) {
        return callback(null, true);
      }

      // In production, whitelist specific domains
      const allowedOrigins = [
        "https://yourdomain.com",
        // Add production domains here
      ];

      if (allowedOrigins.includes(origin)) {
        return callback(null, true);
      }

      callback(new Error("Not allowed by CORS"));
    },
    credentials: true,
  }),
);

const userRoutes = require("./routes/userAuthRoutes");
const wordRoutes = require("./routes/wordRoutes");
const charRoutes = require("./routes/characterRoutes");
const listRoutes = require("./routes/listRoutes");

app.use("/api/list", listRoutes);
app.use("/api/user", userRoutes);
app.use("/api/word", wordRoutes);
app.use("/api/char", charRoutes);

app.get("/", (req, res) => {
  res.send("This is a test");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
