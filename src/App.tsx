import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import { useSearchParams } from "react-router-dom";
import { router } from "./router/router";
import { memo, useCallback } from "react";

const App = memo(() => {
  const [searchParams, setSearchParams] = useSearchParams();
  const page = +(searchParams.get("page") || 1);

  const nextPage = useCallback(
    () => setSearchParams({ page: (page + 1).toString() }),
    [page, setSearchParams]
  );
  const previousPage = useCallback(
    () => setSearchParams({ page: (page - 1).toString() }),
    [page, setSearchParams]
  );

  const routes =
    router.routes
      .find((route) => route.path === "/")
      ?.children?.map((route) => route.path || "")
      .filter((route) => route !== "") || [];

  return (
    <div>
      <Navbar routes={routes} />
      <Outlet context={[previousPage, nextPage]} />
    </div>
  );
});

export default App;
