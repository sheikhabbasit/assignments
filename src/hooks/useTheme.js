import { useContext } from "react";
import { ThemeContext } from "../themes/ThemeContext";
const useTheme = () => {
  const context = useContext(ThemeContext);
  const theme = context.darkModeOn;
  return theme;
};
export default useTheme;
