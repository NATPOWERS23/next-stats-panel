import PageTitle from "@/components/PageTitle/PageTitle";
import SpaceStatistic from "./(components)/SpaceStatistic/SpaceStatistic";
import PageWrapper from "@/components/PageWrapper/PageWrapper";
import CUpdate from "./(components)/CUpdate/CUpdate";
import Subscribers from "./(components)/Subscribers/Subscribers";

export default function DashboardPage() {
	const pageContent = (
		<>
			<PageTitle title="Dashboard" />
			<div className="grid grid-cols-[repeat(auto-fill,minmax(240px,2fr))] sm:grid-cols-[repeat(auto-fill,minmax(480px,2fr))]  gap-4">
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
				<SpaceStatistic />
			</div>
		</>
	);

	return <PageWrapper content={pageContent} />;
}
