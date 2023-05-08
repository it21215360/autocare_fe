import React, {
  useState,
  useEffect,
  createContext,
  useContext,
  useCallback,
} from "react";
import { signIn as sendSignInRequest } from "../api/auth";

function AuthProvider(props) {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(false);

  const signIn = useCallback(async (userInfo) => {
    const result = await sendSignInRequest(userInfo);
    if (result.isOk) {
      setUser(result.data);
    }
    setLoading(false);
    return result;
  }, []);

  const signOut = useCallback(() => {
    setUser(undefined);
  }, []);

  return (
    <AuthContext.Provider
      value={{ user, signIn, signOut, loading }}
      {...props}
    />
  );
}

const AuthContext = createContext({ loading: false });
const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };
