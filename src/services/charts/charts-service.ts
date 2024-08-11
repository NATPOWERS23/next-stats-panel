import type { FLRData, GSTData } from '../../app/crm/dashboard/charts-interfaces';

const apiUrl = 'https://api.nasa.gov/DONKI/';

export const getGSTData = async (startDate: string, endDate: string) => {
  let result: GSTData[] = [];

  try {
    result = await fetch(`${apiUrl}GST?startDate=${startDate}&endDate=${endDate}&api_key=DEMO_KEY`)
      .then((res) => res.json())
      .then((data: GSTData[]) => data);
  } catch (error) {
    console.log('Error on getting space GST data:', error);
  }

  return result;
};

export const getFLRData = async (startDate: string, endDate: string) => {
  let result: FLRData[] = [];

  try {
    result = await fetch(`${apiUrl}FLR?startDate=${startDate}&endDate=${endDate}&api_key=DEMO_KEY`)
      .then((res) => res.json())
      .then((data: FLRData[]) => {
        return data;
      });
  } catch (error) {
    console.log('Error on getting space FLR data:', error);
  }

  return result;
};
