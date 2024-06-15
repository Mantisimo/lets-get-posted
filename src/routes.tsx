import { createBrowserRouter } from "react-router-dom";
import { HomeComponent } from "./components/pages/Home/Home.tsx";
import { Layout } from "./components/layout/Layout.tsx";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <HomeComponent />,
      },
    ],
  },
]);
