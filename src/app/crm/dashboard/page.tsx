import SpaceStatistic from "./(components)/SpaceStatistic/SpaceStatistic";
import styles from "./dashboard.module.css";

export default function DashboardPage() {
  return (
    <>
      <h1>Dashboard</h1>

      <div className="page-wrapper">
        <SpaceStatistic />
      </div>
    </>
  );
}
