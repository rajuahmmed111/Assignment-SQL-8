import catchAsync from "../../../Shared/catchAsync";
import sendResponse from "../../../Shared/sendResponse";
import { BorrowService } from "./borrow.service";

// create borrow
const bookBorrow = catchAsync(async (req, res) => {
  const data = req.body;
  const result = await BorrowService.bookBorrow(data);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Book borrowed successfully",
    data: result,
  });
});


export const BorrowController = {
  bookBorrow,
};
