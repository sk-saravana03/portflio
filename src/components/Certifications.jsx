import React from 'react';
import { 
  Award, 
  Code2, 
  Terminal, 
  Palette, 
  Cpu, 
  Database, 
  Star, 
  Sparkles, 
  CheckCircle,
  ExternalLink,
  BookOpen,
  Users
} from 'lucide-react';
import { resumeData } from '../data/resumeData';

const getCertIcon = (iconName) => {
  switch (iconName) {
    case 'Code2': return <Code2 size={24} />;
    case 'Terminal': return <Terminal size={24} />;
    case 'Palette': return <Palette size={24} />;
    case 'Cpu': return <Cpu size={24} />;
    case 'Database': return <Database size={24} />;
    default: return <Award size={24} />;
  }
};

const Certifications = () => {
  const { certifications, achievements } = resumeData;

  return (
    <section id="certifications" className="section-container">
      <div className="section-title-wrap">
        <div className="section-subtitle">Credentials & Recognition</div>
        <h2 className="section-title">Certifications & Achievements</h2>
      </div>

      {/* Certifications Grid */}
      <div className="certs-grid">
        {certifications.map((cert) => (
          <div key={cert.id} className="cert-card glass-card">
            <div className="cert-card-header">
              <div className="cert-icon-wrap">
                {getCertIcon(cert.icon)}
              </div>
              <span className="badge">{cert.issuer}</span>
            </div>

            <h3 className="cert-title">{cert.title}</h3>
            <p className="cert-category">{cert.category}</p>
            <p className="cert-desc">{cert.description}</p>

            <div className="cert-card-footer">
              <span className="cert-verified-pill">
                <CheckCircle size={14} />
                <span>{cert.badge}</span>
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Co-Curricular & Badges Spotlight Banner */}
      <div className="achievements-block">
        <h3 className="achievements-title">
          <Sparkles size={20} className="icon-cyan" />
          <span>Co-Curricular & HackerRank Gold Badges</span>
        </h3>

        <div className="achievements-grid">
          {achievements.map((ach, idx) => (
            <div key={idx} className="achievement-card glass-card">
              <div className="ach-card-top">
                {ach.type === 'badge' ? (
                  <div className="star-badge-icon">
                    <Star size={20} fill="#f59e0b" color="#f59e0b" />
                  </div>
                ) : ach.type === 'learning' ? (
                  <div className="star-badge-icon learning-icon">
                    <BookOpen size={20} />
                  </div>
                ) : (
                  <div className="star-badge-icon community-icon">
                    <Users size={20} />
                  </div>
                )}
                <span className="ach-highlight-tag">{ach.highlight}</span>
              </div>

              <h4 className="ach-title">{ach.title}</h4>
              <p className="ach-desc">{ach.description}</p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .certs-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
          gap: 1.5rem;
          margin-bottom: 4rem;
        }

        .cert-card {
          padding: 1.75rem;
          display: flex;
          flex-direction: column;
        }

        .cert-card-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1.25rem;
        }

        .cert-icon-wrap {
          width: 44px;
          height: 44px;
          border-radius: var(--radius-md);
          background: rgba(0, 242, 254, 0.1);
          border: 1px solid rgba(0, 242, 254, 0.25);
          color: var(--accent-cyan);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .cert-title {
          font-size: 1.2rem;
          font-weight: 800;
          color: var(--text-main);
          margin-bottom: 0.2rem;
        }

        .cert-category {
          font-size: 0.78rem;
          color: var(--accent-cyan);
          font-weight: 600;
          margin-bottom: 0.8rem;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .cert-desc {
          font-size: 0.88rem;
          color: var(--text-muted);
          line-height: 1.6;
          margin-bottom: 1.25rem;
          flex-grow: 1;
        }

        .cert-card-footer {
          display: flex;
          align-items: center;
          justify-content: flex-start;
          border-top: 1px solid var(--border-color);
          padding-top: 0.8rem;
        }

        .cert-verified-pill {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 0.78rem;
          color: var(--accent-emerald);
          font-weight: 600;
        }

        .achievements-block {
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-lg);
          padding: 2.5rem 2rem;
        }

        .achievements-title {
          font-size: 1.4rem;
          font-weight: 800;
          color: var(--text-main);
          display: flex;
          align-items: center;
          gap: 0.6rem;
          margin-bottom: 2rem;
        }

        .achievements-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 1.25rem;
        }

        .achievement-card {
          padding: 1.5rem;
        }

        .ach-card-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1rem;
        }

        .star-badge-icon {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: rgba(245, 158, 11, 0.15);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .learning-icon {
          background: rgba(16, 185, 129, 0.15);
          color: var(--accent-emerald);
        }

        .community-icon {
          background: rgba(168, 85, 247, 0.15);
          color: var(--accent-purple);
        }

        .ach-highlight-tag {
          font-size: 0.72rem;
          font-weight: 700;
          color: var(--accent-cyan);
          background: rgba(0, 242, 254, 0.1);
          padding: 0.2rem 0.6rem;
          border-radius: var(--radius-full);
        }

        .ach-title {
          font-size: 1rem;
          font-weight: 700;
          color: var(--text-main);
          margin-bottom: 0.4rem;
        }

        .ach-desc {
          font-size: 0.85rem;
          color: var(--text-muted);
          line-height: 1.5;
        }
      `}</style>
    </section>
  );
};

export default Certifications;
