import { OperationCoreE } from "@🧩/kadodeApiT.ts";
import { BarChartT,d3nodataDataT } from "@🧩/d3nodata.ts";

const MONTH_ENDPOINT = Deno.env.get("API_URL") +
  "/OperationCoreTransitionPerHours/relative/month";

export async function CreateOperationCoreChartDataToD3nodata(): Promise<
  BarChartT[]
> {
  const resp = await fetch(MONTH_ENDPOINT, {
    method: "GET",
  });
  if (!resp.ok) {
    const body = await resp.text();
    throw new Error(`${resp.status} ${body}`);
  }
  const jsonData: OperationCoreE[] = await resp.json();
  if (jsonData.errors) {
    throw new Error(jsonData.errors.map((e: Error) => e.message).join("\n"));
  }

  //24個に1個に絞って反転させることでいい感じにグラフで表示できるようにする
  const monthlyData: OperationCoreE[] = jsonData.filter((e, i) => {
    return (i % 24 === 0);
  }).reverse();

  /* @todo 2回日付を作ってて無駄が多いので省きたい */
  const diaryList: d3nodataDataT[] = monthlyData.map((e) => {
    const date = new Date(e.created_at);
    const month = date.getMonth() + 1;
    const day = date.getDate();
    return {x:e.diary_total,y:`${month}/${day}`};
  });
  const statisticList: d3nodataDataT[] = monthlyData.map((e) => {
    const date = new Date(e.created_at);
    const month = date.getMonth() + 1;
    const day = date.getDate();
    return {x:e.statistic_per_date_total,y:`${month}/${day}`};
  });
  return [
    {
      label: "statistic",
      color: "rgb(255, 206, 86)",
      data: statisticList,
    },
    {
      label: "diary",
      color: "rgb(54, 162, 235)",
      data: diaryList,
    },
  ];
}
