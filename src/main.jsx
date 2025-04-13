import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import ProductDetails from "./components/ProductDetails.jsx";
// import ProductList from "./components/ProductList.jsx";
// import Cart from "./components/Cart.jsx";
import Error from "./components/Error.jsx";
import Home from "./components/Home.jsx";
// import SignIn from "./components/SignIn.jsx";
// import Checkout from "./components/Checkout.jsx";
import { lazy, Suspense } from "react";

//using lazy or app optimization
const Shopall = lazy(() => import("./components/ProductList.jsx"));
const SignIn = lazy(() => import("./components/SignIn.jsx"));
const Checkout = lazy(() => import("./components/Checkout.jsx"));
const Cart = lazy(() => import("./components/Cart.jsx"));
const ProductDetails = lazy(() => import("./components/ProductDetails.jsx"));

//configuring routing
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      { path: "/home", element: <Home /> },
      { path: "/", element: <Home /> },
      {
        path: "/shopall",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <Shopall />
          </Suspense>
        ),
      },
      {
        path: "/cart",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <Cart />
          </Suspense>
        ),
      },
      {
        path: "/product/:id",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <ProductDetails />
          </Suspense>
        ),
      },
      {
        path: "/signIn/",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <SignIn />
          </Suspense>
        ),
      },
      {
        path: "/checkout",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <Checkout />
          </Suspense>
        ),
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  //wrapping inside Router provider by providing appRouter prop in router
  <RouterProvider router={appRouter}>
    <App />
  </RouterProvider>
);
