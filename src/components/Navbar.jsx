import React, { useState, useEffect } from 'react';
import { 
  Code, 
  Printer, 
  Palette, 
  Menu, 
  X, 
  User, 
  Cpu, 
  FolderGit2, 
  GraduationCap, 
  Award, 
  Mail 
} from 'lucide-react';

const themes = [
  { id: 'cyber-dark', name: 'Cyber Dark', iconColor: '#00f2fe' },
  { id: 'midnight-neon', name: 'Midnight Neon', iconColor: '#ff007f' },
  { id: 'glass-slate', name: 'Glass Slate', iconColor: '#14b8a6' },
  { id: 'light-mode', name: 'Clean Light', iconColor: '#2563eb' }
];

const Navbar = ({ activeTheme, setTheme, onPrint }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [themeDropdownOpen, setThemeDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about', icon: User },
    { name: 'Skills', href: '#skills', icon: Cpu },
    { name: 'Projects', href: '#projects', icon: FolderGit2 },
    { name: 'Timeline', href: '#timeline', icon: GraduationCap },
    { name: 'Certifications', href: '#certifications', icon: Award },
    { name: 'Contact', href: '#contact', icon: Mail }
  ];

  return (
    <header className={`no-print navbar-header ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        {/* Brand Logo */}
        <a href="#about" className="nav-logo">
          <div className="logo-badge">
            <span>SK</span>
          </div>
          <div className="logo-text">
            <span className="logo-name">Saravanakumar M</span>
            <span className="logo-role">MERN Developer</span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="desktop-nav">
          {navLinks.map((link) => {
            const Icon = link.icon;
            return (
              <a key={link.name} href={link.href} className="nav-link">
                <Icon size={16} />
                <span>{link.name}</span>
              </a>
            );
          })}
        </nav>

        {/* Controls: Theme Dropdown & Print Resume */}
        <div className="nav-actions">
          {/* Theme Dropdown */}
          <div className="theme-dropdown-wrap">
            <button 
              className="theme-btn"
              onClick={() => setThemeDropdownOpen(!themeDropdownOpen)}
              title="Switch Visual Theme"
            >
              <Palette size={18} />
              <span className="theme-btn-text">Theme</span>
            </button>

            {themeDropdownOpen && (
              <div className="theme-menu">
                <div className="theme-menu-title">Select Theme</div>
                {themes.map((t) => (
                  <button
                    key={t.id}
                    className={`theme-option ${activeTheme === t.id ? 'active' : ''}`}
                    onClick={() => {
                      setTheme(t.id);
                      setThemeDropdownOpen(false);
                    }}
                  >
                    <span 
                      className="theme-dot" 
                      style={{ backgroundColor: t.iconColor }} 
                    />
                    {t.name}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Export / Print PDF Button */}
          <button className="btn-primary print-trigger-btn" onClick={onPrint}>
            <Printer size={16} />
            <span>PDF Resume</span>
          </button>

          {/* Mobile Menu Toggle */}
          <button 
            className="mobile-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Drawer */}
      {mobileMenuOpen && (
        <div className="mobile-menu-drawer">
          {navLinks.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.name}
                href={link.href}
                className="mobile-nav-link"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Icon size={18} />
                <span>{link.name}</span>
              </a>
            );
          })}
          <div className="mobile-theme-row">
            <span className="mobile-theme-label">Theme:</span>
            <div className="mobile-theme-btns">
              {themes.map((t) => (
                <button
                  key={t.id}
                  className={`mobile-theme-chip ${activeTheme === t.id ? 'active' : ''}`}
                  onClick={() => {
                    setTheme(t.id);
                    setMobileMenuOpen(false);
                  }}
                >
                  {t.name.split(' ')[0]}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      <style>{`
        .navbar-header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 100;
          padding: 1.2rem 1.5rem;
          transition: all 0.3s ease;
        }

        .navbar-header.scrolled {
          padding: 0.8rem 1.5rem;
          background: rgba(10, 13, 20, 0.85);
          backdrop-filter: blur(20px);
          border-bottom: 1px solid var(--border-color);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);
        }

        .nav-container {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .nav-logo {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          text-decoration: none;
        }

        .logo-badge {
          width: 42px;
          height: 42px;
          border-radius: var(--radius-md);
          background: var(--gradient-hero);
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 800;
          color: #ffffff;
          font-size: 1.1rem;
          box-shadow: 0 4px 15px rgba(0, 242, 254, 0.4);
        }

        .logo-text {
          display: flex;
          flex-direction: column;
        }

        .logo-name {
          font-weight: 700;
          color: var(--text-main);
          font-size: 1.05rem;
          letter-spacing: -0.3px;
        }

        .logo-role {
          font-size: 0.75rem;
          color: var(--accent-cyan);
          font-weight: 600;
        }

        .desktop-nav {
          display: flex;
          align-items: center;
          gap: 1.5rem;
        }

        .nav-link {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          color: var(--text-muted);
          text-decoration: none;
          font-weight: 500;
          font-size: 0.9rem;
          transition: all 0.2s ease;
          padding: 0.4rem 0.6rem;
          border-radius: var(--radius-sm);
        }

        .nav-link:hover {
          color: var(--accent-cyan);
          background: rgba(255, 255, 255, 0.05);
        }

        .nav-actions {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .theme-dropdown-wrap {
          position: relative;
        }

        .theme-btn {
          background: rgba(255, 255, 255, 0.06);
          border: 1px solid var(--border-color);
          color: var(--text-main);
          padding: 0.6rem 0.9rem;
          border-radius: var(--radius-full);
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 0.85rem;
          font-weight: 600;
          transition: all 0.2s ease;
        }

        .theme-btn:hover {
          background: rgba(255, 255, 255, 0.12);
          border-color: var(--accent-cyan);
        }

        .theme-menu {
          position: absolute;
          top: calc(100% + 8px);
          right: 0;
          background: var(--bg-card);
          backdrop-filter: blur(16px);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-md);
          padding: 0.5rem;
          min-width: 170px;
          box-shadow: var(--shadow-card);
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
          z-index: 120;
        }

        .theme-menu-title {
          font-size: 0.7rem;
          text-transform: uppercase;
          letter-spacing: 1px;
          color: var(--text-dim);
          padding: 0.4rem 0.6rem;
          font-weight: 700;
        }

        .theme-option {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          background: transparent;
          border: none;
          color: var(--text-main);
          padding: 0.5rem 0.6rem;
          border-radius: var(--radius-sm);
          font-size: 0.85rem;
          cursor: pointer;
          transition: all 0.2s ease;
          text-align: left;
        }

        .theme-option:hover, .theme-option.active {
          background: rgba(255, 255, 255, 0.1);
          color: var(--accent-cyan);
        }

        .theme-dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
        }

        .mobile-toggle {
          display: none;
          background: transparent;
          border: none;
          color: var(--text-main);
          cursor: pointer;
        }

        @media (max-width: 900px) {
          .desktop-nav {
            display: none;
          }
          .mobile-toggle {
            display: block;
          }
          .theme-btn-text {
            display: none;
          }
        }

        .mobile-menu-drawer {
          background: var(--bg-secondary);
          border-bottom: 1px solid var(--border-color);
          padding: 1rem 1.5rem;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .mobile-nav-link {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          color: var(--text-main);
          text-decoration: none;
          padding: 0.6rem;
          border-radius: var(--radius-sm);
          font-weight: 600;
        }

        .mobile-theme-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 0.75rem;
          border-top: 1px solid var(--border-color);
        }

        .mobile-theme-label {
          font-size: 0.85rem;
          color: var(--text-muted);
        }

        .mobile-theme-btns {
          display: flex;
          gap: 0.4rem;
        }

        .mobile-theme-chip {
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid var(--border-color);
          color: var(--text-main);
          padding: 0.3rem 0.6rem;
          border-radius: var(--radius-full);
          font-size: 0.75rem;
          cursor: pointer;
        }

        .mobile-theme-chip.active {
          border-color: var(--accent-cyan);
          color: var(--accent-cyan);
          background: rgba(0, 242, 254, 0.1);
        }
      `}</style>
    </header>
  );
};

export default Navbar;
