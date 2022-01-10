import AppRouter from "./router";
import styles from "./App.module.css";
import useTheme from "./hooks/useTheme";
function App() {
  const theme = useTheme();
  return (
    <div className={`${styles.App} ${theme ? styles.darkApp : ""}`}>
      <AppRouter />
    </div>
  );
}

export default App;
