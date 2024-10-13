"use client";

export default function Button({
	content = "",
	onClick,
}: { content?: string | JSX.Element; onClick: any }) {
	return (
		<button type="button" style={{ width: "fit-content" }} onClick={onClick}>
			{content ?? "Submit"}
		</button>
	);
}
