import React, { useState } from "react";
const AuthContext = React.createContext({
  token: "",
  isloggedIn: false,
  login: (token) => {},
  logout: () => {},
});

export const AuthContextProvider = (props) => {
  const [token, setToken] = useState(null);
  const userIsLoggedIn = !!token;
  const LoginHandler = (token) => {
    setToken(token);
  };
  const LogoutHandler = () => {
    setToken(null);
  };
  const contextValue = {
    token: token,
    isloggedIn: userIsLoggedIn,
    login: LoginHandler,
    logout: LogoutHandler,
  };
  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};
export default AuthContext;
