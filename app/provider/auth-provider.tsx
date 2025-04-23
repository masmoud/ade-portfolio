import { useState, type ReactNode } from "react";
import { AuthContext } from "~/context/auth-context";
import type { AuthProviderProps, User } from "~/types/types";

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState({
    username: "JohnDoe",
    email: "johndoe@example.com",
    bio: "Just another user.",
    profilePicture: "/path/to/default.jpg",
  });

  const updateUserInfo = (updatedData: Partial<User>) => {
    // Logic to update user information, e.g., API call or context state update
    setUser((prevState) => ({ ...prevState, ...updatedData }));
  };

  return <AuthContext.Provider value={{ user, updateUserInfo }}>{children}</AuthContext.Provider>;
};
