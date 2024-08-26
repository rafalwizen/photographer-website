import { useState } from 'react';
import emailjs from '@emailjs/browser';
import '../../App.css';
import './Contact.css';
import { useTranslation } from "react-i18next";

const Contact = () => {
    const { t } = useTranslation();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_ii4htdo', 'template_n40tmu1', e.target, '2MYnHPXdGIHXf_bxO')
            .then((result) => {
                alert('Message sent successfully!');
                console.log(result.text);
            }, (error) => {
                alert('An error occurred, please try again');
                console.log(error.text);
            });
        e.target.reset();
    };

    return (
        <>
            <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                    <label htmlFor="name">{t('contact.name')}:</label>
                    <input type="text" id="name" name="name" required onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="email">{t('contact.email')}:</label>
                    <input type="email" id="email" name="email" required onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="phone">{t('contact.phone')}:</label>
                    <input type="tel" id="phone" name="phone" required onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="message">{t('contact.message')}:</label>
                    <textarea id="message" name="message" required onChange={handleChange}></textarea>
                </div>
                <button type="submit" className="submit-button">{t('contact.send')}</button>
            </form>
        </>
    );
};

export default Contact;
