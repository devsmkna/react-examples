import { Link, useLocation } from "react-router-dom";
import { Paginator } from "../Paginator/Paginator";

const Navbar = ({
  routes,
  page,
  maxPages,
  previousPage,
  nextPage,
}: {
  routes: string[];
  page: number;
  maxPages: number;
  previousPage: () => void;
  nextPage: () => void;
}) => {
  const { pathname } = useLocation();

  const undeline = {
    textDecoration: "underline",
    margin: "0 0.5rem",
  };

  return (
    <nav className="navbar bg-neutral mb-4">
      <div className="navbar-start">
        <ul className="menu menu-horizontal">
          {routes.map((route) => (
            <Link
              key={route}
              to={`/${route}`}
              style={
                pathname === `/${route}` ? undeline : { margin: "0 0.5rem" }
              }
            >
              {route[0].toUpperCase() + route.slice(1)}
            </Link>
          ))}
        </ul>
      </div>
      {maxPages > 0 && (
        <div className="navbar-end">
          <Paginator
            currentPage={page}
            maxPages={maxPages}
            previousPage={previousPage}
            nextPage={nextPage}
          />
        </div>
      )}
    </nav>
  );
};

export default Navbar;
