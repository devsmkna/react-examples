import { memo } from "react";

export const Paginator = memo(
  ({
    page,
    maxPages,
    prevPage,
    nextPage,
  }: {
    page: number;
    maxPages?: number;
    prevPage: () => void;
    nextPage: () => void;
  }) => {
    return (
      <div className="join">
        <button
          className="join-item btn"
          onClick={prevPage}
          disabled={page <= 1}
        >
          «
        </button>
        <button className="join-item btn">{page}</button>
        <button
          className="join-item btn"
          onClick={nextPage}
          disabled={maxPages ? page >= maxPages : false}
        >
          »
        </button>
      </div>
    );
  }
);
