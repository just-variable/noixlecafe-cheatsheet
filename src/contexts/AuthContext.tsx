import { createContext, useContext, useState } from "react";

type AuthContextType = {
  user: any;
  login: (userData: any) => void;
  logout: () => void;
}


const AuthContext = createContext<AuthContextType | undefined>(undefined);

type AuthProviderProps = {
    children: any
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState(null); // or get from localStorage / API

  const login = (userData: any) => setUser(userData);
  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
