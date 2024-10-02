import { StrictMode } from 'react'
import { createRoot } from "react-dom/client";
import './index.css'
import { RouterProvider } from "react-router-dom";
import { router } from "./router.tsx";
import { MovieProvider } from "./context/Movie_context.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <MovieProvider>
      <RouterProvider router={router} />
    </MovieProvider>
  </StrictMode>
);
