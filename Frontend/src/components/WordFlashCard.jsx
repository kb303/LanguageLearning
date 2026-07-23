import { Card, CardContent, Divider, Typography } from "@mui/material";
import { useContext, useState } from "react";
import { PracticeContext } from "../contexts/PracticeContext";
import "../styles/animation.css"; // Import the CSS file for animations

export default function WordFlashCard({ word, translation }) {
  const { isFlipped, setIsFlipped } = useContext(PracticeContext);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <>
      <div className="card-container" onClick={handleFlip}>
        <div className={`card-inner ${isFlipped ? "is-flipped" : ""}`}>
          <Card className="card-face card-front" sx={{ minWidth: 150 }}>
            <CardContent>
              <Typography variant="h5" component="div">
                {word}
              </Typography>
            </CardContent>
          </Card>
          <Card className="card-face card-back" sx={{ minWidth: 150 }}>
            <CardContent>
              <Typography variant="h5" component="div">
                {translation}
              </Typography>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
}
