const getAllCharacters = async () => {
  const Char = require("../models/characterModel");
  const characters = await Char.find({});
  return characters;
};

module.exports = { getAllCharacters };
