import PageTitle from "@/components/PageTitle/PageTitle";
import SpaceStatistic from "./(components)/SpaceStatistic/SpaceStatistic";
import PageWrapper from "@/components/PageWrapper/PageWrapper";
import CUpdate from "./(components)/CUpdate/CUpdate";

export default function DashboardPage() {
	const pageContent = (
		<>
			<PageTitle title="Dashboard" />
			<div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
				<CUpdate
					user={{
						name: "Kim",
						totalAmount: "66,557.98",
						diff: "14,400.11",
					}}
				/>
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
