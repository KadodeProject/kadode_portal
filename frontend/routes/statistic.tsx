// コア
import { Handlers, PageProps } from "$fresh/server.ts";
//型
import { lineChartT } from "@🧩/d3nodata.ts";
// みため
import Layout from "@🌟/BasicLayout.tsx";
//文字
import IndexHeadline from "@🗃/Text/IndexHeadline.tsx";

import D3nodataLineChart from "@🏝/D3nodataLineChart.tsx";
import { CreateOperationCoreChartDataToD3nodata } from "@💿/OperationCoreTransition/CreateOperationCoreChartDataToD3nodata.ts";

type forIndexData = {
  diaryStatisticMonthlyData: lineChartT[];
};

export const handler: Handlers<forIndexData> = {
  async GET(_req, ctx) {
    const diaryStatisticMonthlyData =
      await CreateOperationCoreChartDataToD3nodata<lineChartT[]>();
    return ctx.render({
      diaryStatisticMonthlyData: diaryStatisticMonthlyData,
    });
  },
};

export default function Home({ data }: PageProps<forIndexData>) {
  return (
    <Layout title="統計">
      <IndexHeadline title="📈利用状況の推移" />
      <div class="graphSection">
        <D3nodataLineChart chartData={data.diaryStatisticMonthlyData} />
      </div>
    </Layout>
  );
}
