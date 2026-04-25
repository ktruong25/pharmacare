'use client';
import { useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const mobileRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const isHome = pathname === '/';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (!navRef.current?.contains(e.target as Node) && !mobileRef.current?.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (!el) return;
    window.scrollTo({ top: (el as HTMLElement).getBoundingClientRect().top + window.scrollY - 76, behavior: 'smooth' });
    setOpen(false);
  };

  return (
    <>
      <nav id="nav" ref={navRef} className={scrolled ? 'scrolled' : ''} aria-label="Main navigation">
        <div className="container">
          <div className="nav-inner">
            <a href={isHome ? '#home' : '/'} className="site-logo" aria-label="PharmaCare Rx Home" onClick={isHome ? (e => { e.preventDefault(); scrollTo('#home'); }) : undefined}>
              <svg className="logo-mark" viewBox="0 0 42 42" fill="none" aria-hidden="true">
                <circle cx="21" cy="21" r="21" fill="#C8352A"/>
                <rect x="18.5" y="11" width="5" height="20" rx="2.5" fill="white"/>
                <rect x="11" y="18.5" width="20" height="5" rx="2.5" fill="white"/>
                <circle cx="31" cy="31" r="4" fill="white" fillOpacity=".20"/>
              </svg>
              <div className="logo-wordmark">
                <div className="logo-name-row">
                  <span className="logo-name">Pharma<em>Care</em></span>
                  <span className="logo-script">Rx</span>
                </div>
                <span className="logo-sub">Fountain Valley, CA</span>
              </div>
            </a>

            <ul className="nav-links" role="list">
              {[['#about','About'],['#services','Services'],['#contact','Contact']].map(([href, label]) => (
                <li key={href}>
                  {isHome
                    ? <a href={href} onClick={e => { e.preventDefault(); scrollTo(href); }}>{label}</a>
                    : <a href={`/${href}`}>{label}</a>}
                </li>
              ))}
              <li><a href="/delivery">Delivery</a></li>
              <li><a href="/refill">Refill Rx</a></li>
            </ul>

            <div className="nav-right">
              <a href="tel:7145311755" className="nav-phone" aria-label="Call 714.531.1755">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8 19.79 19.79 0 012 2.22 2 2 0 014 .04h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
                714.531.1755
              </a>
              <a href="/refill" className="btn btn-primary nav-pill">Refill Rx</a>
            </div>

            <button
              className={`hamburger${open ? ' is-open' : ''}`}
              id="hamburger"
              aria-label="Toggle menu"
              aria-expanded={open}
              aria-controls="mobile-nav"
              onClick={() => setOpen(o => !o)}
            >
              <span/><span/><span/>
            </button>
          </div>
        </div>
      </nav>

      <div
        id="mobile-nav"
        ref={mobileRef}
        className={`mobile-nav${open ? ' is-open' : ''}`}
        role="navigation"
        aria-label="Mobile navigation"
        aria-hidden={!open}
      >
        {[['#about','About Us'],['#services','Our Services'],['#contact','Contact & Hours']].map(([href, label]) => (
          isHome
            ? <a key={href} href={href} onClick={e => { e.preventDefault(); scrollTo(href); }}>{label}</a>
            : <a key={href} href={`/${href}`}>{label}</a>
        ))}
        <a href="/delivery">Schedule Delivery</a>
        <a href="/refill">Refill Prescription</a>
        <a href="tel:7145311755">&#9742; 714.531.1755</a>
      </div>
    </>
  );
}
