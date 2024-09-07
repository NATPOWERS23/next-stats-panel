export default function Card({
	title = "",
	body = <></>,
	actions = [],
}: { title?: string; body?: JSX.Element; actions?: any }) {
	return (
		<div className="card">
			<div className="card-title">{title}</div>
			<div className="card-body">{body}</div>
		</div>
	);
}
