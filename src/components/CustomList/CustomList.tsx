import { useId } from "react";

export default function CustomList({
	items,
	noItemsText = "No items",
}: {
	items: {
		name?: string | number;
		innerButtonText?: string;
		innerButtonClick?: () => void;
	}[];
	noItemsText?: string;
}) {
	const id = useId();

	return (
		<ul>
			{items.length ? (
				items.map((item) => (
					<li key={`item_${id}`} className="flex gap-2 items-center">
						{item.name || "-"}
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
