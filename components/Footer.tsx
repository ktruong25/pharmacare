export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <a href="#home" className="site-logo" style={{marginBottom:14,display:'inline-flex'}} aria-label="PharmaCare Rx Home">
              <svg width="36" height="36" viewBox="0 0 42 42" fill="none" aria-hidden="true">
                <circle cx="21" cy="21" r="21" fill="#C8352A"/>
                <rect x="18.5" y="11" width="5" height="20" rx="2.5" fill="white"/>
                <rect x="11" y="18.5" width="20" height="5" rx="2.5" fill="white"/>
              </svg>
              <div className="logo-wordmark" style={{marginLeft:9}}>
                <div className="logo-name-row">
                  <span className="logo-name">Pharma<em>Care</em></span>
                  <span className="logo-script">Rx</span>
                </div>
              </div>
            </a>
            <p className="footer-tagline">Your pharmacy needs made easy. Serving Fountain Valley and surrounding communities with personal, compassionate care since day one.</p>
            <div className="footer-socials">
              <a href="#" className="social-btn" aria-label="Facebook">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>
              </a>
              <a href="#" className="social-btn" aria-label="Instagram">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
              </a>
              <a href="https://maps.google.com/?q=16173+Harbor+Blvd+Fountain+Valley+CA+92708" target="_blank" rel="noopener noreferrer" className="social-btn" aria-label="Google Maps">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="footer-col-title">Quick Links</h4>
            <ul className="footer-links">
              <li><a href="#about">About Us</a></li>
              <li><a href="#services">Our Services</a></li>
              <li><a href="/delivery">Schedule Delivery</a></li>
              <li><a href="/refill">Refill Prescription</a></li>
              <li><a href="#contact">Contact Us</a></li>
            </ul>
          </div>

          <div>
            <h4 className="footer-col-title">Services</h4>
            <ul className="footer-links">
              <li><a href="#services">Automatic Refills</a></li>
              <li><a href="#services">90-Day Refills</a></li>
              <li><a href="#services">Free Delivery</a></li>
              <li><a href="#services">COVID Testing</a></li>
              <li><a href="#services">Vaccine Appointments</a></li>
              <li><a href="#services">Pill Packaging</a></li>
            </ul>
          </div>

          <div>
            <h4 className="footer-col-title">Contact &amp; Hours</h4>
            <div className="footer-contact-row">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
              <span>16173 Harbor Blvd<br/>Fountain Valley, CA 92708</span>
            </div>
            <div className="footer-contact-row">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8 19.79 19.79 0 012 2.22 2 2 0 014 .04h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
              <a href="tel:7145311755">714.531.1755</a>
            </div>
            <div className="footer-hour-row"><span className="d">Mon – Fri</span><span>9:30 – 5:30 PM</span></div>
            <div className="footer-hour-row"><span className="d">Saturday</span><span>11:00 – 3:00 PM</span></div>
            <div className="footer-hour-row"><span className="d">Sunday</span><span className="closed-lbl">Closed</span></div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2025 PharmaCare Rx &nbsp;|&nbsp; 16173 Harbor Blvd, Fountain Valley, CA 92708</p>
          <div className="footer-bottom-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
