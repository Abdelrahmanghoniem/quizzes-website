// import mongoose, { Schema, Document } from "mongoose";

// // Define the interface
// export interface IAnnouncement extends Document {
//   subject: string;
//   InstructorName: string;
//   quizId: string;
//   _id: string; // _id is required now
//   $assertPopulated?: boolean;
//   $clearModifiedPaths?: any;
//   $clone?: any;
// }

// // Define the schema
// const AnnouncementSchema = new Schema<IAnnouncement>({
//   subject: { type: String, required: true },
//   InstructorName: { type: String, required: true },
//   quizId: { type: String, required: true },
//   $assertPopulated: { type: Boolean, required: false },
//   $clearModifiedPaths: { type: Schema.Types.Mixed, required: false }, 
//   $clone: { type: Schema.Types.Mixed, required: false },
// }, {
//   timestamps: true,  // optional: adds createdAt and updatedAt fields
// });

// export const announcementModel = mongoose.model<IAnnouncement>("Announcements", AnnouncementSchema);
// export default announcementModel;
