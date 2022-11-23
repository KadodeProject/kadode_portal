export interface OperationCoreE {
  id?: number;
  user_total: number;
  diary_total: number;
  statistic_per_date_total: number;
}

export interface MachineResourceE {
  id?: number;
  machine: string;
  cpu: number;
  memory: number;
  disk: number;
}

export interface KadodeDiaryDailyChange {
  user_change: number;
  diary_change: number;
  statistic_per_date_change: number;
}
