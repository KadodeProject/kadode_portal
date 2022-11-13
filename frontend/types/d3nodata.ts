/** listでなくlineで正しい(ライブラリの名前に追従) */
export interface lineChartT {
  label: string;
  color: string;
  data: d3nodataDataT[];
}

export interface d3nodataDataT {
  x: string;
  y: number;
}
