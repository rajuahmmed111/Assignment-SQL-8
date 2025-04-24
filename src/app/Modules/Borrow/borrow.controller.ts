import httpStatus from "http-status";
import catchAsync from "../../../Shared/catchAsync";
import sendResponse from "../../../Shared/sendResponse";
import { BorrowService } from "./borrow.service";

// create borrow
const bookBorrow = catchAsync(async (req, res) => {
  const data = req.body;
  const result = await BorrowService.bookBorrow(data);

  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: "Book borrowed successfully",
    data: result,
  });
});

// return a book
const returnBook = catchAsync(async (req, res) => {
  const { borrowId } = req.params;
  const result = await BorrowService.returnBook(borrowId);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    status: 200,
    message: "Book returned successfully",
    data: result,
  });
});

// overdue borrow list
const overdueBorrowList = catchAsync(async (req, res) => {
  const result = await BorrowService.overdueBorrowList();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Overdue borrow list",
    data: result,
  });
});

export const BorrowController = {
  bookBorrow,
  returnBook,
  overdueBorrowList,
};
