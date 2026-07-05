const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const wordSchema = new Schema({
  word: { type: String, trim: true, required: true },
  translation: { type: String, trim: true, required: true },
  pronunciation: { type: String, trim: true },
  meaning: { type: String, trim: true, required: true },
  example: { type: String, trim: true },
  characters: [{ type: Schema.Types.ObjectId, ref: "character" }],
});

module.exports = mongoose.model("word", wordSchema);
