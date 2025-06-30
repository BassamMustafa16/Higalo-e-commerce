"use client";
import { createContext, useContext, useEffect, useState } from "react";
import { validateToken } from "@/lib/validateToken";
import clearStorage from "@/lib/clearStorage";

type AuthContextType = {
  userName: string | null;
  setUserName: (name: string | null) => void;
};

const AuthContext = createContext<AuthContextType>({
  userName: null,
  setUserName: () => {},
});

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [userName, setUserName] = useState<string | null>(null);

  useEffect(() => {
    const validToken = validateToken();
    if (validToken) setUserName(localStorage.getItem("firstName"));
    else clearStorage();
  }, []);

  return (
    <AuthContext.Provider value={{ userName, setUserName }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
