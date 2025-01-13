import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import MainBody from "./components/MainBody";
import Footer from "./components/Footer";
import About from "./components/About";
import Contact from "./components/Contact";
import Offers from "./components/Offers";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
//import { createBrowserRouter, RouterProvider, Outlet } from "react-router";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router";

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

// const appRouter = createBrowserRouter([
//   {
//     path: "/",
//     element: <AppLayout />,
//     errorElement: <Error />,
//     children: [
//       {
//         path: "/",
//         element: <MainBody />,
//       },
//       {
//         path: "/about",
//         element: <About />,
//       },
//       {
//         path: "/contact",
//         element: <Contact />,
//       },
//     ],
//   },
// ]);

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <MainBody />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/offers",
        element: <Offers />,
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<RouterProvider router={appRouter} />);
root.render(<RouterProvider router={appRouter} />);
