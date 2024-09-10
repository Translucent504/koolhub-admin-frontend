import { useQueryClient } from "@tanstack/react-query";
import { createContext, useEffect, useState } from "react";
import {
  authenticateUser,
  clearAuthentication,
  initializeAuth,
} from "./service";

export let AuthContext = createContext(undefined);

let initialized = false;
export function AuthProvider({ children }) {
  let [authState, setAuthState] = useState(null);
  let [loading, setLoading] = useState(true);

  const queryClient = useQueryClient();

  useEffect(() => {
    const initialize = async () => {
      if (!initialized) {
        try {
          const user = await initializeAuth();
          console.log({ user });
          if (!user) {
            setAuthState(null);
            queryClient.clear();
            return;
          }
          setAuthState(user);
        } catch (error) {
          if (error) {
            console.error("Authentication error:", error);
            setAuthState(null);
            queryClient.clear();
          }
        } finally {
          setLoading(false);
        }
      }
    };
    initialize();
    return () => {
      initialized = true;
    };
  }, []);

  let signOut = async (callback) => {
    await clearAuthentication();
    setAuthState(null);
    queryClient.clear();
    callback?.();
  };

  let signIn = async ({ username, password }) => {
    const res = await authenticateUser({ username, password });
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
