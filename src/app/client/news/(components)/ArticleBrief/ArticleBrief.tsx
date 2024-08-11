import Link from 'next/link';
import Image from 'next/image';
import { ROUTES } from '../../(server)/routing';
import { Article } from './ArticleBrief';
import styles from './ArticleBrief.module.css';

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
export { Article };