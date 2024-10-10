import Image from "next/image";
import chartImage from "@public/assets/images/update-chart.png";
import Avatar from "@/components/Avatar/Avatar";
import Button from "@/components/Button/Button";
import Icon from "@/components/Icon/Icon";

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
		<div className={"card w-full p-4 pt-2 rounded-2large shadow-lg bg-blue"}>
			<div className="card-body">
				<div className="header flex w-full justify-between">
					<Avatar sizes={32} />
					<div className="header-actions">
						{user.actions?.map((action) => (
							<Button content={<Icon name={action.name} />} key={action.name} />
						))}
					</div>
				</div>
				<div className="main my-3">
					<div className="main-text font-black text-xl">
						Hello, {user.name} here`s an update on your channel.
					</div>
					<div className="main-chart" style={{ color: "red" }}>
						<Image src={chartImage} alt="update chart" />
					</div>
				</div>
				<div className="footer">
					<div className="footer-text">
						This month has the highest deals of the year
					</div>
					<div className="flex gap-2">
						<div className="footer-numbers font-black">${user.totalAmount}</div>
						<div className="footer-subtext font-thin text-xs w-40">
							which is ${user.diff} more than last month
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
