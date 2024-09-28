import { useState } from 'react';
import emailjs from '@emailjs/browser';
import '../../App.css';
import './Contact.css';
import { useTranslation } from "react-i18next";
import img1 from '../../../public/images/img-test-5-small.jpg';

const Contact = () => {
    const { t } = useTranslation();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        weddingDate: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Sprawdzenie, czy wszystkie pola są wypełnione
        if (!formData.name || !formData.email || !formData.phone || !formData.weddingDate || !formData.message) {
            alert(t('contact.all_fields_required'));
            return;
        }
        emailjs.sendForm('service_ii4htdo', 'template_n40tmu1', e.target, '2MYnHPXdGIHXf_bxO')
            .then((result) => {
                alert(t('contact.send_alert_success'));
                console.log(result.text);
            }, (error) => {
                alert(t('contact.send_alert_error'));
                console.log(error.text);
            });
        e.target.reset();
    };

    return (
        <div className="contact-container">
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
                    <label htmlFor="weddingDate">{t('contact.wedding_date')}:</label>
                    <input type="date" id="weddingDate" name="weddingDate" required onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="message">{t('contact.message')}:</label>
                    <textarea id="message" name="message" required onChange={handleChange}></textarea>
                </div>
                <button type="submit" className="submit-button">{t('contact.send')}</button>
            </form>
            <div className="contact-info">
                <img src={img1} alt="Example" />
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eget vestibulum justo, nec hendrerit sapien. Aenean nec lacus ligula. Curabitur mollis tortor vitae odio suscipit consequat.</p>
            </div>
        </div>
    );
};

export default Contact;
