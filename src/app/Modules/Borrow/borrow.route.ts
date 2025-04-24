import express from "express";
import { BorrowController } from "./borrow.controller";

const router = express.Router();

// book borrow
router.post("/", BorrowController.bookBorrow);

export const borrowRoutes = router;
