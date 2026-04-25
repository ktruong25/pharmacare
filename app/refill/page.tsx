import Nav from '@/components/Nav';
import RefillForm from '@/components/RefillForm';
import Footer from '@/components/Footer';
import ScrollSetup from '@/components/ScrollSetup';

export const metadata = {
  title: 'Refill Prescription | PharmaCare Rx',
  description: 'Request a prescription refill online. We\'ll have it ready for pickup or delivered free to your door.',
};

export default function RefillPage() {
  return (
    <>
      <a href="#main-content" className="skip-link">Skip to main content</a>
      <Nav />
      <main id="main-content">
        <RefillForm />
      </main>
      <Footer />
      <button id="back-top" aria-label="Back to top">
        <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><polyline points="18 15 12 9 6 15"/></svg>
      </button>
      <ScrollSetup />
    </>
  );
}
