import React, { useState } from 'react';
import { 
  Cpu, 
  Code, 
  Globe, 
  Database, 
  Brain, 
  Star, 
  CheckCircle,
  Zap
} from 'lucide-react';
import { resumeData } from '../data/resumeData';

const categories = [
  { id: 'all', name: 'All Skills', icon: Cpu },
  { id: 'programming', name: 'Languages', icon: Code },
  { id: 'webTech', name: 'Web Tech', icon: Globe },
  { id: 'databases', name: 'Databases', icon: Database },
  { id: 'softSkills', name: 'Soft Skills', icon: Brain }
];

const Skills = () => {
  const [activeTab, setActiveTab] = useState('all');
  const { skills } = resumeData;

  const getAllSkills = () => {
    return [
      ...skills.programming.map(s => ({ ...s, type: 'programming', icon: Code })),
      ...skills.webTech.map(s => ({ ...s, type: 'webTech', icon: Globe })),
      ...skills.databases.map(s => ({ ...s, type: 'databases', icon: Database }))
    ];
  };

  const filteredSkills = activeTab === 'all' 
    ? getAllSkills() 
    : activeTab === 'softSkills' 
    ? [] 
    : getAllSkills().filter(s => s.type === activeTab);

  return (
    <section id="skills" className="section-container">
      <div className="section-title-wrap">
        <div className="section-subtitle">Technical Proficiency</div>
        <h2 className="section-title">Skills & Competencies</h2>
      </div>

      {/* Filter Tabs */}
      <div className="skills-tabs">
        {categories.map((cat) => {
          const Icon = cat.icon;
          return (
            <button
              key={cat.id}
              className={`skill-tab-btn ${activeTab === cat.id ? 'active' : ''}`}
              onClick={() => setActiveTab(cat.id)}
            >
              <Icon size={16} />
              <span>{cat.name}</span>
            </button>
          );
        })}
      </div>

      {/* Technical Skill Meters Grid */}
      {activeTab !== 'softSkills' && (
        <div className="skills-grid">
          {filteredSkills.map((skill, idx) => (
            <div key={idx} className="skill-card glass-card">
              <div className="skill-card-header">
                <div className="skill-icon-badge">
                  {skill.type === 'programming' && <Code size={18} />}
                  {skill.type === 'webTech' && <Globe size={18} />}
                  {skill.type === 'databases' && <Database size={18} />}
                </div>

                <div className="skill-title-block">
                  <h4 className="skill-name">{skill.name}</h4>
                  <span className="skill-cat-label">{skill.category}</span>
                </div>

                <span className="skill-pct">{skill.level}%</span>
              </div>

              {/* Skill Progress Bar */}
              <div className="skill-progress-bg">
                <div 
                  className="skill-progress-fill" 
                  style={{ width: `${skill.level}%` }}
                />
              </div>

              {/* Special Badges / Star Highlights */}
              <div className="skill-card-footer">
                {skill.stars ? (
                  <div className="star-highlight-badge">
                    <Star size={13} fill="#f59e0b" color="#f59e0b" />
                    <span>{skill.stars}</span>
                  </div>
                ) : skill.status ? (
                  <div className="status-highlight-badge">
                    <CheckCircle size={13} color="#10b981" />
                    <span>{skill.status}</span>
                  </div>
                ) : (
                  <div className="status-highlight-badge">
                    <Zap size={13} color="#00f2fe" />
                    <span>Proficient</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Soft Skills Section */}
      {(activeTab === 'all' || activeTab === 'softSkills') && (
        <div className="soft-skills-block">
          <h3 className="soft-skills-title">
            <Brain size={20} className="icon-cyan" />
            <span>Soft Skills & Analytical Mindset</span>
          </h3>

          <div className="soft-skills-grid">
            {skills.softSkills.map((soft, idx) => (
              <div key={idx} className="soft-skill-pill glass-card">
                <div className="soft-skill-icon">★</div>
                <span className="soft-skill-text">{soft}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      <style>{`
        .skills-tabs {
          display: flex;
          justify-content: center;
          gap: 0.75rem;
          margin-bottom: 3rem;
          flex-wrap: wrap;
        }

        .skill-tab-btn {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid var(--border-color);
          color: var(--text-muted);
          padding: 0.6rem 1.25rem;
          border-radius: var(--radius-full);
          font-size: 0.88rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.25 ease;
        }

        .skill-tab-btn:hover {
          color: var(--text-main);
          border-color: var(--border-color-glow);
          background: rgba(255, 255, 255, 0.08);
        }

        .skill-tab-btn.active {
          background: var(--gradient-hero);
          color: #ffffff;
          border-color: transparent;
          box-shadow: 0 4px 15px rgba(0, 242, 254, 0.35);
        }

        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
          gap: 1.5rem;
          margin-bottom: 3.5rem;
        }

        .skill-card {
          padding: 1.5rem;
        }

        .skill-card-header {
          display: flex;
          align-items: center;
          gap: 0.85rem;
          margin-bottom: 1rem;
        }

        .skill-icon-badge {
          width: 38px;
          height: 38px;
          border-radius: var(--radius-sm);
          background: rgba(0, 242, 254, 0.1);
          border: 1px solid rgba(0, 242, 254, 0.25);
          color: var(--accent-cyan);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .skill-title-block {
          flex: 1;
        }

        .skill-name {
          font-size: 1.05rem;
          font-weight: 700;
          color: var(--text-main);
        }

        .skill-cat-label {
          font-size: 0.72rem;
          color: var(--text-dim);
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .skill-pct {
          font-family: var(--font-mono);
          font-weight: 700;
          color: var(--accent-cyan);
          font-size: 0.95rem;
        }

        .skill-progress-bg {
          width: 100%;
          height: 7px;
          background: rgba(255, 255, 255, 0.08);
          border-radius: 4px;
          overflow: hidden;
          margin-bottom: 1rem;
        }

        .skill-progress-fill {
          height: 100%;
          background: var(--gradient-hero);
          border-radius: 4px;
          transition: width 1s ease-in-out;
        }

        .skill-card-footer {
          display: flex;
          align-items: center;
          justify-content: flex-end;
        }

        .star-highlight-badge {
          display: flex;
          align-items: center;
          gap: 0.3rem;
          background: rgba(245, 158, 11, 0.12);
          border: 1px solid rgba(245, 158, 11, 0.3);
          color: var(--accent-amber);
          padding: 0.2rem 0.6rem;
          border-radius: var(--radius-full);
          font-size: 0.72rem;
          font-weight: 700;
        }

        .status-highlight-badge {
          display: flex;
          align-items: center;
          gap: 0.3rem;
          background: rgba(16, 185, 129, 0.1);
          border: 1px solid rgba(16, 185, 129, 0.25);
          color: var(--accent-emerald);
          padding: 0.2rem 0.6rem;
          border-radius: var(--radius-full);
          font-size: 0.72rem;
          font-weight: 600;
        }

        .soft-skills-block {
          margin-top: 2.5rem;
          background: rgba(255, 255, 255, 0.02);
          border: 1px dashed var(--border-color);
          padding: 2rem;
          border-radius: var(--radius-lg);
        }

        .soft-skills-title {
          font-size: 1.2rem;
          font-weight: 700;
          color: var(--text-main);
          display: flex;
          align-items: center;
          gap: 0.6rem;
          margin-bottom: 1.5rem;
        }

        .icon-cyan {
          color: var(--accent-cyan);
        }

        .soft-skills-grid {
          display: flex;
          flex-wrap: wrap;
          gap: 0.85rem;
        }

        .soft-skill-pill {
          padding: 0.75rem 1.25rem;
          display: flex;
          align-items: center;
          gap: 0.6rem;
          border-radius: var(--radius-full);
        }

        .soft-skill-icon {
          color: var(--accent-cyan);
          font-size: 0.85rem;
        }

        .soft-skill-text {
          font-weight: 600;
          font-size: 0.9rem;
          color: var(--text-main);
        }
      `}</style>
    </section>
  );
};

export default Skills;
