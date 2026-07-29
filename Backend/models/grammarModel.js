const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const grammarSchema = new Schema({
  hangul: { type: String, trim: true, required: true },
  romanisation: { type: String, trim: true, required: true },
  use: { type: String, trim: true },
  form: [{ condition: String, form: String }],
  example: [{ hangul: String, romanisation: String, translation: String }],
});

module.exports = mongoose.model("Grammar", grammarSchema);
