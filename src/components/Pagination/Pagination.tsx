import Link from "next/link";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
}

export function Pagination({ currentPage, totalPages }: PaginationProps) {
  const pageLink = (page: number) => ({
    search: new URLSearchParams({ page: page.toString() }).toString(),
  });

  return (
    <section >
      {currentPage <= totalPages && (
        <div>
          <Link
            href={pageLink(currentPage - 1)}
            aria-disabled={currentPage === 1}
          >
            Previous Page
          </Link>
          <Link
            href={pageLink(currentPage + 1)}

            aria-disabled={currentPage === totalPages}
          >
            Next Page
          </Link>
        </div>
      )}
    </section>
  );
}