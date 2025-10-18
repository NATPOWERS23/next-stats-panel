import dayjs from '@/utils/dayjs';

import { useEffect, useState } from 'react';

import { getFLRData, getGSTData } from '../services/charts/charts-service';
import type {
  FLRData,
  GSTData,
  StreamFLRClassData,
  StreamFLRData,
  StreamGSTData,
} from '../types/charts-interfaces';
import { formatGST, formatFLR, formatFLRClass } from '../utils/chartApiDataFormatter';

export function useSpaceDataApi(): {
  GSTData: StreamGSTData[];
  FLRData: StreamFLRData[];
  FLRClassData: StreamFLRClassData;
  isSpaceDataLoading: boolean;
} {
  const [isSpaceDataLoading, setIsSpaceDataLoading] = useState(false);
  const [GSTData, setGSTData] = useState<StreamGSTData[]>([]);
  const [FLRData, setFLRData] = useState<StreamFLRData[]>([]);
  const [FLRClassData, setFLRClassData] = useState<StreamFLRClassData>({});

  useEffect(() => {
    setIsSpaceDataLoading(true);

    const endDate = dayjs().format('YYYY-MM-DD');
    const startDate = dayjs().subtract(1, 'months').format('YYYY-MM-DD');
    const startFLRDate = dayjs().subtract(1, 'years').add(1, 'months').startOf('month').format('YYYY-MM-DD');

    getGSTData(startDate, endDate).then((data: GSTData[]) => {
      if (!data.length) return;
      setGSTData(formatGST(data));
    });

    getFLRData(startFLRDate, endDate).then((data: FLRData[]) => {
      if (!data.length) return;

      const lastMonthFLRData = data.filter((item) => dayjs(item.peakTime).isSame(dayjs(), 'month'));

      setFLRData(formatFLR(lastMonthFLRData));
      setFLRClassData(formatFLRClass(data));
      setIsSpaceDataLoading(false);
    });
  }, []);

  return { GSTData, FLRData, FLRClassData, isSpaceDataLoading };
}
