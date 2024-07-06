import { createContext, useContext, useEffect, useState } from "react";
import { auth, googleProvider } from "../../dbConfig";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged, signOut, signInWithPopup } from 'firebase/auth';

const AuthContext = createContext(null)

export const useAuth = () => useContext(AuthContext);

export function AuthContextProvider({ children }) {
    const [currentUser, setCurrentUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [username, setUsername] = useState("");

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, user => {
            setCurrentUser(user?.email);
            setUsername(user?.displayName);
            setLoading(false);
        });

        // Clean up subscription
        return () => unsubscribe();
    }, []);

    const loginInWithEmailAndPassword = async (obj) => {
        return await signInWithEmailAndPassword(auth, obj.email, obj.password)
    }

    const signUpWithEmailAndPassword = async (obj) => {
        await createUserWithEmailAndPassword(auth, obj.email, obj.password)
            .then(data => console.log(data))
            .catch(error => console.error(error))
    }
    const signInWithGoogleAccount = async () => {
        return await signInWithPopup(auth, googleProvider)
    }

    const logOut = async () => {
        await signOut(auth);
    }

    const value = {
        username,
        currentUser,
        loading,
        loginInWithEmailAndPassword,
        signInWithGoogleAccount,
        signUpWithEmailAndPassword,
        logOut,
    }

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}