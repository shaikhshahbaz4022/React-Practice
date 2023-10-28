import { createContext } from "react";

export const AuthContext = createContext();

function AuthContextProvider({ children }) {
  return (
    <AuthContext.Provider value="batman">{children} </AuthContext.Provider>
  );
}
export default AuthContextProvider;
