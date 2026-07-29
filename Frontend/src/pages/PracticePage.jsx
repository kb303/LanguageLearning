import NavBar from "../components/NavBar";
import ListModal from "../components/ListModal";
import CreateListModal from "../components/CreateListModal";
import { Box, Typography, TextField } from "@mui/material";
import { Plus } from "lucide-react";
import SearchIcon from "@mui/icons-material/Search";
import Button from "@mui/material/Button";
import { useState, useContext, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { WordContext } from "../contexts/WordContext";
import { UserContext } from "../contexts/UserContext";

export default function PracticePage() {
  const { deleteList, loadAllLists } = useContext(WordContext);
  const { user } = useContext(UserContext);

  const [creating, setCreating] = useState(false);
  const [quizList, setQuizList] = useState(null);
  const [lists, setLists] = useState([]);

  const handleNewListClick = () => {
    if (!user) {
      alert("Please log in to create lists");
    } else {
      setCreating(true);
    }
  };

  const handleDeleteList = async (listId) => {
    await deleteList(listId);
    refreshLists();
  };

  const handleListUpdated = (updatedList) => {
    setLists((currentLists) =>
      currentLists.map((list) =>
        list._id === updatedList._id ? updatedList : list,
      ),
    );
    setQuizList(updatedList);
  };

  const refreshLists = async () => {
    const loadedLists = await loadAllLists();
    setLists(loadedLists);
  };

  useEffect(() => {
    // Load all lists when the component mounts
    refreshLists();
  }, [loadAllLists]);
  return (
    <>
      <NavBar></NavBar>
      <Header
        hangul="퀴즈"
        english="Quiz"
        description="Create flashcards to practice your vocabulary."
      />

      <div className="max-w-6xl mx-auto px-6 py-12 space-y-12">
        <div>
          <h2 className="font-['Noto_Serif_KR'] text-3xl font-bold text-foreground mb-1">
            내 단어장 — My Word Lists
          </h2>
          <div className="flex items-center justify-between">
            <p className="text-muted-foreground text-sm">
              Quiz yourself on your word lists below.
            </p>
            <button
              onClick={handleNewListClick}
              disabled={!user}
              className={`flex items-center gap-1.5 text-lg font-medium transition-opacity ${
                user
                  ? "text-primary hover:opacity-80"
                  : "text-muted-foreground opacity-50 cursor-not-allowed"
              }`}
            >
              <Plus className="w-4 h-4" /> New list
            </button>
          </div>
        </div>

        <section>
          {!user ? (
            <p className="text-center text-destructive font-medium bg-destructive/10 border border-destructive/30 rounded-lg p-4">
              Please log in to view and create word lists.
            </p>
          ) : lists.length === 0 ? (
            <p className="text-center text-muted-foreground">
              No word lists yet. Create one to get started!
            </p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {lists.map((list) => (
                <div
                  key={list._id}
                  className="border border-border rounded-lg p-4 bg-card"
                >
                  <h3 className="font-semibold text-foreground mb-2">
                    {list.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {list.words?.length || 0} words
                  </p>
                  <div className="flex gap-2">
                    <button
                      onClick={() => setQuizList(list)}
                      className="flex-1 px-3 py-2 bg-primary text-primary-foreground rounded text-sm font-medium hover:opacity-90 transition-opacity"
                    >
                      Quiz
                    </button>
                    <button
                      onClick={() => handleDeleteList(list._id)}
                      className="px-3 py-2 bg-destructive text-destructive-foreground rounded text-sm font-medium hover:opacity-90 transition-opacity"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>

        {quizList && (
          <ListModal
            list={quizList}
            open={true}
            onClose={() => setQuizList(null)}
            onListUpdated={handleListUpdated}
          />
        )}

        {creating && (
          <CreateListModal
            open={true}
            onClose={() => setCreating(false)}
            onListCreated={refreshLists}
          />
        )}
      </div>
      <Footer></Footer>
    </>
  );
}
