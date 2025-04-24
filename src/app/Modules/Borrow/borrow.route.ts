import express from "express";
import { BorrowController } from "./borrow.controller";

const router = express.Router();

// book borrow
router.post("/", BorrowController.bookBorrow)

// return a book
router.patch("/:borrowId", BorrowController.returnBook)

// // delete borrow
// router.delete("/:borrowId", BorrowController.deleteBorrow)

export const borrowRoutes = router;