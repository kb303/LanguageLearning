const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const characterSchema = new Schema({
  character: { type: String, trim: true, required: true },
  pronunciation: { type: String, trim: true },
  words: [{ type: Schema.Types.ObjectId, ref: "word" }],
});

module.exports = mongoose.model("character", characterSchema);
