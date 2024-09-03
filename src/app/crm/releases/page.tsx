"use client";

import PageTitle from "@/components/PageTitle/PageTitle";
import PageWrapper from "@/components/PageWrapper/PageWrapper";
import { useState } from "react";

export default function Releases() {
	const [contentItems, setContentItems] = useState([
		{ title: "Show 1", body: "Show 1 body" },
		{ title: "Show 2", body: "Show 2 body" },
		{ title: "Show 3", body: "Show 3 body" },
		{ title: "Show 4", body: "Show 4 body" },
		{ title: "Show 5", body: "Show 5 body" },
		{ title: "Show 6", body: "Show 6 body" },
	]);

	const pageContent = (
		<>
			<PageTitle title="Show Realizes" />
			<div className="grid-wrapper">
				{contentItems.map((item, index) => (
					<div className="card" key={index}>
						<div className="card-title">{item.title}</div>
						<div className="card-body">...</div>
						<div className="card-actions" />
					</div>
				))}
			</div>

			<div>
				<button type="button">+ Propose new content</button>
			</div>
		</>
	);

	return <PageWrapper content={pageContent} />;
}
