export interface lineChartT {
  xList: string[] | number[];
  dataList: lineChartDataListT[];
  options?: any; //これはライブラリの実装すぎるのでanyで許されたい
}

interface lineChartDataListT {
  label: string;
  data: number[];
  color: string;
}
