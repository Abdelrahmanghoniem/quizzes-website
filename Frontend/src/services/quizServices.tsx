import axios from 'axios';
import { BASE_URL } from '../constants/BaseUrl';
import {Quizitem}  from '../types/quiztypes';

// Fetch all quizzes
export const fetchQuizzes = async (): Promise<Quizitem[]> => {
  const response = await axios.get(BASE_URL);
  return response.data; // Assuming the response is an array of QuizItem
};

// Fetch a single quiz by ID
export const fetchQuizById = async (id: string): Promise<Quizitem> => {
  const response = await axios.get(`${BASE_URL}/${id}`);
  return response.data; // Assuming the response is a single QuizItem
};

// Create a new quiz
export const createQuiz = async (quizData: Quizitem): Promise<Quizitem> => {
  const response = await axios.post(BASE_URL, quizData);
  return response.data; // Assuming the response is a single QuizItem
};

// Update an existing quiz
export const updateQuiz = async (id: string, quizData: Quizitem): Promise<Quizitem> => {
  const response = await axios.put(`${BASE_URL}/${id}`, quizData);
  return response.data; // Assuming the response is a single Quizitem
};

// Delete a quiz by ID
export const deleteQuiz = async (id: string): Promise<void> => {
  const response = await axios.delete(`${BASE_URL}/${id}`);
  return response.data; // Assuming there's no response body on delete
};
