import ArticleBrief from "../ArticleBrief/ArticleBrief";
import type { Article } from "../ArticleBrief/ArticleBriefs";

interface ArticleListProps {
  articles: Article[];
}

export function ArticleList({ articles }: ArticleListProps) {
  return (
    <div>
      {articles.map((article: Article) => (
        <ArticleBrief article={article} key={article.id} />
      ))}
    </div>
  );
}