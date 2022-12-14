import {tPArticleT} from "@ð§©/article.ts";
const ENDPOINT = Deno.env.get("API_URL") +
  "/ReleaseNote/latest";
  
export async function GetLatestReleaseNotes(): Promise<tPArticleT[]> {
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
  /** ã¿ã¤ãã«ã¨URLãåãåºã */
  return jsonData.map((e: any) => {
        return {
            title: e.title,
            url: e.url,
            // Laravelã®Eloquentãã¿ã¤ã ã¾ã¼ã³ãæ¶ãé£ã°ãã®ã§ãã­ã³ãå´ã§æ¸ãæ¿ã(ãããªãã¨ãããããªã)
            date: new Date(e.date.replace("Z", "+09:00")),
            // body:e.body,
            
        };
    });
}

