import React, { useState, useEffect } from 'react';
import { 
  Code2, 
  Sparkles, 
  ArrowRight, 
  Download, 
  Mail, 
  MapPin, 
  CheckCircle2,
  Terminal,
  Cpu
} from 'lucide-react';
import { GithubIcon, LinkedinIcon, HackerRankIcon } from './SocialIcons';
import { resumeData } from '../data/resumeData';

const roles = [
  "Full Stack MERN Developer",
  "MCA Student @ PSG CAS",
  "Web Developer Intern @ NullClass",
  "Problem Solver & 5-Star C/SQL Dev"
];

const Hero = ({ onCopy, onPrint }) => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    let timer;

    if (isDeleting) {
      timer = setTimeout(() => {
        setDisplayText(currentRole.substring(0, displayText.length - 1));
      }, 40);
    } else {
      timer = setTimeout(() => {
        setDisplayText(currentRole.substring(0, displayText.length + 1));
      }, 80);
    }

    if (!isDeleting && displayText === currentRole) {
      timer = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayText === '') {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, roleIndex]);

  const { personalInfo } = resumeData;

  return (
    <section id="about" className="hero-section">
      <div className="hero-container">
        {/* Left Content Column */}
        <div className="hero-content">
          <div className="status-badge">
            <span className="status-dot"></span>
            <span>Available for Full-Time Roles & Projects</span>
          </div>

          <h1 className="hero-title">
            Hi, I'm <span className="text-gradient">{personalInfo.name}</span>
          </h1>

          <div className="typewriter-box">
            <Terminal size={20} className="typewriter-icon" />
            <span className="typewriter-text">{displayText}</span>
            <span className="cursor-blink">|</span>
          </div>

          <p className="hero-bio">
            {personalInfo.aboutMe}
          </p>

          <div className="hero-meta-row">
            <div className="meta-item">
              <MapPin size={16} />
              <span>{personalInfo.location}</span>
            </div>
            <div className="meta-item">
              <Mail size={16} />
              <span>{personalInfo.email}</span>
            </div>
          </div>

          {/* Call to Actions */}
          <div className="hero-cta-group">
            <a href="#projects" className="btn-primary">
              <span>View Projects</span>
              <ArrowRight size={16} />
            </a>

            <button className="btn-secondary" onClick={() => onCopy(personalInfo.email, 'Email address')}>
              <Mail size={16} />
              <span>Copy Email</span>
            </button>

            <button className="btn-secondary" onClick={onPrint}>
              <Download size={16} />
              <span>PDF Resume</span>
            </button>
          </div>

          {/* Social Links */}
          <div className="social-links-row">
            <span className="social-label">Connect:</span>
            <a 
              href={personalInfo.github} 
              target="_blank" 
              rel="noreferrer" 
              className="social-btn"
              title="GitHub Profile"
            >
              <GithubIcon size={18} />
              <span>GitHub</span>
            </a>
            <a 
              href={personalInfo.linkedin} 
              target="_blank" 
              rel="noreferrer" 
              className="social-btn"
              title="LinkedIn Profile"
            >
              <LinkedinIcon size={18} />
              <span>LinkedIn</span>
            </a>
            <a 
              href={personalInfo.hackerrank} 
              target="_blank" 
              rel="noreferrer" 
              className="social-btn"
              title="HackerRank Profile"
            >
              <HackerRankIcon size={18} />
              <span>HackerRank</span>
            </a>
          </div>
        </div>

        {/* Right Graphic / Profile Display */}
        <div className="hero-graphic-col">
          <div className="avatar-card glass-card">
            {/* Ambient Background Glow */}
            <div className="avatar-glow animate-pulse-glow" />

            {/* Profile Avatar Graphic */}
            <div className="avatar-frame">
              <div className="avatar-inner">
                <div className="avatar-monogram">
                  <span>SK</span>
                </div>
              </div>
              <div className="avatar-ring animate-float" />
            </div>

            <div className="avatar-info">
              <h3 className="avatar-name">{personalInfo.name}</h3>
              <p className="avatar-sub">{personalInfo.subTitle}</p>

              <div className="avatar-tags">
                <span className="badge">MERN Stack</span>
                <span className="badge">React.js</span>
                <span className="badge">Node.js</span>
                <span className="badge">MongoDB</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Quick Metrics Strip */}
      <div className="stats-strip">
        <div className="stats-container">
          {personalInfo.stats.map((stat, idx) => (
            <div key={idx} className="stat-card glass-card">
              <div className="stat-value text-gradient">{stat.value}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .hero-section {
          position: relative;
          padding-top: 8rem;
          padding-bottom: 4rem;
          overflow: hidden;
        }

        .hero-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1.5rem;
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 3.5rem;
          align-items: center;
        }

        @media (max-width: 968px) {
          .hero-container {
            grid-template-columns: 1fr;
            text-align: center;
          }
          .hero-content {
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          .hero-meta-row {
            justify-content: center;
          }
          .hero-cta-group {
            justify-content: center;
          }
          .social-links-row {
            justify-content: center;
          }
        }

        .status-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: rgba(16, 185, 129, 0.1);
          border: 1px solid rgba(16, 185, 129, 0.25);
          color: var(--accent-emerald);
          padding: 0.35rem 0.9rem;
          border-radius: var(--radius-full);
          font-size: 0.8rem;
          font-weight: 600;
          margin-bottom: 1.25rem;
        }

        .status-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: var(--accent-emerald);
          box-shadow: 0 0 10px var(--accent-emerald);
        }

        .hero-title {
          font-size: 3.5rem;
          font-weight: 800;
          line-height: 1.1;
          letter-spacing: -1px;
          margin-bottom: 1rem;
        }

        @media (max-width: 640px) {
          .hero-title { font-size: 2.5rem; }
        }

        .typewriter-box {
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
          background: rgba(0, 0, 0, 0.3);
          border: 1px solid var(--border-color);
          padding: 0.6rem 1.2rem;
          border-radius: var(--radius-md);
          font-family: var(--font-mono);
          font-size: 1.1rem;
          color: var(--accent-cyan);
          margin-bottom: 1.5rem;
          min-height: 48px;
        }

        .hero-bio {
          font-size: 1.05rem;
          color: var(--text-muted);
          line-height: 1.7;
          margin-bottom: 1.75rem;
          max-width: 620px;
        }

        .hero-meta-row {
          display: flex;
          gap: 1.5rem;
          margin-bottom: 2rem;
          flex-wrap: wrap;
        }

        .meta-item {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          color: var(--text-dim);
          font-size: 0.88rem;
        }

        .hero-cta-group {
          display: flex;
          gap: 1rem;
          margin-bottom: 2.5rem;
          flex-wrap: wrap;
        }

        .social-links-row {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          flex-wrap: wrap;
        }

        .social-label {
          font-size: 0.85rem;
          color: var(--text-dim);
          font-weight: 600;
        }

        .social-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          padding: 0.4rem 0.8rem;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-full);
          color: var(--text-muted);
          text-decoration: none;
          font-size: 0.82rem;
          font-weight: 600;
          transition: all 0.2s ease;
        }

        .social-btn:hover {
          color: var(--accent-cyan);
          border-color: var(--accent-cyan);
          background: rgba(0, 242, 254, 0.08);
        }

        .hero-graphic-col {
          display: flex;
          justify-content: center;
        }

        .avatar-card {
          padding: 2.5rem 2rem;
          text-align: center;
          width: 100%;
          max-width: 380px;
          display: flex;
          flex-direction: column;
          align-items: center;
          position: relative;
        }

        .avatar-glow {
          position: absolute;
          width: 250px;
          height: 250px;
          border-radius: 50%;
          background: radial-gradient(circle, var(--accent-cyan) 0%, rgba(168, 85, 247, 0.4) 100%);
          z-index: 0;
          pointer-events: none;
        }

        .avatar-frame {
          position: relative;
          width: 140px;
          height: 140px;
          margin-bottom: 1.5rem;
          z-index: 1;
        }

        .avatar-inner {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          background: var(--bg-secondary);
          border: 3px solid var(--border-color-glow);
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          box-shadow: var(--shadow-glow);
        }

        .avatar-monogram {
          font-size: 3rem;
          font-weight: 900;
          background: var(--gradient-hero);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .avatar-ring {
          position: absolute;
          inset: -8px;
          border-radius: 50%;
          border: 2px dashed var(--accent-cyan);
          opacity: 0.6;
        }

        .avatar-info {
          position: relative;
          z-index: 1;
        }

        .avatar-name {
          font-size: 1.4rem;
          font-weight: 700;
          color: var(--text-main);
          margin-bottom: 0.2rem;
        }

        .avatar-sub {
          font-size: 0.82rem;
          color: var(--text-muted);
          margin-bottom: 1.25rem;
        }

        .avatar-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.4rem;
          justify-content: center;
        }

        .stats-strip {
          max-width: 1200px;
          margin: 4rem auto 0 auto;
          padding: 0 1.5rem;
        }

        .stats-container {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.25rem;
        }

        @media (max-width: 768px) {
          .stats-container {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        .stat-card {
          padding: 1.5rem;
          text-align: center;
        }

        .stat-value {
          font-size: 2.2rem;
          font-weight: 800;
          line-height: 1;
          margin-bottom: 0.4rem;
        }

        .stat-label {
          font-size: 0.82rem;
          color: var(--text-muted);
          font-weight: 600;
        }
      `}</style>
    </section>
  );
};

export default Hero;
