import React, { useState } from 'react';
import { 
  GraduationCap, 
  Briefcase, 
  Calendar, 
  MapPin, 
  Award, 
  CheckCircle2,
  ChevronRight
} from 'lucide-react';
import { resumeData } from '../data/resumeData';

const Timeline = () => {
  const [activeView, setActiveView] = useState('education'); // 'education' | 'experience'
  const { education, experience } = resumeData;

  return (
    <section id="timeline" className="section-container">
      <div className="section-title-wrap">
        <div className="section-subtitle">Academic & Professional Journey</div>
        <h2 className="section-title">Education & Internship</h2>
      </div>

      {/* View Switcher Toggle */}
      <div className="timeline-toggle-bar">
        <button
          className={`timeline-toggle-btn ${activeView === 'education' ? 'active' : ''}`}
          onClick={() => setActiveView('education')}
        >
          <GraduationCap size={18} />
          <span>Education Timeline</span>
        </button>

        <button
          className={`timeline-toggle-btn ${activeView === 'experience' ? 'active' : ''}`}
          onClick={() => setActiveView('experience')}
        >
          <Briefcase size={18} />
          <span>Work & Internship (1)</span>
        </button>
      </div>

      {/* Timeline Content */}
      <div className="timeline-wrapper">
        <div className="timeline-line"></div>

        {activeView === 'education' ? (
          <div className="timeline-items">
            {education.map((edu, idx) => (
              <div key={edu.id} className="timeline-item">
                {/* Node Dot */}
                <div className="timeline-node">
                  <GraduationCap size={18} />
                </div>

                {/* Card */}
                <div className="timeline-card glass-card">
                  <div className="timeline-card-header">
                    <div className="degree-title-block">
                      <span className="badge">{edu.status}</span>
                      <h3 className="degree-name">{edu.degree}</h3>
                      <p className="institution-name">{edu.institution}</p>
                    </div>

                    <div className="grade-badge">
                      <span className="grade-label">Grade</span>
                      <span className="grade-val">{edu.grade}</span>
                    </div>
                  </div>

                  <div className="timeline-meta-row">
                    <div className="meta-chip">
                      <Calendar size={14} />
                      <span>{edu.period}</span>
                    </div>
                    <div className="meta-chip">
                      <MapPin size={14} />
                      <span>{edu.location}</span>
                    </div>
                  </div>

                  <p className="timeline-desc">{edu.description}</p>

                  <div className="timeline-highlights-row">
                    {edu.highlights.map((h, i) => (
                      <span key={i} className="highlight-pill">
                        <CheckCircle2 size={12} color="#00f2fe" />
                        <span>{h}</span>
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="timeline-items">
            {experience.map((exp) => (
              <div key={exp.id} className="timeline-item">
                <div className="timeline-node experience-node">
                  <Briefcase size={18} />
                </div>

                <div className="timeline-card glass-card">
                  <div className="timeline-card-header">
                    <div className="degree-title-block">
                      <span className="badge badge-purple">{exp.type}</span>
                      <h3 className="degree-name">{exp.role}</h3>
                      <p className="institution-name">{exp.company}</p>
                    </div>
                  </div>

                  <div className="timeline-meta-row">
                    <div className="meta-chip">
                      <Calendar size={14} />
                      <span>{exp.period}</span>
                    </div>
                    <div className="meta-chip">
                      <MapPin size={14} />
                      <span>{exp.location}</span>
                    </div>
                  </div>

                  <p className="timeline-desc">{exp.description}</p>

                  {/* Bullet points */}
                  <ul className="exp-bullets">
                    {exp.bulletPoints.map((bp, i) => (
                      <li key={i}>
                        <ChevronRight size={14} className="bullet-arrow" />
                        <span>{bp}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="timeline-highlights-row" style={{ marginTop: '1.25rem' }}>
                    {exp.skillsUsed.map((sk, i) => (
                      <span key={i} className="highlight-pill">
                        <span>{sk}</span>
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <style>{`
        .timeline-toggle-bar {
          display: flex;
          justify-content: center;
          gap: 1rem;
          margin-bottom: 3.5rem;
        }

        .timeline-toggle-btn {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid var(--border-color);
          color: var(--text-muted);
          padding: 0.75rem 1.5rem;
          border-radius: var(--radius-full);
          font-size: 0.95rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.25s ease;
        }

        .timeline-toggle-btn:hover {
          color: var(--text-main);
          border-color: var(--border-color-glow);
        }

        .timeline-toggle-btn.active {
          background: var(--gradient-hero);
          color: #ffffff;
          border-color: transparent;
          box-shadow: 0 4px 20px rgba(0, 242, 254, 0.35);
        }

        .timeline-wrapper {
          position: relative;
          max-width: 900px;
          margin: 0 auto;
        }

        .timeline-line {
          position: absolute;
          left: 24px;
          top: 20px;
          bottom: 20px;
          width: 2px;
          background: linear-gradient(180deg, var(--accent-cyan) 0%, var(--accent-purple) 100%);
          opacity: 0.4;
        }

        .timeline-items {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .timeline-item {
          position: relative;
          padding-left: 60px;
        }

        .timeline-node {
          position: absolute;
          left: 0;
          top: 15px;
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background: var(--bg-secondary);
          border: 2px solid var(--accent-cyan);
          color: var(--accent-cyan);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 0 15px rgba(0, 242, 254, 0.3);
          z-index: 2;
        }

        .timeline-node.experience-node {
          border-color: var(--accent-purple);
          color: var(--accent-purple);
          box-shadow: 0 0 15px rgba(168, 85, 247, 0.3);
        }

        .timeline-card {
          padding: 2rem;
        }

        .timeline-card-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 1rem;
          gap: 1rem;
        }

        .degree-name {
          font-size: 1.35rem;
          font-weight: 800;
          color: var(--text-main);
          margin-top: 0.3rem;
        }

        .institution-name {
          font-size: 0.95rem;
          color: var(--accent-cyan);
          font-weight: 600;
        }

        .grade-badge {
          background: rgba(0, 242, 254, 0.1);
          border: 1px solid rgba(0, 242, 254, 0.25);
          padding: 0.4rem 0.8rem;
          border-radius: var(--radius-md);
          display: flex;
          flex-direction: column;
          align-items: center;
          min-width: 80px;
        }

        .grade-label {
          font-size: 0.68rem;
          text-transform: uppercase;
          color: var(--text-dim);
          font-weight: 700;
        }

        .grade-val {
          font-size: 1.1rem;
          font-weight: 800;
          color: var(--accent-cyan);
          font-family: var(--font-mono);
        }

        .timeline-meta-row {
          display: flex;
          gap: 1.25rem;
          margin-bottom: 1rem;
          flex-wrap: wrap;
        }

        .meta-chip {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 0.82rem;
          color: var(--text-dim);
        }

        .timeline-desc {
          color: var(--text-muted);
          font-size: 0.95rem;
          line-height: 1.6;
          margin-bottom: 1.25rem;
        }

        .timeline-highlights-row {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .highlight-pill {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid var(--border-color);
          padding: 0.25rem 0.75rem;
          border-radius: var(--radius-full);
          font-size: 0.78rem;
          color: var(--text-main);
        }

        .exp-bullets {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
        }

        .exp-bullets li {
          display: flex;
          align-items: flex-start;
          gap: 0.5rem;
          font-size: 0.92rem;
          color: var(--text-muted);
          line-height: 1.6;
        }

        .bullet-arrow {
          color: var(--accent-purple);
          margin-top: 4px;
          flex-shrink: 0;
        }

        .badge-purple {
          background: rgba(168, 85, 247, 0.1);
          border-color: rgba(168, 85, 247, 0.3);
          color: var(--accent-purple);
        }
      `}</style>
    </section>
  );
};

export default Timeline;
