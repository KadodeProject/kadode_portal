import {tPArticleT} from "@🧩/article.ts";
const ENDPOINT = Deno.env.get("API_URL") +
  "/Osirase/latest";
  
export async function GetLatestOsirases(): Promise<tPArticleT[]> {
  const resp = await fetch(ENDPOINT, {
    method: "GET",
  });
  if (!resp.ok) {
    const body = await resp.text();
    throw new Error(`${resp.status} ${body}`);
  }
  const jsonData = await resp.json();
  if (jsonData.errors) {
    throw new Error(jsonData.errors.map((e: Error) => e.message).join("\n"));
  }
  /** タイトルとURLを取り出す */
  return jsonData.map((e: any) => {
    const date=e.created_at;
        return {
            title: e.title,
            url: e.url,
            date: new Date(e.date.replace("Z", "+09:00")),
            // body:e.body,
            
        };
    });
}

