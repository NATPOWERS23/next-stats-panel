import SpaceStatistic from "./(components)/SpaceStatistic/SpaceStatistic";
import styles from "./dashboard.module.css";

export default function DashboardPage() {
	return (
		<>
			<div className="page-wrapper">
				<h1>Dashboard</h1>

				<SpaceStatistic />
			</div>
		</>
	);
}
