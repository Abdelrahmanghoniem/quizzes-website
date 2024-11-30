import { useState } from "react";
import { Box, Modal, TextField, Button } from "@mui/material";
import { BASE_URL } from "../constants/BaseUrl";

interface Props {
  onClose: () => void;
}

export default function CreateQuizModal({ onClose }: Props) {
  const [error, setError] = useState("");
  const [quiz, setQuiz] = useState({
    _id: "",
    InstructorName: "",
    subject: "",
    description: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setQuiz((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleCreateQuiz = async () => {
    const { _id, InstructorName, subject, description } = quiz;

    // Validate form fields
    if (!_id || !InstructorName || !subject || !description) {
      setError("All fields are required.");
      return;
    }

    try {
      const response = await fetch(`${BASE_URL}/quizzez`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          _id,
          InstructorName,
          subject,
          description,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to create quiz.");
      }

      onClose(); // Close the modal after successful creation
    } catch (error) {
      console.error(error);
      setError("Failed to create quiz. Please try again.");
    }
  };

  return (
    <Modal open onClose={onClose}>
      <Box
        sx={{
          width: 400,
          margin: "auto",
          p: 4,
          backgroundColor: "white",
          borderRadius: 2,
          boxShadow: 24,
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          position: "absolute",
        }}
      >
        {error && <p style={{ color: "red" }}>{error}</p>}
        <TextField
          label="ID"
          name="_id"
          value={quiz._id}
          onChange={handleChange}
          sx={{ mb: 2 }}
        />
        <TextField
          label="Instructor Name"
          name="InstructorName"
          fullWidth
          value={quiz.InstructorName}
          onChange={handleChange}
          sx={{ mb: 2 }}
        />
        <TextField
          label="Subject"
          name="subject"
          fullWidth
          value={quiz.subject}
          onChange={handleChange}
          sx={{ mb: 2 }}
        />
        <TextField
          label="Description"
          name="description"
          fullWidth
          value={quiz.description}
          onChange={handleChange}
        />
        <Box sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}>
          <Button variant="contained" color="primary" onClick={handleCreateQuiz}>
            Create
          </Button>
          <Button variant="outlined" onClick={onClose}>
            Cancel
          </Button>
        </Box>
      </Box>
    </Modal>
  );
}
