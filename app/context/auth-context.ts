import { createContext, useContext } from "react";
import type { AuthContextType } from "~/types/types";

const defaultContextValue: AuthContextType = {
  user: null,
  updateUserInfo: () => {},
};

export const AuthContext = createContext<AuthContextType>(defaultContextValue);

export const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuthContext must be used within an AuthProvider");
  }
  return context;
};
