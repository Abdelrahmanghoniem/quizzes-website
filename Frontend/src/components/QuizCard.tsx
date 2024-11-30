import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import QuizModal from "./QuizCRUD";
import { useState } from "react";
import { Grid2 } from "@mui/material";

interface Props {
  _id: string;
  InstructorName: string;
  subject: string;
  description: string;
}

export default function QuizCard({
  _id,
  InstructorName,
  subject,
  description,
}: Props) {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleOpenQuiz = () => {
    setModalOpen(true); // Open the modal
  };
  const handleCloseModal = () => {
    setModalOpen(false); // Close the modal
  };

  return (
    <Grid2 sx={{ display: "fixed", md: 3, borderSpacing: 1 }}>
      <Card
        sx={{
          maxWidth: 300,
          minWidth: 300,
          display: "flex",
          p: 1,
          scale: 1,
          borderRadius: 3,
          margin: 1,
        }}
      >
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {InstructorName}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {subject}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
        <CardActions>
          <Button variant="contained" size="small" onClick={handleOpenQuiz}>
            open quiz
          </Button>
        </CardActions>
      </Card>
      {/* Render the modal */}
      {isModalOpen && <QuizModal quizId={_id} onClose={handleCloseModal} />}
    </Grid2>
  );
}
