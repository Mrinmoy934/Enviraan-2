import React from 'react';
import { motion } from 'framer-motion';

export default function Pillars() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 35 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { type: "spring", stiffness: 60, damping: 15 }
    }
  };

  return (
    <section id="platform" className="bg-warm-gray">
      <div className="container">
        <motion.div 
          className="pillars-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="eyebrow-tag">PROCESS · THE METHOD</span>
          <h2>From "no idea" to a verified number.</h2>
          <p className="pillars-lead">Manufacturers and suppliers write the carbon receipt together, guided, checked, and scored at every step.</p>
        </motion.div>
        
        <motion.div 
          className="pillars-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Step 01 */}
          <motion.div className="pillar-card" variants={cardVariants}>
            <div className="pillar-meta">
              <div>
                <div className="pillar-icon-badge">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <polyline points="14 2 14 8 20 8" />
                    <line x1="12" y1="18" x2="12" y2="12" />
                    <polyline points="9 15 12 12 15 15" />
                  </svg>
                </div>
                <span className="pillar-num">01: Open a PCF Request</span>
              </div>
              <h3 className="pillar-title-tagline">Pick a product and start a guided, step-by-step request.</h3>
            </div>
            <div className="pillar-desc-box">
              <p>Mandatory fields, due dates and a fixed order mean nothing required can be skipped.</p>
              <p className="pillar-metaphor">→ opening a homework folder with the checklist printed on the cover</p>
              <div className="pillar-mini-card">
                <div className="pillar-mini-card-header">NEW PCF REQUEST</div>
                <div className="pillar-mini-card-body">
                  <div className="pillar-mini-step done">
                    <span className="pillar-mini-dot done"></span>
                    <span>Basic information</span>
                    <span className="pillar-mini-status done">Done</span>
                  </div>
                  <div className="pillar-mini-step done">
                    <span className="pillar-mini-dot done"></span>
                    <span>Product &amp; components</span>
                    <span className="pillar-mini-status done">Done</span>
                  </div>
                  <div className="pillar-mini-step active">
                    <span className="pillar-mini-dot active"></span>
                    <span>Supplier data</span>
                    <span className="pillar-mini-status active">Active</span>
                  </div>
                  <div className="pillar-mini-step locked">
                    <span className="pillar-mini-dot locked"></span>
                    <span>Review &amp; submit</span>
                    <span className="pillar-mini-status locked">Locked</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Step 02 */}
          <motion.div className="pillar-card" variants={cardVariants}>
            <div className="pillar-meta">
              <div>
                <div className="pillar-icon-badge">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                </div>
                <span className="pillar-num">02: Ask the Suppliers</span>
              </div>
              <h3 className="pillar-title-tagline">Each supplier receives a smart questionnaire.</h3>
            </div>
            <div className="pillar-desc-box">
              <p>What energy they use, whether it's renewable, how far parts travel. Answers flow straight into the platform, ensuring GDPR safety.</p>
              <p className="pillar-metaphor">→ every classmate fills in their own page of the group project</p>
              <div className="pillar-mini-card">
                <div className="pillar-mini-card-header">QUESTIONNAIRE · SECTION 2</div>
                <div className="pillar-mini-card-body">
                  <div className="pillar-mini-data-row">
                    <span className="pillar-mini-data-label">Renewable electricity share</span>
                    <span className="pillar-mini-data-value">67%</span>
                  </div>
                  <div className="pillar-mini-data-row">
                    <span className="pillar-mini-data-label">Transport distance</span>
                    <span className="pillar-mini-data-value">840 km</span>
                  </div>
                  <div className="pillar-mini-data-row">
                    <span className="pillar-mini-data-label">Energy source</span>
                    <span className="pillar-mini-data-value">Wind + grid</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Step 03 */}
          <motion.div className="pillar-card" variants={cardVariants}>
            <div className="pillar-meta">
              <div>
                <div className="pillar-icon-badge">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="12 2 2 7 12 12 22 7 12 2" />
                    <polyline points="2 17 12 22 22 17" />
                    <polyline points="2 12 12 17 22 12" />
                  </svg>
                </div>
                <span className="pillar-num">03: Calculate by the Rules</span>
              </div>
              <h3 className="pillar-title-tagline">EnviGuide adds everything up cradle-to-gate following the international standards.</h3>
            </div>
            <div className="pillar-desc-box">
              <p>ISO 14067 and the GHG Protocol across Scopes 1, 2 and 3.</p>
              <p className="pillar-metaphor">→ a calculator that already knows the exact marking scheme</p>
              <div className="pillar-mini-card">
                <div className="pillar-mini-card-header">CALCULATION ENGINE</div>
                <div className="pillar-mini-card-body">
                  <div className="pillar-mini-data-row">
                    <span className="pillar-mini-data-label">Scope 1 – own fuel</span>
                    <span className="pillar-mini-data-value">1.8 kg</span>
                  </div>
                  <div className="pillar-mini-data-row">
                    <span className="pillar-mini-data-label">Scope 2 – bought power</span>
                    <span className="pillar-mini-data-value">2.7 kg</span>
                  </div>
                  <div className="pillar-mini-data-row">
                    <span className="pillar-mini-data-label">Scope 3 – supply chain</span>
                    <span className="pillar-mini-data-value">7.9 kg</span>
                  </div>
                  <div className="pillar-mini-data-row total">
                    <span className="pillar-mini-data-label">Total</span>
                    <span className="pillar-mini-data-value highlight">12.4 kg CO₂e</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Step 04 */}
          <motion.div className="pillar-card" variants={cardVariants}>
            <div className="pillar-meta">
              <div>
                <div className="pillar-icon-badge">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 8v4" />
                    <path d="M12 16h.01" />
                  </svg>
                </div>
                <span className="pillar-num">04: Rate, Report, Improve</span>
              </div>
              <h3 className="pillar-title-tagline">Every data point gets a Data Quality Rating where measured beats estimated.</h3>
            </div>
            <div className="pillar-desc-box">
              <p>Dashboards then show exactly where the carbon hides, so the next product scores lower.</p>
              <p className="pillar-metaphor">→ a report card that also tells you how to improve</p>
              <div className="pillar-mini-card">
                <div className="pillar-mini-card-header">DATA QUALITY RATING</div>
                <div className="pillar-mini-card-body">
                  <div className="pillar-mini-data-row">
                    <span className="pillar-mini-data-label">Primary data coverage</span>
                    <span className="pillar-mini-data-value highlight">78%</span>
                  </div>
                  <div className="pillar-mini-data-row">
                    <span className="pillar-mini-data-label">Overall</span>
                    <span className="pillar-mini-data-value stars">★★★★☆</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
