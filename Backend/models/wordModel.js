const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const wordSchema = new Schema({
  word: { type: String, trim: true, required: true },
  translation: { type: String, trim: true, required: true },
  pronunciation: { type: String, trim: true },
  type: { type: String, trim: true, required: true },
  example: { type: String, trim: true },
  characters: [{ type: String, trim: true }],
});

module.exports = mongoose.model("Word", wordSchema);
