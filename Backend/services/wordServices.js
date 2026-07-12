const getAllWords = async () => {
  const Word = require("../models/wordModel");
  const words = await Word.find({});
  return words;
};

module.exports = { getAllWords };
