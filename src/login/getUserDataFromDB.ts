import { Client } from "@notionhq/client";
import { NotionKeys } from "../notionKeys";

export const getUserDataFromDB = async () => {
  const notionKeys = new NotionKeys();
  const { notionDBUser, notionSecret } = notionKeys;

  const notion = new Client({
    auth: notionSecret,
  });

  const query = await notion.databases.query({
    database_id: notionDBUser || "",
  });

  // id & pw from DB
  const fromDB = query.results.map((row) => {
    const rowProp = row.properties;

    const idCell = rowProp.id;
    const pwCell = rowProp.pw;

    const isId = idCell.type === "rich_text" && idCell.rich_text[0];
    const isPw = pwCell.type === "rich_text" && pwCell.rich_text[0];

    if (isId && isPw) {
      const id = idCell.rich_text[0].plain_text;
      const pw = pwCell.rich_text[0].plain_text;

      return { id, pw };
    }
  });

  return fromDB;
};
