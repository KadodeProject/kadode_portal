import { ReactNode } from "preact";
import { Head } from "$fresh/src/runtime/head.ts";
import { asset } from "$fresh/runtime.ts";
interface LayoutProps {
  children: ReactNode;
}

/**
 * かどでペーパーに使う画面用のレイアウト
 * BasicLayoutを使いまわしたかったがヘッダー・フッター問題があるため除外
 * BasicLayoutと異なる所
 * 1. ヘッダー・フッターがない
 * 2. CSS読み込みが専用ファイル
 * 3. OGP関係排除
 * 4. noindex設定
 */
export default function Layout({ children }: LayoutProps) {
  return (
    <html lang="ja">
      <Head>
        <meta name="robots" content="noindex" />
        <title>m5paper表示用 | かどでポータル</title>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        {/* CSS読み込み */}
        <link rel="stylesheet" href={asset("/k5paperStyle.css")} />
        {/* favicon */}
        <link
          rel="apple-touch-icon"
          type="image/png"
          href="/img/favicon/apple-touch-icon-180x180.png"
        />
        <link
          rel="icon"
          type="image/png"
          href="/img/favicon/icon-192x192.png"
        />
      </Head>
      <main>{children}</main>
    </html>
  );
}
