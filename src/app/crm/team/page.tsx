import PageTitle from "@/components/PageTitle/PageTitle";
import styles from "./team.module.css";

export default function Team() {
	return (
		<div className="page-wrapper">
			<PageTitle title="Team" />
			<div className={styles.membersLine}>
				<div className="card">Members Line ...</div>
			</div>

			<h3>Dashboard</h3>
			<div className={styles.dashboard}>
				<div className="card" />
				<div className="card" />
				<div className="card">
					<div className="card-title">Team chat</div>
				</div>
			</div>
		</div>
	);
}
