import PageTitle from "@/components/PageTitle/PageTitle";
import SpaceStatistic from "./(components)/SpaceStatistic/SpaceStatistic";
import PageWrapper from "@/components/PageWrapper/PageWrapper";
import CUpdate from "./(components)/CUpdate/CUpdate";
import Subscribers from "./(components)/Subscribers/Subscribers";
import ManagerRating from "@/features/crm/ManagerRating/ManagerRating";

export default function DashboardPage() {
	const pageContent = (
		<>
			<PageTitle title="Dashboard" />
			<div className="grid grid-cols-[repeat(auto-fill,minmax(240px,2fr))] sm:grid-cols-[repeat(auto-fill,minmax(480px,2fr))] gap-4">
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
				<div>
					<ManagerRating
						data={{
							rating: [
								{
									name: "Alex Martinez",
									dealsAmount: 27,
									profit: "206,783.70",
									avatarSrc: null,
								},
								{
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
				</div>
				<SpaceStatistic />
			</div>
		</>
	);

	return <PageWrapper content={pageContent} />;
}
