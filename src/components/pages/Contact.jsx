import {useState} from 'react';
import Notification from '../Notification';
import emailjs from '@emailjs/browser';
import '../../App.css';
import './Contact.css';
import {useTranslation} from "react-i18next";
import img1 from '../../../public/images/img-test-5-small.jpg';

const Contact = () => {
    const {t} = useTranslation();
    const [notification, setNotification] = useState(null);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        weddingDate: '',
        message: '',
    });

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({...formData, [name]: value});
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.name || !formData.email || !formData.phone || !formData.weddingDate || !formData.message) {
            setNotification({ message: t('contact.send_alert_success'), type: 'success' });
            setTimeout(() => setNotification(null), 3000);
        }
        fetch('config/config.json')
            .then(response => response.json())
            .then(config => {
                emailjs.sendForm(config.emailjs.serviceID, config.emailjs.templateID, e.target, config.emailjs.userID)
                    .then(() => {
                        setNotification({ message: t('contact.send_alert_success'), type: 'success' });
                        setTimeout(() => setNotification(null), 3000);
                    }, () => {
                        setNotification({ message: t('contact.send_alert_error'), type: 'error' });
                        setTimeout(() => setNotification(null), 3000);
                    });
                e.target.reset();
            })
            .catch((error) => {
                console.error('Error loading config:', error);
            });
    };

    return (
        <>
            <div className="contact-container">
                <form onSubmit={handleSubmit} className="contact-form">
                    <div className="form-group">
                        <label htmlFor="name">{t('contact.name')}:</label>
                        <input type="text" id="name" name="name" required onChange={handleChange}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">{t('contact.email')}:</label>
                        <input type="email" id="email" name="email" required onChange={handleChange}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="phone">{t('contact.phone')}:</label>
                        <input type="tel" id="phone" name="phone" required onChange={handleChange}/>
                    </div>
                    <div className="form-group no-wrap">
                        <label htmlFor="weddingDate">{t('contact.wedding_date')}:</label>
                        <input type="date" id="weddingDate" name="weddingDate" required onChange={handleChange}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">{t('contact.message')}:</label>
                        <textarea id="message" name="message" required onChange={handleChange}></textarea>
                    </div>
                    <button type="submit" className="submit-button">{t('contact.send')}</button>
                </form>
                <div className="contact-info">
                    <img src={img1} alt="Example"/>
                    <p>{t('contact.info')}</p>
                    <p className="mail">pawel.rozbicki@gmail.com</p>
                </div>
            </div>
            {notification && (
                <Notification
                    message={notification.message}
                    type={notification.type}
                />
            )}
        </>
    );
};

export default Contact;
