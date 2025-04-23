import type { ReactNode } from "react";

export interface AuthProviderProps {
  children: ReactNode;
}

export interface User {
  username: string;
  email: string;
  bio: string;
  profilePicture: string;
}

export interface AuthContextType {
  user: User | null;
  updateUserInfo: (updatedData: Partial<User>) => void;
}
