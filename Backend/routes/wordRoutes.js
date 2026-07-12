const express = require("express");
const router = express.Router();

const { getWords } = require("../controllers/wordController");

router.get("/allwords", async (req, res) => {
  try {
    const words = await getWords();
    res.status(200).send(words);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

module.exports = router;
