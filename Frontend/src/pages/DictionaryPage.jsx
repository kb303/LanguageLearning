import NavBar from "../components/NavBar";
import DictionaryCard from "../components/dictionaryCard";
import Stack from "@mui/material/Stack";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useContext, useEffect, useState } from "react";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import Button from "@mui/material/Button";
import { WordContext } from "../contexts/WordContext";

export default function DictionaryPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [words, setWords] = useState([]);
  const { loadAllWords } = useContext(WordContext);

  useEffect(() => {
    const fetchWords = async () => {
      const allWords = await loadAllWords();
      setWords(allWords);
    };

    fetchWords();
  }, [loadAllWords]);

  const handleSearch = () => {
    console.log("Searching for:", searchQuery);
  };
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
          Dictionary
        </Typography>

        <Typography variant="h6" component="p" sx={{ mb: 4, opacity: 0.9 }}>
          Korean to English
        </Typography>

        {/* Search Bar Container */}
        <Box
          sx={{
            width: { xs: "100%", sm: "80%", md: "600px" },
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            gap: 2,
          }}
        >
          <TextField
            fullWidth
            variant="outlined"
            placeholder="Type in English or Hangul"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon sx={{ color: "text.secondary" }} />
                </InputAdornment>
              ),
            }}
            sx={{
              bgcolor: "background.paper",
              borderRadius: 1,
              "& .MuiOutlinedInput-root": {
                borderRadius: 1,
              },
            }}
          />
          <Button
            variant="contained"
            size="large"
            onClick={handleSearch}
            sx={{
              px: 4,
              py: 1.5,
              minWidth: "120px",
              backgroundColor: "#953d60",
            }}
          >
            Search
          </Button>
        </Box>
      </Box>

      <Stack direction={"row"} spacing={2} useFlexGap sx={{ flexWrap: "wrap" }}>
        {words.map((word) => (
          <DictionaryCard
            key={word.word}
            word={word.word}
            translation={word.translation}
            pronunciation={word.pronunciation}
            type={word.type}
            example={word.example}
          />
        ))}
      </Stack>
    </>
  );
}

// /*import React, { useState } from 'react';
// import { Box, Typography, TextField, InputAdornment, Button } from '@mui/material';
// import SearchIcon from '@mui/icons-material/Search';

// const HeroSearchLayout = () => {
//   const [searchQuery, setSearchQuery] = useState('');

//   const handleSearch = () => {
//     console.log("Searching for:", searchQuery);
//   };

//   return (
//     <Box
//       sx={{
//         width: '100%',
//         minHeight: '500px', // Big section height
//         display: 'flex',
//         flexDirection: 'column',
//         justifyContent: 'center', // Centers vertically
//         alignItems: 'center', // Centers horizontally
//         backgroundColor: 'primary.main', // Adjust to your theme
//         color: 'white',
//         px: 3,
//       }}
//     >
//       <Typography variant="h3" component="h1" fontWeight="bold" gutterBottom>
//         Find What You Need
//       </Typography>

//       <Typography variant="h6" component="p" sx={{ mb: 4, opacity: 0.9 }}>
//         Explore our vast collection of resources and services.
//       </Typography>

//       {/* Search Bar Container */}
//       <Box
//         sx={{
//           width: { xs: '100%', sm: '80%', md: '600px' },
//           display: 'flex',
//           flexDirection: { xs: 'column', sm: 'row' },
//           gap: 2,
//         }}
//       >
//         <TextField
//           fullWidth
//           variant="outlined"
//           placeholder="Search products, keywords, or tags..."
//           value={searchQuery}
//           onChange={(e) => setSearchQuery(e.target.value)}
//           InputProps={{
//             startAdornment: (
//               <InputAdornment position="start">
//                 <SearchIcon sx={{ color: 'text.secondary' }} />
//               </InputAdornment>
//             ),
//           }}
//           sx={{
//             bgcolor: 'background.paper',
//             borderRadius: 1,
//             '& .MuiOutlinedInput-root': {
//               borderRadius: 1,
//             },
//           }}
//         />
//         <Button
//           variant="contained"
//           color="secondary"
//           size="large"
//           onClick={handleSearch}
//           sx={{ px: 4, py: 1.5, minWidth: '120px' }}
//         >
//           Search
//         </Button>
//       </Box>
//     </Box>
//   );
// };

// export default HeroSearchLayout;
