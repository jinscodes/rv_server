import express, { Request, Response } from "express";
import { compareId } from "../src/login/compareId";
import { getUserDataFromDB } from "../src/login/getUserDataFromDB";
import { NotionKeys } from "../src/notionKeys";

const router = express.Router();

const notionKeys = new NotionKeys();
const { notionDBUser, notionDBVWUI, notionDBVoca, notionSecret } = notionKeys;

if (!notionDBUser || !notionDBVWUI || !notionDBVoca || !notionSecret) {
  throw Error("Must define NOTION_SECRET and NOTION_DATABASE_ID in env");
}

router.post("/", async (req: Request, res: Response, next) => {
  const usersDB = await getUserDataFromDB();

  compareId({ usersDB, req, res });
});

export default router;
