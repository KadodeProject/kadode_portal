import Layout from "@🌟/BasicLayout.tsx";
import ErrorCard from "@🐣/Card/ErrorCard.tsx";
interface ErrorMessages {
  statusCode: number;
  title: string;
  details: string;
}

export default function ErrorLayout({
  statusCode,
  title,
  details,
}: ErrorMessages) {
  return (
    <Layout title={statusCode}>
      <ErrorCard title={title} details={details} />
    </Layout>
  );
}
