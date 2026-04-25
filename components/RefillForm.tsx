'use client';
import { useState } from 'react';

export default function RefillForm() {
  const [form, setForm] = useState({ name: '', phone: '', rxNumber: '', pickup: '', notes: '' });
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
      const res = await fetch('/api/refill', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error();
      setStatus('success');
      setForm({ name: '', phone: '', rxNumber: '', pickup: '', notes: '' });
    } catch {
      setStatus('error');
    }
  };

  return (
    <section className="refill" id="refill" aria-labelledby="refill-heading">
      <div className="container">
        <div className="refill-grid">
          <div className="refill-info reveal">
            <p className="refill-eyebrow">Quick &amp; Easy</p>
            <h2 className="refill-title" id="refill-heading">Refill Your Prescription Online</h2>
            <p className="refill-desc">Save time — fill out the short form and we'll have your prescription ready for pickup or delivered free to your door.</p>
            <ul className="perk-list" aria-label="Refill benefits">
              {['Ready in as little as 30 minutes','Free local home delivery available','We\'ll contact you with any questions','Most major insurance plans accepted'].map(p => (
                <li className="perk" key={p}>
                  <span className="perk-check" aria-hidden="true">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3"><polyline points="20 6 9 17 4 12"/></svg>
                  </span>
                  {p}
                </li>
              ))}
            </ul>
            <hr className="refill-divider"/>
            <p className="refill-phone-label">Prefer to call us directly?</p>
            <a href="tel:7145311755" className="refill-phone-link">
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" aria-hidden="true"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8 19.79 19.79 0 012 2.22 2 2 0 014 .04h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
              714.531.1755
            </a>
          </div>

          <div className="refill-form-card reveal">
            <h3 className="form-card-title">Request a Refill</h3>
            <p className="form-card-sub">We'll have it ready by your next visit, or delivered to you.</p>

            {status === 'success' && (
              <div role="status" style={{background:'#f0fdf4',border:'1px solid #86efac',borderRadius:8,padding:'12px 16px',marginBottom:20,color:'#166534',fontSize:'.9rem',fontWeight:600}}>
                Refill request received! We'll call you when it's ready.
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
                  <label htmlFor="r-name">Full Name <span aria-hidden="true" style={{color:'var(--red)'}}>*</span></label>
                  <input type="text" id="r-name" value={form.name} onChange={e => setForm(f=>({...f,name:e.target.value}))} placeholder="Jane Smith" required autoComplete="name"/>
                </div>
                <div className="fg">
                  <label htmlFor="r-phone">Phone Number <span aria-hidden="true" style={{color:'var(--red)'}}>*</span></label>
                  <input type="tel" id="r-phone" value={form.phone} onChange={e => setForm(f=>({...f,phone:formatPhone(e.target.value)}))} placeholder="714-555-0000" required autoComplete="tel"/>
                </div>
                <div className="fg">
                  <label htmlFor="r-rx">Prescription Number <span aria-hidden="true" style={{color:'var(--red)'}}>*</span></label>
                  <input type="text" id="r-rx" value={form.rxNumber} onChange={e => setForm(f=>({...f,rxNumber:e.target.value}))} placeholder="Rx# 123456" required/>
                </div>
                <div className="fg">
                  <label htmlFor="r-pickup">Pickup Preference</label>
                  <select id="r-pickup" value={form.pickup} onChange={e => setForm(f=>({...f,pickup:e.target.value}))}>
                    <option value="">Select preference…</option>
                    <option value="in-store">In-Store Pickup</option>
                    <option value="delivery">Free Home Delivery</option>
                    <option value="curbside">Curbside Pickup</option>
                  </select>
                </div>
                <div className="fg span2">
                  <label htmlFor="r-notes">Additional Notes</label>
                  <textarea id="r-notes" value={form.notes} onChange={e => setForm(f=>({...f,notes:e.target.value}))} placeholder="Any special instructions, allergies, or notes…"/>
                </div>
              </div>
              <button type="submit" className="btn btn-primary btn-submit" disabled={status === 'loading'}>
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
                {status === 'loading' ? 'Submitting…' : 'Submit Refill Request'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
