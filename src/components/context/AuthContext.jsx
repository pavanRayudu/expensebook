import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../../dbConfig";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged, signOut } from 'firebase/auth';
import { useNavigate } from "react-router-dom";

const AuthContext = createContext(null)

export const useAuth = () => useContext(AuthContext);

export function AuthContextProvider({ children }) {
    const [currentUser, setCurrentUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, user => {
            setCurrentUser(user?.email);
            setLoading(false);
        });

        // Clean up subscription
        return () => unsubscribe();
    }, []);

    const loginInWithEmailAndPassword = async (obj) => {
        console.log(obj)
        return await signInWithEmailAndPassword(auth, obj.email, obj.password)
    }

    const signUpWithEmailAndPassword = async (obj) => {
        console.log(obj)
        await createUserWithEmailAndPassword(auth, obj.email, obj.password)
            .then(data => console.log(data))
            .catch(error => console.error(error))
    }

    const logOut = async () => {
        await signOut(auth);
    }

    const value = {
        currentUser,
        loading,
        loginInWithEmailAndPassword,
        signUpWithEmailAndPassword,
        logOut,
    }

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}