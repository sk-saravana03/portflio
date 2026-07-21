import React, { useState } from 'react';
import { 
  FolderGit2, 
  ExternalLink, 
  Maximize2, 
  Sparkles, 
  Video, 
  Car,
  Code
} from 'lucide-react';
import { GithubIcon } from './SocialIcons';
import { resumeData } from '../data/resumeData';

const Projects = ({ onSelectProject }) => {
  const { projects } = resumeData;
  const [filter, setFilter] = useState('all');

  const filterCategories = [
    { id: 'all', label: 'All Projects' },
    { id: 'MERN', label: 'MERN Stack' },
    { id: 'React', label: 'React.js' },
    { id: 'Node', label: 'Node.js & MongoDB' }
  ];

  return (
    <section id="projects" className="section-container">
      <div className="section-title-wrap">
        <div className="section-subtitle">Featured Work</div>
        <h2 className="section-title">Full Stack Projects</h2>
      </div>

      {/* Filter Chips */}
      <div className="projects-filter-bar">
        {filterCategories.map((cat) => (
          <button
            key={cat.id}
            className={`filter-chip ${filter === cat.id ? 'active' : ''}`}
            onClick={() => setFilter(cat.id)}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card glass-card">
            {/* Visual Top Header */}
            <div className="project-card-header">
              <div className="project-icon-box">
                {project.id === 'playhive' ? <Video size={24} /> : <Car size={24} />}
              </div>

              <div className="project-header-meta">
                <span className="badge">{project.category}</span>
                <span className="project-date">{project.period}</span>
              </div>
            </div>

            {/* Title & Description */}
            <h3 className="project-title">{project.title}</h3>
            <p className="project-sub">{project.subTitle}</p>
            <p className="project-desc">{project.description}</p>

            {/* Key Features Preview Pills */}
            <div className="project-features-preview">
              {project.keyFeatures.slice(0, 2).map((feat, idx) => (
                <div key={idx} className="feature-item">
                  <span className="feature-dot">•</span>
                  <span>{feat}</span>
                </div>
              ))}
            </div>

            {/* Tech Stack Chips */}
            <div className="project-tech-row">
              {project.techStack.map((tech, idx) => (
                <span key={idx} className="project-tech-tag">{tech}</span>
              ))}
            </div>

            {/* Card Actions */}
            <div className="project-card-actions">
              <button 
                className="btn-primary project-action-btn"
                onClick={() => onSelectProject(project)}
              >
                <Maximize2 size={16} />
                <span>Interactive Preview</span>
              </button>

              <a 
                href={project.github} 
                target="_blank" 
                rel="noreferrer"
                className="btn-secondary project-action-btn"
                title="View Source on GitHub"
              >
                <GithubIcon size={16} />
                <span>Code</span>
              </a>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        .projects-filter-bar {
          display: flex;
          justify-content: center;
          gap: 0.75rem;
          margin-bottom: 3rem;
          flex-wrap: wrap;
        }

        .filter-chip {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid var(--border-color);
          color: var(--text-muted);
          padding: 0.5rem 1.2rem;
          border-radius: var(--radius-full);
          font-size: 0.85rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .filter-chip:hover, .filter-chip.active {
          background: rgba(0, 242, 254, 0.12);
          border-color: var(--accent-cyan);
          color: var(--accent-cyan);
        }

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
          gap: 2rem;
        }

        @media (max-width: 640px) {
          .projects-grid {
            grid-template-columns: 1fr;
          }
        }

        .project-card {
          padding: 2rem;
          display: flex;
          flex-direction: column;
        }

        .project-card-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1.25rem;
        }

        .project-icon-box {
          width: 48px;
          height: 48px;
          border-radius: var(--radius-md);
          background: var(--gradient-hero);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #ffffff;
          box-shadow: 0 4px 15px rgba(0, 242, 254, 0.3);
        }

        .project-header-meta {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 0.25rem;
        }

        .project-date {
          font-size: 0.75rem;
          color: var(--text-dim);
          font-family: var(--font-mono);
        }

        .project-title {
          font-size: 1.5rem;
          font-weight: 800;
          color: var(--text-main);
          margin-bottom: 0.2rem;
        }

        .project-sub {
          font-size: 0.88rem;
          color: var(--accent-cyan);
          font-weight: 600;
          margin-bottom: 1rem;
        }

        .project-desc {
          color: var(--text-muted);
          font-size: 0.92rem;
          line-height: 1.6;
          margin-bottom: 1.25rem;
          flex-grow: 1;
        }

        .project-features-preview {
          background: rgba(0, 0, 0, 0.2);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-sm);
          padding: 0.75rem 1rem;
          margin-bottom: 1.25rem;
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
        }

        .feature-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.82rem;
          color: var(--text-muted);
        }

        .feature-dot {
          color: var(--accent-cyan);
          font-weight: bold;
        }

        .project-tech-row {
          display: flex;
          flex-wrap: wrap;
          gap: 0.4rem;
          margin-bottom: 1.5rem;
        }

        .project-tech-tag {
          background: rgba(255, 255, 255, 0.06);
          border: 1px solid var(--border-color);
          color: var(--text-main);
          padding: 0.25rem 0.65rem;
          border-radius: var(--radius-sm);
          font-size: 0.75rem;
          font-family: var(--font-mono);
        }

        .project-card-actions {
          display: flex;
          gap: 0.75rem;
        }

        .project-action-btn {
          flex: 1;
          justify-content: center;
          padding: 0.6rem 1rem;
          font-size: 0.85rem;
        }
      `}</style>
    </section>
  );
};

export default Projects;
