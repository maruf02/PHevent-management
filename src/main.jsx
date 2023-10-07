import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Root from "./Components/Root/Root.jsx";
import ErrorPage from "./Components/ErrorPage/ErrorPage.jsx";
import Home from "./Components/Home/Home.jsx";
import ServiceDetails from "./Components/ServiceDetails/ServiceDetails.jsx";
import AboutPage from "./Components/AboutPage/AboutPage";
import ServicesPage from "./Components/ServicesPage/ServicesPage";
import MissionPage from "./Components/MissionPage/MissionPage";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/about",
        element: <AboutPage></AboutPage>,
      },
      {
        path: "/services",
        element: <ServicesPage></ServicesPage>,
      },
      {
        path: "/mission",
        element: <MissionPage></MissionPage>,
      },
      {
        path: "/cardDetails/:id",
        element: <ServiceDetails></ServiceDetails>,
        loader: () => fetch("../ApiData.json"),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
