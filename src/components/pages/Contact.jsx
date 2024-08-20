import { useState } from 'react';
import emailjs from '@emailjs/browser';
import '../../App.css';
import './Contact.css';

const Contact = () => {
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
        e.target.reset(); // Reset form after submission
    };

    return (
        <>
            <form onSubmit={handleSubmit} className="contact-form">
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" required onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" required onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="phone">Phone:</label>
                    <input type="tel" id="phone" name="phone" required onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea id="message" name="message" required onChange={handleChange}></textarea>
                </div>
                <button type="submit">Send</button>
            </form>
        </>
    );
};

export default Contact;
