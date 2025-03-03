import {Route, Routes} from "react-router";
import Login from "../features/auth/ui";

const Main = () => {
    return (
        <Routes>
            <Route path={'login'} element={<Login/>}></Route>
        </Routes>
    );
};

export default Main;