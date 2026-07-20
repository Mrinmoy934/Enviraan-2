import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

const stepsData = [
  {
    num: "01",
    title: "Raw Materials",
    desc: "Aluminum, glass and plastic leave the earth, marking the start of the carbon story underground.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    x: 300,
    y: 150,
    details: {
      type: "Extraction Phase",
      title: "Material Sourcing",
      items: [
        { label: "Aluminum Alloy", value: "+2.1 kg CO₂e" },
        { label: "Glass Components", value: "+1.2 kg CO₂e" },
        { label: "Plastic Polymers", value: "+0.8 kg CO₂e" }
      ]
    }
  },
  {
    num: "02",
    title: "Part Making",
    desc: "Materials become lenses, housings, and wires as energy turns raw stock into components.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
      </svg>
    ),
    x: 750,
    y: 100,
    details: {
      type: "Manufacturing Phase",
      title: "Component Fabrication",
      items: [
        { label: "Lens Moulding", value: "+1.1 kg CO₂e" },
        { label: "Housing Casting", value: "+1.3 kg CO₂e" },
        { label: "Wiring & Circuits", value: "+0.6 kg CO₂e" }
      ]
    }
  },
  {
    num: "03",
    title: "Transport",
    desc: "Parts move country to country by ship and train, where shipping distance adds invisible weight.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="3" width="15" height="13" />
        <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
        <circle cx="5.5" cy="18.5" r="2.5" />
        <circle cx="18.5" cy="18.5" r="2.5" />
      </svg>
    ),
    x: 1200,
    y: 190,
    details: {
      type: "Logistics Phase",
      title: "Supply Chain Movement",
      items: [
        { label: "Ocean Freight", value: "+1.4 kg CO₂e" },
        { label: "Rail Transport", value: "+0.9 kg CO₂e" },
        { label: "Last-Mile Road", value: "+1.3 kg CO₂e" }
      ]
    }
  },
  {
    num: "04",
    title: "Assembly",
    desc: "The full headlight comes together inside the factory, where energy and heat finish the assembly.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
        <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
        <line x1="12" y1="22.08" x2="12" y2="12" />
      </svg>
    ),
    x: 1650,
    y: 100,
    details: {
      type: "Assembly Phase",
      title: "Final Integration",
      items: [
        { label: "Line Energy", value: "+1.6 kg CO₂e" },
        { label: "Soldering & Sealing", value: "+0.8 kg CO₂e" },
        { label: "Quality Testing", value: "+0.6 kg CO₂e" }
      ]
    }
  },
  {
    num: "05",
    title: "Pack & Gate",
    desc: "Counted, boxed and ready to leave the factory gate, completing the cradle-to-gate boundary.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    ),
    x: 2100,
    y: 160,
    details: {
      type: "Result Summary",
      title: "Product Carbon Footprint",
      items: [
        { label: "Total Footprint", value: "12.4 kg CO₂e / unit" },
        { label: "Boundary", value: "Cradle-to-Gate" },
        { label: "Standard", value: "ISO 14067 Compliant" }
      ]
    }
  }
];

// SVG Curved Line Path connecting the 5 nodes smoothly
const pathD = "M 100,170 C 150,170 200,150 300,150 C 420,150 620,100 750,100 C 880,100 1070,190 1200,190 C 1330,190 1520,100 1650,100 C 1780,100 1980,160 2100,160 C 2160,160 2230,170 2300,170";

export default function PcfWizard() {
  const containerRef = useRef(null);
  const [hoveredStep, setHoveredStep] = useState(null);

  // Set up Framer Motion scroll hook targeting our wizard outer scroll block
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Smooth scroll progression
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 90, damping: 20 });

  // Map vertical scroll progress (0 to 1) to horizontal movement
  const xTranslate = useTransform(smoothProgress, [0.05, 0.95], ["0%", "-62%"]);
  
  // Transform scroll progress to animate the SVG curved line drawing progress
  const pathLength = useTransform(smoothProgress, [0.05, 0.95], [0, 1]);

  return (
    <div ref={containerRef} id="how-it-works" className="wizard-scroll-outer">
      <div className="wizard-sticky-wrapper">
        <div className="container">
          <div className="wizard-header">
            <span className="eyebrow-tag accent-style">PCF EXPLAINER</span>
            <h2 className="wizard-title">What a carbon footprint actually is.</h2>
            <p className="wizard-subtitle">One headlight. Five stops. 12.4 kg of gas. Scroll down to follow the carbon as it adds up from raw material to factory gate.</p>
          </div>
        </div>

        {/* Horizontal Track Viewport */}
        <div className="wizard-viewport">
          <motion.div 
            className="wizard-track" 
            style={{ x: xTranslate }}
          >
            <div className="wizard-svg-container">
              <svg viewBox="0 0 2400 400" width="2400" height="400" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Background dashed curve */}
                <path 
                  d={pathD} 
                  stroke="rgba(22, 163, 74, 0.15)" 
                  strokeWidth="6" 
                  strokeLinecap="round" 
                  strokeDasharray="12 12" 
                />
                
                {/* Active glowing curve drawn on scroll */}
                <motion.path 
                  d={pathD} 
                  stroke="url(#greenGradient)" 
                  strokeWidth="6" 
                  strokeLinecap="round" 
                  style={{ pathLength: pathLength }}
                />

                {/* SVG Gradient definitions */}
                <defs>
                  <linearGradient id="greenGradient" x1="0" y1="200" x2="2400" y2="200" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#16a34a" />
                    <stop offset="50%" stopColor="#8FE000" />
                    <stop offset="100%" stopColor="#16a34a" />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            {/* Nodes and cards positioned on the curve */}
            {stepsData.map((step, index) => {
              return (
                <div 
                  key={index} 
                  className="wizard-step-node"
                  style={{ left: step.x, top: step.y }}
                  onMouseEnter={() => setHoveredStep(index)}
                  onMouseLeave={() => setHoveredStep(null)}
                >
                  {/* Indicator Dot on the Line */}
                  <motion.div 
                    className="wizard-dot"
                    whileHover={{ scale: 1.3 }}
                    animate={{ 
                      boxShadow: hoveredStep === index ? "0 0 20px #16a34a" : "0 0 8px rgba(22, 163, 74, 0.3)"
                    }}
                  >
                    {step.num}
                  </motion.div>

                  {/* Node Step Card */}
                  <motion.div 
                    className={`wizard-card ${hoveredStep === index ? 'hovered' : ''}`}
                    initial={{ opacity: 0.8, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4 }}
                  >
                    <div className="wizard-card-icon">{step.icon}</div>
                    <h3 className="wizard-card-title">{step.title}</h3>
                    <p className="wizard-card-desc">{step.desc}</p>
                    
                    <div className="wizard-card-hover-tip">
                      <span className="hover-pulse"></span>
                      Hover to view data
                    </div>
                  </motion.div>

                  {/* Calculations & Data Hover Panel */}
                  {hoveredStep === index && (
                    <motion.div 
                      className="wizard-calc-panel"
                      initial={{ opacity: 0, y: 60, scale: 0.95 }}
                      animate={{ opacity: 1, y: 80, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="calc-panel-header">
                        <span className="calc-tag">{step.details.type}</span>
                        <h4>{step.details.title}</h4>
                      </div>
                      <table className="calc-table">
                        <tbody>
                          {step.details.items.map((item, idx) => (
                            <tr key={idx}>
                              <td>{item.label}</td>
                              <td>{item.value}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </motion.div>
                  )}
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
