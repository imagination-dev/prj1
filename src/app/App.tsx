import './App.css'
import Main from "./main.tsx";
import Header from "../common/components/header";
import Footer from "../common/components/footer";

function App() {
    return (
        <div className={'container'}>
            <Header/>
            <Main/>
            <Footer/>
        </div>
    )
}

export default App
