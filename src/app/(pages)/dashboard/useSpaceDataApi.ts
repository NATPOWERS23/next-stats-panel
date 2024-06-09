import moment from 'moment';

import { useEffect, useState } from 'react';

import { getFLRData, getGSTData } from './charts-service';
import { FLRData, GSTData, StreamFLRClassData, StreamFLRData, StreamGSTData } from './charts-interfaces';
import { formatGST, formatFLR, formatFLRClass } from './apiDataFormatter';

export function useSpaceDataApi(): {
  GSTData: StreamGSTData[];
  FLRData: StreamFLRData[];
  FLRClassData: StreamFLRClassData;
} {
  const [GSTData, setGSTData] = useState<StreamGSTData[]>([]);
  const [FLRData, setFLRData] = useState<StreamFLRData[]>([]);
  const [FLRClassData, setFLRClassData] = useState<StreamFLRClassData>({});

  useEffect(() => {
    const endDate = moment().format('yyyy-MM-DD');
    const startDate = moment().subtract(1, 'months').format('yyyy-MM-DD');
    const startFLRDate = moment().subtract(1, 'years').add(1, 'months').startOf('month').format('yyyy-MM-DD');

    getGSTData(startDate, endDate).then((data: GSTData[]) => setGSTData(formatGST(data)));
    getFLRData(startFLRDate, endDate).then((data: FLRData[]) => {
      const lastMonthFLRData = data.filter((item) => moment(item.peakTime).isSame(moment(), 'months'));

      setFLRData(formatFLR(lastMonthFLRData));
      setFLRClassData(formatFLRClass(data));
    });
  }, []);

  return { GSTData, FLRData, FLRClassData };
}
