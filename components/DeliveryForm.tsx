'use client';
import { useEffect, useState } from 'react';

export default function DeliveryForm() {
  const [form, setForm] = useState({ name: '', phone: '', address: '', city: '', scheduledDate: '', scheduledTime: '', rxNumbers: '', notes: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [minDate, setMinDate] = useState('');

  useEffect(() => { setMinDate(new Date().toISOString().split('T')[0]); }, []);

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
      const res = await fetch('/api/delivery', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error();
      setStatus('success');
      setForm({ name: '', phone: '', address: '', city: '', scheduledDate: '', scheduledTime: '', rxNumbers: '', notes: '' });
    } catch {
      setStatus('error');
    }
  };

  return (
    <section className="refill" id="schedule-delivery" aria-labelledby="delivery-form-heading">
      <div className="container">
        <div className="refill-grid">
          <div className="refill-info reveal">
            <p className="refill-eyebrow">Free &amp; Same-Day</p>
            <h2 className="refill-title" id="delivery-form-heading">Schedule Your Delivery</h2>
            <p className="refill-desc">Fill out the short form and we'll deliver your prescription to your door — free of charge, no minimums.</p>
            <ul className="perk-list" aria-label="Delivery benefits">
              {['Same-day delivery when ordered by 2:00 PM','Free delivery — no fees, no minimum','We\'ll call to confirm your order details','Most major insurance plans accepted'].map(p => (
                <li className="perk" key={p}>
                  <span className="perk-check" aria-hidden="true">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3"><polyline points="20 6 9 17 4 12"/></svg>
                  </span>
                  {p}
                </li>
              ))}
            </ul>
            <hr className="refill-divider"/>
            <p className="refill-phone-label">Questions? Call us directly.</p>
            <a href="tel:7145311755" className="refill-phone-link">
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" aria-hidden="true"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8 19.79 19.79 0 012 2.22 2 2 0 014 .04h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
              714.531.1755
            </a>
          </div>

          <div className="refill-form-card reveal">
            <h3 className="form-card-title">Delivery Request</h3>
            <p className="form-card-sub">We serve Fountain Valley, Garden Grove, Westminster, Huntington Beach &amp; Santa Ana.</p>

            {status === 'success' && (
              <div role="status" style={{background:'#f0fdf4',border:'1px solid #86efac',borderRadius:8,padding:'12px 16px',marginBottom:20,color:'#166534',fontSize:'.9rem',fontWeight:600}}>
                Delivery scheduled! We'll call you to confirm.
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
                  <label htmlFor="d-name">Full Name <span aria-hidden="true" style={{color:'var(--red)'}}>*</span></label>
                  <input type="text" id="d-name" value={form.name} onChange={e => setForm(f=>({...f,name:e.target.value}))} placeholder="Jane Smith" required autoComplete="name"/>
                </div>
                <div className="fg">
                  <label htmlFor="d-phone">Phone Number <span aria-hidden="true" style={{color:'var(--red)'}}>*</span></label>
                  <input type="tel" id="d-phone" value={form.phone} onChange={e => setForm(f=>({...f,phone:formatPhone(e.target.value)}))} placeholder="714-555-0000" required autoComplete="tel"/>
                </div>
                <div className="fg">
                  <label htmlFor="d-address">Street Address <span aria-hidden="true" style={{color:'var(--red)'}}>*</span></label>
                  <input type="text" id="d-address" value={form.address} onChange={e => setForm(f=>({...f,address:e.target.value}))} placeholder="123 Harbor Blvd" required autoComplete="street-address"/>
                </div>
                <div className="fg">
                  <label htmlFor="d-city">City <span aria-hidden="true" style={{color:'var(--red)'}}>*</span></label>
                  <input type="text" id="d-city" value={form.city} onChange={e => setForm(f=>({...f,city:e.target.value}))} placeholder="Fountain Valley" required autoComplete="address-level2"/>
                </div>
                <div className="fg">
                  <label htmlFor="d-date">Preferred Date <span aria-hidden="true" style={{color:'var(--red)'}}>*</span></label>
                  <input type="date" id="d-date" value={form.scheduledDate} min={minDate} onChange={e => setForm(f=>({...f,scheduledDate:e.target.value}))} required/>
                </div>
                <div className="fg">
                  <label htmlFor="d-time">Preferred Time <span aria-hidden="true" style={{color:'var(--red)'}}>*</span></label>
                  <select id="d-time" value={form.scheduledTime} onChange={e => setForm(f=>({...f,scheduledTime:e.target.value}))} required>
                    <option value="">Select time window…</option>
                    <option value="morning">Morning (9:30 AM – 12:00 PM)</option>
                    <option value="afternoon">Afternoon (12:00 PM – 3:00 PM)</option>
                    <option value="evening">Late Afternoon (3:00 PM – 5:30 PM)</option>
                  </select>
                </div>
                <div className="fg span2">
                  <label htmlFor="d-rx">Prescription Number(s)</label>
                  <input type="text" id="d-rx" value={form.rxNumbers} onChange={e => setForm(f=>({...f,rxNumbers:e.target.value}))} placeholder="Rx# 123456, Rx# 789012"/>
                </div>
                <div className="fg span2">
                  <label htmlFor="d-notes">Additional Notes</label>
                  <textarea id="d-notes" value={form.notes} onChange={e => setForm(f=>({...f,notes:e.target.value}))} placeholder="Gate codes, building instructions, or anything else we should know…"/>
                </div>
              </div>
              <button type="submit" className="btn btn-primary btn-submit" disabled={status === 'loading'}>
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
                {status === 'loading' ? 'Submitting…' : 'Schedule Delivery'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
