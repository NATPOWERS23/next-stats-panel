import Link from 'next/link';
import Image from 'next/image';
import { ROUTES } from '../(server)/routing';
import styles from './article-brief.module.css';

export interface Article {
  events: any[];
  featured: boolean;
  id: number;
  imageUrl: string;
  launches: Launch[];
  newsSite: string;
  publishedAt: string;
  summary: string;
  title: string;
  updatedAt: string;
  url: string;
}

export interface Launch {
  id: string;
  provider: string;
}

export function ArticleBrief({ article }: { article: Article }) {
  return (
    <>
      {article && (
        <section className={styles.container}>
          <Link href={ROUTES.articles(article.id)}>
            <h2>{article.title}</h2>
          </Link>
          <p>{article.summary.length ? article.summary : 'No summary for current post'}</p>
          <Image src={article.imageUrl} alt={article.title} width={200} height={200} />
        </section>
      )}
    </>
  );
}
