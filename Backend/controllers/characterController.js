const { getAllCharacters } = require("../services/characterServices");

const getChars = async () => {
  const chars = await getAllCharacters();
  return chars;
};

module.exports = { getChars };
