'use client';
import { useEffect, useState } from 'react';
import { signOut } from 'next-auth/react';

type Refill = { id: string; name: string; phone: string; rxNumber: string; pickup?: string | null; notes?: string | null; status: string; createdAt: string; };
type Message = { id: string; name: string; phone?: string | null; email: string; subject?: string | null; message: string; status: string; createdAt: string; };
type Delivery = { id: string; name: string; phone: string; address: string; city: string; scheduledDate: string; scheduledTime: string; rxNumbers?: string | null; notes?: string | null; status: string; createdAt: string; };

const badge = (status: string) => {
  const colors: Record<string, string> = { pending: '#92400e', completed: '#166534', unread: '#1e40af', read: '#374151', 'out-for-delivery': '#1e40af', delivered: '#166534', cancelled: '#374151', resolved: '#166534' };
  const bg: Record<string, string> = { pending: '#fef3c7', completed: '#dcfce7', unread: '#dbeafe', read: '#f3f4f6', 'out-for-delivery': '#dbeafe', delivered: '#dcfce7', cancelled: '#f3f4f6', resolved: '#dcfce7' };
  return <span style={{fontSize:'.72rem',fontWeight:700,padding:'3px 10px',borderRadius:50,background:bg[status]||'#f3f4f6',color:colors[status]||'#374151',textTransform:'capitalize'}}>{status.replace(/-/g,' ')}</span>;
};

export default function Dashboard() {
  const [tab, setTab] = useState<'refills' | 'messages' | 'deliveries'>('refills');
  const [refills, setRefills] = useState<Refill[]>([]);
  const [messages, setMessages] = useState<Message[]>([]);
  const [deliveries, setDeliveries] = useState<Delivery[]>([]);
  const [loading, setLoading] = useState(true);

  const load = async () => {
    setLoading(true);
    const [r, m, d] = await Promise.all([
      fetch('/api/admin/refills').then(r=>r.json()),
      fetch('/api/admin/messages').then(r=>r.json()),
      fetch('/api/admin/deliveries').then(r=>r.json()),
    ]);
    setRefills(Array.isArray(r) ? r : []);
    setMessages(Array.isArray(m) ? m : []);
    setDeliveries(Array.isArray(d) ? d : []);
    setLoading(false);
  };

  useEffect(() => { load(); }, []);

  const updateRefill = async (id: string, status: string) => {
    await fetch('/api/admin/refills', { method: 'PATCH', headers: {'Content-Type':'application/json'}, body: JSON.stringify({ id, status }) });
    setRefills(rs => rs.map(r => r.id === id ? { ...r, status } : r));
  };

  const updateMessage = async (id: string, status: string) => {
    await fetch('/api/admin/messages', { method: 'PATCH', headers: {'Content-Type':'application/json'}, body: JSON.stringify({ id, status }) });
    setMessages(ms => ms.map(m => m.id === id ? { ...m, status } : m));
  };

  const updateDelivery = async (id: string, status: string) => {
    await fetch('/api/admin/deliveries', { method: 'PATCH', headers: {'Content-Type':'application/json'}, body: JSON.stringify({ id, status }) });
    setDeliveries(ds => ds.map(d => d.id === id ? { ...d, status } : d));
  };

  const fmt = (d: string) => new Date(d).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric', hour: 'numeric', minute: '2-digit' });

  const th: React.CSSProperties = { padding: '10px 16px', textAlign: 'left', fontSize: '.72rem', fontWeight: 700, letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--ink-soft)', borderBottom: '2px solid #f1ede8', background: '#faf4ec' };
  const td: React.CSSProperties = { padding: '14px 16px', fontSize: '.88rem', color: 'var(--ink)', borderBottom: '1px solid #f1ede8', verticalAlign: 'top' };

  return (
    <div style={{minHeight:'100vh',background:'var(--cream)'}}>
      {/* Top bar */}
      <div style={{background:'white',borderBottom:'1px solid #e8e0d8',padding:'0 28px',display:'flex',alignItems:'center',justifyContent:'space-between',height:64}}>
        <div style={{display:'flex',alignItems:'center',gap:10}}>
          <svg width="32" height="32" viewBox="0 0 42 42" fill="none" aria-hidden="true">
            <circle cx="21" cy="21" r="21" fill="#C8352A"/>
            <rect x="18.5" y="11" width="5" height="20" rx="2.5" fill="white"/>
            <rect x="11" y="18.5" width="20" height="5" rx="2.5" fill="white"/>
          </svg>
          <span style={{fontWeight:700,fontSize:'1rem',color:'var(--ink)'}}>PharmaCare Rx <span style={{color:'var(--ink-soft)',fontWeight:400}}>/ Admin</span></span>
        </div>
        <div style={{display:'flex',alignItems:'center',gap:14}}>
          <a href="/" style={{fontSize:'.84rem',color:'var(--slate-dark)'}}>← View Site</a>
          <button onClick={() => signOut({ callbackUrl: '/admin/login' })} className="btn btn-outline" style={{padding:'7px 18px',fontSize:'.82rem'}}>Sign Out</button>
        </div>
      </div>

      <div style={{maxWidth:1100,margin:'0 auto',padding:'36px 28px'}}>
        {/* Stats */}
        <div style={{display:'grid',gridTemplateColumns:'repeat(4,1fr)',gap:16,marginBottom:32}}>
          {[
            { label: 'Total Refill Requests', val: refills.length },
            { label: 'Pending Refills', val: refills.filter(r=>r.status==='pending').length },
            { label: 'Unread Messages', val: messages.filter(m=>m.status==='unread').length },
            { label: 'Pending Deliveries', val: deliveries.filter(d=>d.status==='pending').length },
          ].map(({ label, val }) => (
            <div key={label} style={{background:'white',borderRadius:'var(--r-md)',padding:'20px 24px',boxShadow:'var(--shadow-xs)'}}>
              <div style={{fontSize:'2rem',fontWeight:700,color:'var(--red)',fontFamily:'var(--font-playfair)',lineHeight:1}}>{loading ? '…' : val}</div>
              <div style={{fontSize:'.82rem',color:'var(--ink-soft)',marginTop:4}}>{label}</div>
            </div>
          ))}
        </div>

        {/* Tabs */}
        <div style={{display:'flex',gap:4,marginBottom:20,flexWrap:'wrap'}}>
          <button onClick={() => setTab('refills')} style={{padding:'8px 20px',borderRadius:50,border:'none',fontSize:'.88rem',fontWeight:600,cursor:'pointer',background:tab==='refills'?'var(--red)':'white',color:tab==='refills'?'white':'var(--ink)',boxShadow:'var(--shadow-xs)'}}>
            Refill Requests ({refills.length})
          </button>
          <button onClick={() => setTab('deliveries')} style={{padding:'8px 20px',borderRadius:50,border:'none',fontSize:'.88rem',fontWeight:600,cursor:'pointer',background:tab==='deliveries'?'var(--red)':'white',color:tab==='deliveries'?'white':'var(--ink)',boxShadow:'var(--shadow-xs)'}}>
            Deliveries ({deliveries.length})
          </button>
          <button onClick={() => setTab('messages')} style={{padding:'8px 20px',borderRadius:50,border:'none',fontSize:'.88rem',fontWeight:600,cursor:'pointer',background:tab==='messages'?'var(--red)':'white',color:tab==='messages'?'white':'var(--ink)',boxShadow:'var(--shadow-xs)'}}>
            Messages ({messages.length})
          </button>
        </div>

        {/* Table */}
        <div style={{background:'white',borderRadius:'var(--r-lg)',boxShadow:'var(--shadow-sm)',overflow:'hidden'}}>
          {loading ? (
            <div style={{padding:48,textAlign:'center',color:'var(--ink-soft)'}}>Loading…</div>
          ) : tab === 'deliveries' ? (
            <table style={{width:'100%',borderCollapse:'collapse'}}>
              <thead>
                <tr>
                  <th style={th}>Submitted</th><th style={th}>Name</th><th style={th}>Phone</th><th style={th}>Address</th><th style={th}>Date</th><th style={th}>Time</th><th style={th}>Status</th><th style={th}>Action</th>
                </tr>
              </thead>
              <tbody>
                {deliveries.length === 0 ? (
                  <tr><td colSpan={8} style={{...td,textAlign:'center',color:'var(--ink-soft)',padding:32}}>No delivery requests yet.</td></tr>
                ) : deliveries.map(d => (
                  <tr key={d.id}>
                    <td style={td}>{fmt(d.createdAt)}</td>
                    <td style={td}><strong>{d.name}</strong>{d.notes && <div style={{fontSize:'.78rem',color:'var(--ink-soft)',marginTop:2}}>{d.notes}</div>}</td>
                    <td style={td}><a href={`tel:${d.phone}`} style={{color:'var(--red)'}}>{d.phone}</a></td>
                    <td style={td}>{d.address}, {d.city}</td>
                    <td style={td}>{d.scheduledDate}</td>
                    <td style={td}><span style={{textTransform:'capitalize'}}>{d.scheduledTime}</span></td>
                    <td style={td}>{badge(d.status)}</td>
                    <td style={td}>
                      <select value={d.status} onChange={e => updateDelivery(d.id, e.target.value)} style={{fontSize:'.82rem',padding:'5px 8px',borderRadius:6,border:'1px solid #e8e0d8',background:'white',cursor:'pointer',appearance:'auto'}}>
                        <option value="pending">Pending</option>
                        <option value="out-for-delivery">Out for Delivery</option>
                        <option value="delivered">Delivered</option>
                        <option value="cancelled">Cancelled</option>
                      </select>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : tab === 'refills' ? (
            <table style={{width:'100%',borderCollapse:'collapse'}}>
              <thead>
                <tr>
                  <th style={th}>Date</th><th style={th}>Name</th><th style={th}>Phone</th><th style={th}>Rx #</th><th style={th}>Pickup</th><th style={th}>Status</th><th style={th}>Action</th>
                </tr>
              </thead>
              <tbody>
                {refills.length === 0 ? (
                  <tr><td colSpan={7} style={{...td,textAlign:'center',color:'var(--ink-soft)',padding:32}}>No refill requests yet.</td></tr>
                ) : refills.map(r => (
                  <tr key={r.id}>
                    <td style={td}>{fmt(r.createdAt)}</td>
                    <td style={td}><strong>{r.name}</strong>{r.notes && <div style={{fontSize:'.78rem',color:'var(--ink-soft)',marginTop:2}}>{r.notes}</div>}</td>
                    <td style={td}><a href={`tel:${r.phone}`} style={{color:'var(--red)'}}>{r.phone}</a></td>
                    <td style={td}><code style={{fontSize:'.85rem'}}>{r.rxNumber}</code></td>
                    <td style={td}>{r.pickup || '—'}</td>
                    <td style={td}>{badge(r.status)}</td>
                    <td style={td}>
                      <select value={r.status} onChange={e => updateRefill(r.id, e.target.value)} style={{fontSize:'.82rem',padding:'5px 8px',borderRadius:6,border:'1px solid #e8e0d8',background:'white',cursor:'pointer',appearance:'auto'}}>
                        <option value="pending">Pending</option>
                        <option value="completed">Completed</option>
                        <option value="cancelled">Cancelled</option>
                      </select>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <table style={{width:'100%',borderCollapse:'collapse'}}>
              <thead>
                <tr>
                  <th style={th}>Date</th><th style={th}>Name</th><th style={th}>Email</th><th style={th}>Topic</th><th style={th}>Message</th><th style={th}>Status</th><th style={th}>Action</th>
                </tr>
              </thead>
              <tbody>
                {messages.length === 0 ? (
                  <tr><td colSpan={7} style={{...td,textAlign:'center',color:'var(--ink-soft)',padding:32}}>No messages yet.</td></tr>
                ) : messages.map(m => (
                  <tr key={m.id}>
                    <td style={td}>{fmt(m.createdAt)}</td>
                    <td style={td}><strong>{m.name}</strong>{m.phone && <div style={{fontSize:'.78rem',color:'var(--ink-soft)',marginTop:2}}>{m.phone}</div>}</td>
                    <td style={td}><a href={`mailto:${m.email}`} style={{color:'var(--red)'}}>{m.email}</a></td>
                    <td style={td}>{m.subject || '—'}</td>
                    <td style={{...td,maxWidth:240}}><span style={{display:'-webkit-box',WebkitLineClamp:3,WebkitBoxOrient:'vertical',overflow:'hidden'}}>{m.message}</span></td>
                    <td style={td}>{badge(m.status)}</td>
                    <td style={td}>
                      <select value={m.status} onChange={e => updateMessage(m.id, e.target.value)} style={{fontSize:'.82rem',padding:'5px 8px',borderRadius:6,border:'1px solid #e8e0d8',background:'white',cursor:'pointer',appearance:'auto'}}>
                        <option value="unread">Unread</option>
                        <option value="read">Read</option>
                        <option value="resolved">Resolved</option>
                      </select>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
}
