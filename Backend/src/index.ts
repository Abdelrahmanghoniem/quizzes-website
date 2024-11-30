  import dotenv from "dotenv";

  import express from "express";
  import mongoose from "mongoose";
  import productRoute from "./routes/quizRoute";
  import { seedinitialquizzes } from "./Services/quizzesService";
  import cors from "cors";
  
  // import announcemntRoute from "./routes/announcementsRoute"
  // import { announcementModel } from "./models/AnnouncementModel";
  // import { seedInitialAnnouncements } from "./Services/announcementService";

  dotenv.config();

  const app = express();
  const port = 3002;

  app.use(express.json());
  app.use(cors());

  mongoose
    .connect(process.env.DATABASE_URL || "")
    .then(() => console.log("Mongo connected!"))
    .catch((err) => console.log("Failed to connect!", err));

  // Seed the products to database
  seedinitialquizzes();
  // seedInitialAnnouncements

  app.use("/quizzez", productRoute);
  // app.use("/announcements",announcemntRoute )

  app.listen(port, () => {
    console.log(`Server is running at: http://localhost:${port}`);
  });