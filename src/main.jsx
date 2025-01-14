import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Toaster } from "react-hot-toast";
import AuthProvider from "./providers/AuthProvider";
import { RouterProvider } from "react-router-dom";
import router from "./routes/Routes";
import { HelmetProvider } from "react-helmet-async";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HelmetProvider>
      <AuthProvider>
        <RouterProvider router={router} />
        <Toaster position="top-right" reverseOrder={false} />
      </AuthProvider>
    </HelmetProvider>
  </StrictMode>
);
