import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./styles.css";

import App from "./App.jsx";
import HomePage from "./pages/HomePage.jsx";
//import Teste from "./pages/Teste.jsx";
import InitPage from "./pages/InitPage.jsx";
import SearchResults from "./pages/SearchResults.jsx";
import Details from "./pages/Details.jsx";
import TrendingMedia from "./pages/TrendingMedia.jsx";

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
          { path: "/trending", element: <TrendingMedia /> },
          //{ path: "/teste", element: <Teste /> },
        ],
      },
      {
        path: "/details",
        element: <Details />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
