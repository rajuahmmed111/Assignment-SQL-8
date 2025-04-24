import catchAsync from "../../../Shared/catchAsync";
import sendResponse from "../../../Shared/sendResponse";
import { MemberService } from "./member.service";

// add member in library
const addMember = catchAsync(async (req, res) => {
  const data = req.body;

  const result = await MemberService.addMember(data);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Member created successfully",
    data: result,
  });
});

export const MemberController = {
    addMember,
}