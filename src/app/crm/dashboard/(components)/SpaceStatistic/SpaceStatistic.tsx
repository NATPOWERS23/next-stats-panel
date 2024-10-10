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

	return (
		<Protect role={roleList[ROLE.admin]}>
			<h3 className="text-xl my-4">Space Weather</h3>
			<div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-4 h-full min-h-52">
				{isSpaceDataLoading ? (
					<>
						<SkeletonLoaderWrapper>
							<div className="grid grid-cols-3 gap-4 h-full">
								<SkeletonLoader />
								<SkeletonLoader />
								<SkeletonLoader />
							</div>
						</SkeletonLoaderWrapper>
					</>
				) : (
					<>
						<ClientOnly>
							<ChartStream
								chartData={GSTData}
								title="Geomagnetic Storm (GST)"
							/>
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
		</Protect>
	);
}

export default SpaceStatistic;
