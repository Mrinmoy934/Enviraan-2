import React from 'react';
import { motion } from 'framer-motion';

export default function Problem() {
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
    <section className="bg-white">
      <div className="container">
        {/* Section Header */}
        <motion.div 
          className="problem-intro"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="eyebrow-tag accent-style">THE PROBLEM</span>
          <h2>You can't shrink what you can't see.</h2>
          <p className="problem-lead">Making one small car part can release more invisible gas than the part itself weighs. Three things keep that number in the dark.</p>
        </motion.div>

        {/* Problem Cards */}
        <motion.div 
          className="problem-cards-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Card 01 — Physics */}
          <motion.div className="problem-card" variants={cardVariants}>
            <div className="problem-card-num-row">
              <span className="problem-card-num">01</span>
              <span className="problem-card-keyword">PHYSICS</span>
            </div>
            <h3 className="problem-card-title">The gas is invisible</h3>
            <p className="problem-card-desc">Picture every product trailing a balloon of gas it created while being made. Some balloons are tiny, some enormous, and all of them are invisible.</p>
            <div className="problem-card-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 16v-4" />
                <path d="M12 8h.01" />
              </svg>
            </div>
          </motion.div>

          {/* Card 02 — Supply Chain */}
          <motion.div className="problem-card" variants={cardVariants}>
            <div className="problem-card-num-row">
              <span className="problem-card-num">02</span>
              <span className="problem-card-keyword">SUPPLY CHAIN</span>
            </div>
            <h3 className="problem-card-title">The story is scattered</h3>
            <p className="problem-card-desc">One headlight has dozens of suppliers across many countries. Each holds one piece of the carbon story, usually in a spreadsheet nobody shares.</p>
            <div className="problem-card-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
              </svg>
            </div>
          </motion.div>

          {/* Card 03 — Regulation */}
          <motion.div className="problem-card" variants={cardVariants}>
            <div className="problem-card-num-row">
              <span className="problem-card-num">03</span>
              <span className="problem-card-keyword">REGULATION</span>
            </div>
            <h3 className="problem-card-title">Guessing isn't allowed</h3>
            <p className="problem-card-desc">New laws and major customers demand proven numbers, calculated by strict international standards rather than estimated on the back of a napkin.</p>
            <div className="problem-card-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
                <line x1="16" y1="13" x2="8" y2="13" />
                <line x1="16" y1="17" x2="8" y2="17" />
              </svg>
            </div>
          </motion.div>
        </motion.div>

        {/* Closing Quote */}
        <motion.blockquote 
          className="problem-quote"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          "Factories must now show the planet a receipt, and most don't know how to write one."
        </motion.blockquote>
      </div>
    </section>
  );
}
