import { Client } from "@notionhq/client";
import express, { Request, Response } from "express";
import { getUserDataFromDB } from "../src/login/getUserDataFromDB";
import { NotionKeys } from "../src/notionKeys";
import { compareId } from "../src/signup/compareId";
import { convertDate } from "../src/signup/convertDate";
import { SignupValues } from "./../types/signup.d";

const router = express.Router();

const notionKeys = new NotionKeys();
const { notionDBUser, notionDBVWUI, notionDBVoca, notionSecret } = notionKeys;

if (!notionDBUser || !notionDBVWUI || !notionDBVoca || !notionSecret) {
  throw Error("Must define NOTION_SECRET and NOTION_DATABASE_ID in env");
}

const notion = new Client({
  auth: notionSecret,
});

// signup
router.post("/", async (req: Request, res: Response, next) => {
  const body: SignupValues = req.body;
  const lastname = body.lastname && body.lastname;
  const firstname = body.firstname;
  const birth = body.birth;
  const gender = body.gender;
  const email = body.email;
  const id = body.id.id;
  const pw = body.id.pw;

  await notion.pages.create({
    parent: {
      database_id: notionDBUser,
    },
    properties: {
      firstname: {
        rich_text: [
          {
            text: {
              content: firstname,
            },
          },
        ],
      },
      lastname: {
        rich_text: [
          {
            text: {
              content: lastname || "",
            },
          },
        ],
      },
      birth: {
        date: {
          start: convertDate({ date: birth }),
        },
      },
      gender: {
        rich_text: [
          {
            text: {
              content: gender,
            },
          },
        ],
      },
      email: {
        rich_text: [
          {
            text: {
              content: email,
            },
          },
        ],
      },
      id: {
        rich_text: [
          {
            text: {
              content: id,
            },
          },
        ],
      },
      pw: {
        rich_text: [
          {
            text: {
              content: pw,
            },
          },
        ],
      },
    },
  });

  res.status(200).json({ userId: req.body.id, process: "Done" });
});

// check id & pw
router.post("/id", async (req: Request, res: Response, next) => {
  const usersDB = await getUserDataFromDB();
  const checkId = compareId({ usersDB, req, res });

  if (checkId === "possible") {
    res.status(200).json({ userId: req.body.id, checking: "possible" });
  } else {
    res.status(200).json({ userId: req.body.id, checking: "impossible" });
  }
});

export default router;
