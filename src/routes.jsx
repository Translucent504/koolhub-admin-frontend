import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./components/RootLayout";
import { HomePage } from "features/dashboard";
import { SamplePage } from "features/sample";
import ErrorPage from "components/ErrorPage";
import SampleDetailPage from "features/sample/SampleDetailPage";

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
        children: [
          { index: true, element: <SamplePage /> },
          {
            path: "edit/:sampleId",
            element: <SampleDetailPage />,
          },
        ],
      },
    ],
  },
]);
