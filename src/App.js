import React, { useEffect } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchCartData, sendCartData } from "./store/CartHttpActions";
import RootLayout from "./pages/Root";
import ErrorPage from "./pages/Error";
import HomePage from "./pages/Home";
import { loader as weatherLoader } from "./pages/Home";
// import ShopSinglePage, { loader as productDetailLoader } from "./pages/ShopSingle";
// import { action as logoutAction } from "./pages/Logout";
// import AuthenticationPage, { action as authAction } from "./pages/Authentication";

let isInitial = true;

function App() {
  const currentLocation = useSelector((state) => state.location.Location);
  useEffect(() => {
    const preventImageDrag = (e) => e.preventDefault();
    document.addEventListener('dragstart', preventImageDrag);
    return () => {
      document.removeEventListener('dragstart', preventImageDrag);
    };
  }, []);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      errorElement: <ErrorPage />,
      id: "root",
      children: [
        {
          index: true,
          element: <HomePage />,
          loader: () => weatherLoader(currentLocation),
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
