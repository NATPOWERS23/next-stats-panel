import styles from './page.module.css';
import Link from 'next/link';

import { getAllArticles } from './(server)/services/api';
import { Article, ArticleBrief } from './components/ArticleBrief/article-brief';

const ARTICLES_PER_PAGE = 5;

export default async function Home({ searchParams }: { searchParams: Record<string, string> }) {
  const allArticles: Article[] | [] = await getAllArticles();
  const page = Number.parseInt(searchParams.page) || 1;
  const articles = allArticles.slice((page - 1) * ARTICLES_PER_PAGE, page * ARTICLES_PER_PAGE);
  const amountOfPages = allArticles.length / ARTICLES_PER_PAGE;

  const prevPage = page - 1;
  const nextPage = page + 1;

  const pageLink = (page: number) => ({ search: new URLSearchParams({ page: page.toString() }).toString() });

  return (
    <div>
      <h1>Home Page {page}</h1>
      {articles.map((article: Article) => (
        <ArticleBrief article={article} key={article.id} />
      ))}
      <section className={styles.pagination}>
        {page <= amountOfPages && (
          <div>
            <Link href={pageLink(prevPage)} className={page === 1 ? 'disabled' : ''} aria-disabled={page === 1}>
              Previous Page
            </Link>
            <Link
              href={pageLink(nextPage)}
              className={page === amountOfPages ? 'disabled' : ''}
              aria-disabled={page === amountOfPages}
            >
              Next Page
            </Link>
          </div>
        )}
      </section>
    </div>
  );
}
