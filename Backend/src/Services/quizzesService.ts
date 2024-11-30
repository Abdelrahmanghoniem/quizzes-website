import quizModel, { IQuiz } from "../models/quizModel";
// import { createAnnouncement } from "./announcementService";
// import announcementModel, { IAnnouncement } from "../models/AnnouncementModel";  // Adjust the import if necessary

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
  // Create the new quiz
  const newQuiz = await quizModel.create(quizData);

  // Now, create an announcement using the new interface
//   const announcementData = {
//     subject: `New Quiz: ${newQuiz.subject}`,
//     InstructorName: `Instructor: ${newQuiz.InstructorName}`,
//     quizId: newQuiz._id.toString(),  // Correctly assign quizId
//   };

//   // Automatically create an announcement for the new quiz
//   const announcement = new announcementModel(announcementData);  // Create a Mongoose document
//   await announcement.save();  // Save to DB

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

/**
 * Seed the database with initial quizzes.
 */
export const seedinitialquizzes = async () => {
    try {
        const quizzes = [
            {
                _id: "1",
                InstructorName: "Bahaa Sultan",
                subject: "Football Refereeing",
                description: "Hi, I'm Ahmed Aidy, and I teach football refereeing.",
            },
            {
                _id: "2",
                InstructorName: "Ahmed Bahaa",
                subject: "Programming",
                description: "Hi, I'm Ahmed Metwally, and I teach programming.",
            },
            {
                _id: "3",
                InstructorName: "Ahmed Fathy",
                subject: "English",
                description: "Hi, I'm Ahmed Fathy, and I teach English.",
            },
        ];

      
            // Check if there are already quizzes in the database
            const existingQuizzes = await getAllQuizzes();
            if (existingQuizzes.length === 0) {
                // If no quizzes, insert the initial ones
                const insertedQuizzes = await quizModel.insertMany(quizzes);
    
                // Create announcements for each quiz
                for (const quiz of insertedQuizzes) {
                    // const announcementData: IAnnouncement = {
                    //     subject: `New Quiz on: ${quiz.subject}`,
                    //     InstructorName: `MR: ${quiz.InstructorName}`,
                    //     quizId: quiz._id.toString(),
                    // };
    
                    // // Now create an announcement for each quiz
                    // await createAnnouncement(announcementData);  // Pass announcementData to createAnnouncement
                }
            }
        } catch (err) {
            console.error("Cannot seed database:", err);
        }
    };
    