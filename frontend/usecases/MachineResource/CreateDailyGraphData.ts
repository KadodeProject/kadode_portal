import { MachineResourceE } from "@🧩/kadodeApiT.ts";
import { lineChartT } from "@🧩/fresh_chartsT.ts";

const ENDPOINT = Deno.env.get("API_URL") +
  "/MachineResource/relative/day";

export async function CreateDailyGraphData(): Promise<lineChartT> {
  const resp = await fetch(ENDPOINT, {
    method: "GET",
  });
  if (!resp.ok) {
    const body = await resp.text();
    throw new Error(`${resp.status} ${body}`);
  }
  const jsonData: MachineResourceE[] = await resp.json();
  if (jsonData.errors) {
    throw new Error(jsonData.errors.map((e: Error) => e.message).join("\n"));
  }

  const monthlyData: MachineResourceE[] = jsonData.reverse();

  return {
    // 日付
    xList: monthlyData.map((e) => {
      const date = new Date(e.created_at);
      const hour = date.getHours();
      const minute = (date.getMinutes() < 10 ? "0" : "") + date.getMinutes(); //10分未満が一桁になるの防止
      return `${hour}:${minute}`;
    }),
    dataList: [
      {
        label: "cpu",
        data: monthlyData.map((e) => e.cpu),
        color: "rgb(255, 100, 33)",
      },
      {
        label: "memory",
        data: monthlyData.map((e) => e.memory),
        color: "rgb(255, 206, 86)",
      },
      {
        label: "disk",
        data: monthlyData.map((e) => e.disk),
        color: "rgb(86, 255, 246)",
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
              labelString: "percent",
              fontColor: "black",
              fontSize: 16,
            },
            ticks: {
              min: 0,
              max: 100,
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
