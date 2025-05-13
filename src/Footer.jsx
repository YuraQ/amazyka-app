import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>About Us</h3>
          <p>We are a leading online store providing the best products at unbeatable prices.</p>
        </div>

        

        <div className="footer-section2">
          <h3>Contact Us</h3>
          <p>Email: support@onlinestore.com</p>
          <p>Phone: +123 456 789</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Online Store. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
