import Link from "next/link";
import Icon from "../Icon/Icon";

export default function LinkButton({
	content,
	iconName,
	href,
}: { content?: string; iconName?: string; href?: string }) {
	return (
		<div className="link-button">
			<Link
				href={href ?? "/"}
				style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}
			>
				{iconName && <Icon name={iconName} />} {content ?? ""}
			</Link>
		</div>
	);
}
