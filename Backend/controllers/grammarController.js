const { getAllGrammar } = require("../services/grammarServices");

const getGrammar = async () => {
  const words = await getAllGrammar();
  return words;
};

// const searchGrammar = async (searchTerm) => {
//   const words = await getAllGrammar();
//   if (!searchTerm || !searchTerm.trim()) {
//     return words;
//   }

//   const normalizedSearchTerm = searchTerm.toLowerCase().trim();
//   const filteredGrammar = words.filter((word) => {
//     const searchableFields = [word.word, word.translation, word.example];

//     return searchableFields.some(
//       (field) =>
//         typeof field === "string" &&
//         field.toLowerCase().includes(normalizedSearchTerm),
//     );
//   });
//   return filteredWords;
// };

module.exports = { getAllGrammar };
