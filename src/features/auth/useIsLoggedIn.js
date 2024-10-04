import { useCallback, useEffect } from "react";
import { checkAuthStatus } from "../../services/Authservice";
import useAuth from "./useAuth";

const useIsLoggedIn = function (role) {
  const { dispatch } = useAuth();

  const checkIsLoggedIn = useCallback(async () => {
    try {
      dispatch({ type: "auth/loading" });
      const user = await checkAuthStatus(role);
      sessionStorage.setItem("userId", "");
      if (!user) return;
      console.log(user.user.id);

      sessionStorage.setItem("userId", user.user.id);
      dispatch({
        type: "auth/login",
        payload: typeof user === "boolean" ? {} : user.user,
      });
    } catch (err) {
      dispatch({
        type: "auth/error",
        payload: err,
      });
    }
  }, [dispatch, role]);

  useEffect(() => {
    // if (isAuthenticated) return;
    checkIsLoggedIn();
  }, [checkIsLoggedIn, dispatch]);

  return null;
};

export default useIsLoggedIn;
