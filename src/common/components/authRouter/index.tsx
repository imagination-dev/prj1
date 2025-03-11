import {Navigate, Outlet, useLocation} from "react-router";
import {useContext} from "react";
import {AuthContext} from "../../../app/App.tsx";

const AuthRouter = ({isAdmin = false}: { isAdmin?: boolean }) => {
    const {isAuth} = useContext(AuthContext)
    const location = useLocation()

    if (!isAuth) {
        return <Navigate to={isAdmin ? "/admin/login" : "/login"} replace state={{from: location}}/>
    }
    return <Outlet/>;
};

export default AuthRouter;