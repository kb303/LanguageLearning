import { createContext, useState } from "react";

export const NavContext = createContext();

export function NavProvider({ children }) {
  const [activeTab, setActiveTab] = useState("home");

  const [loginModalOpen, setloginModalOpen] = useState(false);
  const [registerModalOpen, setRegisterModalOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [createListModalOpen, setCreateListModalOpen] = useState(false);

  const navTabs = [
    { id: "home", label: "홈페이지 Home", link: "/" },
    { id: "hangul", label: "한글 Hangul", link: "/hangul" },
    { id: "vocab", label: "어휘 Vocabulary", link: "/vocabulary" },
    { id: "grammar", label: "수업 Grammar", link: "/grammar" },
    { id: "quiz", label: "퀴즈 Quiz", link: "/quiz" },
  ];

  return (
    <NavContext.Provider
      value={{
        activeTab,
        setActiveTab,
        navTabs,
        setloginModalOpen,
        loginModalOpen,
        registerModalOpen,
        setRegisterModalOpen,
        dropdownOpen,
        setDropdownOpen,
        createListModalOpen,
        setCreateListModalOpen,
      }}
    >
      {children}
    </NavContext.Provider>
  );
}
