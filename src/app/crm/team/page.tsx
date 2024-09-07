import PageWrapper from "@/components/PageWrapper/PageWrapper";
import PageTitle from "@/components/PageTitle/PageTitle";
import Card from "@/components/Card/Card";
import styles from "./team.module.css";

export default function Team() {
	const cardBody = <></>;

	const pageContent = (
		<>
			<PageTitle title="Team" />
			<Card body={<>Members Line ...</>} />

			<h3>Dashboard</h3>
			<div className={styles.dashboard}>
				<Card title="Team chat" body={cardBody} />
			</div>
		</>
	);

	return <PageWrapper content={pageContent} />;
}
