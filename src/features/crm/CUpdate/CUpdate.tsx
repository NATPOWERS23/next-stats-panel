"use client";

import Button from "@/components/Button/Button";
import Icon from "@/components/Icon/Icon";
import { UpdateBar } from "@/components/Charts/UpdateBar";
import { nivoUpdateBarChartData } from "@/mocks/charts-mockdata";

export default function CUpdate({
	user,
}: {
	user: {
		name?: string;
		totalAmount?: string;
		diff?: string;
	};
}) {
	const openShareModal = () => {
		console.log("Share modal opened");
	};

	const chartKeys = [
		"hot dog",
		"burger",
		"sandwich",
		"kebab",
		"fries",
		"donut",
	];

	return (
		<div className="card">
			<div className="card-body">
				<div className="header flex">
					<div className="header-actions">
						<Button content={<Icon name="share" />} onClick={openShareModal} />
					</div>
				</div>
				<div className="main">
					<div className="main-text">
						Hello, {user.name} here`s an update on your channel.
					</div>
					<div
						className="main-chart"
						style={{ display: "block", height: "400px", width: "860px" }}
					>
						<UpdateBar
							data={nivoUpdateBarChartData}
							keys={chartKeys}
							patternMatchId="donut"
							indexBy="month"
							monthsAbrr={true}
							colors={[]}
						/>
					</div>
				</div>
				<div className="footer">
					<div className="footer-text">
						This month has the highest deals of the year
					</div>
					<div className="flex">
						<div className="footer-numbers">${user.totalAmount}</div>
						<div className="footer-subtext">
							which is ${user.diff} more than last month
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
