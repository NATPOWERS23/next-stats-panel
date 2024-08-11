export interface Article {
  events: unknown[];
  featured: boolean;
  id: number;
  imageUrl: string;
  launches: Launch[];
  newsSite: string;
  publishedAt: string;
  summary: string;
  title: string;
  updatedAt: string;
  url: string;
}

export interface Launch {
  id: string;
  provider: string;
}
