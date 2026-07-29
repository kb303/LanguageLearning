import { Card, CardContent, Divider, Typography } from "@mui/material";
import { useState, useContext, useRef, useEffect } from "react";
import { Plus, Check } from "lucide-react";
import { WordContext } from "../contexts/WordContext";
import { UserContext } from "../contexts/UserContext";
import "../styles/animation.css"; // Import the CSS file for animations

export default function WordFlashCard({ word, translation, wordId }) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [lists, setLists] = useState([]);
  const [loading, setLoading] = useState(false);
  const dropdownRef = useRef(null);

  const { loadAllLists, saveWordToList } = useContext(WordContext);
  const { user } = useContext(UserContext);

  const getWordId = (entry) => {
    if (!entry) {
      return null;
    }
    if (typeof entry === "string") {
      return entry;
    }
    return entry._id ?? null;
  };

  // Load lists when dropdown opens
  const loadLists = async () => {
    if (!user) {
      alert("Please log in to save words to lists");
      return;
    }
    setLoading(true);
    const allLists = await loadAllLists();
    setLists(allLists || []);
    setLoading(false);
    setShowDropdown(true);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };

    if (showDropdown) {
      document.addEventListener("mousedown", handleClickOutside);
      return () =>
        document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [showDropdown]);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const handleAddToList = (e) => {
    e.stopPropagation();
    loadLists();
  };

  const handleSelectList = async (e, listId) => {
    e.stopPropagation();
    if (!wordId) {
      console.error("Word ID is missing");
      return;
    }

    // Check if word is already in this list
    const list = lists.find((l) => l._id === listId);
    if (list && list.words.some((entry) => getWordId(entry) === wordId)) {
      // Word already in list, just close dropdown
      setShowDropdown(false);
      return;
    }

    const result = await saveWordToList(wordId, listId);
    if (result) {
      setShowDropdown(false);
      // Refresh lists to show updated state
      const allLists = await loadAllLists();
      setLists(allLists || []);
      // Could add a success toast here
    }
  };

  const isWordInList = (list) => {
    return list.words.some((entry) => getWordId(entry) === wordId);
  };

  return (
    <>
      <div className="card-container" onClick={handleFlip}>
        <div className={`card-inner ${isFlipped ? "is-flipped" : ""}`}>
          <Card className="card-face card-front" sx={{ minWidth: 150 }}>
            <div className="absolute top-2 right-2 z-20" ref={dropdownRef}>
              <button
                onClick={handleAddToList}
                className="w-6 h-6 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground text-muted-foreground transition-colors flex items-center justify-center"
                title="Add to list"
              >
                <Plus className="w-3.5 h-3.5" />
              </button>

              {showDropdown && (
                <div
                  onMouseDown={(e) => e.stopPropagation()}
                  onClick={(e) => e.stopPropagation()}
                  className="absolute top-8 right-0 mt-1 w-48 bg-card border border-border rounded-lg shadow-lg py-1 z-50"
                >
                  {loading ? (
                    <div className="px-4 py-2 text-xs text-muted-foreground">
                      Loading lists...
                    </div>
                  ) : lists.length === 0 ? (
                    <div className="px-4 py-2 text-xs text-muted-foreground">
                      No lists yet. Create one on the Quiz page.
                    </div>
                  ) : (
                    lists.map((list) => {
                      const wordInList = isWordInList(list);
                      return (
                        <button
                          key={list._id}
                          onClick={(e) => handleSelectList(e, list._id)}
                          disabled={wordInList}
                          className={`w-full text-left px-4 py-2 text-sm transition-colors flex items-center justify-between ${
                            wordInList
                              ? "text-muted-foreground bg-muted cursor-default"
                              : "text-foreground hover:bg-muted"
                          }`}
                        >
                          <span>{list.name}</span>
                          {wordInList && (
                            <Check className="w-4 h-4 text-green-600 flex-shrink-0" />
                          )}
                        </button>
                      );
                    })
                  )}
                </div>
              )}
            </div>

            <CardContent>
              <Typography variant="h5" component="div">
                {word}
              </Typography>
            </CardContent>
          </Card>
          <Card className="card-face card-back" sx={{ minWidth: 150 }}>
            <div className="absolute top-2 right-2 z-20" ref={dropdownRef}>
              <button
                onClick={handleAddToList}
                className="w-6 h-6 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground text-muted-foreground transition-colors flex items-center justify-center"
                title="Add to list"
              >
                <Plus className="w-3.5 h-3.5" />
              </button>

              {showDropdown && (
                <div
                  onMouseDown={(e) => e.stopPropagation()}
                  onMouseDown={(e) => e.stopPropagation()}
                  onClick={(e) => e.stopPropagation()}
                  className="absolute top-8 right-0 mt-1 w-48 bg-card border border-border rounded-lg shadow-lg py-1 z-50"
                >
                  {loading ? (
                    <div className="px-4 py-2 text-xs text-muted-foreground">
                      Loading lists...
                    </div>
                  ) : lists.length === 0 ? (
                    <div className="px-4 py-2 text-xs text-muted-foreground">
                      No lists yet. Create one on the Quiz page.
                    </div>
                  ) : (
                    lists.map((list) => {
                      const wordInList = isWordInList(list);
                      return (
                        <button
                          key={list._id}
                          onClick={(e) => handleSelectList(e, list._id)}
                          disabled={wordInList}
                          className={`w-full text-left px-4 py-2 text-sm transition-colors flex items-center justify-between ${
                            wordInList
                              ? "text-muted-foreground bg-muted cursor-default"
                              : "text-foreground hover:bg-muted"
                          }`}
                        >
                          <span>{list.name}</span>
                          {wordInList && (
                            <Check className="w-4 h-4 text-green-600 flex-shrink-0" />
                          )}
                        </button>
                      );
                    })
                  )}
                </div>
              )}
            </div>

            <CardContent>
              <Typography variant="h5" component="div">
                {translation}
              </Typography>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
}
