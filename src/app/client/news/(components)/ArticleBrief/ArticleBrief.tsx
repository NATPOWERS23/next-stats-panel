import React from "react";
import Image from "next/image";
import { ROUTES } from "../../(server)/routing";
import type { Article } from "./ArticleBriefs";
import LinkButton from "@/components/LinkButton/LinkButton";
import Avatar from "@/components/Avatar/Avatar";

export default function ArticleBrief({ article }: { article: Article }) {
  return (
    <>
      {article && (
        <section>
          <div>
            <Image
              src={article.imageUrl}
              alt={article.altText ?? (article.title + ' poster')}
              width={200}
              height={200}
            />
            <LinkButton
              content={article.title}
              href={ROUTES.articles(article.id)}
            />
            <p>
              {article.summary.length
                ? article.summary
                : "No summary for current post"}
            </p>
          </div>

          <div>
            <Avatar key={article.author} sizes={24} src={article.avatarSrc} />
            <p>{article.author} {article.date && `on ${article.date}`}</p>
          </div>

          <div>
            <LinkButton
              content={article.title}
              href={ROUTES.articles(article.id)}
            />
          </div>
        </section>
      )}
    </>
  );
}
