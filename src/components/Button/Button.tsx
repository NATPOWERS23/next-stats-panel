"use client";

import type React from "react";

export default function Button({
	content = "",
	onClick,
}: { content?: string | React.JSX.Element; onClick: any }) {
	return (
		<button type="button" style={{ width: "fit-content" }} onClick={onClick}>
			{content ?? "Submit"}
		</button>
	);
}
