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
				display: gridList ? "grid" : "flex",
				gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
				gap: "0.5rem",
			}}
			className="flex-col gap-2"
		>
			{items.length ? (
				items.map((item, index) => (
					<li
						key={`item_${item._id || index}`}
						className="flex gap-2 items-center w-full"
					>
						<div className="flex gap-2 flex-col bg-grey-light rounded-2large p-3 w-full">
							<p>{item.name || "-"}</p>
							<p className="flex gap-1 text-xs text-blue">
								<span>
									{item.startDate
										? `Start: ${formatEventDate(item.startDate)}`
										: ""}
								</span>
								<span>
									{item.endDate && item.startDate
										? `Duration: ${calculateDuration(item.startDate, item.endDate)}`
										: ""}
								</span>
							</p>
						</div>
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
