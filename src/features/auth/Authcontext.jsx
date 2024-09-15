import { createContext, useReducer } from "react";

const AuthContext = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "auth/login":
      return {
        ...state,
        user: action.payload,
        isAuthenticated: true,
        isLoading: false,
        isError: false,
      };
    case "auth/logout":
      return {
        ...state,
        user: null,
        isAuthenticated: false,
        isLoading: false,
        isError: false,
        error: null,
      };
    case "auth/loading":
      return { ...state, isLoading: true, isError: false };
    case "auth/error":
      return {
        ...state,
        isError: true,
        isLoading: false,
        error: action.payload,
      };
    default:
      throw new Error("Unknown dispatch action type.");
  }
};

const initialValue = {
  user: null,
  isAuthenticated: false,
  isLoading: false,
  isError: false,
};
const AuthProvider = function ({ children }) {
  const [state, dispatch] = useReducer(reducer, initialValue);
  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext };
export default AuthProvider;
