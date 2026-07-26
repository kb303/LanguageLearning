const {
  getAllLists,
  getListById,
  createList,
  updateList,
  deleteList,
} = require("../services/listServices");

const getLists = async (userId) => {
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

const updateExistingList = async (listId, updatedData, userId) => {
  const updatedList = await updateList(listId, updatedData, userId);
  return updatedList;
};

const deleteExistingList = async (listId, userId) => {
  const deletedList = await deleteList(listId, userId);
  return deletedList;
};

module.exports = {
  getLists,
  getList,
  createNewList,
  updateExistingList,
  deleteExistingList,
};
