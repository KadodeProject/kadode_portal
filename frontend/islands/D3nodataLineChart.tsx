import { LineChart } from "$d3nodata";
// islandsではエイリアスが効かないので相対パスを入れている↓
import { BarChartT } from "../types/d3nodata.ts";

/**
 * 注意
 * - xとyの値が逆でも入る
 * - xはDate型またはそれに準じる形でないと壊れる(日本語とか入ると範囲外に点が飛ばされる)
 * - xはy/m/d入れると自動で 週+日　または 月+日　になる(勝手に調整されるのでこちらで制御出来ないが、月が変わるデータがあると自動で後者になる)
 * - yの値は整数値だが、微妙に値がずれた結果が出力される
 */
export default function D3nodataLineChart(chartData: BarChartT[]) {
  return <LineChart datasets={chartData.chartData} />;
}
