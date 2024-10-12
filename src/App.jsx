import './App.css';
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from 'react';
import Navbar from "./components/Navbar.jsx";
import Sidebar from "./components/Sidebar.jsx";
import Opinions from "./components/Opinions.jsx";
import About from "./components/pages/About.jsx";
import GalleryContainer from "./components/pages/GalleryContainer.jsx";
import Offer from "./components/pages/Offer.jsx";
import Contact from "./components/pages/Contact.jsx";

const TrackPageView = ({ logPageView }) => {
    const location = useLocation();

    useEffect(() => {
        logPageView();
    }, [location, logPageView]);

    return null;
};

function App({ logPageView }) {
    return (
        <Router>
            <TrackPageView logPageView={logPageView} />
            <div className="app-container">
                <Navbar />
                <div className="main-content">
                    <Routes>
                        <Route path={"/"} element={<About />} />
                        <Route path={"/gallery"} element={<GalleryContainer />} />
                        {/*<Route path={"/offer"} element={<Offer />} />*/}
                        <Route path={"/contact"} element={<Contact />} />
                    </Routes>
                </div>
                {/*<Opinions />*/}
                {/*<Sidebar />*/}
            </div>
        </Router>
    );
}

export default App;
