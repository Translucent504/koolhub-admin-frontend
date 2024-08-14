import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ConfigProvider, theme } from "antd";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/index.js";

// refer to https://ant.design/docs/react/customize-theme#seedtoken for docs on antd design tokens for theme customization
createRoot(document.getElementById("root")).render(
  <StrictMode>
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
  </StrictMode>
);
