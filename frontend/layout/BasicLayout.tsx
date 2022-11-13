import { ReactNode } from "preact";
import { Head } from "$fresh/src/runtime/head.ts";
import Footer from "@🗃/Basis/Footer.tsx";
import Header from "@🗃/Basis/Header.tsx";
import { asset } from "$fresh/runtime.ts";
interface LayoutProps {
  title?: string;
  children: ReactNode;
}
export default function Layout({ title, children }: LayoutProps) {
  return (
    <html lang="ja">
      <Head>
        <title>
          {title ? title + " | " : ""}
          かどでポータル
        </title>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        {/* CSS読み込み */}
        <link rel="stylesheet" href={asset("/k5portal.css")} />
        {/* トップページのみ発動させるJS */}
        {title ? "" : <script defer src={asset("/topAnimation.js")} />}
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
        {/* OGP関係 */}
        <meta property="og:title" content="かどでポータル" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://portal.kado.day" />
        <meta
          property="og:image"
          content="https://portal.kado.day/img/ogp/ogp.jpg"
        />
        <meta property="og:site_name" content="かどでポータル" />
        <meta
          property="og:description"
          content="かどでポータルはかどでプロジェクト全体を統括するサイトです🍮"
        />
      </Head>
      <Header title={title} />
      <main>{children}</main>
      <Footer />
    </html>
  );
}
