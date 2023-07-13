import React, { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./Pages/Homereneder/HomePage";
// import Storepage, {
//   Loader as displayLoader,
// } from "./Pages/StoreDisplay/StorePage";
import AboutPage from "./Pages/Aboutrender/About";
// import ProductDisplay from "./Pages/ProductDisplay/ProductDisplay";
import Root from "./Pages/Root/Root";
import ContactPage from "./Pages/ContactPage";
import SignIn from "./Login Pages/SignIn";
import SignUp from "./Login Pages/SignUp";
import ForgotPassword from "./Login Pages/ForgotPassword";
import AuthProtect from "./Pages/AuthRouter/AuthProtect";
import AuthLogin from "./Pages/AuthRouter/AuthLogin";
const Storepage = lazy(() => import("./Pages/StoreDisplay/StorePage"));
const ProductDisplay = lazy(() =>
  import("./Pages/ProductDisplay/ProductDisplay")
);
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        { index: true, element: <HomePage /> },
        { path: "about", element: <AboutPage /> },
        { path: "contact", element: <ContactPage /> },
        {
          element: <AuthLogin />,
          children: [
            { path: "signin", element: <SignIn /> },
            { path: "signup", element: <SignUp /> },
          ],
        },
        { path: "forgotPassword", element: <ForgotPassword /> },
        {
          element: <AuthProtect />,
          children: [
            {
              path: "store",
              id: "product-details",
              children: [
                {
                  index: true,
                  element: (
                    <Suspense fallback={<p>Loading...</p>}>
                      <Storepage />
                    </Suspense>
                  ),
                  loader: () =>
                    import("./Pages/StoreDisplay/StorePage").then((module) =>
                      module.Loader()
                    ),
                },
                {
                  path: ":id",
                  element: (
                    <Suspense fallback={<p>Loading...</p>}>
                      <ProductDisplay />
                    </Suspense>
                  ),
                },
              ],
            },
          ],
        },
      ],
    },
    // {
    //   path: "/store",
    //   element: <Storepage />,
    //   children: [
    //     { path: "/store/product/:productid", element: <ProductDisplay /> },
    //   ],
    // },
  ]);
  return <RouterProvider router={router} />;
}
export default App;
