import express from "express";
import { MemberController } from "./member.controller";

const router = express.Router();

// create member
router.post("/", MemberController.createMember);

// get all members
router.get("/", MemberController.getAllMembers);

// get member by id
router.get("/:id", MemberController.getMemberById);

// update member by id
router.patch("/:id", MemberController.updateMemberById);

// delete member by id
router.delete("/:id", MemberController.deleteMemberById);

export const memberRoutes = router;
