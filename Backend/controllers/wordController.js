const { getAllWords } = require("../services/wordServices");

const getWords = async () => {
  const words = await getAllWords();
  return words;
};

const searchWords = async (searchTerm) => {
  const words = await getAllWords();
  if (!searchTerm || !searchTerm.trim()) {
    return words;
  }

  const normalizedSearchTerm = searchTerm.toLowerCase().trim();
  const filteredWords = words.filter((word) => {
    const searchableFields = [word.word, word.translation, word.example];

    return searchableFields.some(
      (field) =>
        typeof field === "string" &&
        field.toLowerCase().includes(normalizedSearchTerm),
    );
  });
  return filteredWords;
};

module.exports = { getWords, searchWords };
