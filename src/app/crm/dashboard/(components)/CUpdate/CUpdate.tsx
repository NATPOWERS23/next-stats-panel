import Avatar from "@/components/Avatar/Avatar";
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
		actions?: { name: string }[];
	};
}) {
	return (
		<div
			className={
				"card w-full p-4 pt-2 rounded-2large shadow-lg bg-blue flex flex-col items-center justify-center"
			}
		>
			<div className="card-body">
				<div className="header flex w-full justify-between">
					<Avatar sizes={32} />
					<div className="header-actions">
						{user.actions?.map((action) => (
							<Button content={<Icon name={action.name} />} key={action.name} />
						))}
					</div>
				</div>
				<div className="main my-3 flex flex-col items-center justify-center">
					<div className="main-text font-black text-sm sm:text-xl">
						Hello, {user.name} here`s an update on your channel.
					</div>
					<div className="main-chart w-[180px] h-[120px] sm:w-[400px] sm:h-[230px] lg:w-[480px] lg:h-[260px] text-[6px] sm:text-[14px] lg:text-[16px]">
						<UpdateBar data={nivoUpdateBarChartData} />
					</div>
				</div>
				<div className="footer">
					<div className="footer-text text-xs sm:text-sm">
						This month has the highest deals of the year
					</div>
					<div className="flex gap-2">
						<div className="footer-numbers font-black text-xs sm:text-xl">
							${user.totalAmount}
						</div>
						<div className="footer-subtext font-thin text-xs w-40 ">
							which is ${user.diff} more than last month
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
