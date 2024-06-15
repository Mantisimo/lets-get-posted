import { createBrowserRouter } from "react-router-dom";
import { HomeComponent } from "./pages/Home/Home.tsx";
import { Layout } from "./components/layout/Layout.tsx";
import { ErrorPage } from "./components/error/Error";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomeComponent />,
      },
    ],
  },
]);
