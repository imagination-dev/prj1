import {Navigate, Route, Routes} from "react-router";
import Login from "../features/auth/ui";
import UnAuthRouter from "../common/components/unAuthRouter";
import AuthRouter from "../common/components/authRouter";
import LkStudent from "../features/lkStudent";
import LkStudentCourses from "../features/lkStudentСourses";
import LkStudentChat from "../features/chat";
import CurrentChat from "../features/chat/pageCurrentChat";
import Support from "../features/support";
import Cooperation from "../features/cooperation";
import Questions from "../features/questions";
import Refund from "../features/refund";
import Reviews from "../features/reviews";
import Requests from "../features/requests";
import Profile from "../features/profile";
import SubscriptionAction from "../features/subscriptionAction";
import MyAccesses from "../features/myAccesses";
import ControlCards from "../features/conrolCards";
import CertificateActivation from "../features/certificateActivation";
import About from "../features/about";

const RoutersUser = () => {
    return (
        <Routes>
            <Route path={'/support'} element={<Support/>}></Route>
            <Route path={'/reviews'} element={<Reviews/>}></Route>
            <Route path={'/about'} element={<About/>}></Route>
            <Route path={'/cooperation'} element={<Cooperation title={'Сотрудничество и предложения'}/>}></Route>
            <Route element={<UnAuthRouter/>}>
                <Route path={'/login'} element={<Login/>}/>
                <Route path={'/question'} element={<Cooperation title={'Другой вопрос'}/>}/>
            </Route>
            <Route element={<AuthRouter/>}>
                <Route path={'/lk_student'} element={<LkStudent/>}></Route>
                <Route path={'/certificate-activation'} element={<CertificateActivation/>}></Route>
                <Route path={'/lk_student_courses'} element={<LkStudentCourses/>}></Route>
                <Route path={'/lk_student_chat'} element={<LkStudentChat/>}></Route>
                <Route path={'/lk_student_current_chat'} element={<CurrentChat/>}></Route>
                <Route path={'/questions'} element={<Questions/>}></Route>
                <Route path={'/my-accesses'} element={<MyAccesses/>}></Route>
                <Route path={'/control-cards'} element={<ControlCards/>}></Route>
                <Route path={'/refund'} element={<Refund/>}></Route>
                <Route path={'/requests'} element={<Requests/>}></Route>
                <Route path={'/profile'} element={<Profile/>}></Route>
                <Route path={'/subscription-action'} element={<SubscriptionAction/>}></Route>

                <Route path="*" element={<Navigate to="/lk_student"/>}/>
            </Route>

        </Routes>
    );
};

export default RoutersUser;