import { calculateDuration, formatEventDate } from "@/utils/dateFormatter";

export default function CustomList({
	items,
	gridList = false,
}: {
	items: {
		name?: string | number;
		_id?: string;
		startDate?: string;
		endDate?: string;
	}[];
	gridList?: boolean;
}) {
	return (
		<ul
			style={{
				display: gridList ? "grid" : "block",
				gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
			}}
		>
			{items.map((item, index) => (
				<li key={`item_${item._id || index}`}>
					<p>{item.name || "-"}</p>
					<span>
						{item.startDate ? `Start: ${formatEventDate(item.startDate)}` : ""}
					</span>
					<br />
					<span>
						{item.endDate && item.startDate
							? `Duration: ${calculateDuration(item.startDate, item.endDate)}`
							: ""}
					</span>
				</li>
			))}
		</ul>
	);
}
