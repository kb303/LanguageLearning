import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import DictionaryPage from "../pages/DictionaryPage";
import GrammarPage from "../pages/GrammarPage";
import PracticePage from "../pages/PracticePage";
import SignInPage from "../pages/SignInPage";
import SignUpPage from "../pages/SignUpPage";
import VocabularyPage from "../pages/VocabularyPage";
import PageNotFound from "../pages/PageNotFound";

export default function MainRoutes(props) {
  return (
    <Routes>
      <Route index element={<HomePage {...props} />} />
      <Route path="/dictionary" element={<DictionaryPage />} />
      <Route path="/grammar" element={<GrammarPage />} />
      <Route path="/vocabulary" element={<VocabularyPage />} />
      <Route path="/practice" element={<PracticePage />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/signin" element={<SignInPage />} />
      {/* catch all, matches on anything else */}
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}
