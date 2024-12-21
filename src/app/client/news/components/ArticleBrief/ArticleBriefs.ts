export interface Article {
  events: unknown[];
  featured: boolean;
  id: number;
  imageUrl: string;
  altText?: string;
  launches: Launch[];
  newsSite: string;
  publishedAt: string;
  summary: string;
  title: string;
  updatedAt: string;
  url: string;
  author?: string;
  tags?: string[];
  date?: string;
  avatarSrc?: string;
}

export interface Launch {
  id: string;
  provider: string;
}
