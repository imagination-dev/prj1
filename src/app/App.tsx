import './App.css'
import Header from "../common/components/header";
import Footer from "../common/components/footer";
import {createContext, useEffect, useState} from "react";
import RoutersUser from "./routersUser.tsx";
import {useLocation} from "react-router";
import RoutersAdmin from "./routersAdmin.tsx";
import axios from "axios";
import {masks} from "../common/utils/mask.ts";

export const AuthContext = createContext<any>(null)
export const MobileContext = createContext<any>(null)

function App() {
    const [isAuth, setIsAuth] = useState(true)
    const location = useLocation()
    const isAdminRouters = location.pathname.split('/')[1] === 'admin'
    const [mask, setMask] = useState("");

    // Функция для получения страны по IP
    useEffect(() => {
        axios.get("https://ipapi.co/json/") // Запрос для определения страны
            .then((response: any) => {
                if (response.data && response.data.country_code) {

                    setMask(masks[response.data.country_code.toUpperCase() || 'RU'])
                }
            })
            .catch(() => {
                setMask(masks['RU'])
            });
    }, []);
    if (!mask) return
    return (
        <MobileContext.Provider value={{
            mask: mask
        }}>
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
        </MobileContext.Provider>
    )
}

export default App
