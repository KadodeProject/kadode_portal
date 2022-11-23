import { MachineResourceE } from "@🧩/kadodeApiT.ts";

const ENDPOINT = Deno.env.get("API_URL") +
  "/MachineResource/relative/1min";

export async function GetLatestData(): Promise<MachineResourceE> {
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

  //popで一番うしろ取得(arrayじゃないとpopできないので、objectをarrayに変換してからpop)
  const latestDatas = Object.entries(jsonData["vp1"]).pop();
  /**
   * [unixtime, {cpu: 0.1, memory: 0.2, disk: 0.3}]みたいに入っているので、配列アクセス[1]で取得
   */
  const latestData: MachineResourceE = latestDatas[1];

  return {
    machine: "vp1",
    cpu: latestData.cpu,
    memory: latestData.memory,
    disk: latestData.disk,
  };
}
