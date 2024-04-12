import { memo } from "react";

export const Paginator = memo(
  ({
    currentPage,
    maxPages,
    previousPage,
    nextPage,
  }: {
    currentPage: number;
    maxPages?: number;
    previousPage: () => void;
    nextPage: () => void;
  }) => {
    return (
      <div className="join">
        <button
          className="join-item btn"
          onClick={previousPage}
          disabled={currentPage <= 1}
        >
          «
        </button>
        <button className="join-item btn">Page {currentPage}</button>
        <button
          className="join-item btn"
          onClick={nextPage}
          disabled={maxPages ? currentPage >= maxPages : false}
        >
          »
        </button>
      </div>
    );
  }
);
