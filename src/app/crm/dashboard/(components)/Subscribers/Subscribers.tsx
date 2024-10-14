"use client";

import Button from "@/components/Button/Button";
import Icon from "@/components/Icon/Icon";
import { UpdateBar } from "@/components/Charts/UpdateBar";
import { nivoSubsBarChartData } from "@/mocks/charts-mockdata";

export default function Subscribers({
	user,
}: {
	user: {
		totalAmount?: string;
		diff?: string;
	};
}) {
	const openShareModal = () => {
		console.log("Share modal opened");
	};

	return (
		<div className="card w-full p-4 pt-2 rounded-2large shadow-lg bg-grey flex flex-col">
			<div className="card-body">
				<div className="header flex w-full justify-end">
					<div className="header-actions">
						<Button
							content={<Icon name="share" />}
							onClick={openShareModal}
							size="small"
							buttonType="outlined"
						/>
					</div>
				</div>
				<div className="main my-3 flex flex-col items-center justify-center">
					<div className="main-text font-black text-sm sm:text-xl w-full">
						Avarage subscribers per day
					</div>
					<div className="main-chart w-[240px] h-[120px] sm:w-[400px] sm:h-[230px] lg:w-[480px] lg:h-[260px] text-[6px] sm:text-[14px] lg:text-[16px]">
						<UpdateBar
							data={nivoSubsBarChartData}
							keys={["subscribes", "unsubscribes"]}
							patternMatchId="unsubscribes"
							indexBy="day"
							minValue={-110}
							colors={[]}
						/>
					</div>
				</div>
				<div className="footer">
					<div className="flex gap-2">
						<div className="footer-numbers font-black text-sm sm:text-xl">
							${user.totalAmount}
						</div>
						<div className="footer-subtext font-thin text-xs sm:text-sm w-40">
							${user.diff} less than last month
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
