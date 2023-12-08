import { IncomingMessage, ServerResponse } from "http";
import { UserDatas } from "./../../types/login.d";

interface Props {
  userDatas: (UserDatas | undefined)[];
  res: ServerResponse<IncomingMessage>;
  req: IncomingMessage;
}

export const compareId = ({ userDatas, res, req }: Props) => {
  // console.log("compareId:", userDatas);
  let body: string = "";
  req.on("data", (chunk) => {
    body += chunk;
  });

  req.on("end", async () => {
    const bodyJson = JSON.parse(body);
    const isMatched = userDatas.map((el) => el?.id === bodyJson.id);
    // console.log("userDatas: ", userDatas); // from notion db
    // console.log("bodyJson: ", bodyJson); // from client
    console.log("isMatched: ", isMatched);
  });
};
