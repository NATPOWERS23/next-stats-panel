"use client";

export default function Button({
	content = "",
	onClick = () => {
		console.log("Button clicked");
	},
	type = "button",
	buttonType = "primary",
	size = "medium",
	fullWidth = false,
}: {
	content?: string | JSX.Element;
	onClick?: (arg?: any) => void;
	type?: "button" | "submit" | "reset" | undefined;
	buttonType?: "primary" | "secondary" | "outlined";
	size?: "small" | "medium" | "large";
	fullWidth?: boolean;
}) {
	const buttonTypeClass =
		buttonType === "primary"
			? "bg-transparent hover:bg-white text-white hover:text-black border border-white"
			: buttonType === "secondary"
				? "bg-green hover:bg-white text-white hover:text-black border border-transparent hover:border-white"
				: "bg-white/20";

	const sizeClass =
		size === "medium"
			? "py-2 px-4"
			: size === "small"
				? "py-1 px-1"
				: "py-3 px-8";

	return (
		<button
			className={`${buttonTypeClass} ${sizeClass} rounded-full transition duration-500`}
			type={type}
			style={{ width: fullWidth ? "100%" : "fit-content" }}
			onClick={onClick}
		>
			{content ?? "Submit"}
		</button>
	);
}
