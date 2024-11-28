import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useQuiz } from "../context/quizzes/quizContext";

interface Props {
    _id: string,
    InstructorName: string;
    subject:string
    description:string;
}

export default function QuizCard({ _id, InstructorName, subject, description }: Props) {
  const { getQuizById } = useQuiz();

  return (
    <Card>
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
        <Button variant="contained" size="small" onClick={() => getQuizById(_id)}>
        test
        </Button>
      </CardActions>
    </Card>
  );
}