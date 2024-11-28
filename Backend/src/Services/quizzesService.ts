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
      _id:"1",
        InstructorName:"bahaa sultan",
        subject:"football refreeing",
        description:"hi, i'm ahmed aidy and i teach football refreeing"
    },


    {
      _id:"2",
      InstructorName:"ahmed bahaa",
        subject:"programming",
        description:"hi, i'm ahmed metwally and i teach programming"
    },


    {
      _id:"3",
      InstructorName:"ahmed fathy",
        subject:"english",
        description:"hi, i'm ahmed fathy and i teach english"
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



  
  