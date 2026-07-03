import React from 'react';
import './Footer.css';
import { FaEnvelope, FaGithub, FaTwitter } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa6';



const Footer = () => {
  return (
    <footer className="footer">

      <div className="container">
        <div>
          <div className="logo">GameStore</div>
          <p>Your ultimate destination for the best games. Play more, pay less.</p>
          <div className='social-link'>
            <FaGithub class="fab fa-github social-icon" />
            <FaLinkedin class="fab fa-linkedin social-icon" />
            <FaTwitter class="fab fa-twitter social-icon" />
            <FaEnvelope class="fas fa-envelope social-icon" />
          </div>
        </div>

        <div>
          <h3 style={{ color: 'white' }}>SHOP</h3>
          <ul className="linksList">
            <li>All Games</li>
            <li>New Releases</li>
            <li>Top Rated</li>
            <li>Social Offers</li>
          </ul>
        </div>

        <div>
          <h3 style={{ color: 'white' }}>SUPPORT</h3>
          <ul className="linksList">
            <li>Help Center</li>
            <li>Refund Policy</li>
            <li>Terms Of Service</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        
        <div>
          <h3 style={{ color: 'white' }}>ABOUT</h3>
          <ul className="linksList">
            <li>About Us</li>
            <li>Careers</li>
            <li>News</li>
            <li>Contact Us</li>
          </ul>

        </div>




        <div>
          <h3 style={{ color: 'white' }}>NEWSLETTER</h3>
          <p>Subscribe for exclusive deals.</p>
          <div className="inputGroup">
            <input type="email" placeholder="Enter your email" />
            <button className="sendBtn">➔</button>
          </div>
        </div>
      </div>

      <div className="copyright">
        © 2024 Game Store. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;