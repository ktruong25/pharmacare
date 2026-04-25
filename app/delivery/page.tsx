import Nav from '@/components/Nav';
import DeliveryForm from '@/components/DeliveryForm';
import Footer from '@/components/Footer';
import ScrollSetup from '@/components/ScrollSetup';

export const metadata = {
  title: 'Free Same-Day Delivery | PharmaCare Rx',
  description: 'Schedule a free same-day prescription delivery to your door. Serving Fountain Valley, Garden Grove, Westminster, Huntington Beach, and Santa Ana.',
};

export default function DeliveryPage() {
  return (
    <>
      <a href="#main-content" className="skip-link">Skip to main content</a>
      <Nav />

      <main id="main-content">

        {/* Hero */}
        <section className="delivery-hero" aria-label="Free same-day delivery">
          <div className="container">
            <div className="delivery-hero-grid">
              <div className="delivery-hero-copy">
                <div className="hero-badge">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><rect x="1" y="3" width="15" height="13" rx="2"/><path d="M16 8h3l3 3v5h-6V8z"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>
                  Free Same-Day Delivery
                </div>
                <h1 className="h1 hero-title">We Bring Your<br/>Medications <span className="accent">To You.</span></h1>
                <p className="hero-body">No trips to the pharmacy. No waiting in line. PharmaCare Rx delivers your prescriptions free of charge — right to your front door, often the same day.</p>
                <div className="hero-actions">
                  <a href="#schedule-delivery" className="btn btn-primary">
                    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><path d="M12 5v14M5 12l7 7 7-7"/></svg>
                    Schedule Delivery
                  </a>
                  <a href="tel:7145311755" className="btn btn-outline">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8 19.79 19.79 0 012 2.22 2 2 0 014 .04h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
                    Call Now
                  </a>
                </div>
                <div className="hero-stats">
                  <div className="stat-item"><div className="stat-val">Free</div><div className="stat-lbl">No Delivery Fee</div></div>
                  <div className="stat-item"><div className="stat-val">Same-Day</div><div className="stat-lbl">Order by 2:00 PM</div></div>
                  <div className="stat-item"><div className="stat-val">5 Cities</div><div className="stat-lbl">Coverage Area</div></div>
                </div>
              </div>

              <div className="delivery-hero-card-wrap" aria-hidden="true">
                <div className="delivery-info-card">
                  <div className="delivery-info-card-header">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--red)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="3" width="15" height="13" rx="2"/><path d="M16 8h3l3 3v5h-6V8z"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>
                    <span>Delivery Info</span>
                  </div>
                  <div className="delivery-info-rows">
                    <div className="delivery-info-row">
                      <span className="delivery-info-lbl">Same-day cutoff</span>
                      <span className="delivery-info-val">2:00 PM</span>
                    </div>
                    <div className="delivery-info-row">
                      <span className="delivery-info-lbl">Delivery fee</span>
                      <span className="delivery-info-val free">Free</span>
                    </div>
                    <div className="delivery-info-row">
                      <span className="delivery-info-lbl">Minimum order</span>
                      <span className="delivery-info-val free">None</span>
                    </div>
                  </div>
                  <div className="delivery-coverage">
                    <div className="delivery-coverage-title">Coverage Area</div>
                    {['Fountain Valley', 'Garden Grove', 'Westminster', 'Huntington Beach', 'Santa Ana'].map(city => (
                      <div className="delivery-coverage-city" key={city}>
                        <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="var(--red)" strokeWidth="3"><polyline points="20 6 9 17 4 12"/></svg>
                        {city}
                      </div>
                    ))}
                  </div>
                  <a href="tel:7145311755" className="card-phone">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" aria-hidden="true"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8 19.79 19.79 0 012 2.22 2 2 0 014 .04h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
                    <div><div className="lbl">Questions? Call Us</div><div className="num">714.531.1755</div></div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="delivery-steps" aria-labelledby="steps-heading">
          <div className="container">
            <div className="section-head reveal">
              <span className="eyebrow">How It Works</span>
              <h2 className="h2" id="steps-heading">Three Simple Steps</h2>
              <p className="lead">Getting your medications delivered is as easy as filling out a short form.</p>
            </div>
            <div className="steps-grid">
              {[
                {
                  num: '01',
                  title: 'Fill Out the Form',
                  desc: 'Submit your name, delivery address, prescription numbers, and preferred time window below.',
                  icon: <><rect x="3" y="3" width="18" height="18" rx="3"/><line x1="9" y1="9" x2="15" y2="9"/><line x1="9" y1="13" x2="15" y2="13"/><line x1="9" y1="17" x2="12" y2="17"/></>,
                },
                {
                  num: '02',
                  title: 'We Confirm Your Order',
                  desc: 'Our team will call you to verify your details, check insurance, and answer any questions.',
                  icon: <><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8 19.79 19.79 0 012 2.22 2 2 0 014 .04h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></>,
                },
                {
                  num: '03',
                  title: 'Delivered to Your Door',
                  desc: 'Your medications arrive safely at your door — free of charge, typically within hours of your order.',
                  icon: <><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></>,
                },
              ].map(({ num, title, desc, icon }, i) => (
                <div className={`step-card reveal d${i+1}`} key={num}>
                  <div className="step-num">{num}</div>
                  <div className="step-icon" aria-hidden="true">
                    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#C8352A" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">{icon}</svg>
                  </div>
                  <h3 className="step-title">{title}</h3>
                  <p className="step-desc">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <DeliveryForm />

      </main>

      <Footer />

      <button id="back-top" aria-label="Back to top">
        <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><polyline points="18 15 12 9 6 15"/></svg>
      </button>

      <ScrollSetup />
    </>
  );
}
