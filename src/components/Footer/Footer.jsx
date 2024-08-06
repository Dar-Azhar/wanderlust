import React from 'react'
import './Footer.scss'
import facebook from '../../assets/images/facebook.png'
import twitter from '../../assets/images/twitter.png'
import instagram from '../../assets/images/instagram.png'
import linkedin from '../../assets/images/linkedin.png'
/* eslint-disable jsx-a11y/anchor-is-valid */

export function Footer() {
  const handleSubmit = () => {
    alert('Your Email have been registered')
  }
  return (
    <footer>
      <div className='footer-section'>
        <div className="contact">
          <h4>Need Our Help?</h4>

          <p><strong>Head Office</strong> : Hazratbal Rd, Ashai Bagh, Srinagar Jammu & Kashmir India -190003</p>
          <p><strong>Email</strong> : wanderlust@gmail.com</p>
          <p><strong>Contact</strong>+91-7051303011</p>
        </div>

      </div>
      <div className='footer-section'>
        <h4>Discover Us</h4>
        <ul>
          <li><a href="/about">About Us</a></li>
          <li><a href="#">Careers</a></li>
          <li><a href="#">Our Team</a></li>
          <li><a href="#">Give Us Feedback</a></li>
        </ul>
      </div>
      <div className='footer-section'>
        <h4> Our Services</h4>
        <ul>
        <li><a href="#">Tour Packages</a></li>
        <li><a href="#">Hotel Bookings</a></li>
        <li><a href="#">Car Rentals</a></li>
        <li><a href="#">Event Organizers</a></li>
        </ul>
      </div>
      <div className='footer-section'>
        <h4>Support</h4>
        <ul>
        <li><a href="/contact">Contact Us</a></li>
        <li><a href="#">FAQ's</a></li>
        <li><a href="#">Complaints</a></li>
        <li><a href="#">Privacy Policy</a></li>
        </ul>
      </div>
      <div className='mailing-section'>
        <div className="mailing">
          <h4 >Mailing List</h4>
          <p>Sign up for our mailing list to get latest <br /> updates and offers.</p>
          <form method='POST' onSubmit={handleSubmit} className="input-group-email">
            <input type="email" required name="email" id="email" placeholder='Your Email' />
            <button type='submit'>Sign Up</button>
          </form>
        </div>
        <div className="socials">
          <a ><img src={facebook} alt="" /> </a>
          <a ><img src={twitter} alt="twitter" /> </a>
          <a > <img src={instagram} alt="instagram" /></a>
          <a > <img src={linkedin} alt="linkedin" /></a>
        </div>
      </div>
      <hr />
      <div className="copyRight">
        <p>All rights reserved &copy; 2023 Wander Lust Travels.</p>
        <p className='developer'>Designed and developed by <span>Azhar Ali Dar</span></p>
      </div>

    </footer >



  )
}

