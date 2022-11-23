import { OperationCoreE } from "@🧩/kadodeApiT.ts";
import { d3nodataDataT, lineChartT } from "@🧩/d3nodata.ts";

const ENDPOINT = Deno.env.get("API_URL") +
  "/OperationCoreTransitionPerHours/relative/month";

export async function CreateOperationCoreChartDataToD3nodata(): Promise<
  lineChartT[]
> {
  const resp = await fetch(ENDPOINT, {
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

  const monthlyData: OperationCoreE[] = jsonData.reverse();

  /* @todo 2回日付を作ってて無駄が多いので省きたい */
  const diaryList: d3nodataDataT[] = monthlyData.map((e) => {
    const date = new Date(e.created_at);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    return { y: e.diary_total, x: `${year}/${month}/${day}` };
  });
  const statisticList: d3nodataDataT[] = monthlyData.map((e) => {
    const date = new Date(e.created_at);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    return { y: e.statistic_per_date_total, x: `${year}/${month}/${day}` };
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
