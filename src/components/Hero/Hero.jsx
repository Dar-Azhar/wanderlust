import React from 'react';
import './Hero.scss'; // Your custom styles
// Images
import gulmarg from '../../assets/images/Yusmarg.jpg';
import pahalgam from '../../assets/images/Pahalgam.jpg';
import sonamarg from '../../assets/images/Bhaderwah.jpg';

const slides = [
    {
        img: gulmarg,
        title: "Explore Gulmarg",
        description: "Discover the beauty of Gulmarg with stunning landscapes.",
    },
    {
        img: pahalgam,
        title: "Adventures in Pahalgam",
        description: "Experience thrilling adventures in Pahalgam.",
    },
    {
        img: sonamarg,
        title: "Serenity of Sonamarg",
        description: "Enjoy the serene landscapes of Sonamarg.",
    },
];

export const HeroSection = () => {
    return (
        <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel" data-bs-interval="5000">
            <div className="carousel-inner">
                {slides.map((slide, index) => (
                    <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={index}>
                        <img src={slide.img} className="d-block w-100" alt={`Slide ${index + 1}`} />
                        <div className="carousel-caption d-none d-md-block">
                            <h5 className="animated-text">{slide.title}</h5>
                            <p className="animated-text">{slide.description}</p>
                        </div>
                    </div>
                ))}
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
};