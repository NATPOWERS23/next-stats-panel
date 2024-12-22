import Link from "next/link";
import './Pagination.css'


export interface PaginationProps {
  currentPage: number;
  totalPages: number;
}

export function Pagination({ pagination, mode }: { pagination: PaginationProps, mode: string }) {
  const pageLink = (page: number) => ({
    search: new URLSearchParams({ page: page.toString() }).toString(),
  });


  const { currentPage, totalPages } = pagination;

  return (
    <section className={mode + " w-full flex"}>
      {currentPage <= totalPages && (
        <div className="pagination-container w-full flex gap-4 justify-center items-center">
          <div className="prev-page">
            <Link
              href={pageLink(currentPage - 1)}
              aria-disabled={currentPage === 1}
            >
              Prev
            </Link>
          </div>

          <div className="rest-pages">...</div>

          <div className="next-page">
            <Link
              href={pageLink(currentPage + 1)}
              aria-disabled={currentPage === totalPages}
            >
              Next
            </Link>
          </div>
        </div>
      )}
    </section>
  );
}