import PageTitle from "@/components/PageTitle/PageTitle";
import PageWrapper from "@/components/PageWrapper/PageWrapper";
import { Pagination } from "@/components/Pagination/Pagination";
import { PaginateResponse } from "@/types/response.interface";
import { getAllArticles } from "./(server)/api";
import { ArticleList } from "./components/ArticleList/ArticleList";
import type { Article } from "./components/ArticleBrief/ArticleBriefs";


export default async function NewsPage({
  searchParams,
}: {
  searchParams: Record<string, string>;
}) {
  const articlesResponse: PaginateResponse<Article[]> = await getAllArticles();
  const articles: Article[] = articlesResponse.data;
  const { total_pages, current_page } = articlesResponse.pagination;

  const content = (
    <>
      <PageTitle title='News' />
      <ArticleList articles={articles} />
      <Pagination currentPage={current_page} totalPages={total_pages} />
    </>
  );

  return <PageWrapper content={content} />;
}