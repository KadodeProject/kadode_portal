import { BarChart } from "$d3nodata";
// islandsではエイリアスが効かないので相対パスを入れている↓
import { BarChartT } from "../types/d3nodata.ts";
export default function D3nodataBarChart(chartData: BarChartT[]) {
  console.log(chartData.chartData);
  return <BarChart datasets={chartData.chartData} />;
}
