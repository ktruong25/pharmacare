'use client';
import { useEffect } from 'react';

export default function ScrollSetup() {
  useEffect(() => {
    const nav = document.getElementById('nav');
    const backTop = document.getElementById('back-top');

    const onScroll = () => {
      const y = window.scrollY;
      nav?.classList.toggle('scrolled', y > 50);
      backTop?.classList.toggle('show', y > 400);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    backTop?.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

    const revealObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -36px 0px' });

    document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

    const navAnchors = document.querySelectorAll('.nav-links a');
    const secObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          navAnchors.forEach(a => {
            const isCurrent = a.getAttribute('href') === '#' + entry.target.id;
            (a as HTMLElement).style.color = isCurrent ? 'var(--red)' : '';
            if (isCurrent) a.setAttribute('aria-current', 'true');
            else a.removeAttribute('aria-current');
          });
        }
      });
    }, { threshold: 0.45 });

    document.querySelectorAll('section[id]').forEach(s => secObserver.observe(s));

    return () => {
      window.removeEventListener('scroll', onScroll);
      revealObserver.disconnect();
      secObserver.disconnect();
    };
  }, []);

  return null;
}
