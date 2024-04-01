import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import { useSearchParams } from "react-router-dom";
import { maxPages } from "./hooks/useAPI";
import { router } from "./router/router";

const App = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const page = +(searchParams.get("page") || 1);

  const nextPage = () =>
    page < maxPages && setSearchParams({ page: (page + 1).toString() });
  const previousPage = () =>
    page > 1 && setSearchParams({ page: (page - 1).toString() });

  const routes: string[] =
    router.routes
      .find((route) => route.path === "/")
      ?.children?.map((route) => route.path || "")
      .filter((route) => route !== "") || [];

  return (
    <div>
      <Navbar
        routes={routes}
        page={page}
        maxPages={maxPages}
        nextPage={nextPage}
        previousPage={previousPage}
      />
      <Outlet />
    </div>
  );
};

export default App;
