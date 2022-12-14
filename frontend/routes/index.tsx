// γ³γ’
import KadodeLogoAnimation from "@π/Animation/KadodeLogoAnimation.tsx";
import { Handlers, PageProps } from "$fresh/server.ts";
// γ‘γ½γγ
import {
  GetDailyChange,
  getDailyT,
} from "@πΏ/OperationCoreTransition/GetDailyChange.ts";
import { CreateMonthlyGraphData } from "@πΏ/OperationCoreTransition/CreateMonthlyGraphData.ts";
import { GetArticlesByKadodeNote } from "@πΏ/Note/GetArticlesByKadodeNote.ts";
import { GetLatestOsirases } from "@πΏ/Osirase/GetLatestOsirases.ts";
import { GetLatestReleaseNotes } from "@πΏ/ReleaseNote/GetLatestReleaseNotes.ts";
//ε
import { lineChartT } from "@π§©/fresh_chartsT.ts";
import { tPArticleT } from "@π§©/article.ts";
// γΏγγ
import Layout from "@π/BasicLayout.tsx";
//γ«γΌγ
import UserChangeCard from "@π/Card/UserChangeCard.tsx";
import ProductIntroCard from "@π/Card/ProductIntroCard.tsx";
import BrandIntroCard from "@π/Card/BrandIntroCard.tsx";
import ExternalServiceIntroCard from "@π/Card/ExternalServiceIntroCard.tsx";
//γγ¬γΌγ 
import IndexArticleFrame from "@π/Frame/IndexArticleFrame.tsx";
//ζε­
import IndexHeadline from "@π/Text/IndexHeadline.tsx";
//γ°γ©γ
import LineChart from "@π/Graph/fresh_charts/LineChart.tsx";

// import { lineChartT } from "@π§©/d3nodata.ts";
// import D3nodataLineChart from "@π/D3nodataLineChart.tsx";
// import { CreateOperationCoreChartDataToD3nodata } from "@πΏ/OperationCoreTransition/CreateOperationCoreChartDataToD3nodata.ts";

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
        <h1 class="bg-kn_white text-3xl text-center ">γγ©γ§γγ­γΈγ§γ―γ</h1>
        <KadodeLogoAnimation />
        <p class="bg-kn_white text-center text-2xl my-2">
          γγ©γ§γγ­γΈγ§γ―γγ?δΈ­εΏ, γγ©γ§γγΌγΏγ«γΈγγγγ.
        </p>
        <div class="flex flex-col rounded-2xl p-4 mx-2 mt-12 border-2 border-dotted border-kn_l_purple bg-kn_white">
          <h2 class="text-3xl mx-2 text-center ">ηΎε¨γ?γγ©γ§ζ₯θ¨</h2>
          <p class="text-center mx-2 my-2 ">β»γγ£γεγ―ιε»24ζιγ?ε€ε</p>
          <div class="flex justify-around items-center flex-wrap p-4">
            <UserChangeCard
              title="γ¦γΌγΆγΌ"
              total={total.user_total}
              change={last1Day.user_change}
              unit="δΊΊ"
            />
            <UserChangeCard
              title="ζ₯θ¨"
              total={total.diary_total}
              change={last1Day.diary_change}
              unit="ζ₯θ¨"
            />
            <UserChangeCard
              title="η΅±θ¨"
              total={total.statistic_per_date_total}
              change={last1Day.statistic_per_date_change}
              unit="ε"
            />
          </div>
        </div>
        <IndexHeadline title="πε©η¨ηΆζ³γ?ζ¨η§»" />
        <div class="graphSection">
          {/* δΈθ¨γ―γγΎγγ«γιγγγγ¦θ‘¨η€Ίγ3η§η¨εΊ¦ιγγγ?γ§γγΌγΈγ§γ³γθ½γ‘ηγγΎγ§δΏη(γ’γγ‘γΌγ·γ§γ³γ―γ¨γ¦γηΆΊιΊ) */}
          <LineChart graphData={data.diaryStatisticMonthlyData} />
          {/* <D3nodataLineChart chartData={data.diaryStatisticMonthlyData} /> */}
        </div>
        <IndexHeadline title="π¦ζε ±" />
        <div class="flex justify-center flex-wrap">
          <div class="md:w-1/2">
            <h3 class="text-2xl text-center mt-4">γη₯γγ</h3>
            <IndexArticleFrame articlesData={data.latestOsirases} />
          </div>
          <div class="md:w-1/2">
            <h3 class="text-2xl text-center mt-4">γͺγͺγΌγΉγγΌγ</h3>
            <IndexArticleFrame articlesData={data.latestReleaseNotes} />
          </div>
        </div>
        <IndexHeadline title="πΈγγγͺγγ¨γγ£γ¦γΎγοΌ" />
        <ProductIntroCard
          title="γγ©γ§ζ₯θ¨"
          url="https://kado.day"
          urlTitle="kado.day"
          description="δΈ»εγ?ζ₯θ¨γ΅γΌγγΉοΌ"
          img_url="img/productImage/diary/diary1.jpg"
        />
        <ProductIntroCard
          title="γγ©γ§γγΌγΏγ«"
          url="https://portal.kado.day"
          urlTitle="portal.kado.day"
          description="γγ©γ§γγ­γΈγ§γ―γγ?γγΌγΏγ«γ΅γ€γοΌ"
          img_url="img/productImage/portal/portal1.jpg"
        />
        <ProductIntroCard
          title="γγ©γ§ζ₯θ¨ιηΊθεγwiki"
          url="https://wiki.kado.day"
          urlTitle="wiki.kado.day"
          description="γγ©γ§ζ₯θ¨γ?ιηΊζγ«θ¦γwikiοΌ"
          img_url="img/productImage/wiki/wiki1.jpg"
        />
        {/* <ProductIntroCard
          title="γγ©γ§γγΌγγΌ"
          url="https://paper.kado.day/img/screenshot.jpg"
          urlTitle="paper.kado.day"
          description="γγ©γ§ζ₯θ¨γ?ζε ±γι»ε­γγΌγγΌγ§θ‘¨η€ΊγγοΌ"
          img_url="img/productImage/paper/paper1.jpg"
        /> */}
        <IndexHeadline title="πΉγγ©γ§γγ­γΈγ§γ―γγ«γ€γγ¦η₯γ" />
        <div class="flex justify-center flex-wrap">
          <BrandIntroCard
            title="γγΆγ€γ³"
            url="/design"
            description="γγ©γ§γγ­γΈγ§γ―γγ?γγΆγ€γ³γ«γ€γγ¦"
          />
        </div>

        <IndexHeadline title="π§γγγγ°γγ‘γγ" />
        <h3 class="text-2xl text-center mt-4">noteζζ°θ¨δΊ</h3>
        <IndexArticleFrame articlesData={data.noteArticles} />
        <div class="flex justify-center flex-wrap">
          <ExternalServiceIntroCard
            title="γγ©γ§γγ­γΈγ§γ―γε¬εΌnote"
            url="https://note.com/kadoday"
            imgUrl="img/logo/note/logo_symbol.png"
          />
          <ExternalServiceIntroCard
            title="γγ©γ§γγ­γΈγ§γ―γGitHub"
            url="https://github.com/KadodeProject"
            imgUrl="img/logo/github/GitHub-Mark-120px-plus.png"
          />
        </div>
      </div>
    </Layout>
  );
}
