import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import ProjectModal from './components/ProjectModal';
import Timeline from './components/Timeline';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import PrintResume from './components/PrintResume';
import ParticleCanvas from './components/ParticleCanvas';
import { CheckCircle2, Sparkles, Heart } from 'lucide-react';
import { resumeData } from './data/resumeData';

function App() {
  const [theme, setTheme] = useState('cyber-dark');
  const [activeProject, setActiveProject] = useState(null);
  const [toasts, setToasts] = useState([]);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const addToast = (message) => {
    const id = Date.now();
    setToasts((prev) => [...prev, { id, message }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 3000);
  };

  const handleCopy = (text, label) => {
    navigator.clipboard.writeText(text);
    addToast(`Copied ${label} to clipboard!`);
    
    // Trigger celebratory micro-confetti
    confetti({
      particleCount: 25,
      spread: 60,
      origin: { y: 0.8 }
    });
  };

  const handlePrint = () => {
    addToast('Opening print view for PDF resume...');
    confetti({
      particleCount: 60,
      spread: 90,
      origin: { y: 0.5 }
    });
    setTimeout(() => {
      window.print();
    }, 400);
  };

  return (
    <div className="app-main-wrapper">
      {/* Background Interactive Particles */}
      <ParticleCanvas />

      {/* Main Top Navigation */}
      <Navbar 
        activeTheme={theme} 
        setTheme={setTheme} 
        onPrint={handlePrint} 
      />

      {/* Main Page Content */}
      <main className="no-print">
        <Hero onCopy={handleCopy} onPrint={handlePrint} />
        <Skills />
        <Projects onSelectProject={(proj) => setActiveProject(proj)} />
        <Timeline />
        <Certifications />
        <Contact onCopy={handleCopy} />
      </main>

      {/* Footer */}
      <footer className="no-print footer-bar">
        <div className="footer-container">
          <div className="footer-brand">
            <span className="text-gradient">Saravanakumar M</span>
            <span className="footer-sub">Dynamic MERN Portfolio & Interactive Resume</span>
          </div>

          <div className="footer-copy">
            <span>Built with React & Vanilla CSS</span>
            <Heart size={14} color="#ec4899" fill="#ec4899" />
            <span>2026</span>
          </div>
        </div>

        <style>{`
          .app-main-wrapper {
            position: relative;
            min-height: 100vh;
          }

          .footer-bar {
            border-top: 1px solid var(--border-color);
            padding: 2.5rem 1.5rem;
            background: rgba(10, 13, 20, 0.9);
            margin-top: 5rem;
          }

          .footer-container {
            max-width: 1200px;
            margin: 0 auto;
            display: flex;
            justify-content: space-between;
            align-items: center;
            flex-wrap: wrap;
            gap: 1rem;
          }

          .footer-brand {
            display: flex;
            flex-direction: column;
          }

          .footer-brand span:first-child {
            font-weight: 800;
            font-size: 1.1rem;
          }

          .footer-sub {
            font-size: 0.8rem;
            color: var(--text-dim);
          }

          .footer-copy {
            display: flex;
            align-items: center;
            gap: 0.4rem;
            font-size: 0.85rem;
            color: var(--text-muted);
          }
        `}</style>
      </footer>

      {/* Project Modal Preview */}
      {activeProject && (
        <ProjectModal 
          project={activeProject} 
          onClose={() => setActiveProject(null)} 
        />
      )}

      {/* Printable Resume Container */}
      <PrintResume />

      {/* Toast Notifications */}
      <div className="toast-container no-print">
        {toasts.map((t) => (
          <div key={t.id} className="toast">
            <CheckCircle2 size={18} color="#00f2fe" />
            <span>{t.message}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
