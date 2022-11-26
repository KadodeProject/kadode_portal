// コア
import { Handlers, PageProps } from "$fresh/server.ts";
//型
// みため
import Layout from "@🌟/BasicLayout.tsx";
//文字
import IndexHeadline from "@🗃/Text/IndexHeadline.tsx";
import ColorPaletteCard from "@🗃/Card/ColorPaletteCard.tsx";

export default function Home({ data }: PageProps<forIndexData>) {
  return (
    <Layout title="デザイン">
      <IndexHeadline title="🎨Kadode Colors" />
      <h2 class="text-center text-2xl mt-6 mb-2">ライトモード</h2>
      <div class="flex justify-center flex-wrap bg-kn_white rounded-2xl">
        <ColorPaletteCard
          color="kn-white"
          textColor="kn-black"
          borderColor="kn-black"
        />
        <ColorPaletteCard color="kn-black" textColor="kn-black" />
        <ColorPaletteCard color="kn-l-purple" textColor="kn-black" />
        <ColorPaletteCard color="kn-l-blue" textColor="kn-black" />
        <ColorPaletteCard color="kn-l-brown" textColor="kn-black" />
      </div>
      <h2 class="text-center text-2xl mt-6 mb-2">ダークモード</h2>
      <div class="flex justify-center flex-wrap bg-kn_black rounded-2xl">
        <ColorPaletteCard color="kn-white" textColor="kn-white" />
        <ColorPaletteCard
          color="kn-black"
          textColor="kn-white"
          borderColor="kn-white"
        />
        <ColorPaletteCard color="kn-d-purple" textColor="kn-white" />
        <ColorPaletteCard color="kn-d-blue" textColor="kn-white" />
        <ColorPaletteCard color="kn-d-brown" textColor="kn-white" />
      </div>
      <h2 class="text-center text-2xl mt-6 mb-2">ステータス</h2>
      <div class="flex justify-center flex-wrap bg-kn_white rounded-2xl">
        <ColorPaletteCard color="kn-s-1" textColor="kn-black" />
        <ColorPaletteCard color="kn-s-2" textColor="kn-black" />
        <ColorPaletteCard color="kn-s-3" textColor="kn-black" />
      </div>
      <h2 class="text-center text-2xl mt-6 mb-2">アクセント</h2>
      <div class="flex justify-center flex-wrap bg-kn_black rounded-2xl">
        <ColorPaletteCard color="kn-a-yellow" textColor="kn-white" />
        <ColorPaletteCard color="kn-a-light-blue" textColor="kn-white" />
        <ColorPaletteCard color="kn-a-green" textColor="kn-white" />
      </div>

      {/* <IndexHeadline title="🖌フォント" /> */}
    </Layout>
  );
}
