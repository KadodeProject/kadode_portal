export interface lineGraphT {
  xList: string[] | number[];
  dataList: lineGraphDataListT[];
  option?: graphOptionT;
}

interface lineGraphDataListT {
  label: string;
  data: number[];
  borderColor: string;
  backgroundColor: string;
}
interface graphOptionT {
  yMax?: number;
  yMin?: number;
}
