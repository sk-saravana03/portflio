import React from 'react';
import { X, ExternalLink, CheckCircle2, Layers, Cpu, Code2 } from 'lucide-react';
import { GithubIcon } from './SocialIcons';

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="modal-overlay no-print" onClick={onClose}>
      <div className="modal-content glass-card" onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className="modal-header">
          <div className="modal-title-group">
            <span className="badge">{project.category}</span>
            <h3 className="modal-title">{project.title}</h3>
            <p className="modal-subtitle">{project.subTitle}</p>
          </div>
          <button className="modal-close-btn" onClick={onClose}>
            <X size={20} />
          </button>
        </div>

        {/* Modal Body */}
        <div className="modal-body">
          {/* Architecture / Banner Header Graphic */}
          <div className={`project-banner-graphic bg-gradient-to-r ${project.colorGradient}`}>
            <div className="graphic-overlay">
              <Code2 size={48} className="graphic-icon" />
              <div className="graphic-text-badge">{project.period} | {project.institution}</div>
            </div>
          </div>

          <div className="modal-section">
            <h4 className="modal-section-title">
              <Layers size={18} />
              <span>Project Overview</span>
            </h4>
            <p className="modal-desc">{project.description}</p>
          </div>

          {/* Key Features Breakdown */}
          <div className="modal-section">
            <h4 className="modal-section-title">
              <CheckCircle2 size={18} />
              <span>Key Architectural Features</span>
            </h4>
            <ul className="modal-features-list">
              {project.keyFeatures.map((feature, idx) => (
                <li key={idx}>
                  <span className="feature-bullet">▸</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Stack Pills */}
          <div className="modal-section">
            <h4 className="modal-section-title">
              <Cpu size={18} />
              <span>Technologies & Tools</span>
            </h4>
            <div className="modal-tech-pills">
              {project.techStack.map((tech, idx) => (
                <span key={idx} className="tech-chip">{tech}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer Links */}
        <div className="modal-footer">
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="btn-primary"
          >
            <GithubIcon size={16} />
            <span>View Source on GitHub</span>
          </a>

          <button className="btn-secondary" onClick={onClose}>
            Close Preview
          </button>
        </div>
      </div>

      <style>{`
        .modal-overlay {
          position: fixed;
          inset: 0;
          z-index: 1000;
          background: rgba(5, 8, 15, 0.85);
          backdrop-filter: blur(12px);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1.5rem;
          animation: fadeIn 0.25s ease-out;
        }

        .modal-content {
          width: 100%;
          max-width: 680px;
          max-height: 90vh;
          overflow-y: auto;
          padding: 2rem;
          background: var(--bg-secondary);
          border: 1px solid var(--border-color-glow);
        }

        .modal-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 1.5rem;
        }

        .modal-title {
          font-size: 1.8rem;
          font-weight: 800;
          color: var(--text-main);
          margin-top: 0.4rem;
        }

        .modal-subtitle {
          color: var(--accent-cyan);
          font-size: 0.95rem;
          font-weight: 600;
        }

        .modal-close-btn {
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid var(--border-color);
          color: var(--text-main);
          width: 36px;
          height: 36px;
          border-radius: 50%;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s ease;
        }

        .modal-close-btn:hover {
          background: rgba(255, 255, 255, 0.2);
          color: var(--accent-cyan);
        }

        .project-banner-graphic {
          width: 100%;
          height: 160px;
          border-radius: var(--radius-md);
          background: linear-gradient(135deg, #4f46e5 0%, #06b6d4 100%);
          margin-bottom: 1.5rem;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          overflow: hidden;
        }

        .graphic-overlay {
          text-align: center;
          color: #ffffff;
        }

        .graphic-icon {
          margin: 0 auto 0.5rem auto;
          opacity: 0.9;
        }

        .graphic-text-badge {
          background: rgba(0, 0, 0, 0.4);
          backdrop-filter: blur(8px);
          padding: 0.3rem 0.8rem;
          border-radius: var(--radius-full);
          font-size: 0.8rem;
          font-family: var(--font-mono);
        }

        .modal-section {
          margin-bottom: 1.5rem;
        }

        .modal-section-title {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--text-main);
          font-size: 1.05rem;
          font-weight: 700;
          margin-bottom: 0.75rem;
          border-bottom: 1px solid var(--border-color);
          padding-bottom: 0.4rem;
        }

        .modal-desc {
          color: var(--text-muted);
          line-height: 1.6;
          font-size: 0.95rem;
        }

        .modal-features-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
        }

        .modal-features-list li {
          display: flex;
          align-items: flex-start;
          gap: 0.6rem;
          color: var(--text-muted);
          font-size: 0.92rem;
        }

        .feature-bullet {
          color: var(--accent-cyan);
          font-weight: bold;
        }

        .modal-tech-pills {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .tech-chip {
          background: rgba(0, 242, 254, 0.1);
          border: 1px solid rgba(0, 242, 254, 0.25);
          color: var(--accent-cyan);
          padding: 0.3rem 0.75rem;
          border-radius: var(--radius-full);
          font-size: 0.8rem;
          font-weight: 600;
          font-family: var(--font-mono);
        }

        .modal-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: 2rem;
          padding-top: 1rem;
          border-top: 1px solid var(--border-color);
          gap: 1rem;
          flex-wrap: wrap;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.96); }
          to { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </div>
  );
};

export default ProjectModal;
