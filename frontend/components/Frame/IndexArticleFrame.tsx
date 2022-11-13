import { tPArticleT } from "@🧩/article.ts";

export default function IndexArticleFrame({ articlesData }: tPArticleT[]) {
  return (
    <div class="border-2 mx-2 flex flex-col bg-kn_white rounded-2xl p-2 my-4">
      {/* 記事のループ */}
      {articlesData.map((article) => (
        <a
          class="mb-4 md:ml-8"
          href={article.url}
          target="_blank"
          rel="noopener"
        >
          <p>
            {article.date.getFullYear()}年{article.date.getMonth() + 1}月
            {article.date.getDate()}日
          </p>
          <h3 class="text-xl">{article.title}</h3>
        </a>
      ))}
    </div>
  );
}
