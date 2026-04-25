'use client';
import { useState } from 'react';

export default function ContactSection() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const formatPhone = (val: string) => {
    const digits = val.replace(/\D/g, '').slice(0, 10);
    if (digits.length >= 7) return `${digits.slice(0,3)}-${digits.slice(3,6)}-${digits.slice(6)}`;
    if (digits.length >= 4) return `${digits.slice(0,3)}-${digits.slice(3)}`;
    return digits;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error();
      setStatus('success');
      setForm({ name: '', phone: '', email: '', subject: '', message: '' });
    } catch {
      setStatus('error');
    }
  };

  return (
    <section className="contact" id="contact" aria-labelledby="contact-heading">
      <div className="container">
        <div className="contact-grid">
          <div>
            <p className="eyebrow reveal">Find Us</p>
            <h2 className="h2 reveal" id="contact-heading" style={{marginTop:10,marginBottom:4}}>Visit or Get in Touch</h2>
            <div className="info-cards">
              <div className="info-card reveal">
                <div className="info-card-icon" aria-hidden="true">
                  <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
                </div>
                <div className="info-card-body">
                  <div className="lbl">Address</div>
                  <div className="val">16173 Harbor Blvd<br/>Fountain Valley, CA 92708</div>
                </div>
              </div>
              <div className="info-card reveal">
                <div className="info-card-icon" aria-hidden="true">
                  <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8 19.79 19.79 0 012 2.22 2 2 0 014 .04h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
                </div>
                <div className="info-card-body">
                  <div className="lbl">Phone</div>
                  <div className="val"><a href="tel:7145311755">714.531.1755</a></div>
                </div>
              </div>
              <div className="info-card reveal">
                <div className="info-card-icon" aria-hidden="true">
                  <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                </div>
                <div className="info-card-body">
                  <div className="lbl">Business Hours</div>
                  <div className="val">
                    Mon–Fri: 9:30 AM – 5:30 PM<br/>
                    Saturday: 11:00 AM – 3:00 PM<br/>
                    <span className="closed">Sunday: Closed</span>
                  </div>
                </div>
              </div>
            </div>
            <a
              href="https://maps.google.com/?q=16173+Harbor+Blvd+Fountain+Valley+CA+92708"
              target="_blank" rel="noopener noreferrer"
              className="map-link reveal"
              aria-label="Open 16173 Harbor Blvd in Google Maps"
            >
              <svg width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
              <span>16173 Harbor Blvd, Fountain Valley, CA 92708</span>
              <span className="map-label">Click to open in Google Maps ↗</span>
            </a>
          </div>

          <div className="contact-form reveal">
            <h3 className="contact-form-title">Send Us a Message</h3>
            <p className="contact-form-sub">Have a question? We'll get back to you as soon as possible.</p>

            {status === 'success' && (
              <div role="status" style={{background:'#f0fdf4',border:'1px solid #86efac',borderRadius:8,padding:'12px 16px',marginBottom:20,color:'#166534',fontSize:'.9rem',fontWeight:600}}>
                Message sent! We'll get back to you soon.
              </div>
            )}
            {status === 'error' && (
              <div role="alert" style={{background:'#fef2f2',border:'1px solid #fca5a5',borderRadius:8,padding:'12px 16px',marginBottom:20,color:'#991b1b',fontSize:'.9rem',fontWeight:600}}>
                Something went wrong. Please call us at 714.531.1755.
              </div>
            )}

            <form onSubmit={handleSubmit} noValidate>
              <div className="form-grid">
                <div className="fg">
                  <label htmlFor="c-name">Your Name <span aria-hidden="true" style={{color:'var(--red)'}}>*</span></label>
                  <input type="text" id="c-name" value={form.name} onChange={e => setForm(f=>({...f,name:e.target.value}))} placeholder="Jane Smith" required autoComplete="name"/>
                </div>
                <div className="fg">
                  <label htmlFor="c-phone">Phone Number</label>
                  <input type="tel" id="c-phone" value={form.phone} onChange={e => setForm(f=>({...f,phone:formatPhone(e.target.value)}))} placeholder="714-555-0000" autoComplete="tel"/>
                </div>
                <div className="fg span2">
                  <label htmlFor="c-email">Email Address <span aria-hidden="true" style={{color:'var(--red)'}}>*</span></label>
                  <input type="email" id="c-email" value={form.email} onChange={e => setForm(f=>({...f,email:e.target.value}))} placeholder="jane@example.com" required autoComplete="email"/>
                </div>
                <div className="fg span2">
                  <label htmlFor="c-subject">Topic</label>
                  <select id="c-subject" value={form.subject} onChange={e => setForm(f=>({...f,subject:e.target.value}))}>
                    <option value="">Select a topic…</option>
                    <option value="prescription">Prescription Question</option>
                    <option value="delivery">Delivery Inquiry</option>
                    <option value="insurance">Insurance / Billing</option>
                    <option value="vaccine">Vaccine / COVID Testing</option>
                    <option value="packaging">Pill Packaging</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div className="fg span2">
                  <label htmlFor="c-message">Message <span aria-hidden="true" style={{color:'var(--red)'}}>*</span></label>
                  <textarea id="c-message" value={form.message} onChange={e => setForm(f=>({...f,message:e.target.value}))} placeholder="How can we help you today?" required style={{minHeight:112}}/>
                </div>
              </div>
              <button type="submit" className="btn btn-primary btn-submit" disabled={status === 'loading'}>
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
                {status === 'loading' ? 'Sending…' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
