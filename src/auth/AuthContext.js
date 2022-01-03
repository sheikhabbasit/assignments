import React, { createContext, useState } from "react";

export const AuthContext = createContext();

function AuthContextProvider(props) {
  const [darkModeOn, setDarkModeOn] = useState(false);
  //
  const toggleDarkMode = () => {
    setDarkModeOn((prevState) => !prevState);
  };

  const value = { darkModeOn, toggleDarkMode };

  return (
    <AuthContext.Provider value={value}>{props.children}</AuthContext.Provider>
  );
}
export default AuthContextProvider;
