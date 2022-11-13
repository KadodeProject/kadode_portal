import { Chart } from "$fresh_charts/mod.ts";
import { transparentize } from "$fresh_charts/utils.ts";
import { lineChartT } from "@🧩/fresh_chartsT.ts";

export default function LineChart({ graphData }: lineChartT) {
  const dataset = graphData.dataList.map((data, index) => ({
    label: data.label,
    data: data.data,
    borderColor: data.borderColor,
    backgroundColor: transparentize(data.backgroundColor, 0.5),
    borderWidth: 1,
  }));
  return (
    <div class="chartWrapper">
      <Chart
        type="line"
        options={{
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
            text: "利用状況の推移",
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
        }}
        data={{
          labels: graphData.xList,
          datasets: dataset,
        }}
      />
    </div>
  );
}
