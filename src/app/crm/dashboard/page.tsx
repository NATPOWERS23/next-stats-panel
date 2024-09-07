import PageTitle from "@/components/PageTitle/PageTitle";
import SpaceStatistic from "./(components)/SpaceStatistic/SpaceStatistic";
import PageWrapper from "@/components/PageWrapper/PageWrapper";

export default function DashboardPage() {
	const pageContent = (
		<>
			<PageTitle title="Dashboard" />
			<SpaceStatistic />
		</>
	);

	return (
		<>
			<PageWrapper content={pageContent} />
		</>
	);
}
