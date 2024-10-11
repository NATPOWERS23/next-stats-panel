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
				<Button content="+ New Task" fullWidth={true} />

				<Button content="Find task" fullWidth={true} />

				<Button content="Assigned tasks" fullWidth={true} />

				<Button content="Export tasks in CSV" fullWidth={true} />

				<Card
					body={<LinkButton content="Workflow statistic" href="./team" />}
				/>
			</div>

			<Card title="Task list" />
		</>
	);

	return <PageWrapper content={pageContent} />;
}
