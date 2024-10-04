import { RotatingLines } from "react-loader-spinner";
import { Outlet, useNavigation } from "react-router-dom";

export default function ArticlePage() {
  const isLoading = useNavigation().state === "loading";
  if (isLoading)
    return (
      <div className="flex h-[100dvh] w-[98dvw] items-center justify-center">
        <RotatingLines width="80" height="80" strokeColor="black" />
      </div>
    );

  return (
    <div>
      {/* Header */}
      <header className="bg-gray-900 py-4 text-white">
        <div className="container mx-auto flex items-center justify-between px-6">
          <a href="#" className="flex items-center">
            <MountainIcon className="mr-2 h-6 w-6" />
            <span className="text-lg font-bold">Acme Blog</span>
          </a>
          <nav className="hidden space-x-4 md:flex">
            <a href="#" className="hover:text-gray-300">
              Home
            </a>
            <a href="#" className="hover:text-gray-300">
              About
            </a>
            <a href="#" className="hover:text-gray-300">
              Blog
            </a>
            <a href="#" className="hover:text-gray-300">
              Contact
            </a>
          </nav>
          <div className="flex items-center space-x-4">
            <button>
              <SearchIcon className="h-5 w-5" />
            </button>
            <Avatar />
          </div>
        </div>
      </header>

      <Outlet />
      {/* Footer */}
      <footer className="bg-gray-100 py-6">
        <div className="container mx-auto flex items-center justify-between px-6">
          <p className="text-sm text-gray-500">
            &copy; 2024 Acme Blog. All rights reserved.
          </p>
          <nav className="flex space-x-4">
            <a href="#" className="text-sm hover:underline">
              Terms of Service
            </a>
            <a href="#" className="text-sm hover:underline">
              Privacy Policy
            </a>
          </nav>
        </div>
      </footer>
    </div>
  );
}

// Comment Component

function SearchIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M11 17a6 6 0 1 0 0-12 6 6 0 0 0 0 12zm6-3.5 5 5" />
    </svg>
  );
}

function MountainIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M12 2 2 22h20L12 2z" />
    </svg>
  );
}

function Avatar() {
  return (
    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-200">
      <span className="text-sm">AC</span>
    </div>
  );
}
