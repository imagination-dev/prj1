import {createRoot} from 'react-dom/client'
import './index.css'
import App from './app/App.tsx'
import {BrowserRouter} from "react-router";
import './common/styles/font.css'
import {Bounce, ToastContainer} from "react-toastify";
import "dayjs/locale/ru";
// import dayjs from "dayjs";
//
// dayjs.locale("ru");

createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
        <ToastContainer
            position="top-right"
            autoClose={2000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick={false}
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="colored"
            transition={Bounce}
        />
        <App/>
    </BrowserRouter>,
)
