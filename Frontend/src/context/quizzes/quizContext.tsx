import { createContext, useContext } from "react";
import {Quizitem} from "../../types/quiztypes";

// Define the type for the context state
interface QuizContextType {
  quizItems: Quizitem[];
  createQuiz: (quizData: Quizitem) => Promise<Quizitem>;
  getAllQuizzes: () => Promise<Quizitem[]>;
  getQuizById: (id: string) => Promise<Quizitem | null>;
  updateQuizById: (id: string, quizData: Quizitem) => Promise<Quizitem | null>;
  deleteQuizById: (id: string) => Promise<void>;
  error: string | null; 

}

export const quizContext = createContext<QuizContextType>({
  quizItems: [],
  error:null,
  createQuiz: async () => {
    throw new Error("createQuiz function must be provided");
  },
  getAllQuizzes: async () => {
    throw new Error("getAllQuizzes function must be provided");
  },
  getQuizById: async () => {
    throw new Error("getQuizById function must be provided");
  },
  updateQuizById: async () => {
    throw new Error("updateQuizById function must be provided");
  },
  deleteQuizById: async () => {
    throw new Error("deleteQuizById function must be provided");
  }
});


export const useQuiz = () => useContext(quizContext);
