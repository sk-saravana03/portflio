import React from 'react';
import { resumeData } from '../data/resumeData';

const PrintResume = () => {
  const { personalInfo, education, experience, projects, skills, certifications, achievements } = resumeData;

  return (
    <div className="print-only-layout">
      {/* Header */}
      <div className="print-header">
        <h1 className="print-name">{personalInfo.name}</h1>
        <div style={{ fontSize: '12pt', fontWeight: 'bold', color: '#2563eb', marginBottom: '4px' }}>
          {personalInfo.title} | {personalInfo.subTitle}
        </div>
        <div className="print-contact-row">
          <span>📧 {personalInfo.email}</span>
          <span>📞 {personalInfo.phone}</span>
          <span>📍 {personalInfo.location}</span>
          <span>🔗 {personalInfo.githubUsername}</span>
          <span>💼 {personalInfo.linkedinUsername}</span>
        </div>
      </div>

      {/* Summary */}
      <div className="print-section">
        <h2 className="print-section-title">Professional Summary</h2>
        <p style={{ fontSize: '10pt', color: '#374151' }}>{personalInfo.aboutMe}</p>
      </div>

      {/* Education */}
      <div className="print-section">
        <h2 className="print-section-title">Education</h2>
        {education.map((edu) => (
          <div key={edu.id} className="print-item">
            <div className="print-item-header">
              <span>{edu.degree} — <span style={{ fontWeight: 'normal' }}>{edu.institution}</span></span>
              <span>{edu.period}</span>
            </div>
            <div className="print-item-sub">
              Grade / Percentage: <strong>{edu.grade}</strong> | Location: {edu.location}
            </div>
          </div>
        ))}
      </div>

      {/* Internship & Work Experience */}
      <div className="print-section">
        <h2 className="print-section-title">Internship & Experience</h2>
        {experience.map((exp) => (
          <div key={exp.id} className="print-item">
            <div className="print-item-header">
              <span>{exp.role} — <strong>{exp.company}</strong></span>
              <span>{exp.period}</span>
            </div>
            <div className="print-item-sub">{exp.type}</div>
            <ul className="print-bullet-list">
              {exp.bulletPoints.map((bp, i) => (
                <li key={i}>{bp}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Projects */}
      <div className="print-section">
        <h2 className="print-section-title">Featured Projects</h2>
        {projects.map((proj) => (
          <div key={proj.id} className="print-item">
            <div className="print-item-header">
              <span>{proj.title} ({proj.subTitle})</span>
              <span>{proj.period}</span>
            </div>
            <div className="print-item-sub">
              Tech Stack: {proj.techStack.join(', ')} | GitHub: {proj.github}
            </div>
            <ul className="print-bullet-list">
              {proj.keyFeatures.map((feat, i) => (
                <li key={i}>{feat}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Technical Skills */}
      <div className="print-section">
        <h2 className="print-section-title">Technical Skills</h2>
        <div style={{ fontSize: '10pt', display: 'flex', flexDirection: 'column', gap: '4px' }}>
          <div><strong>Programming Languages:</strong> C, C++ (5-Star), Java, JavaScript (ES6+), Python (4-Star)</div>
          <div><strong>Web Technologies:</strong> React.js, Node.js, Express.js, HTML5, CSS3</div>
          <div><strong>Databases:</strong> MongoDB (Certified), SQL (5-Star HackerRank)</div>
          <div><strong>Soft Skills:</strong> Problem Solving, Logical Thinking, Critical Thinking</div>
        </div>
      </div>

      {/* Certifications & Badges */}
      <div className="print-section">
        <h2 className="print-section-title">Certifications & Achievements</h2>
        <ul className="print-bullet-list">
          {certifications.map((c) => (
            <li key={c.id}>
              <strong>{c.title}</strong> — {c.issuer} ({c.category})
            </li>
          ))}
          {achievements.map((ach, idx) => (
            <li key={idx}>
              <strong>{ach.title}</strong>: {ach.description}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PrintResume;
