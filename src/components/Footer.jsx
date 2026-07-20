import React, { useState } from 'react';

export default function Footer() {
  const [showToast, setShowToast] = useState(false);

  const handleBookDemo = (e) => {
    e.preventDefault();
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
    }, 3000);
  };

  return (
    <>
      {/* Final CTA (Dark Band) */}
      <section id="demo" className="cta-band">
        <div className="container">
          <div className="cta-wrapper">
            <span className="eyebrow-tag" style={{ color: 'var(--color-primary-lime)' }}>IN NUMBERS WHEN YOU ARE</span>
            <h2>Make the invisible measurable.</h2>
            <p>Join the manufacturers and suppliers already writing carbon receipts, and shrinking them, with EnviGuide.</p>
            
            <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', marginTop: '24px', alignItems: 'center', justifyContent: 'center' }}>
              <a href="#demo" className="btn btn-primary-dark" id="btnBookDemo" onClick={handleBookDemo}>
                <span>Request a demo</span>
                <span className="btn-arrow">
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.5 8.5L8.5 1.5M8.5 1.5H3M8.5 1.5V7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="btn btn-secondary-dark" style={{ border: '1px solid rgba(255, 255, 255, 0.2)', padding: '12px 24px', borderRadius: '99px', color: '#ffffff', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '8px', fontSize: '14px', fontWeight: '700' }}>
                <span>View on GitHub</span>
              </a>
            </div>

            <div style={{ marginTop: '48px', paddingTop: '32px', borderTop: '1px solid rgba(255, 255, 255, 0.08)' }}>
              <p style={{ fontSize: '12px', fontWeight: '800', letterSpacing: '0.12em', color: '#64748B', margin: 0, textTransform: 'uppercase' }}>
                CURRENTLY TRACKING 100,000 DATA POINTS ACROSS SUPPLY CHAIN
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-top">
            <div className="footer-brand">
              <div className="footer-logo">
                <img src="/logowhite.png" alt="EnviGuide Logo" className="footer-logo-img" />
              </div>
              <p className="footer-desc">B2B product carbon footprint transparency native to Catena-X dataspaces and PACT alignment.</p>
            </div>

            <div className="footer-links-grid">
              <div>
                <h4 className="footer-column-title">Platform</h4>
                <ul className="footer-links">
                  <li><a href="#platform">Overview</a></li>
                  <li><a href="#platform">Calculations</a></li>
                  <li><a href="#platform">Exchange</a></li>
                </ul>
              </div>
              <div>
                <h4 className="footer-column-title">How it works</h4>
                <ul className="footer-links">
                  <li><a href="#how-it-works">Requests</a></li>
                  <li><a href="#how-it-works">Questionnaires</a></li>
                  <li><a href="#how-it-works">Digital Twins</a></li>
                </ul>
              </div>
              <div>
                <h4 className="footer-column-title">Standards</h4>
                <ul className="footer-links">
                  <li><a href="#standards">WBCSD PACT</a></li>
                  <li><a href="#standards">ISO 14067</a></li>
                </ul>
              </div>
              <div>
                <h4 className="footer-column-title">Resources</h4>
                <ul className="footer-links">
                  <li><a href="#resources">Who It's For</a></li>
                  <li><a href="#demo">Book a Demo</a></li>
                  <li><a href="#platform">Governance</a></li>
                </ul>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <span className="footer-copy">© 2026 EnviGuide · Environmental Management Suite</span>
            <ul className="footer-links" style={{ flexDirection: 'row', gap: '24px' }}>
              <li><a href="#privacy">Privacy Policy</a></li>
              <li><a href="#contact">Contact Support</a></li>
            </ul>
          </div>
        </div>
      </footer>

      {/* Booking confirmation toast notification */}
      {showToast && (
        <div 
          style={{
            position: 'fixed',
            bottom: '24px',
            right: '24px',
            backgroundColor: '#8FE000',
            color: '#0E1211',
            padding: '16px 28px',
            borderRadius: '9999px',
            boxShadow: '0 10px 30px rgba(14,18,17,0.15)',
            fontFamily: 'Inter, sans-serif',
            fontWeight: '700',
            fontSize: '14px',
            zIndex: '9999',
            animation: 'slideInToast 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards'
          }}
        >
          Demo Request Registered! We will contact you within 24 hours.
        </div>
      )}

      {/* Global CSS animation for toast entry */}
      <style>{`
        @keyframes slideInToast {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </>
  );
}
