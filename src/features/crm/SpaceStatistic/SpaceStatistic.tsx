"use client";

import ClientOnly from "@/utils/ClientOnly";
import { ChartStream } from "@/components/Charts/ChartStream";
import { ChartDots } from "@/components/Charts/ChartDots";
import { ChartHistogram } from "@/components/Charts/ChartHistogram";
import { useSpaceDataApi } from "@/hooks/useSpaceDataApi";
import {
  SkeletonLoader,
  SkeletonLoaderWrapper,
} from "@/components/Skeleton/Skeleton";
import { Protect } from "@clerk/nextjs";
import { roleList, ROLE } from "@/constants/roles";

function SpaceStatistic() {
  const { GSTData, FLRData, FLRClassData, isSpaceDataLoading } =
    useSpaceDataApi();

  const chartWrapper = (chart: JSX.Element) => {
    return isSpaceDataLoading ? (
      <SkeletonLoaderWrapper>
        <SkeletonLoader />
      </SkeletonLoaderWrapper>
    ) : (
      <ClientOnly>{chart}</ClientOnly>
    );
  };

  return (
    <Protect role={roleList[ROLE.admin]}>
      <div>
        <h3>Space Weather</h3>
        <div>
          {chartWrapper(
            <ChartStream chartData={GSTData} title="Geomagnetic Storm (GST)" />,
          )}
          {chartWrapper(
            <ChartDots chartData={FLRData} title="Solar Flare (FLR)" />,
          )}
          {chartWrapper(
            <ChartHistogram
              chartData={FLRClassData}
              title="Number of C, M and X-class of solar flares per month"
            />,
          )}
        </div>
      </div>
    </Protect>
  );
}

export default SpaceStatistic;
