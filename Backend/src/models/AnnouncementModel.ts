import mongoose, { Schema, Document } from "mongoose";

const AnnouncementSchema = new Schema<Iannouncemets>({
  title: { type: String, required: true },
  description: { type: String, required: true },
  author: { type: String, required: true },
  date: { type: Date, default: Date.now },

  
});

export interface Iannouncemets extends Document {
  title: string;
  description: string;
  author: String;
  date: Date;
}




export const announcementModel = mongoose.model<Iannouncemets>("Announcements", AnnouncementSchema)
export default announcementModel