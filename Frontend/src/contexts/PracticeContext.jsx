import { createContext, useReducer, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const PracticeContext = createContext();

export default function PracticeProvider({ children }) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <PracticeContext.Provider value={{ isFlipped, setIsFlipped }}>
      {children}
    </PracticeContext.Provider>
  );
}
