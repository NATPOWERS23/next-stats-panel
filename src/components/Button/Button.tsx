"use client";

export default function Button({
	content = "",
	handleClick = () => {
		console.log("Button clicked");
	},
}: { content?: string | JSX.Element; handleClick?: () => void }) {
	return (
		<button
			type="button"
			style={{ width: "fit-content" }}
			onClick={() => handleClick()}
		>
			{content ?? "Submit"}
		</button>
	);
}
