import prisma from "../../../Shared/prisma";

// create book
const createBook = async (payload: any) => {
  const result = await prisma.book.create({
    data: payload,
  });

  return result;
};

export const BookService = {
  createBook,
};
