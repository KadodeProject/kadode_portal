import { KadodeDiaryDailyChange, OperationCoreE } from "@🧩/kadodeApiT.ts";
const DAY_ENDPOINT = Deno.env.get("API_URL") +
  "/OperationCoreTransitionPerHours/relative/day";

export type getDailyT = {
  all: OperationCoreE[];
  total: OperationCoreE;
  last1Day: KadodeDiaryDailyChange;
};
export async function GetDailyChange(): Promise<getDailyT> {
  const resp = await fetch(DAY_ENDPOINT, {
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
  const firstDay: OperationCoreE = json[0];
  //jsonの最初と最初の値を比較することで1日の増加を得る
  const DailyChange: KadodeDiaryDailyChange = {
    user_change: json[0].user_total - json[json.length - 1].user_total,
    diary_change: json[0].diary_total - json[json.length - 1].diary_total,
    statistic_per_date_change: json[0].statistic_per_date_total -
      json[json.length - 1].statistic_per_date_total,
  };

  return {
    all: json,
    total: firstDay,
    last1Day: DailyChange,
  };
}
