import express, { Request, Response } from "express";

const router = express.Router();

router.post("/", async (req: Request, res: Response, next) => {
  const id = req.body.id;
  const pw = req.body.pw;
  console.log(id, pw);
});

export default router;
