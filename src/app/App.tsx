import './App.css'
import Header from "../common/components/header";
import Footer from "../common/components/footer";
import {createContext, useState} from "react";
import RoutersUser from "./routersUser.tsx";
import {useLocation} from "react-router";
import RoutersAdmin from "./routersAdmin.tsx";

export const AuthContext = createContext<any>(null)

function App() {
    const [isAuth, setIsAuth] = useState(false)
    const location = useLocation()
    const isAdminRouters = location.pathname.split('/')[1] === 'admin'

    return (
        <AuthContext.Provider value={{
            isAuth: isAuth,
            login: () => setIsAuth(true),
            exit: () => setIsAuth(false),
            isAdmin: isAdminRouters
        }}>
            <div className={'container'}>
                <Header/>
                {isAdminRouters ? <RoutersAdmin/> : <RoutersUser/>}
                <Footer/>
            </div>
        </AuthContext.Provider>
    )
}

export default App
