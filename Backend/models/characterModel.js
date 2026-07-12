const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const characterSchema = new Schema({
  character: { type: String, trim: true, required: true },
  romanization: { type: String, trim: true, required: true },
  initialSound: { type: String, trim: true },
  finalSound: { type: String, trim: true },
  type: { type: String, trim: true },
  words: [{ type: Schema.Types.ObjectId, ref: "Word" }],
});

module.exports = mongoose.model("Character", characterSchema);
