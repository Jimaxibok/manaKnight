import React, { useReducer } from "react";
import MkdSDK from "./utils/MkdSDK";

export const AuthContext = React.createContext();

const storageUser = localStorage.getItem("user")
const user = storageUser ? JSON.parse(storageUser) : null

const initialState = {
  isAuthenticated: user ? true : false,
  user: user ? user : null,
  token: user?.token ? user?.token : null,
  role: user?.role ? user?.role : null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "LOGIN": 
      //TODO
      return {
        ...state,
        ...action.payload,
        isAuthenticated: true
      };
    case "LOGOUT":
      localStorage.clear();
      return {
        ...state,
        isAuthenticated: false,
        user: null,
      };
    default:
      return state;
  }
};

let sdk = new MkdSDK();

export const tokenExpireError = (dispatch, errorMessage) => {
  const role = localStorage.getItem("role");
  if (errorMessage === "TOKEN_EXPIRED") {
    dispatch({
      type: "Logout",
    });
    window.location.href = "/" + role + "/login";
  }
};

export const setUser = (dispatch, user) => {
  localStorage.setItem("user", JSON.stringify(user))
  dispatch({
    type: "LOGIN",
    payload: user
  });
}

export const logOut = () => {
  dispatch({
    type: "Logout",
  });
  window.location.href = "/" + role + "/login";
}

const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  React.useEffect(() => {
    //TODO
  }, []);

  return (
    <AuthContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
