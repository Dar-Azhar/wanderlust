import React, { useState } from 'react';
import { Layout } from '../../components/Layout';
import { HeroSection } from '../../components/Hero/Hero';
import './Contact.scss';
import axios from 'axios';
import contactImg from '../../assets/images/contact-us.png'; 

import one from '../../assets/images/Contact1.jpg'
import two from '../../assets/images/contact3.jpg'
import three from '../../assets/images/contact2.jpg'


const contactUsSlides = [
  {
      img: two,
      title: "Get in Touch",
      description: "We'd love to hear from you! Reach out for any inquiries.",
  },
  {
      img: three,
      title: "Follow Us",
      description: "Stay connected with us through social media.",
  },
  {
      img: one,
      title: "Visit Us",
      description: "Find us at our office for personalized assistance.",
  },
];


export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('https://wanderlust.up.railway.app/contact/', formData);
      alert('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error(error);
      alert('An error occurred while sending your message. Please try again.');
    }
  };

  return (
    <Layout>
      <main>
        <HeroSection slides = {contactUsSlides} />
        <div className="contact-section">
          <div className="left">
            <h2>We're Here to Help You!</h2>
            <img src={contactImg} alt="Contact Us" />
            <p><strong>Have a question?</strong> We’re excited to hear from you! Whether you’re inquiring about our services, need assistance with your travel plans, or you’re just looking for some advice, our dedicated team is here to support you every step of the way.</p>
          </div>
          <div className="form contact-page-form">
            <h2><span className="yellow-border-bottom">Ge</span>t in Touch with Us</h2>
            <form action="" className="contact-form" onSubmit={handleSubmit} method="post">
              <input
                type="text"
                required
                name="name"
                id="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
              />
              <input
                type="email"
                required
                name="email"
                id="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
              />
              <input
                type="text"
                required
                name="message"
                id="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
              />
              <button type="submit" >Send Message</button>
            </form>
          </div>
        </div>
      </main>
    </Layout>
  );
}
