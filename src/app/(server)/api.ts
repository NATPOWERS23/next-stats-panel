import data from './db.json';
import { delayed } from './delay';
import { Article } from '../shared/components/ArticleBrief/article-brief';

export function getAllArticles(): Promise<Article[]> {
  return delayed(data.articles, { timeout: 0 });
}
