import data from './db.json';
import { delayed } from '../../../../helpers/delay';
import type { Article } from '../components/ArticleBrief/ArticleBriefs';
import type { PaginateResponse } from '@/types/response.interface';

export function getAllArticles(): Promise<PaginateResponse<Article[]>> {
  return delayed(data, { timeout: 0 });
}
