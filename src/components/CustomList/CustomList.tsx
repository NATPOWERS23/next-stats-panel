import { useId } from "react";

export default function CustomList({
	items,
}: { items: { name?: string | number }[] }) {
	const id = useId();

	return (
		<ul>
			{items.map((item, index) => (
				<li key={`item_${id}`}>{item.name || "-"}</li>
			))}
		</ul>
	);
}
