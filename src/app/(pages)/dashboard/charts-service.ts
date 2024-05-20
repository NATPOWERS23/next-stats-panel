import { FLRData, GSTData } from './charts-interfaces';

const apiUrl = 'https://api.nasa.gov/DONKI/';

export const getGSTData = async (startDate: string, endDate: string) => {
  const result: GSTData[] = await fetch(`${apiUrl}GST?startDate=${startDate}&endDate=${endDate}&api_key=DEMO_KEY`)
    .then((res) => res.json())
    .then((data: GSTData[]) => data);

  return result;
};

export const getFLRData = async (startDate: string, endDate: string) => {
  const result: FLRData[] = await fetch(`${apiUrl}FLR?startDate=${startDate}&endDate=${endDate}&api_key=DEMO_KEY`)
    .then((res) => res.json())
    .then((data: FLRData[]) => {
      return data;
    });

  return result;
};
