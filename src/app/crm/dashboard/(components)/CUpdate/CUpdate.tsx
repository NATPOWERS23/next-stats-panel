import Image from "next/image";
import chartImage from "@public/assets/images/update-chart.png";
import Avatar from "@/components/Avatar/Avatar";
import Button from "@/components/Button/Button";
import Icon from "@/components/Icon/Icon";
import { UpdateBar } from "@/components/Charts/UpdateBar";
import { nivoUpdateBarChartData } from "@/mocks/charts-mockdata";

export default function CUpdate({
	user = {
		name: "Kim",
		totalAmount: "66,557.98",
		diff: "14,400.11",
	},
}: {
	user: {
		name?: string;
		totalAmount?: string;
		diff?: string;
		actions?: { name: string }[];
	};
}) {
	return (
		<div className="card">
			<div className="card-body">
				<div className="header flex">
					<Avatar sizes={32} />
					<div className="header-actions">
						{user.actions?.map((action) => (
							<Button content={<Icon name={action.name} />} key={action.name} />
						))}
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
						<UpdateBar data={nivoUpdateBarChartData} />
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
