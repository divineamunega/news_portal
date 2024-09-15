import { useState } from "react";
import { useLoaderData, useNavigate, useNavigation } from "react-router-dom";

const Publishers = () => {
  const {
    data: tableData,
    noOfPages: totalPages,
    numOfUsers: totalPublishers,
    page: currentPage,
    limit,
  } = useLoaderData();

  const [selectedLimit, setSelectedLimit] = useState(limit);
  const navigate = useNavigate();

  const loading = useNavigation();
  console.log(loading);

  const handlePrevPage = () => {
    if (currentPage > 1) {
      navigate(`?page=${currentPage - 1}&limit=${selectedLimit}`, {
        replace: true,
      });
    }
  };
  const handleNextPage = function () {
    if (currentPage < totalPages) {
      navigate(`?page=${currentPage + 1}&limit=${selectedLimit}`, {
        replace: true,
      });
    }
  };

  const handleLimitChange = (e) => {
    const newLimit = e.target.value;
    setSelectedLimit(newLimit);
    navigate(`?page=1&limit=${newLimit}`, { replace: true });
  };

  return (
    <div className="flex-1 overflow-x-auto">
      <header className="sticky top-0 z-10 flex h-14 items-center justify-between border-b bg-white px-4">
        <div className="flex items-center gap-4">
          <button className="md:hidden">
            <MenuIcon className="h-6 w-6" />
          </button>
          <h1 className="text-lg font-semibold">Publisher Management</h1>
        </div>
        <div className="flex items-center gap-4">
          <button className="rounded-md border border-gray-300 px-4 py-2 hover:bg-gray-100">
            Add Publisher
          </button>
          <button className="rounded-md border border-gray-300 px-4 py-2 hover:bg-gray-100">
            <MoveHorizontalIcon className="h-5 w-5" />
          </button>
        </div>
      </header>

      {/* Table */}
      <main className="p-4">
        <div className="b w-full overflow-auto text-nowrap">
          <table className="w-full border-collapse border border-gray-300">
            <thead className="bg-gray-100">
              <tr>
                <th className="border px-4 py-2">Name</th>
                <th className="border px-4 py-2">Email</th>
                <th className="border px-4 py-2">Articles</th>
                <th className="border px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((user) => (
                <tr key={user.id}>
                  <td className="border px-4 py-2">{user.name}</td>
                  <td className="border px-4 py-2">{user.email}</td>
                  <td className="border px-4 py-2">
                    <span className="rounded bg-yellow-100 px-2 py-1 text-yellow-800">
                      0
                    </span>
                  </td>
                  <td className="border px-4 py-2">
                    <button className="px-2 py-1 text-blue-500 hover:underline">
                      Edit
                    </button>{" "}
                    |
                    <button className="px-2 py-1 text-red-500 hover:underline">
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-4 flex items-center justify-between">
          <button
            onClick={handlePrevPage}
            disabled={currentPage === 1}
            className={`rounded border px-4 py-2 ${currentPage === 1 ? "cursor-not-allowed opacity-50" : ""}`}
          >
            Previous
          </button>
          <div className="flex gap-3 text-sm">
            <p>
              Page {currentPage} of {totalPages}
            </p>
            <div className="flex items-center justify-end">
              <label htmlFor="rows-per-page" className="mr-2 text-sm">
                Rows per page:
              </label>
              <select
                id="rows-per-page"
                value={selectedLimit}
                onChange={handleLimitChange}
                className="rounded border"
              >
                <option value="5">5</option>
                <option value="8">8</option>
                <option value="10">10</option>
                <option value="20">20</option>
              </select>
            </div>
          </div>
          <button
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
            className={`rounded border px-4 py-2 ${currentPage === totalPages ? "cursor-not-allowed opacity-50" : ""}`}
          >
            Next
          </button>
        </div>
      </main>
    </div>
  );
};

export default Publishers;

function MenuIcon(props) {
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
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}

function MoveHorizontalIcon(props) {
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
      <polyline points="18 8 22 12 18 16" />
      <polyline points="6 8 2 12 6 16" />
      <line x1="2" x2="22" y1="12" y2="12" />
    </svg>
  );
}
