import React, {
  useState,
  useEffect,
  createContext,
  useContext,
  useCallback,
} from "react";
import { getUser, signIn as sendSignInRequest } from "../api/auth";

function AuthProvider(props) {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   (async function () {
  //     // const result = await getUser();
  //     // if (result.isOk) {
  //     //   setUser(result.data);
  //     // }
  //     //setUser(result.data);
  //     setLoading(false);
  //   })();
  // }, []);

  const signIn = useCallback(async (username, password) => {
    const result = await sendSignInRequest(username, password);
    if (result.isOk) {
      debugger;
      setUser(result.data);
      setLoading(false);
    }

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
