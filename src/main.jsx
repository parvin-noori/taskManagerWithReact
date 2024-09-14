import SignUp from "./pages/SignUp";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErorrPage from "./errorPage";
import "./index.css";
import { StrictMode } from "react";
import Login from "./pages/Login";
import App from "./pages/App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErorrPage />,
  },
  {
    path: "/signup",
    element: <SignUp />,
    errorElement: <ErorrPage />,
  },
  {
    path: "/login",
    element: <Login />,
    errorElement: <ErorrPage />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <div className="h-svh flex items-center justify-center w-svw flex-col">
      <RouterProvider router={router} />
    </div>
  </StrictMode>
);
