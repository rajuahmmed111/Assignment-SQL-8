import express from "express";
import { MemberController } from "./member.controller";

const router = express.Router();

// create book
router.post("/", MemberController.addMember);

export const memberRoutes = router;
