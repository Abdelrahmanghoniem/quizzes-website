import  express, { response }  from "express";
import {getAllAnnouncements}  from "../Services/announcementService";

const router=express.Router()

router.get('/',async (request,response)=>{
    try{
        const announcements=await getAllAnnouncements();
        response.status(200).send(announcements)
    }catch{
        response.status(500).send({message:"Error fetching products"})
    }
})

export default router;