import { useState } from "react";
import { createContext } from "react";
export const AuthContext = createContext();
function AuthContextProvider({children}) {
    const [authState, setAuthState] = useState({
        isAuth: false,
        token: null,
    });
    let loginUser = (value) => {
        setAuthState({ isAuth: true, token: value })
    }
    let logoutUser = () => {
        setAuthState({ isAuth: false, token: null })
    }
    return (
        <div>
            <AuthContext.Provider value={{authState, loginUser, logoutUser}}>
                {children}
            </AuthContext.Provider>
        </div>
    )
}

export default AuthContextProvider;
