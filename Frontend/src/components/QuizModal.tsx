import React from "react";
import  { useState, useEffect } from "react";
import { Box, Modal, TextField, Button } from "@mui/material";
import { useQuiz } from "../context/quizzes/quizContext";

interface QuizModalProps {
  quizId: string;
  onClose: () => void;
}

export default function QuizModal({ quizId, onClose }: QuizModalProps) {
  const { getQuizById, updateQuizById, deleteQuizById } = useQuiz();
  const [quiz, setQuiz] = useState({
    _id: "",
    InstructorName: "",
    subject: "",
    description: "",
  });
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchQuizDetails = async () => {
      const quizData = await getQuizById(quizId);
      if (quizData) {
        setQuiz(quizData);
      } else {
        setError("Failed to load quiz details.");
      }
    };
    fetchQuizDetails();
  }, [quizId, getQuizById]);

  const handleUpdateQuiz = async () => {
    try {
      await updateQuizById(quizId, quiz);
      onClose();
    } catch (error) {
      console.log(error)
    }
  };

  const handleDeleteQuiz = async () => {
    try {
      await deleteQuizById(quizId);
      onClose();
    }  catch (error) {
        console.log(error)
      }
  };

  return (
    <Modal open onClose={onClose}>
      <Box sx={{ width: 400, margin: "auto", p: 4, backgroundColor: "white" }}>
        {error && <p style={{ color: "red" }}>{error}</p>}
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
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Button variant="contained" onClick={handleUpdateQuiz}>
            Save
          </Button>
          <Button variant="contained" color="error" onClick={handleDeleteQuiz}>
            Delete
          </Button>
        </Box>
      </Box>
    </Modal>
  );
}
