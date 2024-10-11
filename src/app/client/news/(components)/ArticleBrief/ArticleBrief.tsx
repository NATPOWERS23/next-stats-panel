import React from "react";
import Image from "next/image";
import { ROUTES } from "../../(server)/routing";
import type { Article } from "./ArticleBriefs";
import LinkButton from "@/components/LinkButton/LinkButton";

export default function ArticleBrief({ article }: { article: Article }) {
	return (
		<>
			{article && (
				<section>
					<LinkButton
						content={article.title}
						href={ROUTES.articles(article.id)}
					/>
					<p>
						{article.summary.length
							? article.summary
							: "No summary for current post"}
					</p>
					<Image
						src={article.imageUrl}
						alt={article.title}
						width={200}
						height={200}
					/>
				</section>
			)}
		</>
	);
}
