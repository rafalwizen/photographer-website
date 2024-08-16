import './App.css'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Sidebar from "./components/Sidebar.jsx";
import Home from "./components/pages/Home.jsx";
import About from "./components/pages/About.jsx";
import Gallery from "./components/pages/Gallery.jsx";
import Opinions from "./components/pages/Opinions.jsx";
import Offer from "./components/pages/Offer.jsx";
import Contact from "./components/pages/Contact.jsx";

function App() {

    return (
        <>
            <Router>
                <Navbar/>
                <Routes>
                    <Route path={"/photographer-website/"} element={<Home/>}/>
                    <Route path={"/photographer-website/about-me"} element={<About/>}/>
                    <Route path={"/photographer-website/gallery"} element={<Gallery/>}/>
                    <Route path={"/photographer-website/opinions"} element={<Opinions/>}/>
                    <Route path={"/photographer-website/offer"} element={<Offer/>}/>
                    <Route path={"/photographer-website/contact"} element={<Contact/>}/>
                </Routes>
                <Sidebar />
            </Router>
        </>
    )
}

export default App
