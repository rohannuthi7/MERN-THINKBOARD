import express from "express";
import { getAllNotes, createNote, deleteNote, updateNote } from "../controllers/notesControllers.js";

const router = express.Router();

router.get("/sth", getAllNotes);
router.post("/", createNote);
router.put("/:id", updateNote);
router.delete("/:id", deleteNote);

export default router;