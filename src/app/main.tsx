import {Navigate, Route, Routes} from "react-router";
import Login from "../features/auth/ui";
import UnAuthRouter from "../common/components/unAuthRouter";
import AuthRouter from "../common/components/authRouter";
import LkStudent from "../features/lkStudent";
import LkStudentCourses from "../features/lkStudentСourses";

const Main = () => {
    return (
        <Routes>
            <Route path={'/login'} element={<UnAuthRouter/>}>
                <Route index element={<Login/>}/>
            </Route>
            <Route element={<AuthRouter/>}>
                <Route path={'/lk_student'} element={<LkStudent/>}></Route>
                <Route path={'/lk_student_courses'} element={<LkStudentCourses/>}></Route>
                <Route path="*" element={<Navigate to="/lk_student"/>}/>
            </Route>

        </Routes>
    );
};

export default Main;