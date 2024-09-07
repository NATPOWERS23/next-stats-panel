"use client";

import { useId, useState } from "react";
import PageTitle from "@/components/PageTitle/PageTitle";
import PageWrapper from "@/components/PageWrapper/PageWrapper";
import Button from "@/components/Button/Button";
import Card from "@/components/Card/Card";

export default function Releases() {
	const id = useId();
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
				{contentItems.map((item) => (
					<Card
						body={<>item.body</>}
						title={item.title}
						key={`release_card_${id}`}
					/>
				))}
			</div>

			<Button content="+ Propose new content" />
		</>
	);

	return <PageWrapper content={pageContent} />;
}
