import NavBar from "../components/NavBar";
import { Box, Typography, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import Button from "@mui/material/Button";
import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function PracticePage() {
  return (
    <>
      <NavBar></NavBar>
      <Header
        hangul="퀴즈"
        english="Quiz"
        description="Create flashcards to practice your vocabulary."
      />

      <div className="max-w-6xl mx-auto px-6 py-12 space-y-12">
        <div>
          <h2 className="font-['Noto_Serif_KR'] text-3xl font-bold text-foreground mb-1">
            내 단어장 — My Word Lists
          </h2>
          <p className="text-muted-foreground text-sm">
            Quiz yourself on your word lists below.
          </p>
        </div>

        {/* Word lists — top */}
        {/* <section>
        <WordLists onQuiz={(list) => setQuizList(list)} />
      </section> */}
      </div>
      <Footer></Footer>
    </>
  );
}
