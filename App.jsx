import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import Header from "./src/components/Header";
import Body from "./src/components/Body";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Contact from "./src/components/Contact";
import About from "./src/components/About";
import Error from "./src/components/Error";
import RestaurantMenu from "./src/components/RestaurantMenu";

const App = () => {
  return (
    <>
      <Header />
      <Outlet/>
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children: [
      {
        path: '/',
        element: <Body/>
      },
      {
        path: '/contact',
        element: <Contact/>
      },
      {
        path: '/about',
        element: <About/>
      },
      {
        path: '/restaurant/:resId',
        element: <RestaurantMenu/>
      }

    ],
    errorElement: <Error/>
  }
])

const rootElement = ReactDOM.createRoot(document.getElementById("root"));
rootElement.render(<RouterProvider  router={appRouter}/>);
