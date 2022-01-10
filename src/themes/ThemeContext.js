import React, { createContext, useState } from "react";

export const ThemeContext = createContext();

function ThemeContextProvider(props) {
  const [darkModeOn, setDarkModeOn] = useState(false);
  const toggleDarkMode = () => {
    setDarkModeOn((prevState) => !prevState);
  };

  const value = { darkModeOn, toggleDarkMode };

  return (
    <ThemeContext.Provider value={value}>
      {props.children}
    </ThemeContext.Provider>
  );
}
export default ThemeContextProvider;
