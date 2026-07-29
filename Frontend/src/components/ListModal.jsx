import { useState } from "react";
import { ChevronRight, Search, Plus, X } from "lucide-react";
import { useContext } from "react";
import { WordContext } from "../contexts/WordContext";

export default function ListModal({ list, onBack, onClose, onListUpdated }) {
  const { deleteWordFromList } = useContext(WordContext);
  const [query, setQuery] = useState("");

  const words = Array.isArray(list?.words) ? list.words : [];
  const normalizedQuery = query.trim().toLowerCase();

  const filtered = words.filter((w) => {
    if (!w || typeof w !== "object") {
      return false;
    }

    const korean = String(w.word ?? w.korean ?? "");
    const english = String(w.translation ?? w.english ?? "");
    const romanization = String(w.pronunciation ?? w.romanization ?? "");

    if (!normalizedQuery) {
      return true;
    }

    return (
      korean.toLowerCase().includes(normalizedQuery) ||
      english.toLowerCase().includes(normalizedQuery) ||
      romanization.toLowerCase().includes(normalizedQuery)
    );
  });

  const handleBack = () => {
    setQuery("");
    (onBack ?? onClose)?.();
  };

  const handleDeleteWord = async (wordId) => {
    const updatedList = await deleteWordFromList(list._id, wordId);
    if (updatedList) {
      onListUpdated?.(updatedList);
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
      onClick={() => onClose?.()}
    >
      <div
        className="bg-card border border-border rounded-2xl shadow-2xl w-full max-w-5xl max-h-[85vh] overflow-y-auto p-6 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={handleBack}
          className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors mb-6"
        >
          <ChevronRight className="w-4 h-4 rotate-180" /> Back to lists
        </button>

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div>
            <h3 className="font-['Noto_Serif_KR'] text-2xl font-bold text-foreground">
              {list.name}
            </h3>
            <p className="text-sm text-muted-foreground">
              {words.length} word{words.length !== 1 ? "s" : ""}
            </p>
          </div>
          {words.length > 0 && (
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search words…"
                className="pl-9 pr-4 py-2 bg-input-background border border-border rounded-xl text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring/50 transition w-56"
              />
            </div>
          )}
        </div>

        {words.length === 0 ? (
          <div className="bg-card border border-dashed border-border rounded-2xl p-10 text-center text-muted-foreground text-sm">
            No words yet. Add some using the{" "}
            <span className="inline-flex items-center gap-1 text-primary font-medium">
              <Plus className="w-3 h-3" />
            </span>{" "}
            button on any vocabulary card.
          </div>
        ) : filtered.length === 0 && normalizedQuery ? (
          <div className="bg-card border border-border rounded-2xl p-8 text-center text-muted-foreground text-sm">
            No words match{" "}
            <span className="font-medium text-foreground">"{query}"</span>.
          </div>
        ) : filtered.length === 0 ? (
          <div className="bg-card border border-border rounded-2xl p-8 text-center text-muted-foreground text-sm">
            This list has words, but details are unavailable right now. Try
            refreshing the page.
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {filtered.map((word) => (
              <div
                key={word._id ?? word.word ?? word.korean}
                className="bg-card border border-border rounded-xl p-4 flex items-center justify-between gap-3"
              >
                <div>
                  <div className="font-['Noto_Serif_KR'] text-xl font-bold text-primary">
                    {word.word ?? word.korean}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {word.pronunciation ?? word.romanization}
                  </div>
                  <div className="text-sm text-foreground mt-0.5">
                    {word.translation ?? word.english}
                  </div>
                </div>
                <button
                  onClick={() =>
                    handleDeleteWord(word._id ?? word.word ?? word.korean)
                  }
                  className="text-muted-foreground hover:text-destructive transition-colors flex-shrink-0"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
