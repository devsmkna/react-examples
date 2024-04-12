import { Link, useLocation } from "react-router-dom";
import { Paginator } from "../Paginator/Paginator";

export const PageInfo = ({
  page,
  maxPages,
  nextPage,
  prevPage,
}: {
  page: number;
  maxPages: number;
  nextPage: () => void;
  prevPage: () => void;
}) => {
  const { pathname } = useLocation();
  return (
    <div className="flex justify-between m-4">
      <div className="text-sm breadcrumbs">
        <ul>
          <li>
            <Link to={"/"} className="text-accent">Home</Link>
          </li>
          <li>{pathname.slice(1)}</li>
        </ul>
      </div>

      <Paginator
        page={page}
        maxPages={maxPages}
        nextPage={nextPage}
        prevPage={prevPage}
      />
    </div>
  );
};
