import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./components/RootLayout";
import { HomePage } from "features/dashboard";
import { SamplePage } from "features/sample";

export const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
        children: [
          {
            path: "sample",
            element: <SamplePage />,
          },
        ],
      },
    ],
  },
]);
