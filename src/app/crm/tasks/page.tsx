import Button from "@/components/Button/Button";
import Card from "@/components/Card/Card";
import LinkButton from "@/components/LinkButton/LinkButton";
import PageTitle from "@/components/PageTitle/PageTitle";
import PageWrapper from "@/components/PageWrapper/PageWrapper";
import Link from "next/link";

export default function Tasks() {
	const pageContent = (
		<>
			<PageTitle title="Team tasks" />
			<div className="grid-wrapper">
				<Button content="+ New Task" />

				<Button content="Find task" />

				<Button content="Assigned tasks" />

				<Button content="Export tasks in CSV" />

				<Card
					body={<LinkButton content="Workflow statistic" href="./team" />}
				/>
			</div>

			<Card title="Task list" />
		</>
	);

	return <PageWrapper content={pageContent} />;
}
