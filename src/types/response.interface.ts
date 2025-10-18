import type { PaginationInfo } from "./pagination.interface"

export interface Response<T> { 
  data: T
}

export interface PaginateResponse<T> extends Response<T> {
  pagination: PaginationInfo
}