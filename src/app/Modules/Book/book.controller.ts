import catchAsync from "../../../Shared/catchAsync";
import sendResponse from "../../../Shared/sendResponse";
import { BookService } from "./book.service";

// create book
const createBook = catchAsync(async (req, res) => {
  const data = req.body;

  const result = await BookService.createBook(data);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Book created successfully",
    data: result,
  });
});

// get all books
const getAllBooks = catchAsync(async (req, res) => {
  const result = await BookService.getAllBooks();

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Books retrieved successfully",
    data: result,
  });
});

// get book by id
const getBookById = catchAsync(async (req, res) => {
  const { id } = req.params;

  const result = await BookService.getBookById(id);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Book retrieved successfully",
    data: result,
  });
});

// update book by id
const updateBookById = catchAsync(async (req, res) => {
  const { id } = req.params;
  const data = req.body;

  const result = await BookService.updateBookById(id, data);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Book updated successfully",
    data: result,
  });
});

// delete book by id
const deleteBookById = catchAsync(async (req, res) => {
  const { id } = req.params;

  const result = await BookService.deleteBookById(id);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Book deleted successfully",
    data: result,
  });
});

export const BookController = {
  createBook,
  getAllBooks,
  getBookById,
  updateBookById,
  deleteBookById,
};
