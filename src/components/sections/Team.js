import React from 'react';
import { motion } from 'framer-motion';
import { FiLinkedin, FiGithub, FiMail } from 'react-icons/fi';

const Team = () => {
  const teamMembers = [
    {
      name: 'Rahul Verma',
      role: 'Project Lead & Backend Architect',
      bio: 'Designed scalable server infrastructure and secure QR validation algorithms.',
      initials: 'RV',
      color: 'linear-gradient(135deg, #3b82f6, #1d4ed8)'
    },
    {
      name: 'Priya Sharma',
      role: 'UI/UX Design Lead',
      bio: 'Crafted intuitive user interfaces and seamless booking experience for students.',
      initials: 'PS',
      color: 'linear-gradient(135deg, #8b5cf6, #7c3aed)'
    },
    {
      name: 'Arun Patel',
      role: 'Hardware & Embedded Systems',
      bio: 'Engineered IoT integration between locker hardware and central management system.',
      initials: 'AP',
      color: 'linear-gradient(135deg, #10b981, #059669)'
    },
    {
      name: 'Neha Singh',
      role: 'Security & Testing Lead',
      bio: 'Implemented robust security protocols and comprehensive system testing frameworks.',
      initials: 'NS',
      color: 'linear-gradient(135deg, #f59e0b, #d97706)'
    },
    {
      name: 'Karan Mehta',
      role: 'Operations & Campus Relations',
      bio: 'Coordinated with IIT administration and managed pilot program deployment.',
      initials: 'KM',
      color: 'linear-gradient(135deg, #ec4899, #db2777)'
    }
  ];

  return (
    <section id="team" className="py-20">
      <div className="container">
        <h2 className="section-title">The Innovators Behind the System</h2>
        <p className="section-subtitle">
          A dedicated team of IIT students committed to enhancing campus life
        </p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '2rem',
          marginTop: '4rem'
        }}>
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              style={{
                background: 'var(--bg-card)',
                borderRadius: '1.5rem',
                padding: '2rem',
                textAlign: 'center',
                boxShadow: 'var(--shadow-lg)',
                border: '1px solid var(--border)',
                transition: 'all 0.3s ease',
                cursor: 'pointer'
              }}
              whileHover={{ 
                y: -10,
                boxShadow: 'var(--shadow-xl)'
              }}
            >
              {/* Profile Image */}
              <div style={{
                position: 'relative',
                marginBottom: '1.5rem'
              }}>
                <div style={{
                  width: '8rem',
                  height: '8rem',
                  borderRadius: '50%',
                  background: member.color,
                  margin: '0 auto',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '2.5rem',
                  fontWeight: '700',
                  color: 'white',
                  marginBottom: '1rem'
                }}>
                  {member.initials}
                </div>
              </div>

              {/* Member Info */}
              <h3 style={{
                fontSize: '1.25rem',
                fontWeight: '700',
                marginBottom: '0.5rem',
                color: 'var(--text-primary)'
              }}>
                {member.name}
              </h3>
              <p style={{
                color: 'var(--primary)',
                fontWeight: '600',
                marginBottom: '1rem',
                fontSize: '0.875rem',
                textTransform: 'uppercase',
                letterSpacing: '0.05em'
              }}>
                {member.role}
              </p>
              <p style={{
                color: 'var(--text-secondary)',
                fontSize: '0.875rem',
                lineHeight: '1.6',
                marginBottom: '1.5rem'
              }}>
                {member.bio}
              </p>

              {/* Social Links */}
              <div style={{
                display: 'flex',
                justifyContent: 'center',
                gap: '0.75rem'
              }}>
                <a
                  href="#"
                  style={{
                    width: '2.5rem',
                    height: '2.5rem',
                    borderRadius: '50%',
                    background: 'var(--bg-secondary)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--text-secondary)',
                    textDecoration: 'none',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.background = '#0077b5';
                    e.target.style.color = 'white';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = 'var(--bg-secondary)';
                    e.target.style.color = 'var(--text-secondary)';
                  }}
                  aria-label={`${member.name} LinkedIn`}
                >
                  <FiLinkedin />
                </a>
                <a
                  href="#"
                  style={{
                    width: '2.5rem',
                    height: '2.5rem',
                    borderRadius: '50%',
                    background: 'var(--bg-secondary)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--text-secondary)',
                    textDecoration: 'none',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.background = '#333';
                    e.target.style.color = 'white';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = 'var(--bg-secondary)';
                    e.target.style.color = 'var(--text-secondary)';
                  }}
                  aria-label={`${member.name} GitHub`}
                >
                  <FiGithub />
                </a>
                <a
                  href="#"
                  style={{
                    width: '2.5rem',
                    height: '2.5rem',
                    borderRadius: '50%',
                    background: 'var(--bg-secondary)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--text-secondary)',
                    textDecoration: 'none',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.background = '#ea4335';
                    e.target.style.color = 'white';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = 'var(--bg-secondary)';
                    e.target.style.color = 'var(--text-secondary)';
                  }}
                  aria-label={`Email ${member.name}`}
                >
                  <FiMail />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Collaboration Note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          style={{
            marginTop: '5rem',
            textAlign: 'center'
          }}
        >
          <div style={{
            display: 'inline-block',
            padding: '1.5rem 2.5rem',
            borderRadius: '1rem',
            background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(245, 158, 11, 0.1))',
            border: '1px solid var(--border)'
          }}>
            <p style={{
              color: 'var(--text-secondary)',
              fontSize: '1.125rem',
              margin: 0
            }}>
              In collaboration with{' '}
              <span style={{
                fontWeight: '700',
                color: 'var(--primary)'
              }}>
                IIT Library Committee
              </span>{' '}
              • Mentored by{' '}
              <span style={{
                fontWeight: '700',
                color: 'var(--primary)'
              }}>
                Prof. S. Kumar, Computer Science Department
              </span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Team;