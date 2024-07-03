import { createContext, useState } from "react";

const AuthContext = createContext({
    username: "",
    updateUser: () => { },
})

export function AuthContextProvider({ children }) {
    let username = "";
    function updateUser(val) {
        username = val
    }
    const value = { username, updateUser }
    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export default AuthContext;