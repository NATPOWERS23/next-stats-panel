import { useId } from "react";

export default function CustomList({
	items,
}: { items: unknown[] | { name: string }[] }) {
	const id = useId();

	return (
		<ul>
			{items.map((item, index) => (
				<li key={`item_${id}`}>{item.name || "-"}</li>
			))}
		</ul>
	);
}
