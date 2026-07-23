import { useState, useRef, useEffect } from "react";
import { User, ChevronDown, LogIn, LogOut, UserPlus } from "lucide-react";
import { UserContext } from "../contexts/UserContext";
import { useContext } from "react";
import { NavContext } from "../contexts/NavContext";

export default function UserMenuIcon() {
  const {
    setRegisterModalOpen,
    setloginModalOpen,
    setDropdownOpen,
    dropdownOpen,
  } = useContext(NavContext);
  const ref = useRef(null);
  const { user, logout } = useContext(UserContext);
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
        {dropdownOpen && (
          <div className="absolute right-0 top-full mt-2 w-48 bg-card border border-border rounded-xl shadow-lg py-1.5 z-50">
            {user ? (
              <>
                {/* <div className="px-4 py-2.5 border-b border-border">
                  <p className="text-sm font-semibold text-foreground truncate">
                    {user.name}
                  </p>
                  <p className="text-xs text-muted-foreground truncate">
                    {user.email}
                  </p>
                </div> */}
                <button
                  onClick={logout}
                  className="w-full flex items-center gap-2.5 px-4 py-2 text-sm text-destructive hover:bg-muted transition-colors"
                >
                  <LogOut className="w-4 h-4" /> Sign Out
                </button>
              </>
            ) : (
              <>
                <button
                  onClick={() => setloginModalOpen(true)}
                  className="w-full flex items-center gap-2.5 px-4 py-2 text-sm text-foreground hover:bg-muted transition-colors"
                >
                  <LogIn className="w-4 h-4 text-primary" /> Sign In
                </button>
                <button
                  onClick={() => setRegisterModalOpen(true)}
                  className="w-full flex items-center gap-2.5 px-4 py-2 text-sm text-foreground hover:bg-muted transition-colors"
                >
                  <UserPlus className="w-4 h-4 text-primary" /> Register
                </button>
              </>
            )}
          </div>
        )}
      </div>
    </>
  );
}
