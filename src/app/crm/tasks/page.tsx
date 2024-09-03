import Card from "@/components/Card/Card";
import PageTitle from "@/components/PageTitle/PageTitle";
import PageWrapper from "@/components/PageWrapper/PageWrapper";
import Link from "next/link";

export default function Tasks() {
	const pageContent = (
		<>
			<PageTitle title="Team tasks" />
			<div className="grid-wrapper">
				<div>
					<button type="button">+ New Task</button>
				</div>
				<div>
					<button type="button">Find task</button>
				</div>
				<div>
					<button type="button">Assigned tasks</button>
				</div>
				<div>
					<button type="button">Export tasks in CSV</button>
				</div>
				<div className="card">
					<Link href="./team">Workflow statistic</Link>
				</div>
			</div>

			<Card title="Task list" />
		</>
	);

	return <PageWrapper content={pageContent} />;
}
