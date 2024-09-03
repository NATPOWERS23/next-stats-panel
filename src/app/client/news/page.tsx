import Link from "next/link";
import { getAllArticles } from "./(server)/api";
import type { Article } from "./(components)/ArticleBrief/ArticleBrief";
import styles from "./news.module.css";
import PageTitle from "@/components/PageTitle/PageTitle";

const ARTICLES_PER_PAGE = 5;

export default async function News({
	searchParams,
}: { searchParams: Record<string, string> }) {
	const allArticles: Article[] | [] = await getAllArticles();
	const page = Number.parseInt(searchParams.page) || 1;
	const articles = allArticles.slice(
		(page - 1) * ARTICLES_PER_PAGE,
		page * ARTICLES_PER_PAGE,
	);
	const amountOfPages = allArticles.length / ARTICLES_PER_PAGE;

	const prevPage = page - 1;
	const nextPage = page + 1;

	const pageLink = (page: number) => ({
		search: new URLSearchParams({ page: page.toString() }).toString(),
	});

	return (
		<>
			<PageTitle title={`Home Page ${page}`} />
			{/* {articles.map((article: Article) => (
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
      </section> */}
		</>
	);
}
