import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { BookOpen, Zap, Mic, Star, Users } from "lucide-react";
import { motion } from "framer-motion";
import { useState, useContext, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import { Search, X } from "lucide-react";
import Header from "../components/Header";
import { WordContext } from "../contexts/WordContext";
import WordFlashCard from "../components/WordFlashCard";
const fadeUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

export default function VocabularyPage() {
  const [query, setQuery] = useState("");
  const [filtered, setFiltered] = useState([]);

  const { searchWord } = useContext(WordContext);

  useEffect(() => {
    const performSearch = async () => {
      const results = await searchWord(query);
      setFiltered(results);
    };
    performSearch();
  }, [query, searchWord]);

  return (
    <>
      <NavBar></NavBar>
      <Header
        hangul="어휘"
        english="Vocabulary"
        description="Browse cards and search by Korean or English. Save words to lists on the Quiz page."
      />
      <div className="max-w-6xl mx-auto px-6 py-12 space-y-12">
        <section>{/* <VocabCards /> */}</section>

        {/* Vocabulary card section with search */}
        <div>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div>
              <h2 className="font-['Noto_Serif_KR'] text-2xl font-bold text-foreground">
                어휘 Cards
              </h2>
              <p className="text-sm text-muted-foreground mt-0.5">
                Click a card to flip it. Use + to save to a list.
              </p>
            </div>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search Korean, English…"
                className="pl-9 pr-4 py-2 bg-input-background border border-border rounded-xl text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring/50 transition w-56"
              />
              {query && (
                <button
                  onClick={() => setQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          </div>

          {filtered.length === 0 ? (
            <div className="bg-card border border-border rounded-2xl p-8 text-center text-muted-foreground text-sm">
              No words match{" "}
              <span className="font-medium text-foreground">"{query}"</span>.
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              <AnimatePresence>
                {filtered.map((v) => (
                  <motion.div
                    key={v._id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <WordFlashCard
                      word={v.word}
                      translation={v.translation}
                      wordId={v._id}
                    />
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}
