import { LineChart } from "$d3nodata";
// islandsではエイリアスが効かないので相対パスを入れている↓
import { BarChartT } from "../types/d3nodata.ts";
export default function D3nodataLineChart(chartData: BarChartT[]) {
  console.log(chartData.chartData);
  return <LineChart datasets={chartData.chartData} />;
}
