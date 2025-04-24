import httpStatus from "http-status";
import catchAsync from "../../../Shared/catchAsync";
import sendResponse from "../../../Shared/sendResponse";
import { MemberService } from "./member.service";

// create member in library
const createMember = catchAsync(async (req, res) => {
  const data = req.body;

  const result = await MemberService.createMember(data);

  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: "Member created successfully",
    data: result,
  });
});

// get all members
const getAllMembers = catchAsync(async (req, res) => {
  const result = await MemberService.getAllMembers();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Members retrieved successfully",
    data: result,
  });
});

// get member by id
const getMemberById = catchAsync(async (req, res) => {
  const { id } = req.params;

  const result = await MemberService.getMemberById(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Member retrieved successfully",
    data: result,
  });
});

// update member by id
const updateMemberById = catchAsync(async (req, res) => {
  const { id } = req.params;
  const data = req.body;

  const result = await MemberService.updateMemberById(id, data);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Member updated successfully",
    data: result,
  });
});

// delete member by id
const deleteMemberById = catchAsync(async (req, res) => {
  const { id } = req.params;

  const result = await MemberService.deleteMemberById(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Member deleted successfully",
    data: result,
  });
});

export const MemberController = {
  createMember,
  getAllMembers,
  getMemberById,
  updateMemberById,
  deleteMemberById,
};
