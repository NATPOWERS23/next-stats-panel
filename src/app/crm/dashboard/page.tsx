'use client';

import ClientOnly from '@/utils/ClientOnly';
import { ChartStream } from '@/components/Charts/ChartStream';
import { ChartDots } from '@/components/Charts/ChartDots';
import { ChartHistogram } from '@/components/Charts/ChartHistogram';
import { useSpaceDataApi } from '../../../hooks/useSpaceDataApi';
import { SkeletonLoader, SkeletonLoaderWrapper } from '@/components/Skeleton/Skeleton';
import styles from './dashboard.module.css';

export default function DashboardPage() {
  const { GSTData, FLRData, FLRClassData, isSpaceDataLoading } = useSpaceDataApi();

  return (
    <>
      <h1>Dashboard</h1>
      <div className="page-wrapper">
        <div className={styles.section}>
          <h3>Space Weather</h3>
          <div className={styles.charts}>
            {isSpaceDataLoading ? (
              <>
                <SkeletonLoaderWrapper>
                  <div style={{ display: 'flex', flexDirection: 'row', gap: '1rem' }}>
                    <SkeletonLoader width="33%" />
                    <SkeletonLoader width="33%" />
                    <SkeletonLoader width="33%" />
                  </div>
                </SkeletonLoaderWrapper>
              </>
            ) : (
              <>
                <ClientOnly>
                  <ChartStream chartData={GSTData} title="Geomagnetic Storm (GST)" />
                </ClientOnly>
                <ClientOnly>
                  <ChartDots chartData={FLRData} title="Solar Flare (FLR)" />
                </ClientOnly>
                <ClientOnly>
                  <ChartHistogram
                    chartData={FLRClassData}
                    title="Number of C, M and X-class of solar flares per month"
                  />
                </ClientOnly>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
