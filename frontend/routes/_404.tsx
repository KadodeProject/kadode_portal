import { UnknownPageProps } from "$fresh/server.ts";
import Layout from "@🌟/ErrorLayout.tsx";
export default function NotFoundPage({ url }: UnknownPageProps) {
  return (
    <Layout
      statusCode={404}
      title={"404 not found"}
      details={"リクエストされた" + url.pathname + "は存在しません🙇"}
    />
  );
}
