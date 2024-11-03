import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import SignUp from "./pages/signup/SignUp";
import ErorrPage from "./pages/errorPage";
import Login from "./pages/login/Login";
import App from "./pages/App";
import Create from "./pages/Create";
import List from "./pages/List";
import "./index.css";

const isAuthenticated = () => {
  return localStorage.getItem("token") !== null;
};

function ProtectedRoute({ element }) {
  return isAuthenticated() ? element : <Navigate to="/login" />;
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <ProtectedRoute element={<App />} />,
    errorElement: <ErorrPage />,
  },
  {
    path: "/create",
    element: <ProtectedRoute element={<Create />} />,
    errorElement: <ErorrPage />,
  },
  {
    path: "/list",
    element: <ProtectedRoute element={<List />} />,
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
