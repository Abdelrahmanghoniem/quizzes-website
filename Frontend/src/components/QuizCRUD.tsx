import  { useState, useEffect } from "react";
import { Box, Modal, TextField, Button } from "@mui/material";

const QuizModal = ({ quizId, onClose }: { quizId: string; onClose: () => void }) => {
  const [quiz, setQuiz] = useState({
    _id: "",
    InstructorName: "",
    subject: "",
    description: "",
  });

  useEffect(() => {
    const fetchQuiz = async () => {
      const response = await fetch(`http://localhost:3002/quizzez/${quizId}`);
      const data = await response.json();
      setQuiz(data);
    };
    fetchQuiz();
  }, [quizId]);

  const handleSave = async () => {
    await fetch(`http://localhost:3002/quizzez/${quiz._id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(quiz),
    });
    onClose(); // Close modal after saving
  };

  const handleDelete = async () => {
    await fetch(`http://localhost:3002/quizzez/${quiz._id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(quiz),
    });
    onClose(); // Close modal after saving
  };

  return (
    <Modal open={!!quizId} onClose={onClose}>
      <Box sx={{ width: 400, margin: "auto", p: 4, backgroundColor: "white" }}>
        <TextField
          label="Instructor Name"
          fullWidth
          value={quiz.InstructorName}
          onChange={(e) => setQuiz({ ...quiz, InstructorName: e.target.value })}
          sx={{ mb: 2 }}
        />
        <TextField
          label="Subject"
          fullWidth
          value={quiz.subject}
          onChange={(e) => setQuiz({ ...quiz, subject: e.target.value })}
          sx={{ mb: 2 }}
        />
        <TextField
          label="Description"
          fullWidth
          value={quiz.description}
          onChange={(e) => setQuiz({ ...quiz, description: e.target.value })}
          sx={{ mb: 2 }}
        />
        <Button variant="contained" onClick={handleSave}>
          Save Changeszz
        </Button>
        <Button
  sx={{ p: 1, wordSpacing: 2 }}
  variant="outlined"
  onClick={() => {
    const isConfirmed = window.confirm("Are you sure you want to delete this quiz?");
    if (isConfirmed) {
      handleDelete(); // Call the delete function if confirmed
    }
  }}
>
  Delete
</Button>

      </Box>
    </Modal>
  );
};

export default QuizModal;
