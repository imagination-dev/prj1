import {Navigate, Route, Routes} from "react-router";
import UnAuthRouter from "../common/components/unAuthRouter";
import AuthRouter from "../common/components/authRouter";
import AuthAdmin from "../features/authAdmin";

const RoutersAdmin = () => {

    return (
        <Routes>
            <Route path={'/admin/*'} element={<UnAuthRouter isAdmin={true}/>}>
                <Route path={'login'} element={<AuthAdmin/>}/>
            </Route>
            <Route path={'/admin/*'} element={<AuthRouter isAdmin={true}/>}>
                <Route path={'panel'} element={<h3>Admin panel</h3>}></Route>
                <Route path="*" element={<Navigate to="/admin/panel"/>}/>
            </Route>

        </Routes>
    );
};

export default RoutersAdmin;