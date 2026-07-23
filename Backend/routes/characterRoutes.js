const express = require("express");
const router = express.Router();

const { getChars } = require("../controllers/characterController");

router.get("/allchars", async (req, res) => {
  try {
    const chars = await getChars();
    res.status(200).send(chars);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

module.exports = router;
