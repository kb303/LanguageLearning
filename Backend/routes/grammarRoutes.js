const express = require("express");
const router = express.Router();

const { getGrammar } = require("../controllers/grammarController");

router.get("/allgrammar", async (req, res) => {
  try {
    const grammar = await getGrammar();
    res.status(200).send(grammar);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// router.get("/search", async (req, res) => {
//   const searchTerm = req.query.term;
//   try {
//     const filteredWords = await searchWords(searchTerm);
//     res.status(200).send(filteredWords);
//   } catch (error) {
//     res.status(500).send(error.message);
//   }
// });

module.exports = router;
