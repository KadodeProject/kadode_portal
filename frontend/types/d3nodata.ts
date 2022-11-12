export interface LineChartT {
  label: string;
  color: string;
  data: d3nodataDataT[];
}

export interface d3nodataDataT {
  x: string;
  y: number;
}
