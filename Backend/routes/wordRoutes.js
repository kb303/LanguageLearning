const express = require("express");
const router = express.Router();

const { getWords, searchWords } = require("../controllers/wordController");

router.get("/allwords", async (req, res) => {
  try {
    const words = await getWords();
    res.status(200).send(words);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

router.get("/search", async (req, res) => {
  const searchTerm = req.query.term;
  try {
    const filteredWords = await searchWords(searchTerm);
    res.status(200).send(filteredWords);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

module.exports = router;
