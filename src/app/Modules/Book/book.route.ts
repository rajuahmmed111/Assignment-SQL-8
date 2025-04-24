import express from "express";
import { BookController } from "./book.controller";

const router = express.Router();

// create book
router.post("/", BookController.createBook);

// get all books
router.get("/", BookController.getAllBooks);

// get book by id
router.get("/:id", BookController.getBookById);

// update book by id
router.patch("/:id", BookController.updateBookById);

// delete book by id
router.delete("/:id", BookController.deleteBookById);

export const bookRoutes = router;
