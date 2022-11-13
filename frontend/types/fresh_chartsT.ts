export interface lineChartT {
  xList: string[] | number[];
  dataList: lineChartDataListT[];
  option?: graphOptionT;
}

interface lineChartDataListT {
  label: string;
  data: number[];
  borderColor: string;
  backgroundColor: string;
}
interface graphOptionT {
  yMax?: number;
  yMin?: number;
}
