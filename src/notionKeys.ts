import "dotenv/config";

export class NotionKeys {
  public notionSecret = process.env.NOTION_SECRET;
  public notionDBUser = process.env.NOTION_DB_USER;
  public notionDBVWUI = process.env.NOTION_DB_VWUI;
  public notionDBVoca = process.env.NOTION_DB_VOCA;
}
