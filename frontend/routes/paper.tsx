// コア
import { Handlers, PageProps } from "$fresh/server.ts";
// メソッド
import {
  GetDailyChange,
  getDailyT,
} from "@💿/OperationCoreTransition/GetDailyChange.ts";
import { CreateMonthlyGraphData } from "@💿/OperationCoreTransition/CreateMonthlyGraphData.ts";
import { CreateDailyGraphData } from "@💿/MachineResource/CreateDailyGraphData.ts";
import { GetLatestData } from "@💿/MachineResource/GetLatestData.ts";
//型
import { MachineResourceE } from "@🧩/kadodeApiT.ts";
import { lineGraphT } from "@🧩/fresh_chartsT.ts";
// みため
import Layout from "@🌟/M5PaperLayout.tsx";
import ResponseTimeWrapper from "@🗃/Paper/Characters/ResponseTimeWrapper.tsx";
import MachineResourceWrapper from "@🗃/Paper/Characters/MachineResourceWrapper.tsx";
import OperationCoreInfoWrapper from "@🗃/Paper/Characters/OperationCoreInfoWrapper.tsx";
//グラフ
import LineChart from "@🗃/Graph/fresh_charts/LineChart.tsx";

type forRenderData = {
  octData: octData;
  mrData: mrData;
};

/** MachineResource系のデータ */
type mrData = {
  latest: MachineResourceE;
  dailyChart: lineGraphT[];
};
/** OperationCoreTransition系のデータ */
type octData = {
  daily: getDailyT;
  monthlyChart: lineGraphT[];
};

export const handler: Handlers<forRenderData> = {
  async GET(_req, ctx) {
    const octDailyData = await GetDailyChange<getDailyT>();
    const octMonthlyData = await CreateMonthlyGraphData<lineGraphT[]>();
    const mrDailyData = await await CreateDailyGraphData<lineGraphT[]>();
    const mrLatestData = await await GetLatestData<MachineResourceE>();
    return ctx.render({
      octData: {
        daily: octDailyData,
        monthlyChart: octMonthlyData,
      },
      mrData: {
        latest: mrLatestData,
        dailyChart: mrDailyData,
      },
    });
  },
};

/**
 * かどでペーパーのレイアウトを司るページ
 * かどでペーパー用なので、960px x 540px の描画しか存在せず、決め打ちで設定してよい
 * 色もグレースケールになるため細かい組み合わせは不要(意味がない)
 */
export default function Paper({ data }: PageProps<forRenderData>) {
  const octTotal = data.octData.daily.total;
  const mrLatest = data.mrData.latest;
  const octLast1Day = data.octData.daily.last1Day;
  //どの環境でもjst時刻で表示するようにする
  const d = new Date(
    Date.now() + (new Date().getTimezoneOffset() + 9 * 60) * 60 * 1000
  );
  const year = d.getFullYear();
  const month = d.getMonth() + 1;
  const day = d.getDate();
  const hours = d.getHours();
  const minutes = d.getMinutes();
  const seconds = d.getSeconds();
  const currentTime =
    year +
    "/" +
    ("0" + month).slice(-2) +
    "/" +
    ("0" + day).slice(-2) +
    " " +
    ("0" + hours).slice(-2) +
    ":" +
    ("0" + minutes).slice(-2) +
    ":" +
    ("0" + seconds).slice(-2);
  return (
    <Layout>
      <div class="flex">
        <div
          style="width:300px;height:50px"
          class="flex items-center justify-center bg-kn_black text-kn_white"
        >
          <h1 class="text-2xl">かどで日記稼働状況</h1>
        </div>
        <div class="flex items-center flex-col ml-2">
          <p>last updated</p>
          <p>{currentTime}</p>
        </div>
      </div>
      <div class="grid grid-cols-2 mt-8 mx-4">
        {/* <div class="1">
          <div class="flex justify-center items-center flex-col">
            <h2 class="text-xl">レスポンス</h2>
            <div class="grid grid-cols-4 w-full">
              <ResponseTimeWrapper title="api" time={0} />
              <ResponseTimeWrapper title="diary" time={0} />
              <ResponseTimeWrapper title="portal" time={0} />
              <ResponseTimeWrapper title="dog" time={0} />
            </div>
            <div class="bg-kn_black w-full h-12"></div>
          </div>
          <div class="flex justify-center items-center flex-col mt-6">
            <h2 class="text-xl">アクセス</h2>
          </div>
        </div> */}
        <div class="2">
          <div class="flex justify-center items-center flex-col">
            <h2 class="text-xl">ユーザー</h2>
            <div class="grid grid-cols-3 w-full">
              <OperationCoreInfoWrapper
                title="ユーザー"
                unit="人"
                total={octTotal.user_total}
                change={octLast1Day.user_change}
              />
              <OperationCoreInfoWrapper
                title="日記"
                unit="個"
                total={octTotal.diary_total}
                change={octLast1Day.diary_change}
              />
              <OperationCoreInfoWrapper
                title="統計"
                unit="個"
                total={octTotal.statistic_per_date_total}
                change={octLast1Day.statistic_per_date_change}
              />
            </div>
            <div class="w-full">
              <LineChart graphData={data.octData.monthlyChart} />
            </div>
          </div>
        </div>
        <div class="3">
          <div class="flex justify-center items-center flex-col">
            <h2 class="text-xl">サーバー</h2>
            <div class="grid grid-cols-3 w-full">
              <MachineResourceWrapper title="CPU" percent={mrLatest.cpu} />
              <MachineResourceWrapper
                title="Memory"
                percent={mrLatest.memory}
              />
              <MachineResourceWrapper title="Disk" percent={mrLatest.disk} />
            </div>
            <div class="w-full">
              <LineChart graphData={data.mrData.dailyChart} />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
