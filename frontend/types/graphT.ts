export interface LineGraphT {
  xList: string[] | number[];
  dataList: LineGraphDataListT[];
  option?: GraphOptionT;
}

interface LineGraphDataListT {
  label: string;
  data: number[];
  borderColor: string;
  backgroundColor: string;
}
interface GraphOptionT {
  yMax?: number;
  yMin?: number;
}
