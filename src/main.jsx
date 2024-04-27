import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Home from "./Pages/Home.jsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Root.jsx";
import ErrorPaj from "./Components/ErrorPaj.jsx";
import FirebaseProvider from "./FirebaseProvider/FirebaseProvider.jsx";
import Login from "./Components/Login.jsx";
import Register from "./Components/Register.jsx";
import Profile from "./Components/Profile.jsx";
import AllArts from "./Pages/AllArts.jsx";
import AddCraftItem from "./Pages/AddCraftItem.jsx";
import MyArtsCraftList from "./Pages/MyArtsCraftList.jsx";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPaj />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/allarts",
        element: <AllArts />,
      },
      {
        path: "/AddCraftItem",
        element: (
          <PrivateRoute>
            <AddCraftItem />
          </PrivateRoute>
        ),
      },
      {
        path: "/MyArtsCraftList",
        element: (
          <PrivateRoute>
            <MyArtsCraftList />
          </PrivateRoute>
        ),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <FirebaseProvider>
      <RouterProvider router={router} />
    </FirebaseProvider>
  </React.StrictMode>
);
