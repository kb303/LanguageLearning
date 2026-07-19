import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import GrammarPage from "../pages/GrammarPage";
import PracticePage from "../pages/PracticePage";
import SignInPage from "../pages/SignInPage";
import SignUpPage from "../pages/SignUpPage";
import VocabularyPage from "../pages/VocabularyPage";
import PageNotFound from "../pages/PageNotFound";
import HangulPage from "../pages/HangulPage";

export default function MainRoutes(props) {
  return (
    <Routes>
      <Route path="/" index element={<HomePage />} />
      <Route path="/hangul" element={<HangulPage />} />
      <Route path="/grammar" element={<GrammarPage />} />
      <Route path="/vocabulary" element={<VocabularyPage />} />
      <Route path="/quiz" element={<PracticePage />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/signin" element={<SignInPage />} />
      {/* catch all, matches on anything else */}
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}
