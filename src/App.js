import ReactDOM from "react-dom/client";
import { Header } from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Contact from "./components/Contact";
import ErrorPage from "./components/ErrorPage";
import RestaurantMenu from "./components/RestaurantMenu";
import { lazy, Suspense } from "react";


// Chunking
// Code splitting
// Dynamic Routing
// Lazy loading
// dynamic Import - all are same things

const Grocery = lazy(() => import("./components/Grocery"))
const About = lazy(() => import("./components/About"))

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "about",
        element: <Suspense fallback={"Loadng About page.."}> <About /> </Suspense>,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "grocery",
        element: <Suspense fallback={"Loading Grocery..."}><Grocery /></Suspense>,
      },
      {
        path: 'restaurant/:resId',
        element: <RestaurantMenu />
      }
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
