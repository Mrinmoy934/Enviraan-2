import React, { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    document.body.style.overflow = !isOpen ? 'hidden' : '';
  };

  const closeMenu = () => {
    setIsOpen(false);
    document.body.style.overflow = '';
  };

  return (
    <>
      <nav className="navbar">
        <div className="container nav-wrapper">
          <a href="#" className="logo-container" aria-label="EnviGuide Home" onClick={closeMenu}>
            <img src="/logoblack.png" alt="EnviGuide Logo" className="nav-logo" style={{ height: '60px', width: 'auto', display: 'block' }} />
          </a>

          <ul className="nav-links">
            <li><a href="#problem-section">The problem</a></li>
            <li><a href="#how-it-works">The journey</a></li>
            <li><a href="#platform">How it works</a></li>
            <li><a href="#standards">Plain words</a></li>
          </ul>

          <div className="nav-actions">
            <a href="#demo" className="btn btn-primary nav-btn-desktop">
              <span>Request a demo</span>
              <span className="btn-arrow">
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1.5 8.5L8.5 1.5M8.5 1.5H3M8.5 1.5V7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
            </a>
            <button 
              className={`menu-toggle ${isOpen ? 'active' : ''}`} 
              onClick={toggleMenu} 
              aria-label="Toggle Mobile Menu"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Overlay */}
      <div 
        className={`mobile-overlay ${isOpen ? 'open' : ''}`} 
        onClick={closeMenu}
      ></div>

      {/* Mobile Drawer Menu */}
      <div className={`mobile-nav ${isOpen ? 'open' : ''}`}>
        <ul className="mobile-links">
          <li><a href="#problem-section" className="mobile-link" onClick={closeMenu}>The problem</a></li>
          <li><a href="#how-it-works" className="mobile-link" onClick={closeMenu}>The journey</a></li>
          <li><a href="#platform" className="mobile-link" onClick={closeMenu}>How it works</a></li>
          <li><a href="#standards" className="mobile-link" onClick={closeMenu}>Plain words</a></li>
        </ul>
        <div className="mobile-cta">
          <a href="#demo" className="btn btn-primary mobile-link" style={{ width: '100%' }} onClick={closeMenu}>
            <span>Request a demo</span>
            <span className="btn-arrow">
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.5 8.5L8.5 1.5M8.5 1.5H3M8.5 1.5V7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
          </a>
        </div>
      </div>
    </>
  );
}
