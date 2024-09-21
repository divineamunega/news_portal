import { RotatingLines } from "react-loader-spinner";
import useAuth from "../features/auth/useAuth";
import useIsLoggedIn from "../features/auth/useIsLoggedIn";
import { NavLink, Outlet } from "react-router-dom";
import { IoBookOutline } from "react-icons/io5";
import { FaPlus } from "react-icons/fa6";
import { MdOutlineBookmarks } from "react-icons/md";

const PublisherDashboard = () => {
  useIsLoggedIn("PUBLISHER");
  const { isAuthenticated, isLoading, error, user } = useAuth();

  if (isLoading)
    return (
      <div className="flex h-[100dvh] w-[98dvw] items-center justify-center">
        <RotatingLines width="80" height="80" strokeColor="black" />
      </div>
    );

  if (!isAuthenticated && !isLoading)
    return <div>{error?.message ? error.message : ""}</div>;

  return (
    <div className="flex h-[100dvh] min-h-screen w-full overflow-x-hidden">
      {/* Sidebar */}
      <aside className="hidden w-64 flex-col border-r bg-gray-100 p-4 md:flex">
        <div className="mb-6 flex flex-col gap-4">
          <a href="#" className="flex items-center gap-2 font-semibold">
            <span>Publishers Page</span>
          </a>
          <p className="font-semibold">{user.name}</p>
        </div>
        <nav className="flex flex-col gap-2">
          <NavLink
            to="news"
            className={({ isActive }) =>
              [
                "flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-gray-200 hover:text-gray-900",
                isActive ? "bg-gray-200 text-gray-900" : "",
              ].join(" ")
            }
          >
            <IoBookOutline className="h-5 w-5" />
            News
          </NavLink>

          <NavLink
            to="add-new-article"
            className={({ isActive }) =>
              [
                "flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-gray-200 hover:text-gray-900",
                isActive ? "bg-gray-200 text-gray-900" : "",
              ].join(" ")
            }
          >
            <FaPlus className="h-5 w-5" />
            Add new Article
          </NavLink>

          <NavLink
            to="drafts"
            className={({ isActive }) =>
              [
                "flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-gray-200 hover:text-gray-900",
                isActive ? "bg-gray-200 text-gray-900" : "",
              ].join(" ")
            }
          >
            <MdOutlineBookmarks className="h-5 w-5" />
            Drafts
          </NavLink>
        </nav>
      </aside>

      <div className="overflow-scrol h-full w-full">
        <Outlet />
      </div>
    </div>
  );
};

export default PublisherDashboard;
