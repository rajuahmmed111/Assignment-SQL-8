import httpStatus from "http-status";
import ApiError from "../../../Error/apiError";
import prisma from "../../../Shared/prisma";

// create book
const createBook = async (payload: any) => {
  const result = await prisma.book.create({
    data: payload,
  });

  return result;
};

// get all books
const getAllBooks = async () => {
  const result = await prisma.book.findMany({
    include: {
      borrowRecords: true,
    },
  });

  return result;
};

// get book by id
const getBookById = async (id: string) => {
  const result = await prisma.book.findUnique({
    where: {
      bookId: id,
    },
  });
  if (!result) {
    throw new ApiError(httpStatus.NOT_FOUND, "Book not found");
  }

  return result;
};

const updateBookById = async (id: string, payload: any) => {
  const existingBook = await prisma.book.findUnique({
    where: { bookId: id },
  });

  if (!existingBook) {
    throw new Error(`Book with ID ${id} not found.`);
  }

  const updatedBook = await prisma.book.update({
    where: { bookId: id },
    data: payload,
  });

  return updatedBook;
};

// delete book by id
const deleteBookById = async (id: string) => {
  const existingBook = await prisma.book.findUnique({
    where: { bookId: id },
  });

  if (!existingBook) {
    throw new Error(`Book not found.`);
  }

  await prisma.book.delete({
    where: { bookId: id },
  });
};

export const BookService = {
  createBook,
  getAllBooks,
  getBookById,
  updateBookById,
  deleteBookById,
};
