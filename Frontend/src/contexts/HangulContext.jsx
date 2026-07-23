import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const HangulContext = createContext();

const loadChars = async (apiBaseUrl) => {
  const url = `${apiBaseUrl}/api/char/allchars`;
  try {
    const response = await axios.get(url);
    const chars = response.data ?? [];
    return chars;
  } catch (error) {
    console.error("Failed to load characters", error);
    return [];
  }
};

export function HangulProvider({ children }) {
  const apiBaseUrl =
    import.meta.env.VITE_API_BASE_URL || "http://localhost:3000";

  useEffect(() => {
    const fetchChars = async () => {
      const allChars = await loadChars(apiBaseUrl);
      setVowels(allChars.filter((char) => char.type == "vowel"));
      setConsonants(
        allChars.filter(
          (char) => char.type == "consonant" || char.type == "double consonant",
        ),
      );
      setChars(
        allChars.filter(
          (char) => char.type == "consonant" || char.type == "double consonant",
        ),
      );
    };
    fetchChars();
  }, []);

  const [hangulTab, setHangulTab] = useState("consonants");
  const [vowels, setVowels] = useState([]);
  const [consonants, setConsonants] = useState([]);
  const [chars, setChars] = useState([]);

  const phrases = [
    {
      type: "consonant",
      phrase: "14 basic consonants form the backbone of the Korean alphabet.",
    },
    {
      type: "vowel",
      phrase:
        "10 basic vowels combine with consonants to create syllable blocks.",
    },
  ];

  return (
    <HangulContext.Provider
      value={{ phrases, consonants, vowels, chars, hangulTab, setHangulTab }}
    >
      {children}
    </HangulContext.Provider>
  );
}
