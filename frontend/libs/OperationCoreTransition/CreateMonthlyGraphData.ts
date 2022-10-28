import { OperationCoreE } from "@🍚/kadodeApiT.ts";
import { LineGraphT } from "@🍚/graphT.ts";

const MONTH_ENDPOINT = Deno.env.get("API_URL") +
  "/OperationCoreTransitionPerHours/relative/month";

export async function CreateMonthlyGraphData(): Promise<LineGraphT> {
  const resp = await fetch(MONTH_ENDPOINT, {
    method: "GET",
  });
  if (!resp.ok) {
    const body = await resp.text();
    throw new Error(`${resp.status} ${body}`);
  }
  const json: OperationCoreE[] = await resp.json();
  if (json.errors) {
    throw new Error(json.errors.map((e: Error) => e.message).join("\n"));
  }

  //24個に1個に絞って反転させることでいい感じにグラフで表示できるようにする
  const monthlyData: OperationCoreE[] = json.filter((e, i) => {
    return (i % 24 === 0);
  }).reverse();

  return {
    // 日付
    xList: monthlyData.map((e) => {
      const date = new Date(e.created_at);
      const month = date.getMonth() + 1;
      const day = date.getDate();
      return `${month}/${day}`;
    }),
    dataList: [
      //ユーザー数もエラー無く描画できるが、大きさが違いすぎて見た目崩れるので除外
      // {
      //   label: "ユーザー数",
      //   data: monthlyData.map((e) => e.user_total),
      //   borderColor: "rgb(255, 99, 132)",
      //   backgroundColor: "rgb(255, 99, 132)",
      // },
      {
        label: "diary",
        data: monthlyData.map((e) => e.diary_total),
        borderColor: "rgb(54, 162, 235)",
        backgroundColor: "rgb(54, 162, 235)",
      },
      {
        label: "statistic",
        data: monthlyData.map((e) => e.statistic_per_date_total),
        borderColor: "rgb(255, 206, 86)",
        backgroundColor: "rgb(255, 206, 86)",
      },
    ],
    option: {},
  };
}
