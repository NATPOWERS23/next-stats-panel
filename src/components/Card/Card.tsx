import Icon from "../Icon/Icon";

export default function Card({
	title = "",
	body = <></>,
	actions = [],
	isInnerCard = false,
}: {
	title?: string;
	body?: JSX.Element;
	actions?: {
		name: string;
		url?: string;
		icon?: string;
		text?: string;
	}[];
	isInnerCard?: boolean;
}) {
	return (
		<div
			className={`card w-full p-4 pt-2 rounded-2large shadow-lg ${isInnerCard ? "bg-grey-light" : "bg-grey"}`}
		>
			<div className="card-header flex justify-between">
				<div className="card-title text-xl mb-1 mt-2 text-white">{title}</div>
				<div className="card-actions">
					{actions?.map(
						(action) =>
							action.icon && (
								<div
									key={`action-${action.name}`}
									className="bg-grey-light p-2 rounded-full"
								>
									<Icon name={action.icon} size={16} />
								</div>
							),
					)}
				</div>
			</div>

			<div className="card-body space-y-2">{body}</div>
		</div>
	);
}
