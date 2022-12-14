import { ReactNode } from "preact";
import { Head } from "$fresh/src/runtime/head.ts";
import Footer from "@ð/Basis/Footer.tsx";
import Header from "@ð/Basis/Header.tsx";
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
          ãã©ã§ãã¼ã¿ã«
        </title>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        {/* CSSèª­ã¿è¾¼ã¿ */}
        <link rel="stylesheet" href={asset("/k5portal.css")} />
        {/* ããããã¼ã¸ã®ã¿çºåãããJS */}
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
        {/* OGPé¢ä¿ */}
        <meta property="og:title" content="ãã©ã§ãã¼ã¿ã«" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://portal.kado.day" />
        <meta
          property="og:image"
          content="https://portal.kado.day/img/ogp/ogp.jpg"
        />
        <meta property="og:site_name" content="ãã©ã§ãã¼ã¿ã«" />
        <meta
          property="og:description"
          content="ãã©ã§ãã¼ã¿ã«ã¯ãã©ã§ãã­ã¸ã§ã¯ãå¨ä½ãçµ±æ¬ãããµã¤ãã§ãð®"
        />
      </Head>
      <Header title={title} />
      <main>{children}</main>
      <Footer />
    </html>
  );
}
