const express = require("express");
const router = express.Router();

const { getWords, searchWords } = require("../controllers/wordController");
const { authenticateToken } = require("../middleware/userAuthMiddleware");
const List = require("../models/listModel");

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

// Add a word to a user's list
router.post("/save", authenticateToken, async (req, res) => {
  try {
    const { wordId, listId } = req.body;
    const userId = req.user?.id;

    console.log("wordId:", wordId, "listId:", listId, "userId:", userId);

    if (!wordId || !listId) {
      return res.status(400).send({ error: "wordId and listId are required" });
    }

    // Find the list and verify it belongs to the user
    const list = await List.findOne({ _id: listId, user: userId });

    if (!list) {
      console.log("List not found for userId:", userId, "listId:", listId);
      return res.status(404).send({ error: "List not found" });
    }

    // Check if word already exists in list to avoid duplicates
    if (list.words.includes(wordId)) {
      return res.status(200).send(list);
    }

    // Add the word to the list
    list.words.push(wordId);
    await list.save();

    // Return the updated list with populated words
    const updatedList = await List.findById(listId).populate("words");
    console.log("Word added successfully");
    res.status(200).send(updatedList);
  } catch (error) {
    console.error("Error in /save endpoint:", error);
    res.status(500).send({ error: error.message });
  }
});

module.exports = router;
