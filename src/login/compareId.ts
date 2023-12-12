import { Request, Response } from "express";
import { usersDB } from "./../../types/login.d";
import { jwt } from "./jwt";

interface Props {
  usersDB: (usersDB | undefined)[];
  res: Response;
  req: Request;
}

export const compareId = ({ usersDB, res, req }: Props) => {
  try {
    const userClinet: usersDB = req.body;

    // login validation
    const isMatched = usersDB.filter(
      (user) => user?.id === userClinet.id && user.pw === userClinet.pw
    );
    // publish token
    if (isMatched.length === 1) {
      // convert object to json
      const jwtJson = JSON.parse(JSON.stringify(isMatched[0]));
      // create jwt token
      const jwtToken = jwt({ jwtJson });
      res.status(200).json(jwtToken);
    } else {
      res.status(401).json({ error: "Unauthorized" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
