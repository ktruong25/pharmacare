'use client';
import { useState } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    const res = await signIn('credentials', { email, password, redirect: false });
    setLoading(false);
    if (res?.error) setError('Invalid email or password.');
    else router.push('/admin/dashboard');
  };

  return (
    <div style={{minHeight:'100vh',display:'flex',alignItems:'center',justifyContent:'center',background:'var(--cream)',padding:'24px'}}>
      <div style={{background:'white',borderRadius:'var(--r-xl)',padding:'48px 40px',boxShadow:'var(--shadow-lg)',width:'100%',maxWidth:420}}>
        <div style={{textAlign:'center',marginBottom:32}}>
          <svg width="48" height="48" viewBox="0 0 42 42" fill="none" style={{margin:'0 auto 16px'}} aria-hidden="true">
            <circle cx="21" cy="21" r="21" fill="#C8352A"/>
            <rect x="18.5" y="11" width="5" height="20" rx="2.5" fill="white"/>
            <rect x="11" y="18.5" width="20" height="5" rx="2.5" fill="white"/>
          </svg>
          <h1 style={{fontFamily:'var(--font-playfair)',fontSize:'1.6rem',fontWeight:700,color:'var(--ink)',marginBottom:6}}>Staff Login</h1>
          <p style={{fontSize:'.88rem',color:'var(--ink-soft)'}}>PharmaCare Rx Admin Portal</p>
        </div>

        {error && (
          <div role="alert" style={{background:'#fef2f2',border:'1px solid #fca5a5',borderRadius:8,padding:'10px 14px',marginBottom:20,color:'#991b1b',fontSize:'.88rem',fontWeight:600}}>
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} style={{display:'flex',flexDirection:'column',gap:16}}>
          <div className="fg">
            <label htmlFor="email">Email Address</label>
            <input type="email" id="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="staff@pharmacarerx.com" required autoComplete="email"/>
          </div>
          <div className="fg">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="••••••••" required autoComplete="current-password"/>
          </div>
          <button type="submit" className="btn btn-primary btn-submit" disabled={loading} style={{marginTop:8}}>
            {loading ? 'Signing in…' : 'Sign In'}
          </button>
        </form>
      </div>
    </div>
  );
}
