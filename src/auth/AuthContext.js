import { createContext } from "react";

const AuthContext = createContext({
  darkModeOn: false,
});
const Provider = AuthContext.Provider;
export default AuthContext;
