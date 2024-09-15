import Login from "./features/auth/login/Login";
import AuthenticationPage from "./pages/AuthenticationPage";
import HomePage from "./pages/HomePage";
import Signup from "./features/auth/Signup";
import loginAction from "./features/auth/login/loginaction";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import AdminDashboard from "./pages/AdminDashboard";
import AuthProvider from "./features/auth/Authcontext";
import Publishers from "./features/Admin/Publishers";
import PublisherLoader from "./features/Admin/PublisherLoader";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },

    {
      path: "/auth",
      element: <AuthenticationPage />,
      children: [
        { path: "", element: <Navigate to="login" replace={true} /> },
        {
          path: "login",
          element: <Login />,
          action: loginAction,
        },
        {
          path: "signup",
          element: <Signup />,
        },
      ],
    },

    {
      path: "/admin",
      element: <AdminDashboard />,

      children: [
        { path: "", element: <Navigate to="publishers" replace={true} /> },
        {
          path: "publishers",
          element: <Publishers />,
          loader: PublisherLoader,
        },
      ],
    },
  ]);

  return (
    <AuthProvider>
      <RouterProvider router={router} />;
    </AuthProvider>
  );
};

export default App;
