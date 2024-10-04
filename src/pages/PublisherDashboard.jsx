import { useState } from "react";
import { RotatingLines } from "react-loader-spinner";
import useAuth from "../features/auth/useAuth";
import useIsLoggedIn from "../features/auth/useIsLoggedIn";
import { Link, NavLink, Outlet } from "react-router-dom";
import { IoBookOutline } from "react-icons/io5";
import { FaPlus } from "react-icons/fa6";
import { MdOutlineBookmarks } from "react-icons/md";

const PublisherDashboard = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

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
      {/* Hamburger Menu for small screens */}
      <button
        className="absolute left-4 top-4 z-20 md:hidden"
        onClick={() => setSidebarOpen(!isSidebarOpen)}
      >
        {isSidebarOpen ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        )}
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-10 w-64 transform bg-gray-100 p-4 transition-transform duration-300 md:translate-x-0 ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} flex-col border-r md:relative md:flex md:w-64`}
      >
        <div className="mb-6 mt-10 flex flex-col gap-4 md:mt-0">
          <Link to="/" className="flex items-center gap-2 font-semibold">
            <span>Publishers Page</span>
          </Link>
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

      <div className="flex-1 overflow-auto p-4">
        <Outlet />
      </div>
    </div>
  );
};

export default PublisherDashboard;
