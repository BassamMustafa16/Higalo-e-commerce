"use client";
import { createContext, useContext, useEffect, useState } from "react";
import { validateToken } from "@/lib/validateToken";
import clearStorage from "@/lib/clearStorage";
import axios from "axios";

type Role = "USER" | "ADMIN" | "MODERATOR" | null;

type AuthContextType = {
  userName: string | null;
  userId: string | null;
  role: Role;
  token: string | null;
  favorites: any[]; // Adjust type as needed
  setFavorites: (favorites: any[]) => void;
  login: (data: {
    token: string;
    userName: string;
    userId: string;
    role: Role;
  }) => void;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType>({
  userName: null,
  userId: null,
  role: null,
  token: null,
  favorites: [],
  setFavorites: () => {},
  login: () => {},
  logout: () => {},
});

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [userName, setUserName] = useState<string | null>(null);
  const [userId, setUserId] = useState<string | null>(null);
  const [role, setRole] = useState<Role>(null);
  const [token, setToken] = useState<string | null>(null);
  const [favorites, setFavorites] = useState<any[]>([]);

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    const storedName = localStorage.getItem("firstName");
    const storedId = localStorage.getItem("userId");
    const storedRole = localStorage.getItem("role") as Role;

    const fetchFavorites = async () => {
      if (storedToken && validateToken({ token: storedToken })) {
        setToken(storedToken);
        setUserName(storedName);
        setUserId(storedId);
        setRole(storedRole);

        try {
          const res = await axios.get(
            `${process.env.NEXT_PUBLIC_API_URL}/favorite/get-all`,
            { headers: { Authorization: `Bearer ${storedToken}` } }
          );
          if (res.status === 200) {
            setFavorites(res.data);
          } else {
            setFavorites([]);
          }
        } catch (err) {
          console.log(err);
          setFavorites([]);
        }
      } else {
        clearAuth();
      }
    };

    fetchFavorites();
  }, []);

  const login = async ({
    token,
    userName,
    userId,
    role,
  }: {
    token: string;
    userName: string;
    userId: string;
    role: Role;
  }) => {
    localStorage.setItem("token", token);
    localStorage.setItem("userName", userName);
    localStorage.setItem("userId", userId);
    localStorage.setItem("role", role ?? "");

    setToken(token);
    setUserName(userName);
    setUserId(userId);
    setRole(role);

    // Fetch favorites after login
    try {
      const res = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/favorite/get-all`,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      if (res.status === 200) {
        const data = res.data;
        setFavorites(data);
      } else {
        setFavorites([]);
      }
    } catch (err) {
      console.log(err);
      setFavorites([]);
    }
  };

  const clearAuth = () => {
    clearStorage();
    setToken(null);
    setUserName(null);
    setUserId(null);
    setRole(null);
  };

  return (
    <AuthContext.Provider
      value={{
        userName,
        userId,
        role,
        token,
        favorites,
        setFavorites,
        login,
        logout: clearAuth,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
