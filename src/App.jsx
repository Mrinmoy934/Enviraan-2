import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import StandardsStrip from './components/StandardsStrip';
import Problem from './components/Problem';
import PcfWizard from './components/PcfWizard';
import Pillars from './components/Pillars';
import HowItWorks from './components/HowItWorks';
import Standards from './components/Standards';
import Footer from './components/Footer';
import ScrollDirectionSection from './components/ScrollDirectionSection';

export default function App() {
  return (
    <div className="app-root">
      <Navbar />
      <main>
        <Hero />
        <StandardsStrip />
        
        <ScrollDirectionSection id="problem-section">
          <Problem />
        </ScrollDirectionSection>

        {/* PcfWizard/Explainer manages its own internal scroll triggers, so we don't wrap the outer container to prevent conflicting transforms */}
        <PcfWizard />
        
        <ScrollDirectionSection id="pillars-section">
          <Pillars />
        </ScrollDirectionSection>

        <ScrollDirectionSection id="howitworks-section">
          <HowItWorks />
        </ScrollDirectionSection>

        <ScrollDirectionSection id="standards-section">
          <Standards />
        </ScrollDirectionSection>
      </main>
      <Footer />
    </div>
  );
}
