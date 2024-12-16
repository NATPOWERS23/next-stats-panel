import { calculateDuration, formatEventDate } from "@/utils/dateFormatter";

export default function CustomList({
	items,
	gridList = false,
	noItemsText = "No items",
}: {
	items: {
		name?: string | number;
		_id?: string;
		startDate?: string;
		endDate?: string;
		innerButtonText?: string;
		innerButtonClick?: () => void;
	}[];
	gridList?: boolean;
	noItemsText?: string;
}) {
	return (
		<ul
			style={{
				display: gridList ? "grid" : "block",
				gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
			}}
		>
			{items.length ? (
				items.map((item, index) => (
					<li
						key={`item_${item._id || index}`}
						className="flex gap-2 items-center"
					>
						<p>{item.name || "-"}</p>
						<span>
							{item.startDate
								? `Start: ${formatEventDate(item.startDate)}`
								: ""}
						</span>
						<br />
						<span>
							{item.endDate && item.startDate
								? `Duration: ${calculateDuration(item.startDate, item.endDate)}`
								: ""}
						</span>
						{item.innerButtonText && (
							<button
								className="border-white border-2 rounded-2large px-2 text-white hover:border-grey-light hover:text-grey-light"
								type="button"
								onClick={item.innerButtonClick}
							>
								{item.innerButtonText}
							</button>
						)}
					</li>
				))
			) : (
				<p className="text-white/60 text-sm">{noItemsText}</p>
			)}
		</ul>
	);
}
