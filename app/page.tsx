import Nav from '@/components/Nav';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import ScrollSetup from '@/components/ScrollSetup';

export default function Home() {
  return (
    <>
      <a href="#main-content" className="skip-link">Skip to main content</a>
      <Nav />

      <main id="main-content">

        {/* Hero */}
        <section className="hero" id="home" aria-label="Introduction">
          <div className="container">
            <div className="hero-grid">
              <div className="hero-copy">
                <div className="hero-badge">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                  Fountain Valley's Neighborhood Pharmacy
                </div>
                <h1 className="h1 hero-title">Your Health,<br/>Our <span className="accent">Community.</span></h1>
                <p className="hero-body">At PharmaCare Rx, we go beyond filling prescriptions. We're your neighbors, your advocates, and your partners in wellness — right here on Harbor Blvd.</p>
                <div className="hero-actions">
                  <a href="/refill" className="btn btn-primary">
                    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><path d="M12 5v14M5 12l7 7 7-7"/></svg>
                    Refill Prescription
                  </a>
                  <a href="tel:7145311755" className="btn btn-outline">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8 19.79 19.79 0 012 2.22 2 2 0 014 .04h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
                    Call Now
                  </a>
                </div>
                <div className="hero-stats">
                  <div className="stat-item"><div className="stat-val">Free</div><div className="stat-lbl">Local Delivery</div></div>
                  <div className="stat-item"><div className="stat-val">Walk-In</div><div className="stat-lbl">COVID Testing</div></div>
                  <div className="stat-item"><div className="stat-val">90-Day</div><div className="stat-lbl">Refills Available</div></div>
                </div>
              </div>
              <div className="hero-card-wrap" aria-hidden="true">
                <div className="hero-card">
                  <div className="card-logo-row">
                    <svg className="card-logo-icon" viewBox="0 0 56 56" fill="none">
                      <circle cx="28" cy="28" r="28" fill="#C8352A"/>
                      <rect x="24" y="14" width="8" height="28" rx="4" fill="white"/>
                      <rect x="14" y="24" width="28" height="8" rx="4" fill="white"/>
                    </svg>
                    <div>
                      <div style={{display:'flex',alignItems:'flex-end',gap:3}}>
                        <span style={{fontFamily:'var(--font-inter)',fontSize:'1.4rem',fontWeight:800,color:'var(--ink)',letterSpacing:'-.025em',lineHeight:1}}>Pharma<em style={{color:'var(--red)',fontStyle:'normal'}}>Care</em></span>
                        <span style={{fontFamily:'var(--font-dancing)',fontSize:'1.1rem',fontWeight:700,color:'var(--red)'}}>Rx</span>
                      </div>
                      <div style={{fontSize:'.65rem',fontWeight:600,letterSpacing:'.1em',textTransform:'uppercase',color:'var(--slate)',marginTop:4}}>Your Pharmacy Needs Made Easy</div>
                    </div>
                  </div>
                  <div className="card-hours">
                    <div className="card-hours-title">Store Hours</div>
                    <div className="card-hour-row"><span className="d">Mon – Fri</span><span className="t">9:30 AM – 5:30 PM</span></div>
                    <div className="card-hour-row"><span className="d">Saturday</span><span className="t">11:00 AM – 3:00 PM</span></div>
                    <div className="card-hour-row"><span className="d">Sunday</span><span className="t" style={{color:'var(--red)'}}>Closed</span></div>
                  </div>
                  <a href="tel:7145311755" className="card-phone">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" aria-hidden="true"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8 19.79 19.79 0 012 2.22 2 2 0 014 .04h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
                    <div><div className="lbl">Call Us Anytime</div><div className="num">714.531.1755</div></div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About */}
        <section className="about" id="about" aria-labelledby="about-heading">
          <div className="container">
            <div className="about-grid">
              <div className="about-visual reveal">
                <div className="about-img-box">
                  <svg className="about-svg" viewBox="0 0 340 270" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <rect x="15" y="200" width="310" height="9" rx="4.5" fill="#E0CEB8"/>
                    <rect x="32" y="148" width="36" height="52" rx="7" fill="#C8352A" fillOpacity=".82"/>
                    <rect x="32" y="134" width="36" height="18" rx="5" fill="#A62820"/>
                    <rect x="36" y="165" width="28" height="4" rx="2" fill="white" fillOpacity=".55"/>
                    <rect x="36" y="173" width="20" height="3" rx="1.5" fill="white" fillOpacity=".35"/>
                    <rect x="84" y="158" width="30" height="42" rx="6" fill="#7A8FA0" fillOpacity=".78"/>
                    <rect x="84" y="146" width="30" height="16" rx="5" fill="#5A7080"/>
                    <rect x="88" y="173" width="22" height="3.5" rx="1.75" fill="white" fillOpacity=".55"/>
                    <rect x="129" y="140" width="38" height="60" rx="7" fill="#F5EBD9"/>
                    <rect x="129" y="126" width="38" height="18" rx="5" fill="#E8D8C0"/>
                    <rect x="133" y="162" width="30" height="4" rx="2" fill="#4A4A4A" fillOpacity=".25"/>
                    <text x="148" y="190" fontSize="9" fill="#C8352A" fontWeight="700" textAnchor="middle" fontFamily="serif">Rx</text>
                    <rect x="181" y="152" width="33" height="48" rx="6" fill="#E8635A" fillOpacity=".72"/>
                    <rect x="181" y="139" width="33" height="17" rx="5" fill="#C8352A" fillOpacity=".85"/>
                    <rect x="228" y="143" width="35" height="57" rx="7" fill="#7A8FA0" fillOpacity=".50"/>
                    <rect x="228" y="130" width="35" height="17" rx="5" fill="#5A7080" fillOpacity=".60"/>
                    <rect x="278" y="163" width="26" height="37" rx="5" fill="#C8352A" fillOpacity=".55"/>
                    <rect x="278" y="153" width="26" height="13" rx="4" fill="#A62820" fillOpacity=".65"/>
                    <ellipse cx="62" cy="218" rx="15" ry="7" fill="#E8635A" transform="rotate(-14 62 218)"/>
                    <ellipse cx="96" cy="223" rx="13" ry="6" fill="#7A8FA0" transform="rotate(9 96 223)"/>
                    <ellipse cx="128" cy="216" rx="14" ry="6.5" fill="#C8352A" fillOpacity=".68" transform="rotate(-7 128 216)"/>
                    <circle cx="188" cy="217" r="7.5" fill="#7A8FA0" fillOpacity=".58"/>
                    <circle cx="208" cy="222" r="6.5" fill="#E8635A" fillOpacity=".80"/>
                  </svg>
                </div>
                <div className="about-badge">
                  <div className="big">20+</div>
                  <div className="sm">Years Serving<br/>Fountain Valley</div>
                </div>
              </div>
              <div>
                <p className="eyebrow reveal">About PharmaCare Rx</p>
                <h2 className="h2 reveal" id="about-heading" style={{marginTop:10,marginBottom:4}}>More Than a Pharmacy.<br/>We're Your Neighbor.</h2>
                <p className="about-text reveal">For over two decades, PharmaCare Rx has been a cornerstone of health and wellness for families across Fountain Valley. We believe that great pharmacy care is personal — it means knowing your name, understanding your health history, and going the extra mile so your life is a little easier.</p>
                <p className="about-text reveal">Unlike large chain pharmacies, we take the time to listen. Whether you're managing multiple medications, have questions about a new prescription, or simply need a trusted voice in your health journey, we're here — not behind a counter, but right beside you.</p>
                <div className="about-pillars">
                  {[
                    { icon: <><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/></>, title: 'Personal, One-on-One Care', desc: 'Our pharmacists work directly with your doctors and know your health by heart.' },
                    { icon: <><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></>, title: 'Fast & Convenient Service', desc: 'Quick turnaround, free delivery, and streamlined refills save you time.' },
                    { icon: <><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></>, title: 'Rooted in the Community', desc: 'Proudly serving Fountain Valley and surrounding areas since day one.' },
                  ].map(({ icon, title, desc }, i) => (
                    <div className={`pillar reveal d${i+2}`} key={title}>
                      <div className="pillar-icon" aria-hidden="true">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">{icon}</svg>
                      </div>
                      <div className="pillar-body"><strong>{title}</strong><span>{desc}</span></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="services" id="services" aria-labelledby="services-heading">
          <div className="container">
            <div className="section-head reveal">
              <span className="eyebrow">What We Offer</span>
              <h2 className="h2" id="services-heading">Everything You Need, All in One Place</h2>
              <p className="lead">We built our services around the three things that matter most: simplicity, access, and your convenience.</p>
            </div>
            <div className="services-grid">
              {[
                { tag:'Category 01', name:'Hassle Free', label:'Hassle Free services', items:['Automatic Refills','Prescriber Follow Up','90 Day Refills'], icon: <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/> },
                { tag:'Category 02', name:'Accessible', label:'Accessible services', items:['Walk-in COVID Testing','Walk-In Vaccine Appt.','Health Screening Available'], icon: <><circle cx="12" cy="4.5" r="1.8"/><path d="M9.5 11.5l1-4h3l1 4-2.5 3.5 1 5.5"/><path d="M9.5 11.5l-2.5 3.5"/><path d="M14.5 11.5l2.5 3.5"/></> },
                { tag:'Category 03', name:'Convenient', label:'Convenient services', items:['Free Delivery','Customized Pill Packaging','Medication Therapy Management'], icon: <><rect x="1" y="3" width="15" height="13" rx="2"/><path d="M16 8h3l3 3v5h-6V8z"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></> },
              ].map(({ tag, name, label, items, icon }, i) => (
                <article className={`service-card reveal d${i+1}`} key={name}>
                  <div className="service-icon-box" aria-hidden="true">
                    <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="#C8352A" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">{icon}</svg>
                  </div>
                  <div className="service-tag">{tag}</div>
                  <h3 className="service-name">{name}</h3>
                  <ul className="service-list" aria-label={label}>
                    {items.map(item => <li key={item}><span className="dot" aria-hidden="true"/>{item}</li>)}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <ContactSection />
      </main>

      <Footer />

      {/* Back to top */}
      <button id="back-top" aria-label="Back to top">
        <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><polyline points="18 15 12 9 6 15"/></svg>
      </button>

      <ScrollSetup />
    </>
  );
}
