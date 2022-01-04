import { useContext } from "react";
import AppRouter from "./router";
import { ThemeContext } from "./themes/ThemeContext";
import styles from "./App.module.css";
function App() {
  const context = useContext(ThemeContext);
  return (
    <div
      className={`${styles.App} ${context.darkModeOn ? styles.darkApp : ""}`}
    >
      <AppRouter />
    </div>
  );
}

export default App;
