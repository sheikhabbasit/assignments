import { useContext } from "react";
import AppRouter from "./router";
import { AuthContext } from "./auth/AuthContext";
import styles from "./App.module.css";
function App() {
  const context = useContext(AuthContext);
  return (
    <div
      className={`${styles.App} ${context.darkModeOn ? styles.darkApp : ""}`}
    >
      <AppRouter />
    </div>
  );
}

export default App;
