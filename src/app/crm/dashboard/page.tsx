import PageTitle from "@/components/PageTitle/PageTitle";
import SpaceStatistic from "./(components)/SpaceStatistic/SpaceStatistic";
import PageWrapper from "@/components/PageWrapper/PageWrapper";
import CUpdate from "./(components)/CUpdate/CUpdate";
import Subscribers from "./(components)/Subscribers/Subscribers";
import ManagerRating from "@/features/crm/ManagerRating/ManagerRating";
import ProgressBar from "@/components/ProgressBar/ProgressBar";
import ProgressLineBox from "@/features/crm/ProgressLineBox/ProgressLineBox";

export default function DashboardPage() {
	const pageContent = (
		<>
			<PageTitle title="Dashboard" />
			<div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-4">
				<CUpdate
					user={{
						name: "Kim",
						totalAmount: "66,557.98",
						diff: "14,400.11",
					}}
				/>
				<Subscribers
					user={{
						totalAmount: "2,300,001",
						diff: "50k+",
					}}
				/>
				<ManagerRating
					data={{
						rating: [
							{
								id: 3,
								name: "Alex Martinez",
								dealsAmount: 27,
								profit: "206,783.70",
								avatarSrc: null,
							},
							{
								id: 4,
								name: "Emily Zhang",
								dealsAmount: 27,
								profit: "206,783.70",
								avatarSrc: null,
							},
						],
						totalAmount: "662,449.48",
						avarageRevenue: "7,443.25",
					}}
				/>
				<ProgressLineBox
					title="Sales target"
					totalAmount={33350000}
					progressValue={20000000}
					footerAmount={"$ 333,500,00"}
					footerText="that`s 12% from last month"
					color="#d3454b"
				/>
				<ProgressLineBox
					title="Sales target"
					totalAmount={71050000}
					progressValue={20000000}
					footerAmount={"$ 210,500,00"}
					footerText="that`s 12% from last month"
					color="#cb59d5"
				/>
				<ProgressLineBox
					title="Sales target"
					totalAmount={71050000}
					progressValue={40000000}
					footerAmount={"$ 710,500,00"}
					footerText="that`s 12% from last month"
					color="#baff68"
				/>
				<ProgressLineBox
					title="Sales target"
					totalAmount={71050000}
					progressValue={40000000}
					footerAmount={"$ 710,500,00"}
					footerText="that`s 12% from last month"
					color="#ec6816"
				/>
				<ManagerRating
					data={{
						rating: [
							{
								id: 1,
								name: "Alex Martinez",
								dealsAmount: 27,
								profit: "206,783.70",
								avatarSrc: null,
							},
							{
								id: 2,
								name: "Emily Zhang",
								dealsAmount: 27,
								profit: "206,783.70",
								avatarSrc: null,
							},
						],
						totalAmount: "662,449.48",
						avarageRevenue: "7,443.25",
					}}
				/>
				<Subscribers
					user={{
						totalAmount: "2,300,001",
						diff: "50k+",
					}}
				/>
				<ProgressLineBox
					title="Sales target"
					totalAmount={71050000}
					progressValue={40000000}
					footerAmount={"$ 710,500,00"}
					footerText="that`s 12% from last month"
					color="#cb59d5"
				/>
				<ProgressLineBox
					title="Sales target"
					totalAmount={71050000}
					progressValue={40000000}
					footerAmount={"$ 710,500,00"}
					footerText="that`s 12% from last month"
					color="#ec6816"
				/>
				<ProgressLineBox
					title="Sales target"
					totalAmount={71050000}
					progressValue={40000000}
					footerAmount={"$ 710,500,00"}
					footerText="that`s 12% from last month"
					color="#baff68"
				/>
				{/* <SpaceStatistic /> */}
			</div>
		</>
	);

	return <PageWrapper content={pageContent} />;
}
