import moment from "moment";
import groupBy from "lodash/groupBy";

import type { FLRData, GSTData, StreamFLRClassData, StreamFLRData } from "../types/charts-interfaces";

export const generateDatesOfCurrentMonth = () => {
  const startDate = moment().subtract(1, "month");
  const endDate = moment().endOf("month");

  const dates = [];
  for (let i = 1; i < endDate.date() + 1; i++) {
    dates.push(moment().month(startDate.month())?.add(1, "months")?.date(i));
  }
  return dates;
};

export const formatGST = (gstData: GSTData[]) => {
  const gstDataSet = new Map();

  for (const gstEntry of gstData) {
    gstDataSet.set(moment(gstEntry.startTime)?.add(1, "months")?.format("MM-DD"), gstEntry.allKpIndex[0].kpIndex);
  }

  const chartDates = generateDatesOfCurrentMonth();

  return chartDates.map((date) => ({
    x: date.format("MM-DD"),
    y: gstDataSet.has(date.format("MM-DD")) ? gstDataSet.get(date.format("MM-DD")) : 0,
  }));
};

export const formatFLR = (flrData: FLRData[]): StreamFLRData[] => {
  const flrDataSet = new Map();

  for (const flrEntry of flrData) {
    const flrDate = moment(flrEntry.beginTime).format("MM-DD");
    flrDataSet.has(flrDate)
      ? flrDataSet.set(flrDate, [...flrDataSet.get(flrDate), flrEntry])
      : flrDataSet.set(flrDate, [{ ...flrEntry }]);
  }

  const chartDates = generateDatesOfCurrentMonth();

  return chartDates.map((date) => {
    const currentFLRObj = flrDataSet.has(date.format("MM-DD")) ? flrDataSet.get(date.format("MM-DD"))[0] : {};
    return {
      x: date.format("MM-DD"),
      y: currentFLRObj.peakTime ? moment.utc(currentFLRObj.peakTime).format("HH") : 0,
      class: currentFLRObj.classType || "",
      amount: Math.round(moment.utc(currentFLRObj.endTime).diff(moment.utc(currentFLRObj.beginTime), "minutes")),
    };
  });
};

export const formatFLRClass = (flrData: FLRData[]): StreamFLRClassData => {
  const currentData = flrData.map((entry) => {
    return { day: moment.utc(entry.beginTime).toDate(), classType: entry.classType[0] };
  });
  const groupedData = groupBy(currentData, ({ classType }: { classType: string }) => classType);

  return groupedData as StreamFLRClassData;
};

export const timeLabels = [
  "00",
  "01",
  "02",
  "03",
  "04",
  "05",
  "06",
  "07",
  "08",
  "09",
  "10",
  "11",
  "12",
  "13",
  "14",
  "15",
  "16",
  "17",
  "18",
  "19",
  "20",
  "21",
  "22",
  "23",
];
