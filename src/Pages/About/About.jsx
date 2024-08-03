import React from 'react'
import { Layout } from '../../components/Layout'
import { HeroSection } from '../../components/Hero/Hero'
import './About.scss'
import about from '../../assets/images/About.jpg'
import { WhyChooseUs } from '../../components/WhyChooseUs/WhyChooseUs'

import price from '../../assets/images/price-tag.png'
import award from '../../assets/images/award.png'
import coverage from '../../assets/images/internet.png'

import affiliation1 from '../../assets/images/Ministry-of-tourism.jpg'
import affiliation2 from '../../assets/images/jk tourism.jpg'
import affiliation3 from '../../assets/images/IATTE.jpg'
import affiliation4 from '../../assets/images/msme.jpg'
import affiliation5 from '../../assets/images/nidhi.jpg'
import affiliation6 from '../../assets/images/Ministry-of-tourism.jpg'


export const About = () => {
  return (
    <Layout>
      <main>
        <HeroSection />
        <div className="about-section">
          <img src={about} alt="A guy walking in snow" />
          <div className="text">
            <h2>Welcome to WanderLust</h2>
            <p>
              Welcome to our world of exploration and adventure! At WanderLust, we are passionate about creating extraordinary travel experiences that ignite your sense of wanderlust and leave you with cherished memories that last a lifetime.
            </p>
            <p>
              WanderLust Travels is a premier travel agency nestled in the heart of the picturesque Kashmir Valley. Since our inception in 2010, we've been committed to crafting unparalleled travel experiences, driven by our passion for showcasing the splendor of Kashmir to the world.
            </p>
            <p>
              Led by seasoned industry professionals Mr. Danish Nabi and Mr. Mumin Wani, our dedicated team brings a wealth of expertise and a deep-rooted love for travel. With years of collective experience in the tourism sector, we pride ourselves on delivering top-notch services, personalized attention, and a deep understanding of travelers' needs.
            </p>
            <p>
              Our mission is to curate journeys that transcend the ordinary, offering a seamless blend of cultural immersion, adventure, and relaxation. Whether you seek a tranquil retreat amidst the serene landscapes, adrenaline-pumping adventures, or a cultural rendezvous, we tailor our offerings to exceed expectations.
            </p>
            <p>
              At WanderLust Travels, we meticulously handcraft each itinerary, ensuring that every traveler's aspirations and desires are met. Our commitment to quality, authenticity, and customer satisfaction forms the cornerstone of our business ethos, earning us the trust and appreciation of our esteemed clients.
            </p>
            <p>
              Embark on an unforgettable voyage with us and immerse yourself in the unparalleled beauty of Kashmir. Let us be your companions in creating timeless memories against the backdrop of snow-capped peaks, verdant valleys, and the warm hospitality that defines the essence of Kashmiri culture.
            </p>
          </div>
        </div>
        <div className="why-choose-us">
          <h1>Why Choose WanderLust Travels</h1>
          <div className="card2-container">
            <WhyChooseUs image={award} title="Award Winning Service" text="Travel worry-free knowing that we're here if you need us, 24 hours a day and 7 days a week." />
            <WhyChooseUs image={price} title="Competitive Pricing" text="We are dedicated towards servicing and promoting Kashmir Tourism, Our pricing is very much competitive." />
            <WhyChooseUs image={coverage} title="Nationwide Coverage" text="Over 2000 hotels & 56 Cabs in more than 30 Cities of Jammu & Kashmir" />
          </div>
        </div>

        <div className="registration-affiliation">
          <h1>Our Registration & Affiliation</h1>
          <div className="scroll-container">
            <div className="scroll-content">
              <div className="item"><img src={affiliation1} alt="" /></div>
              <div className="item"><img src={affiliation2} alt="" /></div>
              <div className="item"><img src={affiliation3} alt="" /></div>
              <div className="item"><img src={affiliation4} alt="" /></div>
              <div className="item"><img src={affiliation5} alt="" /></div>
              <div className="item"><img src={affiliation6} alt="" /></div>
            </div>
          </div>
        </div>

      </main>
    </Layout>
  )
}
