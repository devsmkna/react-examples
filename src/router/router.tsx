import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import CharacterPage from "../pages/CharacterPage";
import LocationPage from "../pages/LocationPage";
import EpisodePage from "../pages/EpisodePage";
import { MemoryPage } from "../pages/MemoryPage";
import { CartPage } from "../pages/CartPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "characters",
        element: <CharacterPage />,
      },
      {
        path: "locations",
        element: <LocationPage />,
      },
      {
        path: "episodes",
        element: <EpisodePage />,
      },
      {
        path: "memory",
        element: <MemoryPage />,
      },
      {
        path: "cart",
        element: <CartPage />,
      },
    ],
  },
]);
