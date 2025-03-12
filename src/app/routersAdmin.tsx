import {Navigate, Route, Routes} from "react-router";
import UnAuthRouter from "../common/components/unAuthRouter";
import AuthRouter from "../common/components/authRouter";
import AuthAdmin from "../features/authAdmin";
import AdminPanel from "../features/adminPanel";

const RoutersAdmin = () => {

    return (
        <Routes>
            <Route path={'/admin/*'} element={<UnAuthRouter isAdmin={true}/>}>
                <Route path={'login'} element={<AuthAdmin/>}/>
            </Route>
            <Route path={'/admin/*'} element={<AuthRouter isAdmin={true}/>}>
                <Route path={'panel'} element={<AdminPanel/>}></Route>
                <Route path="*" element={<Navigate to="/admin/panel"/>}/>
            </Route>

        </Routes>
    );
};

export default RoutersAdmin;