import { Protect } from "@clerk/nextjs";
import { roleList, ROLE } from "@/constants/roles";
import { ERRORS } from "@/constants/errors";
import Card from "@/components/Card/Card";
import InfoBox from "@/components/InfoBox/InfoBox";
import PageTitle from "@/components/PageTitle/PageTitle";
import CustomList from "@/components/CustomList/CustomList";
import PageWrapper from "@/components/PageWrapper/PageWrapper";
import ProgressBar from "@/components/ProgressBar/ProgressBar";
import styles from "./finances.module.css";

export default function FinancesPage() {
	const cardBodies = {
		first: (
			<CustomList items={[{ name: 1000 }, { name: 500 }, { name: 2000 }]} />
		),
		second: (
			<>
				<Card
					title="Donatello"
					isInnerCard={true}
					body={
						<CustomList
							items={[{ name: 1000 }, { name: 500 }, { name: 2000 }]}
						/>
					}
				/>
				<Card title="Patreon" />
				<Card title="Youtube" />
				<Card title="Twich" />
			</>
		),
		third: (
			<CustomList items={[{ name: 1000 }, { name: 500 }, { name: 2000 }]} />
		),
		progressBar: <ProgressBar />,
	};

	const pageContent = (
		<>
			<PageTitle title="Finances" />
			<div className="flex justify-between w-full gap-4">
				<InfoBox title="Income" numbers={100000} description={""} />
				<InfoBox title="Outcome" numbers={1000} description={""} />
			</div>
			<div className="flex justify-between width-full gap-4 my-4">
				<Card title="Income from Integrations" body={cardBodies.first} />
				<Card title="Donats from Subscribers" body={cardBodies.second} />
				<Card title="Spends History" body={cardBodies.third} />
			</div>
			<div className="flex justify-between width-full gap-4">
				<Card title="Spends History" body={cardBodies.progressBar} />
			</div>
		</>
	);

	return (
		<>
			<Protect
				role={roleList[ROLE.channel_owner]}
				fallback={ERRORS.NO_ACCEESS_CRM}
			>
				<PageWrapper content={pageContent} />
			</Protect>
		</>
	);
}
