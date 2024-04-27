'use client';

import styles from './dashboard.module.css';
import ClientOnly from '../shared/components/ClientOnly';
import { ChartStream } from '../shared/components/ChartStream';
import { ChartDots } from '../shared/components/ChartDots';
import { ChartHistogram } from '../shared/components/ChartHistogram';
import { useSpaceDataApi } from './useSpaceDataApi';

export default function DashboardPage() {
  const { GSTData, FLRData, FLRClassData } = useSpaceDataApi();

  return (
    <>
      <h1>Dashboard</h1>
      <section>
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
      </section>
    </>
  );
}
