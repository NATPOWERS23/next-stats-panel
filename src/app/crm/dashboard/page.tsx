import PageTitle from "@/components/PageTitle/PageTitle";
import SpaceStatistic from "./(components)/SpaceStatistic/SpaceStatistic";

export default function DashboardPage() {
	return (
		<>
			<div className="page-wrapper">
				<PageTitle title="Dashboard" />
				<SpaceStatistic />
			</div>
		</>
	);
}
