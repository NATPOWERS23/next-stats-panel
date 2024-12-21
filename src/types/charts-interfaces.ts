export interface StreamGSTData {
  x: string;
  y: number;
}

export interface StreamFLRData {
  x: string;
  y: string | number;
  class: string;
  amount: number;
}

export interface StreamFLRClassData {
  [key: string]: { day: Date; classType: string }[];
}

export interface ChartData {
  id: string;
  title: string;
  data: {
    quarter: number;
    earnings: number;
  }[];
}

export interface GSTData {
  gstID: string;
  startTime: string;
  allKpIndex: {
    observedTime: string;
    kpIndex: number;
    source: string;
  }[];
  linkedEvents: { activityID: string }[];
  link: string;
}

export interface FLRData {
  beginTime: string;
  peakTime: string;
  endTime: string;
  classType: string;
}
