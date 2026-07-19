import { useState, useRef, useEffect } from "react";
import { User, ChevronDown } from "lucide-react";
import { UserContext } from "../contexts/UserContext";
import { useContext } from "react";

export default function UserMenuIcon() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const ref = useRef(null);
  const { user } = useContext(UserContext);
  const initials = user ? user.firstName[0] + user.lastName[0] : "";

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);

  return (
    <>
      <div className="relative" ref={ref}>
        <button
          onClick={() => setDropdownOpen((o) => !o)}
          className="flex items-center gap-1.5 rounded-full border border-border bg-card hover:border-primary/40 transition-colors px-2 py-1.5"
          aria-label="User menu"
        >
          {user ? (
            <div className="w-7 h-7 rounded-full bg-primary flex items-center justify-center text-primary-foreground text-xs font-bold">
              {initials}
            </div>
          ) : (
            <div className="w-7 h-7 rounded-full bg-secondary flex items-center justify-center text-muted-foreground">
              <User className="w-4 h-4" />
            </div>
          )}
          <ChevronDown
            className={`w-3.5 h-3.5 text-muted-foreground transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""}`}
          />
        </button>
      </div>
    </>
  );
}
