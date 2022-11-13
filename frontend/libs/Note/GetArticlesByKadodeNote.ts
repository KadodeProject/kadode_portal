import {tPArticleT} from "@🧩/article.ts";
const NOTE_ENDPOINT = "https://note.com/api/v2/creators/kadoday/contents?kind=note&page=1";

export async function GetArticlesByKadodeNote(): Promise<tPArticleT[]> {
  const resp = await fetch(NOTE_ENDPOINT, {
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
  return jsonData.data.contents.map((e: any) => {
        return {
            title: e.name,
            url: e.noteUrl,
            date: new Date(e.publishAt),
            // body:e.body,
            // thumbnailUrl:e.eyecatch,
            
        };
    });
}

