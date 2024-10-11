import Link from "next/link";
import Icon from "../Icon/Icon";

export default function LinkButton({
	content,
	iconName,
	href,
}: { content: string; iconName?: string; href: string }) {
	return (
		<div className="link-button p-2 w-fit max-w-full">
			<Link
				href={href}
				style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}
				className="text-white hover:text-green"
			>
				{iconName && <Icon name={iconName} />} {content ?? "Submit"}
			</Link>
		</div>
	);
}
