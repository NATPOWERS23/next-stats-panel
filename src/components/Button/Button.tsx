"use client";

export default function Button({
	content = "",
	handleClick = () => {
		console.log("Button clicked");
	},
	type = "button",
	buttonType = "primary",
	size = "medium",
	fullWidth = false,
}: {
	content?: string | JSX.Element;
	handleClick?: () => void;
	type?: "button" | "submit" | "reset" | undefined;
	buttonType?: "primary" | "secondary";
	size?: "small" | "medium" | "large";
	fullWidth?: boolean;
}) {
	const buttonTypeClass =
		buttonType === "primary"
			? "bg-black hover:bg-white text-white hover:text-black border border-white"
			: "bg-green hover:bg-white text-white hover:text-black border border-transparent hover:border-white";

	const sizeClass =
		size === "medium"
			? "py-2 px-4"
			: size === "small"
				? "py-1 px-2"
				: "py-3 px-8";

	return (
		<button
			className={`${buttonTypeClass} ${sizeClass} rounded-full transition duration-500`}
			type={type}
			style={{ width: fullWidth ? "100%" : "fit-content" }}
			onClick={() => handleClick()}
		>
			{content ?? "Submit"}
		</button>
	);
}
