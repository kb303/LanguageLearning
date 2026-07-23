import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";

export default function DictionaryCard({
  word,
  translation,
  pronunciation,
  type,
  example,
}) {
  return (
    <Card sx={{ minWidth: 150 }}>
      <CardContent>
        <Typography gutterBottom sx={{ color: "text.secondary", fontSize: 14 }}>
          {type}
        </Typography>
        <Typography variant="h5" component="div">
          {word}
        </Typography>
        <Typography sx={{ color: "text.secondary", mb: 1.5 }}>
          {pronunciation}
        </Typography>
        <Typography variant="body2" sx={{ paddingBottom: "10px" }}>
          {translation}
        </Typography>
        <Divider />
        <Typography
          variant="body2"
          sx={{ fontStyle: "italic", paddingTop: "10px" }}
        >
          {example}
        </Typography>
      </CardContent>
    </Card>
  );
}
