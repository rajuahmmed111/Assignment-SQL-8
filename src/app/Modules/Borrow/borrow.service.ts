import httpStatus from "http-status";
import ApiError from "../../../Error/apiError";
import prisma from "../../../Shared/prisma";

// create borrow
const bookBorrow = async (payload: any) => {
  const { bookId, memberId, borrowDate } = payload;

  //   book validate
  const book = await prisma.book.findUnique({
    where: {
      bookId,
    },
  });
  if (!book) {
    throw new ApiError(httpStatus.NOT_FOUND, "Book not found");
  }

  //   member validate
  const member = await prisma.member.findUnique({
    where: {
      memberId,
    },
  });
  if (!member) {
    throw new ApiError(httpStatus.NOT_FOUND, "Member not found");
  }

  // borrow validate
  const existingBorrow = await prisma.borrowRecord.findFirst({
    where: { bookId, memberId },
  });
  if (existingBorrow) {
    throw new ApiError(httpStatus.BAD_REQUEST, "Book already borrowed");
  }

  //   create borrow
  const result = await prisma.borrowRecord.create({
    data: {
      bookId,
      memberId,
      borrowDate: new Date(),
    },
  });

  return result;
};

export const BorrowService = {
  bookBorrow,
};
