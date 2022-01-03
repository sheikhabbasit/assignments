import AppRouter from "./router";
import "./App.css";
import AuthContext from "./auth/AuthContext";
function App() {
  return (
    <AuthContext.Provider>
      <div className="App">
        <AppRouter />
      </div>
    </AuthContext.Provider>
  );
}

export default App;
