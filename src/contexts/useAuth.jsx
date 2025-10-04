import { useContext } from "react";
import { AuthContext } from "./fakeAuthContext";

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined)
    throw new Error("Authentication was used outside AuthProvider");
  return context;
}
