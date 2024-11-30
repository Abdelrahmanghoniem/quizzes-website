// import mongoose from 'mongoose';
// import { IQuiz } from '../models/quizModel';
// import { announcementModel, IAnnouncement } from './../models/AnnouncementModel';

// /**
//  * Fetch all Announcementzes.
//  */
// export const getAllAnnouncements = async () => {
//     return await announcementModel.find();
//   };
//   /**
//  * Create a new Announcement.
//  */
// export const createAnnouncement = async (announcementData: Partial<IAnnouncement>) => {
//   try {
//     // Create and save the new announcement
//     const newAnnouncement = new announcementModel(announcementData);
//     await newAnnouncement.save();
//     return newAnnouncement;
//   } catch (err) {
//     console.error("Error creating announcement:", err);
//     throw err;
//   }
// };
  
//   /**
//    * Fetch a Announcement by ID.
//    */
//   export const getAnnouncementById = async (id: string) => {
//     return await announcementModel.findById(id);
//   };
  
  
  
//   /**
//    * Update a Announcement by ID.
//    */
//   export const updateAnnouncementById = async (id: string, AnnouncementData: any) => {
//     return await announcementModel.findByIdAndUpdate(id, AnnouncementData, { new: true });
//   };
  
//   /**
//    * Delete a Announcement by ID.
//    */
//   export const deleteAnnouncementById = async (id: string) => {
//     return await announcementModel.findByIdAndDelete(id);
//   };

//   export const seedInitialAnnouncements = async () => {
//     try {
//       const announcements = [
//         {
//           subject: "new football refreeing quiz added",
//           InstructorName: "bahaa sultan",
//           quizId: new mongoose.Types.ObjectId("1"), // Convert string to ObjectId
//         },
//         {
//           subject: "new programming quiz added",
//           InstructorName: "ahmed bahaa",
//           quizId: new mongoose.Types.ObjectId("2"),
//         },
//         {
//           subject: "new english quiz added",
//           InstructorName: "ahmed fathy",
//           quizId: new mongoose.Types.ObjectId("3"),
//         }
//       ];
  
//       const existingAnnouncements = await getAllAnnouncements();
//       if (existingAnnouncements.length === 0) {
//         await announcementModel.insertMany(announcements);
//       }
//     } catch (err) {
//       console.error("Cannot seed announcements:", err);
//     }
//   };
  


  
  