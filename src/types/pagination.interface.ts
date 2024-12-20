export interface PaginationParams {
  page: number;
  per_page: number;
  sort_by?: string;
  sort_order?: 'asc' | 'desc';
  search_query?: string;
}

export interface PaginationInfo {
  total_pages: number;
  current_page: number;
  total_items: number;
  per_page?: number;
  next_page?: number;
  previous_page?: number;
  // has_next: boolean;
  // has_previous: boolean;
}