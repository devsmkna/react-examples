import { Link, useLocation, useSearchParams } from "react-router-dom";
import { maxPages } from "../../hooks/useAPI";

const Navbar = () => {
  const { pathname } = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const page = +(searchParams.get("page") || 1);

  const undeline = {
    textDecoration: "underline",
    margin: "0 0.5rem",
  };

  const routes = ["characters", "locations", "episodes"];

  return (
    <nav>
      {routes.map((route) => (
        <Link
          key={route}
          to={`/${route}`}
          style={pathname === `/${route}` ? undeline : { margin: "0 0.5rem" }}
        >
          {route[0].toUpperCase() + route.slice(1)}
        </Link>
      ))}
      <div className="page-buttons">
        <button
          onClick={() => setSearchParams({ page: (page - 1).toString() })}
          disabled={page <= 1}
        >
          {"<"}
        </button>
        <span>
          Page
          <input
            type="number"
            min={1}
            max={maxPages}
            value={page}
            onChange={(e) => setSearchParams({ page: e.target.value })}
          />
          of {maxPages}
        </span>
        <button
          onClick={() => setSearchParams({ page: (page + 1).toString() })}
          disabled={page >= maxPages}
        >
          {">"}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
