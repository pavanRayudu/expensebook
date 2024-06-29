import { createContext, useMemo } from "react";
import { useLocalStorage } from "../helpers/useLocalStorage";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext(null);


export const AuthContextProvider = ({ children }) => {
    const [user, setUser] = useLocalStorage("user", null);
    const navigate = useNavigate();

    function login(data) {
        setUser(data);
        navigate('/')

    }
    function logout() {
        setUser(null);
        navigate('/login', { replace: true })
    }

    const value = useMemo(() => ({
        user, login, logout
    }), [user])
    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
export default AuthContext;