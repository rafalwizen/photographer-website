import './App.css'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Sidebar from "./components/Sidebar.jsx";
import About from "./components/pages/About.jsx";
import GalleryContainer from "./components/pages/GalleryContainer.jsx";
import Opinions from "./components/pages/Opinions.jsx";
import Offer from "./components/pages/Offer.jsx";
import Contact from "./components/pages/Contact.jsx";

function App() {

    return (
        <>
            <Router>
                <Navbar/>
                <Routes>
                    <Route path={"/"} element={<About/>}/>
                    <Route path={"/gallery"} element={<GalleryContainer/>}/>
                    <Route path={"/opinions"} element={<Opinions/>}/>
                    <Route path={"/offer"} element={<Offer/>}/>
                    <Route path={"/contact"} element={<Contact/>}/>
                </Routes>
                <Sidebar />
            </Router>
        </>
    )
}

export default App
