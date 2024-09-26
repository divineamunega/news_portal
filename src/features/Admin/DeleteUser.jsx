import { enqueueSnackbar } from "notistack";
import BASE_URL from "../../ BASE_URL";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { RotatingLines } from "react-loader-spinner";

const DeleteUser = ({ id, setId }) => {
  const [isLoading, setIsloading] = useState();
  const navigate = useNavigate();
  const deleteUser = async function () {
    try {
      setIsloading(true);
      const res = await fetch(`${BASE_URL}users/${id}`, {
        method: "DELETE",
        credentials: "include",
      });

      if (!res.ok) throw new Error("An unexptected error occured, Try again");

      setIsloading(false);
      setId("");
      navigate("");
    } catch (err) {
      enqueueSnackbar(err.message);
      setIsloading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-20 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm transition-opacity duration-500">
      <div className="w-[500px] scale-100 transform rounded-lg bg-white p-6 shadow-lg transition-transform duration-500">
        <h2 className="mb-4 text-xl font-semibold">Delete User?</h2>
        <p className="pb-5">Note that this action will be irreversible</p>
        <div className="flex justify-end gap-2">
          <button
            className="rounded bg-gray-300 px-4 py-2 hover:bg-gray-400"
            onClick={() => setId("")}
            disabled={isLoading}
          >
            Cancel
          </button>
          <button
            className="flex gap-3 text-nowrap rounded bg-black px-4 py-2 text-white duration-500 hover:bg-red-500"
            onClick={deleteUser}
            disabled={isLoading}
          >
            DELETE
            {isLoading && (
              <RotatingLines strokeColor="white" width="20px" height="20px" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteUser;
