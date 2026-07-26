const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listSchema = new Schema({
  name: { type: String, trim: true, required: true },
  words: [{ type: Schema.Types.ObjectId, ref: "Word" }],
  user: { type: Schema.Types.ObjectId, ref: "User", required: true },
});

module.exports = mongoose.model("List", listSchema);
