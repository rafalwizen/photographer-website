import { useState, useEffect, useRef } from 'react';
import './Sidebar.css';
import { useTranslation } from 'react-i18next';
import Contact from "./pages/Contact.jsx";

const Sidebar = () => {
    const { t } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);
    const sidebarRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        const handleScroll = () => {
            if (isOpen) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        window.addEventListener('scroll', handleScroll);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            window.removeEventListener('scroll', handleScroll);
        };
    }, [isOpen]);

    return (
        <div ref={sidebarRef} className={`sidebar ${isOpen ? 'open' : ''}`}>
            <div
                className={"sidebar-icon"}
                onClick={() => setIsOpen(!isOpen)}
            >
                <span>☰ {t('sidebar.contact')}</span>
            </div>
            <div className={`sidebar-content ${isOpen ? 'open' : ''}`}>
                <Contact/>
            </div>
        </div>
    );
};

export default Sidebar;
