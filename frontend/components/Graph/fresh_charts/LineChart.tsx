import { Chart } from "$fresh_charts/mod.ts";
import { transparentize } from "$fresh_charts/utils.ts";
import { lineChartT } from "@🧩/fresh_chartsT.ts";

export default function LineChart({ graphData }: lineChartT) {
  const dataset = graphData.dataList.map((data, index) => ({
    label: data.label,
    data: data.data,
    borderColor: data.color,
    backgroundColor: transparentize(data.color, 0.5),
    borderWidth: 1,
  }));
  return (
    <div class="chartWrapper">
      <Chart
        type="line"
        options={graphData.options}
        data={{
          labels: graphData.xList,
          datasets: dataset,
        }}
      />
    </div>
  );
}
