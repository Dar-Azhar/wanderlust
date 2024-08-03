import React from 'react'
import './Home.scss'
import '../../components/Hero/Hero.scss'; 
import { Layout } from '../../components/Layout'
import { PackageCard } from '../../components/PackageCard/PackageCard'
import { HeroSection } from '../../components/Hero/Hero'
import { WhyChooseUs } from '../../components/WhyChooseUs/WhyChooseUs'
import { Testimonials } from '../../components/Testimonials/Testimonials'


//images
import gulmarg from '../../assets/images/Gulmarg.jpg'
import pahalgam from '../../assets/images/Pahalgam.jpg'
import sonamarg from '../../assets/images/Sonmarg.jpg'
import yusmarg from '../../assets/images/Yusmarg.jpg'
import bhaderwah from '../../assets/images/Bhaderwah.jpg'
import kupwara from '../../assets/images/Kupwara.jpg'
import dal from '../../assets/images/Dal Lake.jpg'
import price from '../../assets/images/price-tag.png'
import award from '../../assets/images/award.png'
import coverage from '../../assets/images/internet.png'
import testimonial1 from '../../assets/images/testimonial-1.png'


const slides = [
  {
      img: dal,
      title: "Welcome to WanderLust Travels",
      description: "Discover the beauty of Kashmir with our tailored travel packages."
  },
  {
      img: yusmarg,
      title: "Explore Yusmarg",
      description: "Experience the tranquil landscapes of Yusmarg, a hidden gem in Kashmir."
  },
  {
      img: pahalgam,
      title: "Adventures in Pahalgam",
      description: "Thrilling adventures await you in Pahalgam, the adventure capital of Kashmir."
  },
];

export const Home = () => {
  return (
    <Layout>
      <main>
        <HeroSection slides = {slides}/>
        <h1 className="text-center">
          Select Your Best Package <br /> For Your Travel
        </h1>
        <div className="card-container">
          <PackageCard img={gulmarg} title="Srinagar-Gulmarg" text="Embark on an unforgettable adventure with our Srinagar-Gulmarg tour package" />
          <PackageCard img={pahalgam} title="Srinagar-Pahalgam" text="Embark on an unforgettable adventure with our Srinagar-Gulmarg tour package" />
          <PackageCard img={sonamarg} title="Srinagar-Sonmarg" text="Embark on an unforgettable adventure with our Srinagar-Gulmarg tour package" />
          <PackageCard img={yusmarg} title="Srinagar-Yusmarg" text="Embark on an unforgettable adventure with our Srinagar-Gulmarg tour package" />
          <PackageCard img={bhaderwah} title="Srinagar-Bhaderwah" text="Embark on an unforgettable adventure with our Srinagar-Gulmarg tour package" />
          <PackageCard img={kupwara} title="Srinagar-Kupwara" text="Embark on an unforgettable adventure with our Srinagar-Gulmarg tour package" />
        </div>

        <div className="why-choose-us">
          <h1>Why Choose WanderLust Travels</h1>
          <div className="card2-container">
            <WhyChooseUs image={award} title="Award Winning Service" text="Travel worry-free knowing that we're here if you need us, 24 hours a day and 7 days a week." />
            <WhyChooseUs image={price} title="Competitive Pricing" text="We are dedicated towards servicing and promoting Kashmir Tourism, Our pricing is very much competitive." />
            <WhyChooseUs image={coverage} title="Nationwide Coverage" text="Over 2000 hotels & 56 Cabs in more than 30 Cities of Jammu & Kashmir" />
          </div>
        </div>
        <div className='testimonial-section'>
          <h1>Testimonials</h1>
          <div className="testimonial-container">
            <Testimonials
              image={testimonial1}
              name="Raj Kumar Paswan"
              city="Mumbai"
              text="WanderLust Travels made my trip unforgettable! The itinerary was perfectly planned, and the guides were knowledgeable and friendly. I can't wait to book my next adventure!"
            />
            <Testimonials
              image={testimonial1}
              name="Anita Singh"
              city="Delhi"
              text="I had an amazing experience with WanderLust Travels. Their attention to detail and customer service is top-notch. Highly recommended for anyone looking to explore!"
            />

            <Testimonials
              image={testimonial1}
              name="Vikram Sharma"
              city="Bangalore"
              text="The trip organized by WanderLust Travels was fantastic! Every aspect was well-coordinated, and I felt taken care of throughout the journey. Thank you for such a wonderful experience!"
            />
          </div>
        </div>

      </main>
    </Layout>
  )
}

