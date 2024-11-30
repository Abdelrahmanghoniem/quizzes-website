import { FC, PropsWithChildren, useEffect, useState } from "react";
import { quizContext } from "./quizContext"; // Import the context
import { BASE_URL } from "../../constants/BaseUrl"; // Import the base URL
import { Quizitem } from "../../types/quiztypes"; // Assuming Quizitem is correctly defined

const QuizProvider: FC<PropsWithChildren> = ({ children }) => {
  const [quizItems, setQuizItems] = useState<Quizitem[]>([]);
  const [error, setError] = useState<string | null>(null);

  // Function to fetch quizzes from the server
  useEffect(() => {
    const fetchQuizzes = async () => {
      try {
        const response = await fetch(`${BASE_URL}/quizzez`);
        if (!response.ok) throw new Error("Failed to fetch quizzes.");
        const quizzes = await response.json();
        setQuizItems(quizzes);
      } catch (err) {
        const message = (err as Error).message;
        setError(message);
        console.error(message); // Log the error to the console for debugging
      }
    };

    fetchQuizzes();
  }, []); // Empty dependency array means it runs once when the component mounts

  // Function to create a new quiz
  const createQuiz = async (quizData: Quizitem) => {
    try {
      const response = await fetch(`${BASE_URL}/quizzez`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(quizData),
      });

      if (!response.ok) throw new Error("Failed to create quiz.");
      const newQuiz = await response.json();
      setQuizItems((prev) => [...prev, newQuiz]);
      return newQuiz;
    } catch (error) {
      console.error("Error creating quiz:", error);
      setError("Error creating quiz"); // Set a user-friendly error message
      throw error; // Optionally rethrow the error to handle it upstream
    }
  };

  // Function to update a quiz by its ID
  const updateQuizById = async (id: string, quizData: Quizitem): Promise<Quizitem | null> => {
    try {
      const response = await fetch(`${BASE_URL}/quizzez/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(quizData),
      });

      if (!response.ok) throw new Error("Failed to update quiz.");
      const updatedQuiz = await response.json();
      setQuizItems((prev) =>
        prev.map((quiz) => (quiz._id === id ? updatedQuiz : quiz))
      );
      return updatedQuiz;
    } catch (error) {
      console.error("Error updating quiz:", error);
      setError("Error updating quiz"); // Set a user-friendly error message
      return null;
    }
  };

  // Function to delete a quiz by its ID
  const deleteQuizById = async (id: string): Promise<void> => {
    try {
      const response = await fetch(`${BASE_URL}/quizzez/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) throw new Error("Failed to delete quiz.");
      setQuizItems((prev) => prev.filter((quiz) => quiz._id !== id));
    } catch (error) {
      console.error("Error deleting quiz:", error);
      setError("Error deleting quiz"); // Set a user-friendly error message
    }
  };

  // Function to fetch a single quiz by ID
  const getQuizById = async (id: string): Promise<Quizitem | null> => {
    try {
      const response = await fetch(`${BASE_URL}/quizzez/${id}`);
      if (!response.ok) throw new Error("Failed to fetch quiz.");
      return await response.json();
    } catch (error) {
      console.error("Error fetching quiz:", error);
      setError("Error fetching quiz"); // Set a user-friendly error message
      return null;
    }
  };

  // Function to fetch all quizzes
  const getAllQuizzes = async (): Promise<Quizitem[]> => {
    try {
      const response = await fetch(`${BASE_URL}/quizzez`);
      if (!response.ok) throw new Error("Failed to fetch quizzes.");
      return await response.json();
    } catch (error) {
      console.error("Error fetching quizzes:", error);
      setError("Error fetching quizzes"); // Set a user-friendly error message
      return [];
    }
  };

  return (
    <quizContext.Provider
      value={{
        quizItems,
        error,
        createQuiz,
        updateQuizById,
        deleteQuizById,
        getQuizById,
        getAllQuizzes,
      }}
    >
      {children}
    </quizContext.Provider>
  );
};

export default QuizProvider;
