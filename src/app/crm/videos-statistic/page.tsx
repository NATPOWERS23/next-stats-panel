import Card from "@/components/Card/Card";
import InfoBox from "@/components/InfoBox/InfoBox";
import PageTitle from "@/components/PageTitle/PageTitle";
import PageWrapper from "@/components/PageWrapper/PageWrapper";

export default function VideosStatistic() {
	const statCards = [
		{ id: "1", title: "Stream Duration", numbers: 120001, diff: 100 },
		{ id: "2", title: "Avarage Viewers", numbers: 120001, diff: 100 },
		{ id: "3", title: "Max Viewers", numbers: 120001, diff: 100 },
		{ id: "4", title: "Unique Viewers", numbers: 120001, diff: 100 },
		{ id: "5", title: "Unique Chatters", numbers: 120001, diff: 100 },
		{ id: "6", title: "Live Views", numbers: 120001, diff: 100 },
		{ id: "7", title: "Followers", numbers: 120001, diff: 100 },
		{ id: "8", title: "New subscribers", numbers: 120001, diff: 100 },
	];

	const description = " from last stream";

	const cardBody = <>Patch Notes Episode 13: November 2024</>;

	const pageContent = (
		<>
			<PageTitle title="Videos Statistic" />

			<Card title="Top Clip of the Channel" body={cardBody} />

			<div className="grid-wrapper mt-4">
				{statCards.map((card) => (
					<InfoBox
						key={card.id}
						title={card.title}
						numbers={card.numbers}
						description={String(card.diff) + description}
					/>
				))}
			</div>
		</>
	);

	return <PageWrapper content={pageContent} />;
}
