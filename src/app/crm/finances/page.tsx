"use client";

import { Protect } from "@clerk/nextjs";
import { roleList, ROLE } from "@/constants/roles";
import PageWrapper from "@/components/PageWrapper/PageWrapper";
import Card from "@/components/Card/Card";
import InfoBox from "@/components/InfoBox/InfoBox";
import PageTitle from "@/components/PageTitle/PageTitle";
import styles from "./finances.module.css";

export default function FinancesPage() {
	const cardBodies = {
		first: (
			<ul>
				<li>1000</li>
				<li>500</li>
				<li>2000</li>
			</ul>
		),
		second: (
			<>
				<div className="card-title">Donats from Subscribers</div>
				<div className="card-body">
					<div className="card">
						<div className="card-title">Donatello</div>
						<div className="card-body">
							<ul>
								<li>1000</li>
								<li>500</li>
								<li>2000</li>
							</ul>
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
			<ul>
				<li>1000</li>
				<li>500</li>
				<li>2000</li>
			</ul>
		),
		progressBar: (
			<div className="progressBarWrapper">
				<div className="progressBar">
					<span className="progressBarFill" />
				</div>
			</div>
		),
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
				fallback={<p>You do not have the permissions to access Finances.</p>}
			>
				<PageWrapper content={pageContent} />
			</Protect>
		</>
	);
}
