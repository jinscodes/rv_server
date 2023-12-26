import { Request, Response } from "express";
import { usersDB } from "../../types/login";
import { usersIdDB } from "../../types/signup";

interface Props {
  usersDB: (usersDB | undefined)[];
  res: Response;
  req: Request;
}

export const compareId = ({ usersDB, res, req }: Props) => {
  try {
    const userClinet: usersIdDB = req.body;

    const isMatched = usersDB.filter((user) => user?.id === userClinet.id);

    return isMatched.length === 0 ? "possible" : "impossible";
  } catch (error) {
    console.error(error);
  }
};
