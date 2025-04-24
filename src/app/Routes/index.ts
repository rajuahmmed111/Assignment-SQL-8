import express from "express";
import { bookRoutes } from "../Modules/Book/book.route";
import { memberRoutes } from "../Modules/Member/member.route";
import { borrowRoutes } from "../Modules/Borrow/borrow.route";

const router = express.Router();

const moduleRoutes = [
  {
    path: "/books",
    route: bookRoutes,
  },
  {
    path: "/members",
    route: memberRoutes,
  },
  {
    path: "/borrow",
    route: borrowRoutes,
  },
];

moduleRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

export default router;
