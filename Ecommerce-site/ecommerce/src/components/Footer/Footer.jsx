import React from 'react';
import './Footer.css';
import logo from '../Assets/Logo/ba_logo.png'

export default function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">
        <div className="footer-newsletter">
          <h2>Subscribe to our newsletter</h2>
          <p>Be always updated with the latest exclusive news from Loro Piana</p>
          <div className="newsletter-form">
            <input type="email" placeholder="Your email address" />
            <button type="submit">&rarr;</button>
          </div>
          <p className="newsletter-acknowledgement">
            I acknowledge that my email address will be processed by Loro Piana S.p.A. in accordance with the provisions of the Privacy Policy.
          </p>
        </div>
        <div className="footer-links">
          <div>
            <h3>Get in touch</h3>
            <ul>
              <li><a href="#contacts">Contacts</a></li>
              <li><a href="#faq">FAQ</a></li>
            </ul>
          </div>
          <div>
            <h3>Company</h3>
            <ul>
              <li><a href="#stores">Babayeva Bags Stores</a></li>
              <li><a href="#career">Career</a></li>
              <li><a href="#textile">Babayeva Bags Textile</a></li>
              <li><a href="#interiors">Babayeva Bags Interiors</a></li>
            </ul>
          </div>
          <div>
            <h3>Services</h3>
            <ul>
              <li><a href="#services">All Services</a></li>
              <li><a href="#gift-card">Gift Card</a></li>
              <li><a href="#returns">Returns & exchange</a></li>
              <li><a href="#delivery">Delivery & shipping</a></li>
            </ul>
          </div>
          <div>
            <h3>Legal & Cookies</h3>
            <ul>
              <li><a href="#compliance">Compliance</a></li>
              <li><a href="#legal">Legal</a></li>
              <li><a href="#privacy">Privacy & Cookie</a></li>
              <li><a href="#accessibility">Accessibility</a></li>
              <li><a href="#donotsell">Do Not Sell or Share My Personal Information</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-bottom-container">
          <div className="footer-logo">
            <img src={logo} alt="Loro Piana Logo" />
          </div>
          <div className="footer-social">
            <a href="#instagram">Instagram</a>
            <a href="#facebook">Facebook</a>
            <a href="#linkedin">Linkedin</a>
            <a href="#wechat">Wechat</a>
            <a href="#weibo">Weibo</a>
          </div>
          <div className="footer-info">
            <p>© Babayeva Bags S.p.A. 2024 VAT number 01611400027 | Babayeva Bags Official Online Store Azerbaijan</p>
          </div>
        </div>
      </div>

    </footer>
  );
}
