import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Copy, 
  Send, 
  CheckCircle,
  QrCode,
  Sparkles
} from 'lucide-react';
import { GithubIcon, LinkedinIcon, HackerRankIcon } from './SocialIcons';
import { resumeData } from '../data/resumeData';

const Contact = ({ onCopy }) => {
  const { personalInfo } = resumeData;
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => {
      setSent(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 4000);
  };

  return (
    <section id="contact" className="section-container">
      <div className="section-title-wrap">
        <div className="section-subtitle">Get In Touch</div>
        <h2 className="section-title">Let's Work Together</h2>
      </div>

      <div className="contact-grid">
        {/* Contact Info Cards */}
        <div className="contact-info-col">
          <h3 className="contact-col-title">Contact Details</h3>
          <p className="contact-col-sub">
            Feel free to reach out for full-time opportunities, collaborations, or tech discussions.
          </p>

          <div className="contact-cards-list">
            {/* Email Card */}
            <div className="contact-card glass-card">
              <div className="contact-card-icon">
                <Mail size={22} />
              </div>
              <div className="contact-card-text">
                <span className="card-label">Email Address</span>
                <span className="card-value">{personalInfo.email}</span>
              </div>
              <button 
                className="copy-icon-btn" 
                onClick={() => onCopy(personalInfo.email, 'Email address')}
                title="Copy Email"
              >
                <Copy size={16} />
              </button>
            </div>

            {/* Phone Card */}
            <div className="contact-card glass-card">
              <div className="contact-card-icon">
                <Phone size={22} />
              </div>
              <div className="contact-card-text">
                <span className="card-label">Phone / WhatsApp</span>
                <span className="card-value">{personalInfo.phone}</span>
              </div>
              <button 
                className="copy-icon-btn" 
                onClick={() => onCopy(personalInfo.phone, 'Phone number')}
                title="Copy Phone"
              >
                <Copy size={16} />
              </button>
            </div>

            {/* Location Card */}
            <div className="contact-card glass-card">
              <div className="contact-card-icon">
                <MapPin size={22} />
              </div>
              <div className="contact-card-text">
                <span className="card-label">Location</span>
                <span className="card-value">{personalInfo.location}</span>
              </div>
            </div>
          </div>

          {/* Social Profiles Row */}
          <div className="social-profiles-box">
            <h4 className="social-box-title">Social Profiles</h4>
            <div className="social-btn-group">
              <a 
                href={personalInfo.github} 
                target="_blank" 
                rel="noreferrer" 
                className="social-card-btn glass-card"
              >
                <GithubIcon size={20} />
                <span>GitHub</span>
              </a>
              <a 
                href={personalInfo.linkedin} 
                target="_blank" 
                rel="noreferrer" 
                className="social-card-btn glass-card"
              >
                <LinkedinIcon size={20} />
                <span>LinkedIn</span>
              </a>
              <a 
                href={personalInfo.hackerrank} 
                target="_blank" 
                rel="noreferrer" 
                className="social-card-btn glass-card"
              >
                <HackerRankIcon size={20} />
                <span>HackerRank</span>
              </a>
            </div>
          </div>
        </div>

        {/* Interactive Contact Form */}
        <div className="contact-form-col">
          <div className="contact-form-card glass-card">
            <h3 className="form-card-title">Send a Direct Message</h3>

            {sent ? (
              <div className="form-success-box">
                <CheckCircle size={48} color="#10b981" />
                <h4>Message Sent Successfully!</h4>
                <p>Thank you for reaching out to Saravanakumar. I'll get back to you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-row">
                  <div className="form-group">
                    <label>Your Name</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>

                  <div className="form-group">
                    <label>Your Email</label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. john@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label>Subject</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Job Opportunity / Collaboration"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label>Message</label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Write your message here..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>

                <button type="submit" className="btn-primary form-submit-btn">
                  <Send size={16} />
                  <span>Send Message</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      <style>{`
        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2.5rem;
        }

        @media (max-width: 900px) {
          .contact-grid {
            grid-template-columns: 1fr;
          }
        }

        .contact-col-title {
          font-size: 1.5rem;
          font-weight: 800;
          color: var(--text-main);
          margin-bottom: 0.4rem;
        }

        .contact-col-sub {
          color: var(--text-muted);
          font-size: 0.95rem;
          margin-bottom: 2rem;
          line-height: 1.6;
        }

        .contact-cards-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          margin-bottom: 2rem;
        }

        .contact-card {
          padding: 1.25rem;
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .contact-card-icon {
          width: 44px;
          height: 44px;
          border-radius: var(--radius-md);
          background: rgba(0, 242, 254, 0.1);
          border: 1px solid rgba(0, 242, 254, 0.25);
          color: var(--accent-cyan);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .contact-card-text {
          display: flex;
          flex-direction: column;
          flex: 1;
        }

        .card-label {
          font-size: 0.75rem;
          color: var(--text-dim);
          text-transform: uppercase;
          font-weight: 700;
        }

        .card-value {
          font-size: 0.95rem;
          font-weight: 600;
          color: var(--text-main);
        }

        .copy-icon-btn {
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid var(--border-color);
          color: var(--text-muted);
          width: 34px;
          height: 34px;
          border-radius: 50%;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s ease;
        }

        .copy-icon-btn:hover {
          color: var(--accent-cyan);
          border-color: var(--accent-cyan);
          background: rgba(0, 242, 254, 0.12);
        }

        .social-box-title {
          font-size: 1rem;
          font-weight: 700;
          color: var(--text-main);
          margin-bottom: 0.85rem;
        }

        .social-btn-group {
          display: flex;
          gap: 0.75rem;
          flex-wrap: wrap;
        }

        .social-card-btn {
          flex: 1;
          min-width: 120px;
          padding: 0.75rem;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          text-decoration: none;
          color: var(--text-main);
          font-weight: 600;
          font-size: 0.85rem;
        }

        .contact-form-card {
          padding: 2.25rem;
        }

        .form-card-title {
          font-size: 1.4rem;
          font-weight: 800;
          color: var(--text-main);
          margin-bottom: 1.5rem;
        }

        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
        }

        @media (max-width: 640px) {
          .form-row {
            grid-template-columns: 1fr;
          }
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
        }

        .form-group label {
          font-size: 0.82rem;
          font-weight: 600;
          color: var(--text-muted);
        }

        .form-group input, .form-group textarea {
          background: rgba(0, 0, 0, 0.25);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-md);
          padding: 0.75rem 1rem;
          color: var(--text-main);
          font-size: 0.92rem;
          outline: none;
          transition: all 0.2s ease;
        }

        .form-group input:focus, .form-group textarea:focus {
          border-color: var(--accent-cyan);
          box-shadow: 0 0 10px rgba(0, 242, 254, 0.2);
        }

        .form-submit-btn {
          width: 100%;
          justify-content: center;
          padding: 0.85rem;
          margin-top: 0.5rem;
        }

        .form-success-box {
          text-align: center;
          padding: 3rem 1rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
        }

        .form-success-box h4 {
          font-size: 1.3rem;
          color: var(--text-main);
        }

        .form-success-box p {
          color: var(--text-muted);
          font-size: 0.92rem;
        }
      `}</style>
    </section>
  );
};

export default Contact;
