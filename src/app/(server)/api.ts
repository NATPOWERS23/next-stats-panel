import data from './db.json';
import { delayed } from '../helpers/delay';
import { Article } from '@/components/ArticleBrief/article-brief';

export function getAllArticles(): Promise<Article[]> {
  return delayed(data.articles, { timeout: 0 });
}
