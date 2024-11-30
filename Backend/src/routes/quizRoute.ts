import express, { Request, Response } from "express";
import { 
    getAllQuizzes, 
    seedinitialquizzes, 
    createQuiz, 
    getQuizById, 
    updateQuizById, 
    deleteQuizById 
  } from "../Services/quizzesService";
  
const router=express.Router()

/**
 * Fetch all quizzes.
 */
router.get('/',async (request,response)=>{
    try{
        const quizzes=await getAllQuizzes();
        response.status(200).send(quizzes)
    }catch{
        response.status(500).send({message:"Error fetching products"})
    }
})

/**
 * Fetch a single quiz by ID.
 */
router.get("/:id", async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const quiz = await getQuizById(id);
      if (quiz) {
        res.status(200).send(quiz);
      } else {
        res.status(404).send({ message: "Quiz not found" });
      }
    } catch (err) {
      console.error("Error fetching quiz by ID:", err);
      res.status(500).send({ message: "Error fetching quiz" });
    }
  });
  
  /**
   * Create a new quiz.
   */
  router.post("/", async (req: Request, res: Response) => {
    try {
      const quizData = req.body;
      const newQuiz = await createQuiz(quizData);
      res.status(201).send(newQuiz);
    } catch (err) {
      console.error("Error creating quiz:", err);
      res.status(500).send({ message: "Error creating quiz" });
    }
  });
  
  /**
   * Update a quiz by ID.
   */
  router.put("/:id", async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const quizData = req.body;
      const updatedQuiz = await updateQuizById(id, quizData);
      if (updatedQuiz) {
        res.status(200).send(updatedQuiz);
      } else {
        res.status(404).send({ message: "Quiz not found" });
      }
    } catch (err) {
      console.error("Error updating quiz:", err);
      res.status(500).send({ message: "Error updating quiz" });
    }
  });
  
  /**
   * Delete a quiz by ID.
   */
  router.delete("/:id", async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const deletedQuiz = await deleteQuizById(id);
      if (deletedQuiz) {
        res.status(200).send({ message: "Quiz deleted successfully" });
      } else {
        res.status(404).send({ message: "Quiz not found" });
      }
    } catch (err) {
      console.error("Error deleting quiz:", err);
      res.status(500).send({ message: "Error deleting quiz" });
    }
  });
  
  /**
   * Seed initial quizzes into the database.
   */
  router.post("/seed", async (req: Request, res: Response) => {
    try {
      await seedinitialquizzes();
      res.status(201).send({ message: "Database seeded with initial quizzes" });
    } catch (err) {
      console.error("Error seeding database:", err);
      res.status(500).send({ message: "Error seeding database" });
    }
  });
export default router;