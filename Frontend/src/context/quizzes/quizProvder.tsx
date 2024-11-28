import { FC, PropsWithChildren, useEffect, useState } from "react";
import { quizContext } from "./quizContext"; // Import the context
import { BASE_URL } from "../../constants/BaseUrl"; // Import the base URL
import {Quizitem} from "../../types/quiztypes";

const QuizProvider: FC<PropsWithChildren> = ({ children }) => {
  const [quizItems, setQuizItems] = useState<Quizitem[]>([]);
  const [error, setError] = useState<string | null>(null);

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
        return [];
        }
    };

    fetchQuizzes();
  }, []);

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
      console.error(error);
    }
  };

  const updateQuizById = async (id: string, quizData: Quizitem) => {
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
      console.error(error);
    }
  };

  const deleteQuizById = async (id: string) => {
    try {
      const response = await fetch(`${BASE_URL}/quizzez/${id}`, {
        method: "DELETE",
      });
      if (!response.ok) throw new Error("Failed to delete quiz.");
      setQuizItems((prev) => prev.filter((quiz) => quiz._id !== id));
    } catch (error) {
      console.error(error);
    }
  };

  const getQuizById = async (id: string) => {
    try {
      const response = await fetch(`${BASE_URL}/quizzez/${id}`);
      if (!response.ok) throw new Error("Failed to fetch quiz.");
      return await response.json();
    } catch (error) {
      console.error(error);
      return null;
    }
  };

  const getAllQuizzes = async () => {
    try {
      const response = await fetch(`${BASE_URL}/quizzez`);
      if (!response.ok) throw new Error("Failed to fetch quizzes.");
      return await response.json();
    } catch (error) {
      console.error(error);
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
