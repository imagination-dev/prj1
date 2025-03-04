import {createRoot} from 'react-dom/client'
import './index.css'
import App from './app/App.tsx'
import {BrowserRouter} from "react-router";
import './common/styles/font.css'

createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
        <App/>
    </BrowserRouter>,
)
