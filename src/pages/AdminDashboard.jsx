import { RotatingLines } from "react-loader-spinner";
import useAuth from "../features/auth/useAuth";
import useIsLoggedIn from "../features/auth/useIsLoggedIn";
import { Outlet } from "react-router-dom";
const AdminDashboard = function () {
  useIsLoggedIn("ADMIN");
  const { isAuthenticated, isLoading, error, user } = useAuth();

  if (isLoading)
    return (
      <div className="flex h-[100dvh] w-[98dvw] items-center justify-center">
        <RotatingLines width="80" height="80" />
      </div>
    );

  if (!isAuthenticated && !isLoading)
    return <div>{error?.message ? error.message : ""}</div>;

  return (
    <div className="flex min-h-screen w-full overflow-x-hidden">
      {/* Sidebar */}
      <aside className="hidden w-64 flex-col border-r bg-gray-100 p-4 md:flex">
        <div className="mb-6 flex flex-col gap-4">
          <a href="#" className="flex items-center gap-2 font-semibold">
            <Package2Icon className="h-6 w-6" />
            <span>ACU NEWS ADMIN PAGE</span>
          </a>
          <p className="font-semibold">{user.name}</p>
        </div>
        <nav className="flex flex-col gap-2">
          <a
            href="#"
            className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-gray-200 hover:text-gray-900"
          >
            <UsersIcon className="h-5 w-5" />
            Publisher Management
          </a>
          <a
            href="#"
            className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-gray-200 hover:text-gray-900"
          >
            <UserIcon className="h-5 w-5" />
            User Management
          </a>
        </nav>
      </aside>

      <Outlet />
    </div>
  );
};

function Package2Icon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z" />
      <path d="m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9" />
      <path d="M12 3v6" />
    </svg>
  );
}

function UserIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}

function UsersIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

export default AdminDashboard;
