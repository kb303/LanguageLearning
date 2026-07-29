const mongoose = require("mongoose");

const WordModel = require("../models/wordModel");
const CharacterModel = require("../models/characterModel");
const GrammarModel = require("../models/grammarModel");

const { WORDS } = require("../data/words");
const { CHARACTERS } = require("../data/characters");
const { GRAMMAR } = require("../data/grammar");

async function preloadDatabase() {
  try {
    // 1. Check existing documents in the collection
    const wordCount = await WordModel.countDocuments();
    const charCount = await CharacterModel.countDocuments();
    const grammarCount = await GrammarModel.countDocuments();

    if (wordCount === 0 && charCount === 0 && grammarCount === 0) {
      console.log("Database is empty. Starting data preloading in progress...");

      // 2. Insert the seed data
      await WordModel.insertMany(WORDS);
      await CharacterModel.insertMany(CHARACTERS);
      await GrammarModel.insertMany(GRAMMAR);
      console.log("Data preloaded successfully!");
    } else if (wordCount === 0 && charCount !== 0 && grammarCount !== 0) {
      await WordModel.insertMany(WORDS);
      console.log("Word data preloaded successfully");
    } else if (wordCount !== 0 && charCount === 0 && grammarCount !== 0) {
      await CharacterModel.insertMany(CHARACTERS);
      console.log("Character data preloaded successfully");
    } else if (wordCount !== 0 && charCount !== 0 && grammarCount === 0) {
      await GrammarModel.insertMany(GRAMMAR);
      console.log("Grammar data preloaded successfully");
    } else {
      console.log("Database already has data. Skipping preload.");
    }
  } catch (error) {
    console.error("Error preloading data:", error);
  }
}

module.exports = { preloadDatabase };
