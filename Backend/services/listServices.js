const { List } = require("../models");

const getAllLists = async (userId) => {
  try {
    const lists = await List.find({ user: userId }).populate("words");
    return lists;
  } catch (error) {
    console.error("Error fetching lists:", error);
    throw error;
  }
};

const getListById = async (listId, userId) => {
  try {
    const list = await List.findOne({ _id: listId, user: userId }).populate(
      "words",
    );
    return list;
  } catch (error) {
    console.error(`Error fetching list with ID ${listId}:`, error);
    throw error;
  }
};

const createList = async (listData, userId) => {
  try {
    const newList = new List({ ...listData, user: userId });
    await newList.save();
    return newList;
  } catch (error) {
    console.error("Error creating list:", error);
    throw error;
  }
};

const updateList = async (listId, updatedData, userId) => {
  try {
    const updatedList = await List.findOneAndUpdate(
      { _id: listId, user: userId },
      updatedData,
      { new: true },
    );
    return updatedList;
  } catch (error) {
    console.error(`Error updating list with ID ${listId}:`, error);
    throw error;
  }
};

const deleteList = async (listId, userId) => {
  try {
    const deletedList = await List.findOneAndDelete({
      _id: listId,
      user: userId,
    });
    return deletedList;
  } catch (error) {
    console.error(`Error deleting list with ID ${listId}:`, error);
    throw error;
  }
};

module.exports = {
  getAllLists,
  getListById,
  createList,
  updateList,
  deleteList,
};
