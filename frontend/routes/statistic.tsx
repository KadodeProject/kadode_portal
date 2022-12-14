// ใณใข
import { Handlers, PageProps } from "$fresh/server.ts";
//ๅ
import { lineChartT } from "@๐งฉ/d3nodata.ts";
// ใฟใใ
import Layout from "@๐/BasicLayout.tsx";
//ๆๅญ
import IndexHeadline from "@๐/Text/IndexHeadline.tsx";

import D3nodataLineChart from "@๐/D3nodataLineChart.tsx";
import { CreateOperationCoreChartDataToD3nodata } from "@๐ฟ/OperationCoreTransition/CreateOperationCoreChartDataToD3nodata.ts";

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
    <Layout title="็ตฑ่จ">
      <IndexHeadline title="๐ๅฉ็จ็ถๆณใฎๆจ็งป" />
      <div class="graphSection">
        <D3nodataLineChart chartData={data.diaryStatisticMonthlyData} />
      </div>
    </Layout>
  );
}
