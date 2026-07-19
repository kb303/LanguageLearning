import { createContext, useState } from "react";

export const NavContext = createContext();

export function NavProvider({ children }) {
  const [activeTab, setActiveTab] = useState("home");

  const navTabs = [
    { id: "home", label: "홈페이지 Home", link: "/" },
    { id: "hangul", label: "한글 Hangul", link: "/hangul" },
    { id: "vocab", label: "어휘 Vocabulary", link: "/vocabulary" },
    { id: "grammar", label: "수업 Grammar", link: "/grammar" },
    { id: "quiz", label: "퀴즈 Quiz", link: "/quiz" },
  ];

  return (
    <NavContext.Provider value={{ activeTab, setActiveTab, navTabs }}>
      {children}
    </NavContext.Provider>
  );
}
