import ArticleBrief from "../ArticleBrief/ArticleBrief";
import { Article } from "../ArticleBrief/ArticleBriefs";

interface ArticleListProps {
  articles: Article[];
}

export function ArticleList({ articles }: ArticleListProps) {

  const getList = (slice: Article[]) => {
    return [...slice].map((article: Article) => (
      <ArticleBrief article={article} key={article.id} />
    ))

  }

  return (
    <div className="container mx-auto gap-4 grid">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {getList(articles.slice(0, 2))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {getList(articles.slice(2))}
      </div>
    </div>
  );
}