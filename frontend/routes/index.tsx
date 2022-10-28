// コア
import KadodeLogoAnimation from "@🧩/Animation/KadodeLogoAnimation.tsx";
import { Handlers, PageProps } from "$fresh/server.ts";
// メソッド
import {
  getDailyChange,
  getDailyT,
} from "@💿/OperationCoreTransition/GetDailyChange.ts";
import { CreateMonthlyGraphData } from "@💿/OperationCoreTransition/CreateMonthlyGraphData.ts";
import { LineGraphT } from "@🍚/graphT.ts";
// みため
import Layout from "@🌟/BasicLayout.tsx";
import UserChangeCard from "@🧩/Card/UserChangeCard.tsx";
import ListChart from "@🧩/Graph/ListChart.tsx";

type forIndexData = {
  daily: getDailyT;
  monthlyChart: LineGraphT;
};

export const handler: Handlers<forIndexData> = {
  async GET(_req, ctx) {
    const dailyData = await getDailyChange<getDailyT>();
    const monthlyData = await CreateMonthlyGraphData<LineGraphT>();
    return ctx.render({
      daily: dailyData,
      monthlyChart: monthlyData,
    });
  },
};

export default function Home({ data }: PageProps<forIndexData>) {
  const total = data.daily.total;
  const last1Day = data.daily.last1Day;
  return (
    <Layout title="top">
      <div class="p-4 mx-auto max-w-screen-md">
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
              title="ユーザー数の変化"
              total={total.user_total}
              change={last1Day.user_change}
              unit="人"
            />
            <UserChangeCard
              title="日記数の変化"
              total={total.diary_total}
              change={last1Day.diary_change}
              unit="日記"
            />
            <UserChangeCard
              title="統計数の変化"
              total={total.statistic_per_date_total}
              change={last1Day.statistic_per_date_change}
              unit="個"
            />
          </div>
        </div>
        <div class="graphSection">
          <h2 class="m-4 text-3xl text-center">利用状況の推移</h2>
          <ListChart graphData={data.monthlyChart} />
        </div>
      </div>
    </Layout>
  );
}
