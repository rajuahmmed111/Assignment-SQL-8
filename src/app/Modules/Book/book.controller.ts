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
    })

});

export const BookController = {
    createBook,
}