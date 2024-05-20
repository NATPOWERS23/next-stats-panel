import data from '../../(core)/mocks/db.json';
import { delayed } from '../helpers/delay';
import { Article } from '@/app/components/ArticleBrief/article-brief';

export function getAllArticles(): Promise<Article[]> {
  return delayed(data.articles, { timeout: 0 });
}
