import Button from "@/components/Button/Button";
import Card from "@/components/Card/Card";
import Icon from "@/components/Icon/Icon";
import PageTitle from "@/components/PageTitle/PageTitle";
import PageWrapper from "@/components/PageWrapper/PageWrapper";
import Link from "next/link";

export default function Tasks() {
	const pageContent = (
		<>
			<PageTitle title="Team tasks" />
			<div className="grid-wrapper mb-4">
				<Button content="+ New Task" fullWidth={true} />

				<Button content="Find task" fullWidth={true} />

				<Button content="Assigned tasks" fullWidth={true} />

				<Button content="Export tasks in CSV" fullWidth={true} />

				<Link href="./team" className="flex gap-1">
					Workflow statistic <Icon name="arrow_right" />
				</Link>
			</div>

			<Card title="Task list" />
		</>
	);

	return <PageWrapper content={pageContent} />;
}
