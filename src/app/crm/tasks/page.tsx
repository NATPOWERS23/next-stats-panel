import Link from "next/link";

export default function Tasks() {
  return (
    <div className="page-wrapper">
      <h1>Team tasks</h1>

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

      <div className="card">
        <div className="card-title">Task list</div>
      </div>
    </div>
  );
}
