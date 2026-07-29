const getAllGrammar = async () => {
  const Grammar = require("../models/grammarModel");
  const grammar = await Grammar.find({});
  return grammar;
};

module.exports = { getAllGrammar };
