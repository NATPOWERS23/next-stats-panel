import { Pagination, PaginationProps } from "@/components/Pagination/Pagination";


export default function PaginationWrapper({ currentPage, totalPages }: PaginationProps) {
  return (
    <Pagination pagination={{ currentPage: currentPage, totalPages: totalPages }} mode="client-pagination" />
  );
}
