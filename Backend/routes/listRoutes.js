const express = require("express");
const router = express.Router();
const { authenticateToken } = require("../middleware/userAuthMiddleware");

const {
  getLists,
  getList,
  createNewList,
  updateExistingList,
  deleteExistingList,
} = require("../controllers/listController");

router.get("/", authenticateToken, async (req, res) => {
  try {
    const userId = req.user.id;
    const lists = await getLists(userId);
    res.status(200).json(lists);
  } catch (error) {
    if (error.message === "Unauthorized") {
      return res.status(401).json({ error: "Unauthorized" });
    } else {
      res.status(500).json({ error: error.message });
    }
  }
});

router.get("/:listId", authenticateToken, async (req, res) => {
  const { listId } = req.params;
  const userId = req.user.id;
  try {
    const list = await getList(listId, userId);
    if (!list) {
      return res.status(404).json({ error: "List not found" });
    }
    res.status(200).json(list);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post("/create", authenticateToken, async (req, res) => {
  try {
    const userId = req.user.id;
    const newList = await createNewList(req.body, userId);
    res.status(201).json(newList);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.put("/update", authenticateToken, async (req, res) => {
  const { listId, ...updatedData } = req.body;
  const userId = req.user.id;
  try {
    const updatedList = await updateExistingList(listId, updatedData, userId);
    if (!updatedList) {
      return res.status(404).json({ error: "List not found" });
    }
    res.status(200).json(updatedList);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.delete("/:listId", authenticateToken, async (req, res) => {
  const { listId } = req.params;
  const userId = req.user.id;
  try {
    const deletedList = await deleteExistingList(listId, userId);
    if (!deletedList) {
      return res.status(404).json({ error: "List not found" });
    }
    res.status(200).json(deletedList);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
