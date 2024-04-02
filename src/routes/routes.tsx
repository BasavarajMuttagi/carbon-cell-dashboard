import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../layouts/DashboardLayout";
import PopulationChart from "../components/PopulationChart";

const routes = createBrowserRouter([
  {
    path: "dash",
    element: <DashboardLayout />,
  },
  {
    path: "chart",
    element: <PopulationChart />,
  },
]);
export default routes;
