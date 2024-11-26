import  AnnouncementModel  from './../models/AnnouncementModel';
import quizModel from "../models/quizModel";

/**
 * Function to create a new announcement.
 * @param quiz The quiz data used to generate the announcement.
 */
export const createAnnouncement = async (quiz: any) => {
  try {
    const announcement = {
      title: `New Quiz Added: ${quiz.subject}`,
      content: `${quiz.firstName} ${quiz.lastName} has created a new quiz on ${quiz.subject}. 
      Description: ${quiz.description}`,
      createdAt: new Date(),
    };

    await AnnouncementModel.create(announcement);
    console.log("Announcement created successfully.");
  } catch (err) {
    console.error("Failed to create announcement:", err);
  }
};

/**
 * Function to create announcements for all quizzes in the database.
 */
export const createAnnouncementsForAllQuizzes = async () => {
  try {
    const quizzes = await quizModel.find();

    if (quizzes.length === 0) {
      console.log("No quizzes found to create announcements.");
      return;
    }

    for (const quiz of quizzes) {
      await createAnnouncement(quiz);
    }

    console.log("Announcements created for all quizzes.");
  } catch (err) {
    console.error("Failed to create announcements for all quizzes:", err);
  }
};

/**
 * Function to monitor and add a new announcement whenever a new quiz is added.
 * This function could be hooked into your application logic, like after creating a new quiz.
 * @param quiz The new quiz added to the database.
 */
export const addQuizAndAnnouncement = async (quizData: any) => {
  try {
    const newQuiz = await quizModel.create(quizData);
    console.log("Quiz added successfully.");

    // Create an announcement for the new quiz
    await createAnnouncement(newQuiz);
  } catch (err) {
    console.error("Failed to add quiz or create announcement:", err);
  }
};
export const getAllAnnouncements = async () => {
  try {
    const announcements = await AnnouncementModel.find().sort({ createdAt: -1 }); // Sorted by newest first
    console.log("Fetched all announcements successfully.");
    return announcements;
  } catch (err) {
    console.error("Failed to fetch announcements:", err);
    throw err;
  }
};

