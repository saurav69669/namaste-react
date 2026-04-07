import ReactDOM from "react-dom/client";
import { Header } from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Contact from "./components/Contact";
import ErrorPage from "./components/ErrorPage";
import RestaurantMenu from "./components/RestaurantMenu";
import { lazy, Suspense, useEffect, useState } from "react";
import UserContext from "./utils/UserContext";
import Cart from "./components/Cart";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";

// Chunking
// Code splitting
// Dynamic Routing
// Lazy loading
// dynamic Import - all are same things

const Grocery = lazy(() => import("./components/Grocery"));
const About = lazy(() => import("./components/About"));

const AppLayout = () => {
  const [userName, setUserName] = useState();

  // Authentication
  useEffect(() => {
    // make api call and send username and password
    const data = {
      name: "Sourabh Yadav",
    };
    setUserName(data.name);
  }, []);
  return (
    <Provider store={appStore}>
      <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
        <div className="app">
          <Header />
          {/* we can provide multiple userCOntext for specific levels */}
          {/* <UserContext.Provider value={{ loggedInUser: "Akshay" }}> */}
          <Outlet />
          {/* </UserContext.Provider> */}
        </div>
      </UserContext.Provider>
    </Provider>
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
        element: (
          <Suspense fallback={"Loadng About page.."}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "grocery",
        element: (
          <Suspense fallback={"Loading Grocery..."}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "restaurant/:resId",
        element: <RestaurantMenu />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
