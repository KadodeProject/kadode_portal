import { OperationCoreE } from "@🧩/kadodeApiT.ts";
import { lineChartT } from "@🧩/fresh_chartsT.ts";

const ENDPOINT = Deno.env.get("API_URL") +
  "/OperationCoreTransitionPerHours/relative/month";

export async function CreateMonthlyGraphData(): Promise<lineChartT> {
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
        color: "rgb(54, 162, 235)",
      },
      {
        label: "statistic",
        data: monthlyData.map((e) => e.statistic_per_date_total),
        color: "rgb(255, 206, 86)",
      },
    ],
    options: {
      animation: true,
      responsive: true,
      aspectRatio: 1,
      legend: {
        display: true,
        align: "end",
      },
      title: {
        display: false,
        //明らかに謎挙動するので廃止
        // text: "利用状況の推移",
      },
      scales: {
        xAxes: [
          {
            scaleLabel: {
              display: true,
              labelString: "day",
              fontColor: "black",
              fontSize: 16,
            },
            ticks: {
              stepSize: 1,
              fontColor: "black",
              fontSize: 14,
            },
          },
        ],
        yAxes: [
          {
            scaleLabel: {
              display: true,
              labelString: "count",
              fontColor: "black",
              fontSize: 16,
            },
            ticks: {
              stepSize: 5,
              fontColor: "black",
              fontSize: 14,
            },
          },
        ],
      },
    },
  };
}
