// import express, { Request, Response } from "express";
// import {
//   getAllAnnouncements,
//   getAnnouncementById,
//   createAnnouncement,
//   updateAnnouncementById,
//   deleteAnnouncementById,
// } from "../Services/announcementService";

// const router = express.Router();

// /**
//  * Fetch all Announcements
//  */
// router.get('/', async (request: Request, response: Response) => {
//   try {
//     const announcements = await getAllAnnouncements();
//     response.status(200).json(announcements);
//   } catch (error) {
//     response.status(500).json({ message: "Error fetching announcements", error });
//   }
// });

// /**
//  * Fetch a single Announcement by ID
//  */
// router.get('/:id', async (request: Request, response: Response) => {
//   try {
//     const { id } = request.params;
//     const announcement = await getAnnouncementById(id);
//     if (!announcement) {
//       return response.status(404).json({ message: "Announcement not found" });
//     }
//     response.status(200).json(announcement);
//   } catch (error) {
//     response.status(500).json({ message: "Error fetching announcement", error });
//   }
// });

// /**
//  * Create a new Announcement
//  */
// router.post('/', async (request: Request, response: Response) => {
//   try {
//     const newAnnouncement = await createAnnouncement(request.body);
//     response.status(201).json(newAnnouncement);
//   } catch (error) {
//     response.status(500).json({ message: "Error creating announcement", error });
//   }
// });

// /**
//  * Update an existing Announcement by ID
//  */
// router.put('/:id', async (request: Request, response: Response) => {
//   try {
//     const { id } = request.params;
//     const updatedAnnouncement = await updateAnnouncementById(id, request.body);
//     if (!updatedAnnouncement) {
//       return response.status(404).json({ message: "Announcement not found" });
//     }
//     response.status(200).json(updatedAnnouncement);
//   } catch (error) {
//     response.status(500).json({ message: "Error updating announcement", error });
//   }
// });

// /**
//  * Delete an Announcement by ID
//  */
// router.delete('/:id', async (request: Request, response: Response) => {
//   try {
//     const { id } = request.params;
//     const deletedAnnouncement = await deleteAnnouncementById(id);
//     if (!deletedAnnouncement) {
//       return response.status(404).json({ message: "Announcement not found" });
//     }
//     response.status(200).json({ message: "Announcement deleted successfully" });
//   } catch (error) {
//     response.status(500).json({ message: "Error deleting announcement", error });
//   }
// });

// export default router;
