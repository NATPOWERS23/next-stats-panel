'use client';

import styles from './dashboard.module.css';
import ClientOnly from '../shared/components/ClientOnly';
import { ChartStream } from '../shared/components/Charts/ChartStream';
import { ChartDots } from '../shared/components/Charts/ChartDots';
import { ChartHistogram } from '../shared/components/Charts/ChartHistogram';
import { useSpaceDataApi } from './useSpaceDataApi';

export default function DashboardPage() {
  const { GSTData, FLRData, FLRClassData } = useSpaceDataApi();

  return (
    <>
      <h1>Dashboard</h1>
      <div className="page-wrapper">
        <div className={styles.section}>
          <h3>Space Weather</h3>
          <div className={styles.charts}>
            <ClientOnly>
              <ChartStream chartData={GSTData} title="Geomagnetic Storm (GST)" />
            </ClientOnly>
            <ClientOnly>
              <ChartDots chartData={FLRData} title="Solar Flare (FLR)" />
            </ClientOnly>
            <ClientOnly>
              <ChartHistogram chartData={FLRClassData} title="Number of C, M and X-class of solar flares per month" />
            </ClientOnly>
          </div>
        </div>
      </div>
    </>
  );
}
