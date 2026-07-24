const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listSchema = new Schema({
  name: { type: String, trim: true, required: true }
  words: [{ type: Schema.Types.ObjectId, ref: "Word" }],
});

module.exports = mongoose.model("List", listSchema);
