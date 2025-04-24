import express from "express";
import { BorrowController } from "./borrow.controller";

const router = express.Router();

// book borrow
router.post("/", BorrowController.bookBorrow);

// return a book
router.patch("/:borrowId", BorrowController.returnBook);

// overdue borrow list
router.get("/overdue", BorrowController.overdueBorrowList);

export const borrowRoutes = router;
