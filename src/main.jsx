import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./styles.css";

import App from "./App.jsx";
import HomePage from "./pages/HomePage.jsx";
//import Teste from "./pages/Teste.jsx";
import InitPage from "./pages/InitPage.jsx";
import SearchResults from "./pages/SearchResults.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
        children: [
          { path: "/", element: <InitPage /> },
          { path: "/search", element: <SearchResults /> },
          //{ path: "/teste", element: <Teste /> },
        ],
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
