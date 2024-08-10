import './App.css'
import Navbar from "./components/Navbar.jsx";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./components/pages/Home.jsx";
import Contact from "./components/pages/Contact.jsx";
import Gallery from "./components/pages/Gallery.jsx";
import SignUp from "./components/pages/SignUp.jsx";
import Footer from "./components/Footer.jsx";

function App() {

    return (
        <>
            <Router>
                <Navbar/>
                <Routes>
                    <Route path={"/photographer-website"} element={<Home/>}/>
                    <Route path={"/contact"} element={<Contact/>}/>
                    <Route path={"/gallery"} element={<Gallery/>}/>
                    <Route path={"/sign-up"} element={<SignUp/>}/>
                </Routes>
                {/*<Footer/>*/}
            </Router>
        </>
    )
}

export default App
