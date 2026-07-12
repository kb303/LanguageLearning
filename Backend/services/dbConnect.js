"use strict";

const Mongoose = require("mongoose");
// if the connection fails, try 127.0.0.1 instead of localhost below
const uri = process.env.DB_URI || "mongodb://127.0.0.1/myFirstDatabase";

// Connect to MongoDB
Mongoose.connect(uri)
  .then(() => console.log("MongoDB Connected"))
  .catch((error) => console.log("MongoDB Error:" + error.message));

// Get the default connection
const db = Mongoose.connection;

// Bind connection to error event (to get notification of
// connection errors)
db.on("error", console.error.bind(console, "MongoDB connection error:"));

exports.Mongoose = Mongoose;

/*const mongoose = require('mongoose');

async function seedDatabase() {
  const userCount = await mongoose.connection.db.collection('users').countDocuments();
  
  // Only insert if the collection is empty to prevent duplicates
  if (userCount === 0) {
    await mongoose.connection.db.collection('users').insertMany([
      { username: "admin", password: "hashed_password", role: "admin" }
    ]);
    console.log("Initial admin data seeded successfully.");
  }
}

mongoose.connect('mongodb://localhost:27017/myDatabase')
  .then(() => seedDatabase());
*/
