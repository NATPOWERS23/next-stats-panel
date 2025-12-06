import type React from "react";

export default function PageWrapper({ content }: { content: React.JSX.Element }) {
	return <div className="page-wrapper">{content}</div>;
}
