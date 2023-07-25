import { createContext, useState } from "react";
export const AuthContext = createContext();
function AuthContextProvider({ children }) {
  const [isAuth, setisAuth] = useState(false);
  function Login() {
    setisAuth(true);
  }
  function Logout() {
    setisAuth(false);
  }
  return (
    <AuthContext.Provider value={{ isAuth, Login, Logout }}>
      {children}
    </AuthContext.Provider>
  );
}
export default AuthContextProvider;
