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
import styles from "./SpaceStatistic.module.css";
import { Protect } from "@clerk/nextjs";
import { roleList, ROLE } from "@/constants/roles";

function SpaceStatistic() {
	const { GSTData, FLRData, FLRClassData, isSpaceDataLoading } =
		useSpaceDataApi();

	return (
		<Protect role={roleList[ROLE.admin]}>
			<div className={styles.section}>
				<h3>Space Weather</h3>
				<div className={styles.charts}>
					{isSpaceDataLoading ? (
						<>
							<SkeletonLoaderWrapper>
								<div
									style={{
										display: "grid",
										gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
										gap: "1rem",
									}}
								>
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
			</div>
		</Protect>
	);
}

export default SpaceStatistic;
