import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import NotFound from "../components/NotFound";
import Organizations from "../Pages/Organizations";
import ParentOutlet from "./ParentOutlet";
import Assets from "../Pages/Assets";
import Trade from "../Pages/Trade";
import History from "../Pages/History";
import Wallet from "../Pages/Wallet";
import Notification from "../Pages/Notification";
import Support from "../Pages/Support";
import Settings from "../Pages/Settings";

const routes = createBrowserRouter([
  {
    element: <ParentOutlet />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/orgs",
        element: <Organizations />,
      },
      {
        path: "/assets",
        element: <Assets />,
      },
      {
        path: "/trade",
        element: <Trade />,
      },
      {
        path: "/history",
        element: <History />,
      },
      {
        path: "/wallet",
        element: <Wallet />,
      },
      {
        path: "/notifications",
        element: <Notification />,
      },
      {
        path: "/support",
        element: <Support />,
      },
      {
        path: "/settings",
        element: <Settings />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
export default routes;
