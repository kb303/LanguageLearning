import { createContext, useReducer, useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const WordContext = createContext();

export default function WordProvider({ children }) {
  const apiBaseUrl =
    import.meta.env.VITE_API_BASE_URL || "http://localhost:3000";

  const loadAllWords = async () => {
    const url = `${apiBaseUrl}/api/word/allwords`;
    try {
      const response = await axios.get(url);
      const words = response.data ?? [];
      return words;
    } catch (error) {
      console.error("Failed to load dictionary data", error);
      return [];
    }
  };

  const searchWord = async (searchTerm) => {
    const url = `${apiBaseUrl}/api/word/search?term=${encodeURIComponent(
      searchTerm,
    )}`;
    try {
      const response = await axios.get(url);
      const words = response.data ?? [];
      return words;
    } catch (error) {
      console.error("Failed to search dictionary data", error);
      return [];
    }
  };

  return (
    <WordContext.Provider value={{ loadAllWords, searchWord }}>
      {children}
    </WordContext.Provider>
  );
}
