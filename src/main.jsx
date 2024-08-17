import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ConfigProvider, theme } from "antd";
import { RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { router } from "routes";
import "antd/dist/reset.css";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      retry: 3,
      refetchOnWindowFocus: false,
    },
  },
});

// refer to https://ant.design/docs/react/customize-theme#seedtoken for docs on antd design tokens for theme customization
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <ConfigProvider
        theme={{
          cssVar: true,
          hashed: false,
          algorithm: theme.defaultAlgorithm,
          token: {
            colorPrimary: "#602eff",
          },
        }}
      >
        <RouterProvider router={router} />
      </ConfigProvider>
    </QueryClientProvider>
  </StrictMode>
);
