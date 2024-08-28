import { useQueryClient } from "@tanstack/react-query";
import { createContext, useEffect, useState } from "react";
import {
  authenticateUser,
  clearAuthentication,
  getUserDetails,
} from "./service";

export let AuthContext = createContext(undefined);

export function AuthProvider({ children }) {
  let [authState, setAuthState] = useState(null);
  let [loading, setLoading] = useState(true);

  const queryClient = useQueryClient();

  useEffect(() => {
    const initializeAuth = async () => {
      try {
        const user = await getUserDetails();
        if (!user) {
          setAuthState(null);
          queryClient.clear();
          return;
        }
        setAuthState({ user, loading });
      } catch (error) {
        if (error) {
          console.error("Authentication error:", error);
          setAuthState(null);
          queryClient.clear();
        }
      } finally {
        setLoading(false);
      }
    };

    initializeAuth();
  }, []);

  let signOut = async (callback) => {
    await clearAuthentication();
    setAuthState(null);
    queryClient.clear();
    callback?.();
  };

  let signIn = async () => {
    const res = await authenticateUser();
    setAuthState(res);
  };

  let value = {
    user: authState,
    signIn,
    signOut,
    loading,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
