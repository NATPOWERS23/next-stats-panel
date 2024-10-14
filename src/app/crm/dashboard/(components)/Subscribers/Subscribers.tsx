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
		<div className="card">
			<div className="card-body">
				<div className="header flex">
					<div className="header-actions">
						<Button content={<Icon name="share" />} onClick={openShareModal} />
					</div>
				</div>
				<div className="main">
					<div className="main-text">Avarage subscribers per day</div>
					<div
						className="main-chart"
						style={{ display: "block", height: "400px", width: "860px" }}
					>
						<UpdateBar
							data={nivoSubsBarChartData}
							keys={["subscribes", "unsubscribes"]}
							patternMatchId="unsubscribes"
							indexBy="day"
							minValue={-110}
						/>
					</div>
				</div>
				<div className="footer">
					<div className="flex">
						<div className="footer-numbers">${user.totalAmount}</div>
						<div className="footer-subtext">
							${user.diff} less than last month
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
