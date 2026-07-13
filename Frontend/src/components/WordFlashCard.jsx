import { Card, CardContent, Divider, Typography } from "@mui/material";
import { useState } from "react";

export default function WordFlashCard({ word, translation }) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <>
      <div
        className={`flashcard ${isFlipped ? "flipped" : ""}`}
        onClick={handleFlip}
      >
        <div className="flashcard-inner">
          <Card sx={{ minWidth: 150 }}>
            <CardContent>
              <Typography variant="h5" component="div">
                {word}
              </Typography>
              <Typography variant="body2" sx={{ paddingBottom: "10px" }}>
                {translation}
              </Typography>
            </CardContent>
          </Card>
        </div>
        <div className="back">
          <Card sx={{ minWidth: 150 }}>
            <CardContent>
              <Typography variant="h5" component="div">
                {translation}
              </Typography>
              <Typography variant="body2" sx={{ paddingBottom: "10px" }}>
                {word}
              </Typography>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
}
