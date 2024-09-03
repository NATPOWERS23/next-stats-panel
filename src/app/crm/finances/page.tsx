"use client";

import InfoBox from "@/components/InfoBox/InfoBox";
import styles from "./finances.module.css";
import { Protect } from "@clerk/nextjs";
import { roleList, ROLE } from "@/constants/roles";
import PageTitle from "@/components/PageTitle/PageTitle";

export default function FinancesPage() {
	return (
		<>
			<Protect
				role={roleList[ROLE.channel_owner]}
				fallback={<p>You do not have the permissions to access Finances.</p>}
			>
				<div className="page-wrapper">
					<PageTitle title="Finances" />
					<div className={styles.top}>
						<InfoBox title="Income" numbers={100000} description={""} />
						<InfoBox title="Outcome" numbers={1000} description={""} />
					</div>
					<div className={styles.middle}>
						<div className="card">
							<div className="card-title">Income from Integrations</div>
							<div className="card-body">
								<ul>
									<li>1000</li>
									<li>500</li>
									<li>2000</li>
								</ul>
							</div>
						</div>
						<div className="card">
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
						</div>
						<div className="card">
							<div className="card-title">Spends History</div>
							<div className="card-body">
								<ul>
									<li>1000</li>
									<li>500</li>
									<li>2000</li>
								</ul>
							</div>
						</div>
					</div>
					<div className={styles.bottom}>
						<div className="card">
							<div className="card-body">
								<div className="progressBarWrapper">
									<div className="progressBar">
										<span className="progressBarFill" />
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</Protect>
		</>
	);
}
