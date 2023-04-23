import { createContext, useContext, useMemo, useState } from "react";
import { FirebaseAuth } from "../utils/auth";

const { signIn, signOut } = FirebaseAuth;
const Context = createContext();

const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const login = () => {
    signIn().then((user) => setCurrentUser(user));
  };
  const logout = () => {
    signOut().then(() => setCurrentUser(null));
  };
  const value = useMemo(() => {
    return {
      login,
      logout,
      currentUser,
    };
  }, [currentUser, login, logout]);
  return <Context.Provider value={{}}> {children}</Context.Provider>;
};

export const useAuthContext = () => {
  return useContext(Context);
};
export default AuthProvider;
