import PageTitle from "@/components/PageTitle/PageTitle";
import SpaceStatistic from "./(components)/SpaceStatistic/SpaceStatistic";
import PageWrapper from "@/components/PageWrapper/PageWrapper";
import CUpdate from "./(components)/CUpdate/CUpdate";

export default function DashboardPage() {
	const pageContent = (
		<>
			<PageTitle title="Dashboard" />
			<div>
				<CUpdate />
				<SpaceStatistic />
			</div>
		</>
	);

	return (
		<>
			<PageWrapper content={pageContent} />
		</>
	);
}
