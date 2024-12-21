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
        <section className="card w-full p-2 rounded-lg flex flex-col justify-between row-span-2 hover:outline outline-4 outline-green">
          <div className="card-body">
            <div className="w-full h-64 relative">
              <Image className="w-full h-full object-cover object-center absolute"
                src={article.imageUrl}
                alt={article.altText ?? (article.title + ' poster')}
                layout="fill"
                objectFit="cover"
                quality={100}
              />
            </div>
            <div className="ms-[-0.5rem] py-2 text-lg font-bold">
              <LinkButton
                content={article.title}
                href={ROUTES.articles(article.id)}
              />
            </div>
            <p>
              {article.summary.length
                ? (article.summary.length > 200
                  ? article.summary.slice(0, 200) + "..."
                  : article.summary)
                : ""}
            </p>
          </div>

          <div className="card-footer pt-2">
            <div className="flex flex-row items-center gap-2">
              <Avatar key={article.author} sizes={24} src={article.avatarSrc} />
              <p>{article.author} {article.date && `on ${article.date}`}</p>
            </div>
            <div className="ms-[-0.5rem]">
              <LinkButton
                content='Read more'
                href={ROUTES.articles(article.id)}
              />
            </div>
          </div>
        </section>
      )}
    </>
  );
}
