import Layout from "@🌟/BasicLayout.tsx";
import KadodeLogoAnimation from "@🧩/Animation/KadodeLogoAnimation.tsx";
export default function Home() {
  return (
    <Layout title="top">
      <div class="p-4 mx-auto max-w-screen-md">
        <h1 class="text-3xl text-center ">かどでプロジェクト</h1>
        <KadodeLogoAnimation />
        <p class="text-center text-2xl my-2">
          かどでプロジェクトの中心, かどでポータルへようこそ.
        </p>
      </div>
    </Layout>
  );
}
