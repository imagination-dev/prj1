import './App.css'
import Main from "./main.tsx";
import Header from "../common/components/header";
import Footer from "../common/components/footer";
import {createContext, useState} from "react";

export const AuthContext = createContext<any>(null)

function App() {
    const [isAuth, setIsAuth] = useState(false)

    return (
        <AuthContext.Provider value={{
            isAuth: isAuth,
            login: () => setIsAuth(true),
            exit: () => setIsAuth(false)
        }}>
            <div className={'container'}>
                <Header/>
                <Main/>
                <Footer/>
            </div>
        </AuthContext.Provider>
    )
}

export default App
