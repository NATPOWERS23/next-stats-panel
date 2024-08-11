import data from './db.json';
import { delayed } from '../../../../helpers/delay';
import type { Article } from '../(components)/ArticleBrief/ArticleBrief';

export function getAllArticles(): Promise<Article[]> {
  return delayed(data.articles, { timeout: 0 });
}
