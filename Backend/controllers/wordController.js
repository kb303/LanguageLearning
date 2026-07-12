const { getAllWords } = require("../services/wordServices");

const getWords = async () => {
  const words = await getAllWords();
  return words;
};

module.exports = { getWords };
