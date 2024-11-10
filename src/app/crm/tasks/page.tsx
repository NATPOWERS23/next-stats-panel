import Button from "@/components/Button/Button";
import Card from "@/components/Card/Card";
import LinkButton from "@/components/LinkButton/LinkButton";
import PageTitle from "@/components/PageTitle/PageTitle";
import PageWrapper from "@/components/PageWrapper/PageWrapper";

export default function Tasks() {
	const pageContent = (
		<>
			<PageTitle title="Team tasks" />
			<div className="grid-wrapper mb-4">
				<Button content="+ New Task" onClick={undefined} fullWidth={true} />

				<Button content="Find task" onClick={undefined} fullWidth={true} />

				<Button content="Assigned tasks" onClick={undefined} fullWidth={true} />

				<Button
					content="Export tasks in CSV"
					onClick={undefined}
					fullWidth={true}
				/>

				<Card
					body={<LinkButton content="Workflow statistic" href="./team" />}
				/>
			</div>

			<Card title="Task list" />
		</>
	);

	return <PageWrapper content={pageContent} />;
}
