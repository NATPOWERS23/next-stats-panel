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
				<div className="card-body">
					<div className="card">
						<div className="card-title">Donatello</div>
						<div className="card-body">
							<CustomList
								items={[{ name: 1000 }, { name: 500 }, { name: 2000 }]}
							/>
						</div>
					</div>
					<div className="card">
						<div className="card-title">Patreon</div>
						<div className="card-body" />
					</div>
					<div className="card">
						<div className="card-title">Youtube</div>
						<div className="card-body" />
					</div>
					<div className="card">
						<div className="card-title">Twich</div>
						<div className="card-body" />
					</div>
				</div>
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
			<div className={styles.top}>
				<InfoBox title="Income" numbers={100000} description={""} />
				<InfoBox title="Outcome" numbers={1000} description={""} />
			</div>
			<div className={styles.middle}>
				<Card title="Income from Integrations" body={cardBodies.first} />
				<Card title="Donats from Subscribers" body={cardBodies.second} />
				<Card title="Spends History" body={cardBodies.third} />
			</div>
			<div className={styles.bottom}>
				<Card title="Spends History" body={cardBodies.progressBar} />
			</div>
		</>
	);

	return (
		<>
			<Protect
				role={roleList[ROLE.channel_owner]}
				fallback={ERRORS.NO_ACCESS_CRM}
			>
				<PageWrapper content={pageContent} />
			</Protect>
		</>
	);
}
