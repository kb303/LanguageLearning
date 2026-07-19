import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import UserProvider from "./contexts/UserContext.jsx";
import WordProvider from "./contexts/WordContext.jsx";
import PracticeProvider from "./contexts/PracticeContext.jsx";
import { NavProvider } from "./contexts/NavContext.jsx";
import { HangulProvider } from "./contexts/HangulContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <NavProvider>
        <UserProvider>
          <WordProvider>
            <PracticeProvider>
              <HangulProvider>
                <App />
              </HangulProvider>
            </PracticeProvider>
          </WordProvider>
        </UserProvider>
      </NavProvider>
    </BrowserRouter>
  </StrictMode>,
);
