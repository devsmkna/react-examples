import { memo, useCallback } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = memo(({ routes }: { routes: string[] }) => {
  const { pathname } = useLocation();

  return (
    <nav className="navbar bg-neutral mb-4">
      <div className="navbar-start">
        <ul className="menu menu-horizontal">
          {routes.map((route) => (
            <li key={route}>
              <Link
                key={route}
                to={`/${route}`}
                style={{
                  textDecoration:
                    pathname === `/${route}` ? "underline" : "none",
                }}
              >
                {route[0].toUpperCase() + route.slice(1)}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
});

export default Navbar;
