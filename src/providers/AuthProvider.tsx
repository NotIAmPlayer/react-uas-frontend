import axios from "axios";
import { createContext, ReactNode, useContext, useEffect, useMemo, useState } from "react";

const AuthContext = createContext<{token: null | string, setToken: (token: string) => void}>({token: null, setToken: function() {}});

interface AuthProviderProps {
    children: ReactNode
}

const AuthProvider = ({ children }: AuthProviderProps) => {
    const [token, setToken_] = useState(localStorage.getItem("token"));

    const setToken = (newToken: string) => {
        setToken_(newToken);
    };

    useEffect(() => {
        if (token) {
        axios.defaults.headers.common["Authorization"] = "Bearer " + token;
        localStorage.setItem('token',token);
        } else {
        delete axios.defaults.headers.common["Authorization"];
        localStorage.removeItem('token')
        }
    }, [token]);

    const contextValue = useMemo(
        () => ({
        token,
        setToken,
        }),
        [token]
    );

    return (
        <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
    );
};

export const useAuth = () => {
  return useContext(AuthContext);
};

export default AuthProvider;
