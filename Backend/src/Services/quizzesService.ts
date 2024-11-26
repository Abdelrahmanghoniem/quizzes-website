import quizModel from "../models/quizModel";
import { createAnnouncement } from "./announcementService";


/**
 * Fetch all quizzes.
 */
export const getAllQuizzes = async () => {
    return await quizModel.find();
  };
  
  /**
   * Fetch a quiz by ID.
   */
  export const getQuizById = async (id: string) => {
    return await quizModel.findById(id);
  };
  
  /**
   * Create a new quiz.
   */
  export const createQuiz = async (quizData: any) => {
    const newQuiz = await quizModel.create(quizData);
  
    // Automatically create an announcement for the new quiz
    await createAnnouncement(newQuiz);
  
    return newQuiz;
  };
  
  /**
   * Update a quiz by ID.
   */
  export const updateQuizById = async (id: string, quizData: any) => {
    return await quizModel.findByIdAndUpdate(id, quizData, { new: true });
  };
  
  /**
   * Delete a quiz by ID.
   */
  export const deleteQuizById = async (id: string) => {
    return await quizModel.findByIdAndDelete(id);
  };

export const seedInitialquizzez=async()=>{
    try {
        const quizzes=[
    
    {
        firstName:"ahmed",
        lastName:"aidy",
        subject:"football refreeing",
        description:"hi, i'm ahmed aidy and i teach football refreeing"
    },


    {
        firstName:"ahmed",
        lastName:"metwally",
        subject:"programming",
        description:"hi, i'm ahmed metwally and i teach programming"
    },


    {
        firstName:"ahmed",
        lastName:"fathy",
        subject:"english",
        description:"hi, i'm ahmed fathy and i teach english"
    },
    {
        firstName:"ahmed",
        lastName:"abdo",
        subject:"french",
        description:"hi, i'm ahmed fathy and i teach french"
    },

    ];

    const existingquizzez=await getAllQuizzes();
 if (existingquizzez.length === 0) {
      const insertedQuizzes = await quizModel.insertMany(quizzes);

      // Create announcements for newly added quizzes
      for (const quiz of insertedQuizzes) {
        await createAnnouncement(quiz);
      }
    }
  } catch (err) {
    console.error("Cannot seed database:", err);
  }
   
};



  
  