import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Standards() {
  const [openIndex, setOpenIndex] = useState(null);

  const items = [
    {
      num: "01",
      title: "PCF",
      subtitle: "PRODUCT CARBON FOOTPRINT",
      desc: "The total invisible gas released to make one product, expressed as a single number in kg CO₂e, serving as a climate-focused nutrition label."
    },
    {
      num: "02",
      title: "CO₂e",
      subtitle: "CO₂-EQUIVALENT",
      desc: "Translates the warming power of various greenhouse gases into a single unit relative to carbon dioxide, simplifying complex climate impacts."
    },
    {
      num: "03",
      title: "Cradle-to-gate",
      subtitle: "THE COUNTING WINDOW",
      desc: "The specific boundary mapping all emissions from raw material extraction up to the moment the finished product exits the factory door."
    },
    {
      num: "04",
      title: "Scopes 1 · 2 · 3",
      subtitle: "WHERE EMISSIONS SIT",
      desc: "Defines where gases originate: Scope 1 is direct factory fuel; Scope 2 is bought energy; Scope 3 is supply chain materials."
    }
  ];

  const toggleDropdown = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="standards" className="bg-white">
      <div className="container">
        <motion.div 
          className="standards-grid-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: '40px' }}
        >
          <span className="eyebrow-tag">GLOSSARY</span>
          <h2>Speak carbon in four words.</h2>
          <p className="section-subtitle-text" style={{ color: 'var(--color-body-copy)', fontSize: '18px', marginTop: '12px', maxWidth: '600px', marginLeft: 'auto', marginRight: 'auto', textAlign: 'center' }}>
            Four terms unlock almost every conversation about product carbon. Explore them below, with no dictionary required.
          </p>
        </motion.div>

        {/* Interactive Dropdown / Accordion Layout */}
        <div className="glossary-dropdowns-container" style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {items.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index} 
                className={`glossary-dropdown-item ${isOpen ? 'active' : ''}`}
                style={{
                  border: '1px solid var(--color-border)',
                  borderRadius: '16px',
                  backgroundColor: 'var(--color-card-green)',
                  overflow: 'hidden',
                  transition: 'all 0.3s ease'
                }}
              >
                <button
                  onClick={() => toggleDropdown(index)}
                  style={{
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '24px 32px',
                    background: 'none',
                    border: 'none',
                    textAlign: 'left',
                    cursor: 'pointer',
                    outline: 'none'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                    <span style={{ 
                      fontFamily: 'var(--font-heading)', 
                      fontWeight: '800', 
                      fontSize: '20px', 
                      color: isOpen ? 'var(--color-primary-lime-hover)' : 'var(--color-warm-gray)',
                      transition: 'color 0.3s ease'
                    }}>
                      {item.num}
                    </span>
                    <div>
                      <h3 style={{ 
                        margin: 0, 
                        fontFamily: 'var(--font-heading)', 
                        fontSize: '20px', 
                        fontWeight: '700', 
                        color: 'var(--color-dark-bg)' 
                      }}>
                        {item.title}
                      </h3>
                      <span style={{ 
                        fontSize: '11px', 
                        fontWeight: '800', 
                        letterSpacing: '0.05em', 
                        color: 'var(--color-body-copy)',
                        textTransform: 'uppercase'
                      }}>
                        {item.subtitle}
                      </span>
                    </div>
                  </div>
                  
                  {/* Chevron Icon */}
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    style={{ color: 'var(--color-dark-bg)' }}
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                      <div style={{ padding: '0 32px 24px 72px' }}>
                        <p style={{ 
                          margin: 0, 
                          fontSize: '15px', 
                          lineHeight: '1.6', 
                          color: 'var(--color-body-copy)' 
                        }}>
                          {item.desc}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
