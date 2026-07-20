import React from 'react';
import { motion } from 'framer-motion';

const features = [
  {
    title: "PCF Requests",
    desc: "Create, track and edit requests with a fixed step-by-step flow. Due dates and error messages.",
    plainly: "the to-do list that runs your carbon footprint",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="12" y1="18" x2="12" y2="12" />
        <polyline points="9 15 12 12 15 15" />
      </svg>
    )
  },
  {
    title: "Supplier Questionnaires",
    desc: "GDPR-aware questionnaires on energy, renewables, transport, and materials, with public onboarding for new suppliers.",
    plainly: "how suppliers tell you their part of the story",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 20h9" />
        <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
      </svg>
    )
  },
  {
    title: "Product Portfolio",
    desc: "Every product and component in one catalog, linked to the materials, suppliers, and footprints that make it.",
    plainly: "a library card for every product you make",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
        <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
        <line x1="12" y1="22.08" x2="12" y2="12" />
      </svg>
    )
  },
  {
    title: "Data Quality Rating",
    desc: "Scopes every data point so you know what's measured, what's estimated, and what to improve.",
    plainly: "a truth-meter for your numbers",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="7" />
        <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
      </svg>
    )
  },
  {
    title: "Reports & Dashboards",
    desc: "Drill into emissions by life-cycle stage, transport, packaging, or supplier, and trace them over time.",
    plainly: "the map that shows where the carbon hides",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="20" x2="18" y2="10" />
        <line x1="12" y1="20" x2="12" y2="4" />
        <line x1="6" y1="20" x2="6" y2="14" />
      </svg>
    )
  },
  {
    title: "Tasks, Roles & MFA",
    desc: "Assign work, manage teams with role-based access, and keep everyone secure and moving.",
    plainly: "everyone knows their job, nothing gets lost",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    )
  }
];

export default function HowItWorks() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 35 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { type: "spring", stiffness: 70, damping: 15 }
    }
  };

  return (
    <section id="how-it-works" className="bg-white">
      <div className="container">
        <motion.div 
          className="hiw-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="eyebrow-tag">INSIDE THE PLATFORM</span>
          <h2>The whole story, in one workspace.</h2>
        </motion.div>

        <motion.div 
          className="hiw-grid hiw-grid-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {features.map((feat, i) => (
            <motion.div className="hiw-card" variants={cardVariants} key={i}>
              <div className="hiw-num-container">
                <span className="hiw-num">{String(i + 1).padStart(2, '0')}</span>
                <div className="hiw-icon">{feat.icon}</div>
              </div>
              <h3 className="hiw-title">{feat.title}</h3>
              <p className="hiw-desc">{feat.desc}</p>
              <p className="hiw-plainly">→ Plainly: {feat.plainly}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
