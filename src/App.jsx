import Login from "./features/auth/login/Login";
import AuthenticationPage from "./pages/AuthenticationPage";
import Signup from "./features/auth/signup/Signup";
import loginAction from "./features/auth/login/loginaction";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import AdminDashboard from "./pages/AdminDashboard";
import AuthProvider from "./features/auth/Authcontext";
import Publishers from "./features/Admin/Publishers";
import Users from "./features/Admin/Users";
import userLoader from "./features/Admin/UserLoader";
import PublisherDashboard from "./pages/PublisherDashboard";
import News from "./features/publishers/News";
import newsLoader from "./features/publishers/newsloader";
import NewArticle from "./features/publishers/NewArticle";
import addNewArticleAction from "./features/publishers/addNewArticleAction";
import { lazy, Suspense, useState } from "react";
import signupAction from "./features/auth/signup/signupAction";
import { SnackbarProvider } from "notistack";
import articleloader from "./features/articles/articleloader";
import Articles from "./features/articles/Articles";
import articleAction from "./features/articles/articleAction";
import Loader from "./ui/Loader";
import EditArticle from "./features/publishers/EditArticle";
import editArticleLoader from "./features/publishers/editArticleLoader";
import editArticleAction from "./features/publishers/editArticleAction";
import SectionPage from "./features/section/SectionPage";
import NewsSection from "./features/section/NewsSection";
import CampusSection from "./features/section/CampusSection";
import ErrorBoundary from "./ui/ErrorBoundary";
import ComputerScienceSection from "./features/section/CompterScienceSection";
import RegisterAdmin from "./features/Admin/RegisterAdmin";
import registerAdminAction from "./features/Admin/registerAdminAction";
const HomePage = lazy(() => import("./pages/HomePage"));
const ArticlePage = lazy(() => import("./features/articles/ArticlesPage"));

const App = () => {
  const [userId, setUserId] = useState("");

  localStorage.setItem("redirect", "");
  const router = createBrowserRouter([
    {
      path: "/",

      element: (
        <Suspense fallback={<Loader />}>
          <HomePage />,
        </Suspense>
      ),

      errorElement: <ErrorBoundary />,
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
          action: signupAction,
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
          loader: userLoader("PUBLISHER"),
        },
        {
          path: "users",
          element: <Users />,
          loader: userLoader("USER"),
        },
      ],
    },

    {
      path: "publishers",
      element: <PublisherDashboard />,
      children: [
        {
          path: "",
          element: <Navigate to="/publishers/news" replace={true} />,
        },
        {
          path: "news",
          element: <News />,
          loader: newsLoader,
        },
        {
          path: "add-new-article",
          element: <NewArticle />,
          action: addNewArticleAction,
        },

        {
          path: "news/edit/:id",
          element: <EditArticle />,
          loader: editArticleLoader,
          action: editArticleAction,
        },
      ],
    },

    {
      path: "articles",

      element: (
        <Suspense fallback={<div>Loading...</div>}>
          <ArticlePage />
        </Suspense>
      ),
      children: [
        {
          path: ":id",
          element: <Articles userId={userId} setUserId={setUserId} />,
          loader: articleloader,
          action: articleAction,
        },
      ],
    },

    {
      path: "/section/news",
      element: (
        <SectionPage
          data={{ section: "News" }}
          Component={NewsSection}
        ></SectionPage>
      ),
    },
    {
      path: "/section/campus",
      element: (
        <SectionPage
          data={{ section: "Campus Life" }}
          Component={CampusSection}
        ></SectionPage>
      ),
    },

    {
      path: "/section/computer",
      element: (
        <SectionPage
          data={{ section: "Computer Science" }}
          Component={ComputerScienceSection}
        ></SectionPage>
      ),
    },

    {
      path: "/register/admin",
      element: <RegisterAdmin />,
      action: registerAdminAction,
    },
  ]);

  return (
    <AuthProvider>
      <>
        <SnackbarProvider maxSnack={2} />
        <RouterProvider router={router} />
      </>
    </AuthProvider>
  );
};

export default App;
