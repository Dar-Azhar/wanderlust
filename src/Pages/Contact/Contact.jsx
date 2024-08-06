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
        <HeroSection slides={contactUsSlides} />
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

        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12824.999627990826!2d74.83129690803663!3d34.10983573090378!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38e185983f7fee09%3A0x2cceddb2f36b6bfd!2sAshai%20Bagh%2C%20Srinagar%20190006!5e0!3m2!1sen!2sin!4v1722938788830!5m2!1sen!2sin"
          width="100%"
          height="450"
          title='A google map pointing towards our location at Ashai Bagh Hazratbal Location'
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
        ></iframe>
      </main>
    </Layout>
  );
}
