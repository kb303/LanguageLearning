import { useState } from "react";
import { X } from "lucide-react";
import { useContext } from "react";
import { WordContext } from "../contexts/WordContext";
import { NavContext } from "../contexts/NavContext";

export default function CreateListModal({ open, onClose, onListCreated }) {
  const [listName, setListName] = useState("");
  const { createList } = useContext(WordContext);
  const { setCreateListModalOpen } = useContext(NavContext);

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-card rounded-2xl border border-border shadow-2xl p-8 w-full max-w-md mx-4">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-semibold text-foreground">New List</h2>
          <button
            onClick={onClose}
            className="text-muted-foreground hover:text-foreground transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            createList(listName);
            onListCreated?.();
            onClose();
            setCreateListModalOpen(false);
          }}
          className="flex flex-col gap-4"
        >
          <div>
            <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wide block mb-1.5">
              List Name
            </label>
            <input
              type="text"
              value={listName}
              onChange={(e) => setListName(e.target.value)}
              placeholder="My New List"
              className="w-full bg-input-background border border-border rounded-xl px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring/50 transition"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-primary text-primary-foreground py-2.5 rounded-xl font-semibold text-sm hover:opacity-90 transition-opacity mt-1"
          >
            Create List
          </button>
        </form>
      </div>
    </div>
  );
}
