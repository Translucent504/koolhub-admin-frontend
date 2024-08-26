import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./components/RootLayout";
import { HomePage } from "features/dashboard";
import { SamplePage } from "features/sample";
import ErrorPage from "components/ErrorPage";

export const router = createBrowserRouter([
  {
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
        index: true,
      },
      {
        path: "sample",
        element: <SamplePage />,
      },
    ],
  },
]);
