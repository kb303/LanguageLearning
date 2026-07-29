import { createContext, useReducer, useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const WordContext = createContext();

export default function WordProvider({ children }) {
  const [listModalOpen, setListModalOpen] = useState(false);

  // In development, make direct requests to backend; in production use relative paths
  const apiBaseUrl =
    import.meta.env.MODE === "production" ? "" : "http://localhost:3000";

  const getHeaders = () => {
    const token = localStorage.getItem("accessToken");
    return token ? { Authorization: `Bearer ${token}` } : {};
  };

  const loadAllWords = async () => {
    const url = `/api/word/allwords`;
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

  const createList = async (listName) => {
    const url = `${apiBaseUrl}/api/list/create`;
    try {
      const response = await axios.post(
        url,
        { name: listName },
        { headers: getHeaders() },
      );
      return response.data;
    } catch (error) {
      if (error.response?.status === 401) {
        console.error("Unauthorized: Please log in to create lists");
        localStorage.removeItem("accessToken");
        return null;
      }
      console.error("Failed to create list", error);
      return null;
    }
  };

  const saveWordToList = async (wordId, listId) => {
    const url = `${apiBaseUrl}/api/word/save`;
    console.log("Calling saveWordToList with:", { wordId, listId, url });
    try {
      const response = await axios.post(
        url,
        { wordId, listId },
        { headers: getHeaders() },
      );
      return response.data;
    } catch (error) {
      if (error.response?.status === 401) {
        console.error("Unauthorized: Please log in to save words");
        localStorage.removeItem("accessToken");
        return null;
      }
      console.error("Failed to save word to list", error);
      return null;
    }
  };

  const loadAllLists = async () => {
    const url = `${apiBaseUrl}/api/list`;
    try {
      const response = await axios.get(url, { headers: getHeaders() });
      const lists = response.data ?? [];
      return lists;
    } catch (error) {
      if (error.response?.status === 401) {
        console.error("Unauthorized: Please log in to view lists");
        localStorage.removeItem("accessToken");
        return [];
      }
    }
  };

  const deleteWordFromList = async (listId, wordId) => {
    const url = `${apiBaseUrl}/api/list/remove`;
    try {
      const response = await axios.put(
        url,
        { wordId, listId },
        { headers: getHeaders() },
      );
      return response.data;
    } catch (error) {
      if (error.response?.status === 401) {
        console.error("Unauthorized: Please log in");
        localStorage.removeItem("accessToken");
        return null;
      }
      console.error("Failed to delete word from list", error);
      return null;
    }
  };

  const deleteList = async (listId) => {
    const url = `${apiBaseUrl}/api/list/${listId}`;
    try {
      const response = await axios.delete(url, { headers: getHeaders() });
      return response.data;
    } catch (error) {
      if (error.response?.status === 401) {
        console.error("Unauthorized: Please log in");
        localStorage.removeItem("accessToken");
        return null;
      }
      console.error("Failed to delete list", error);
      return null;
    }
  };

  const getGrammar = async () => {
    const url = `${apiBaseUrl}/api/grammar/allgrammar`;
    try {
      const response = await axios.get(url);
      const grammar = response.data ?? [];
      return grammar;
    } catch (error) {
      console.error("Failed to load grammar data", error);
      return [];
    }
  };

  return (
    <WordContext.Provider
      value={{
        loadAllWords,
        searchWord,
        saveWordToList,
        createList,
        loadAllLists,
        deleteWordFromList,
        deleteList,
        listModalOpen,
        setListModalOpen,
        getGrammar,
      }}
    >
      {children}
    </WordContext.Provider>
  );
}
