import React, { lazy, Suspense, use, useContext } from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import Header from "./src/components/Header";
import Body from "./src/components/Body";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Contact from "./src/components/Contact";
import About from "./src/components/About";
import Error from "./src/components/Error";
import RestaurantMenu from "./src/components/RestaurantMenu";
import { USERCONTEXT } from "./src/utils/userContext";

// Lazy load the Grocery component
const Grocery = lazy(() => import('./src/components/Grocery'));

const App = () => {

  const { loggedInUser } = useContext(USERCONTEXT)

  const userData = {
    loggedInUser: "Priya Biradar"
  }

  console.log(userData)



  return (
    
      <USERCONTEXT.Provider value={{ loggedInUser : "Sandhya Patil"}}>
        <USERCONTEXT.Provider value={ { loggedInUser: loggedInUser}}>
        <Header />
        </USERCONTEXT.Provider>
        <Outlet />
      </USERCONTEXT.Provider>
    
  );
};

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '/', element: <Body /> },
      { path: '/contact', element: <Contact /> },
      {
        path: '/grocery',
        element: (
          <Suspense fallback={<h1>Loading....</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
      { path: '/about', element: <About /> },
      { path: '/restaurant/:resId', element: <RestaurantMenu /> },
    ],
    errorElement: <Error />,
  },
]);

const rootElement = ReactDOM.createRoot(document.getElementById("root"));
rootElement.render(<RouterProvider router={appRouter} />);
