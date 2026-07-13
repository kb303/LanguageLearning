import NavBar from "../components/NavBar";
import { Box, Typography, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import Button from "@mui/material/Button";
import { useState } from "react";
import WordFlashCard from "../components/WordFlashCard";

export default function PracticePage() {
  return (
    <>
      <NavBar></NavBar>
      <Box
        sx={{
          width: "100%",
          boxSizing: "border-box",
          minHeight: "500px", // Big section height
          display: "flex",
          flexDirection: "column",
          justifyContent: "center", // Centers vertically
          alignItems: "center", // Centers horizontally
          backgroundColor: "#f0eff7", // Adjust to your theme
          color: "#293380",
          px: 3,
        }}
      >
        <Typography variant="h3" component="h1" fontWeight="bold" gutterBottom>
          Practice
        </Typography>

        <Typography variant="h6" component="p" sx={{ mb: 4, opacity: 0.9 }}>
          Create flashcards to practice your vocabulary.
        </Typography>
      </Box>
    </>
  );
}
