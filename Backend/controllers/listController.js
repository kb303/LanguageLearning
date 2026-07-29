const {
  getAllLists,
  getListById,
  createList,
  removeItemFromList,
  deleteList,
} = require("../services/listServices");

const fetchAllLists = async (userId) => {
  const lists = await getAllLists(userId);
  return lists;
};

const getList = async (listId, userId) => {
  const list = await getListById(listId, userId);
  return list;
};

const createNewList = async (listData, userId) => {
  const newList = await createList(listData, userId);
  return newList;
};

const removeItemFromExistingList = async (listId, wordId, userId) => {
  const updatedList = await removeItemFromList(listId, wordId, userId);
  return updatedList;
};

const deleteExistingList = async (listId, userId) => {
  const deletedList = await deleteList(listId, userId);
  return deletedList;
};

module.exports = {
  fetchAllLists,
  getList,
  createNewList,
  removeItemFromExistingList,
  deleteExistingList,
};
