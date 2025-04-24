import express from "express";
import { BookController } from "./book.controller";

const router = express.Router();

// create book
router.post("/", BookController.createBook);

export const bookRoutes = router;