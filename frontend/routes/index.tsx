// コア
import KadodeLogoAnimation from "@🗃/Animation/KadodeLogoAnimation.tsx";
import { Handlers, PageProps } from "$fresh/server.ts";
// メソッド
import {
  GetDailyChange,
  getDailyT,
} from "@💿/OperationCoreTransition/GetDailyChange.ts";
import { CreateMonthlyGraphData } from "@💿/OperationCoreTransition/CreateMonthlyGraphData.ts";
import { GetArticlesByKadodeNote } from "@💿/Note/GetArticlesByKadodeNote.ts";
import { GetLatestOsirases } from "@💿/Osirase/GetLatestOsirases.ts";
import { GetLatestReleaseNotes } from "@💿/ReleaseNote/GetLatestReleaseNotes.ts";
//型
import { lineChartT } from "@🧩/fresh_chartsT.ts";
import { tPArticleT } from "@🧩/article.ts";
// みため
import Layout from "@🌟/BasicLayout.tsx";
//カード
import UserChangeCard from "@🗃/Card/UserChangeCard.tsx";
import ProductIntroCard from "@🗃/Card/ProductIntroCard.tsx";
import BrandIntroCard from "@🗃/Card/BrandIntroCard.tsx";
import ExternalServiceIntroCard from "@🗃/Card/ExternalServiceIntroCard.tsx";
//フレーム
import IndexArticleFrame from "@🗃/Frame/IndexArticleFrame.tsx";
//文字
import IndexHeadline from "@🗃/Text/IndexHeadline.tsx";
//グラフ
import LineChart from "@🗃/Graph/fresh_charts/LineChart.tsx";

// import { lineChartT } from "@🧩/d3nodata.ts";
// import D3nodataLineChart from "@🏝/D3nodataLineChart.tsx";
// import { CreateOperationCoreChartDataToD3nodata } from "@💿/OperationCoreTransition/CreateOperationCoreChartDataToD3nodata.ts";

type forIndexData = {
  daily: getDailyT;
  monthlyChart: lineChartT[];
  noteArticles: tPArticleT[];
  latestOsirases: tPArticleT[];
  latestReleaseNotes: tPArticleT[];
};

export const handler: Handlers<forIndexData> = {
  async GET(_req, ctx) {
    const dailyData = await GetDailyChange<getDailyT>();
    const diaryStatisticMonthlyData = await CreateMonthlyGraphData<
      lineChartT[]
    >();
    // const diaryStatisticMonthlyData =
    //   await CreateOperationCoreChartDataToD3nodata<lineChartT[]>();
    const noteArticles = await GetArticlesByKadodeNote<tPArticleT[]>();
    const latestOsirases = await GetLatestOsirases<tPArticleT[]>();
    const latestReleaseNotes = await GetLatestReleaseNotes<tPArticleT[]>();
    return ctx.render({
      daily: dailyData,
      diaryStatisticMonthlyData: diaryStatisticMonthlyData,
      noteArticles: noteArticles,
      latestOsirases: latestOsirases,
      latestReleaseNotes: latestReleaseNotes,
    });
  },
};

export default function Home({ data }: PageProps<forIndexData>) {
  const total = data.daily.total;
  const last1Day = data.daily.last1Day;
  return (
    <Layout>
      <div class="p-4 mx-auto">
        <h1 class="bg-kn_white text-3xl text-center ">かどでプロジェクト</h1>
        <KadodeLogoAnimation />
        <p class="bg-kn_white text-center text-2xl my-2">
          かどでプロジェクトの中心, かどでポータルへようこそ.
        </p>
        <div class="flex flex-col rounded-2xl p-4 mx-2 mt-12 border-2 border-dotted border-kn_l_purple bg-kn_white">
          <h2 class="text-3xl mx-2 text-center ">現在のかどで日記</h2>
          <p class="text-center mx-2 my-2 ">※かっこ内は過去24時間の変化</p>
          <div class="flex justify-around items-center flex-wrap p-4">
            <UserChangeCard
              title="ユーザー"
              total={total.user_total}
              change={last1Day.user_change}
              unit="人"
            />
            <UserChangeCard
              title="日記"
              total={total.diary_total}
              change={last1Day.diary_change}
              unit="日記"
            />
            <UserChangeCard
              title="統計"
              total={total.statistic_per_date_total}
              change={last1Day.statistic_per_date_change}
              unit="個"
            />
          </div>
        </div>
        <IndexHeadline title="📈利用状況の推移" />
        <div class="graphSection">
          {/* 下記はあまりにも重たすぎて表示が3秒程度遅れるのでバージョンが落ち着くまで保留(アニメーションはとても綺麗) */}
          <LineChart graphData={data.diaryStatisticMonthlyData} />
          {/* <D3nodataLineChart chartData={data.diaryStatisticMonthlyData} /> */}
        </div>
        <IndexHeadline title="🦅情報" />
        <div class="flex justify-center flex-wrap">
          <div class="md:w-1/2">
            <h3 class="text-2xl text-center mt-4">お知らせ</h3>
            <IndexArticleFrame articlesData={data.latestOsirases} />
          </div>
          <div class="md:w-1/2">
            <h3 class="text-2xl text-center mt-4">リリースノート</h3>
            <IndexArticleFrame articlesData={data.latestReleaseNotes} />
          </div>
        </div>
        <IndexHeadline title="🍸こんなことやってます！" />
        <ProductIntroCard
          title="かどで日記"
          url="https://kado.day"
          urlTitle="kado.day"
          description="主力の日記サービス！"
          img_url="img/productImage/diary/diary1.jpg"
        />
        <ProductIntroCard
          title="かどでポータル"
          url="https://portal.kado.day"
          urlTitle="portal.kado.day"
          description="かどでプロジェクトのポータルサイト！"
          img_url="img/productImage/portal/portal1.jpg"
        />
        <ProductIntroCard
          title="かどで日記開発者向けwiki"
          url="https://wiki.kado.day"
          urlTitle="wiki.kado.day"
          description="かどで日記の開発時に見るwiki！"
          img_url="img/productImage/wiki/wiki1.jpg"
        />
        {/* <ProductIntroCard
          title="かどでペーパー"
          url="https://paper.kado.day/img/screenshot.jpg"
          urlTitle="paper.kado.day"
          description="かどで日記の情報を電子ペーパーで表示する！"
          img_url="img/productImage/paper/paper1.jpg"
        /> */}
        <IndexHeadline title="🍹かどでプロジェクトについて知る" />
        <div class="flex justify-center flex-wrap">
          <BrandIntroCard
            title="デザイン"
            url="/design"
            description="かどでプロジェクトのデザインについて"
          />
        </div>

        <IndexHeadline title="🧃よければこちらも" />
        <h3 class="text-2xl text-center mt-4">note最新記事</h3>
        <IndexArticleFrame articlesData={data.noteArticles} />
        <div class="flex justify-center flex-wrap">
          <ExternalServiceIntroCard
            title="かどでプロジェクト公式note"
            url="https://note.com/kadoday"
            imgUrl="img/logo/note/logo_symbol.png"
          />
          <ExternalServiceIntroCard
            title="かどでプロジェクトGitHub"
            url="https://github.com/KadodeProject"
            imgUrl="img/logo/github/GitHub-Mark-120px-plus.png"
          />
        </div>
      </div>
    </Layout>
  );
}
