import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import { useSearchParams } from "react-router-dom";
import { router } from "./router/router";
import { memo, useCallback } from "react";
import { ECommerce } from "./components/ECommerce/ECommerce";
import { OutletContext } from "./models/types";
import { useSelector } from "react-redux";
import { State } from "./redux";

const App = memo(() => {
  const { pathname } = useLocation();

  const theme = useSelector((state: State) => state.theme.value);

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
      .filter(
        (route) => route !== "" && route !== "cart" && route !== "ecommerce"
      ) || [];

  return (
    <div data-theme={theme} className="min-h-svh">
      <Navbar routes={routes} />
      <Outlet
        context={
          { nextPage: nextPage, prevPage: previousPage } satisfies OutletContext
        }
      />
      {pathname === "/" && <ECommerce />}
    </div>
  );
});

export default App;
