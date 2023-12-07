import { IncomingMessage, ServerResponse } from "http";

interface Props {
  userDatas: ({ id: string; pw: string } | undefined)[];
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
    console.log(bodyJson);
  });

  return "";
};
