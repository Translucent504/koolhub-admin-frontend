import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./components/RootLayout";
import { HomePage } from "features/dashboard";
import { SamplePage } from "features/sample";
import ErrorPage from "components/ErrorPage";
import SampleDetailPage from "features/sample/SampleDetailPage";
import SampleCreatePage from "features/sample/SampleCreatePage";

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
            path: "new",
            element: <SampleCreatePage />,
          },
          {
            path: ":sampleId",
            element: <SampleDetailPage />,
          },
        ],
      },
    ],
  },
]);
