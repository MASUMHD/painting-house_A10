import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateCurrentUser, updateProfile} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/FirebaseConfig";

export const AuthContext = createContext(null);
// Google provider
const GoogleProvider = new GoogleAuthProvider();
const GithubProvider = new GithubAuthProvider();



const FirebaseProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    // console.log(user);
    const [loading, setLoading] = useState(true);
    // console.log(loading);

    // createUser
    const createUser = ( email, password) => {
        setLoading(true)
       return createUserWithEmailAndPassword(auth, email, password)
    }

    // update user profile
    const updateUserProfile = ( name, image) => {
        return updateProfile(auth, updateCurrentUser,{
            displayName: name,
            photoURL: image
        })
    }
    
    // Login User
    const loginUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    // google login
   const googleLogin = () => {
       setLoading(true)
       return signInWithPopup(auth, GoogleProvider)
   }
    
    // github login
    const githubLogin = () => {
        setLoading(true)
        return signInWithPopup(auth, GithubProvider)
    }

    // LogOut
    const logOut = () => {
        setUser(null)
        signOut(auth)
    }
    
    // Store User Data
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
                setLoading(false)
            } 
        })
        // return () => {
        //     setUser(null)
        // }
        return () => unsubscribe()

    }, [])

    
    const allValues = {
        createUser,
        loginUser,
        googleLogin,
        githubLogin,
        logOut,
        user,
        loading,
        updateUserProfile
        
    }

    return (
        <AuthContext.Provider value={allValues}>
            {children}
        </AuthContext.Provider>
    );
};

export default FirebaseProvider;