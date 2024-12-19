import { createBrowserRouter, Navigate } from "react-router-dom";
import { HomePage } from "features/dashboard";
import { SamplePage } from "features/sample";
import ErrorPage from "components/ErrorPage";
import SampleDetailPage from "features/sample/SampleDetailPage";
import SampleCreatePage from "features/sample/SampleCreatePage";
import { VanPage } from "features/vans";
import VanCreatePage from "features/vans/VanCreatePage";
import VanDetailPage from "features/vans/VanDetailPage";
import {
  AuthLayout,
  RequireAnonymous,
  RequireAuth,
  SignIn,
} from "features/auth/components";
import RoomOccupancyDetails from "features/dashboard/RoomOccupancy/RoomOccupancyDetails";

function DefaultHomeRoute() {
  return <Navigate to="/dashboard" />;
}

export const router = createBrowserRouter([
  {
    element: <RequireAuth />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        children: [
          { index: true, element: <DefaultHomeRoute /> },
          {
            path: "dashboard",
            element: <HomePage />,
          },          {
            path: "roomsDetails",
            element: <RoomOccupancyDetails />,
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
          {
            path: "vans",
            children: [
              { index: true, element: <VanPage /> },
              {
                path: "new",
                element: <VanCreatePage />,
              },
              {
                path: ":vanId",
                element: <VanDetailPage />,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    element: <RequireAnonymous />,
    children: [
      {
        element: <AuthLayout />,
        children: [
          {
            path: "/sign-in",
            element: <SignIn />,
          },
        ],
      },
    ],
  },
]);
