import { Client } from "@notionhq/client";
import express, { Request, Response } from "express";
import { NotionKeys } from "../src/notionKeys";
import { SignupValues } from "./../types/signup.d";

const router = express.Router();

const notionKeys = new NotionKeys();
const { notionDBUser, notionDBVWUI, notionDBVoca, notionSecret } = notionKeys;

const notion = new Client({
  auth: notionSecret,
});

router.post("/", async (req: Request, res: Response, next) => {
  const body: SignupValues = req.body;
  const lastname = body.lastname && body.lastname;
  const firstname = body.firstname;
  const birth = body.birth;
  const gender = body.gender;
  const email = body.email;
  const id = body.id;
  const pw = body.pw;
  console.log(body);
});

export default router;
