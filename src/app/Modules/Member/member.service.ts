import httpStatus from "http-status";
import ApiError from "../../../Error/apiError";
import prisma from "../../../Shared/prisma";

// create member in library
const createMember = async (payload: any) => {
  const result = await prisma.member.create({
    data: { ...payload, membershipDate: new Date() },
  });

  return result;
};

// get all members
const getAllMembers = async () => {
  const result = await prisma.member.findMany({
    include: {
      borrowRecords: true,
    },
  });

  return result;
};

// get member by id
const getMemberById = async (id: string) => {
  const result = await prisma.member.findUnique({
    where: { memberId: id },
    include: {
      borrowRecords: true,
    },
  });

  if (!result) {
    throw new ApiError(httpStatus.NOT_FOUND, "Member not found");
  }

  return result;
};

// update member by id
const updateMemberById = async (id: string, payload: any) => {
  const result = await prisma.member.update({
    where: { memberId: id },
    data: payload,
  });

  if (!result) {
    throw new ApiError(httpStatus.NOT_FOUND, "Member not found");
  }

  return result;
};

// delete member by id
const deleteMemberById = async (id: string) => {
  const result = await prisma.member.delete({
    where: { memberId: id },
  });

  if (!result) {
    throw new ApiError(httpStatus.NOT_FOUND, "Member not found");
  }

  return result;
};

export const MemberService = {
  createMember,
  getAllMembers,
  getMemberById,
  updateMemberById,
  deleteMemberById,
};
