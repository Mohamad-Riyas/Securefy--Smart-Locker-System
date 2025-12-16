import React from 'react';
import { motion } from 'framer-motion';
import { FiLock, FiInstagram, FiTwitter, FiLinkedin, FiGithub, FiMail, FiPhone, FiMapPin } from 'react-icons/fi';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" style={{
      background: 'var(--bg-secondary)',
      color: 'var(--text-primary)',
      padding: '5rem 0 2rem'
    }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '3rem',
          marginBottom: '3rem'
        }}>
          {/* Brand Section */}
          <div>
            <a href="#home" style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              textDecoration: 'none',
              marginBottom: '1rem'
            }}>
              <div style={{
                padding: '0.5rem',
                background: 'linear-gradient(135deg, var(--primary), var(--primary-dark))',
                borderRadius: '0.75rem'
              }}>
                <FiLock style={{ fontSize: '1.5rem', color: 'white' }} />
              </div>
              <div>
                <div style={{
                  fontSize: '1.5rem',
                  fontWeight: '800',
                  background: 'linear-gradient(135deg, var(--primary), var(--accent))',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}>
                  SmartLockers
                </div>
                <div style={{
                  fontSize: '0.875rem',
                  color: 'var(--text-secondary)'
                }}>
                  IIT University Library
                </div>
              </div>
            </a>
            
            <p style={{
              color: 'var(--text-secondary)',
              lineHeight: '1.7',
              marginTop: '1rem'
            }}>
              Revolutionizing campus storage through innovative technology 
              and user-centric design for IIT University.
            </p>
            
            <div style={{
              display: 'flex',
              gap: '1rem',
              marginTop: '1.5rem'
            }}>
              {[
                { icon: <FiInstagram />, label: 'Instagram', color: '#E4405F' },
                { icon: <FiTwitter />, label: 'Twitter', color: '#1DA1F2' },
                { icon: <FiLinkedin />, label: 'LinkedIn', color: '#0A66C2' },
                { icon: <FiGithub />, label: 'GitHub', color: '#333' }
              ].map((social, index) => (
                <a
                  key={index}
                  href="#"
                  style={{
                    width: '2.5rem',
                    height: '2.5rem',
                    borderRadius: '50%',
                    background: 'var(--bg-card)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--text-secondary)',
                    textDecoration: 'none',
                    border: '1px solid var(--border)',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.background = social.color;
                    e.target.style.color = 'white';
                    e.target.style.transform = 'translateY(-3px)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = 'var(--bg-card)';
                    e.target.style.color = 'var(--text-secondary)';
                    e.target.style.transform = 'translateY(0)';
                  }}
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 style={{
              fontSize: '1.125rem',
              fontWeight: '700',
              marginBottom: '1.5rem',
              color: 'var(--text-primary)'
            }}>
              Quick Links
            </h3>
            <ul style={{
              listStyle: 'none',
              padding: 0,
              margin: 0
            }}>
              {['How It Works', 'Features', 'Our Team', 'FAQ', 'Contact'].map((item, index) => (
                <li key={index} style={{ marginBottom: '0.75rem' }}>
                  <a
                    href={`#${item.toLowerCase().replace(' ', '-')}`}
                    style={{
                      color: 'var(--text-secondary)',
                      textDecoration: 'none',
                      transition: 'all 0.3s ease',
                      display: 'inline-block'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.color = 'var(--primary)';
                      e.target.style.transform = 'translateX(5px)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.color = 'var(--text-secondary)';
                      e.target.style.transform = 'translateX(0)';
                    }}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 style={{
              fontSize: '1.125rem',
              fontWeight: '700',
              marginBottom: '1.5rem',
              color: 'var(--text-primary)'
            }}>
              Support
            </h3>
            <ul style={{
              listStyle: 'none',
              padding: 0,
              margin: 0
            }}>
              <li style={{ marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <FiMail style={{ color: 'var(--primary)' }} />
                <a href="mailto:smartlocker@iit.ac.lk" style={{
                  color: 'var(--text-secondary)',
                  textDecoration: 'none'
                }}>
                  smartlocker@iit.ac.lk
                </a>
              </li>
              <li style={{ marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <FiPhone style={{ color: 'var(--primary)' }} />
                <a href="tel:+911234567890" style={{
                  color: 'var(--text-secondary)',
                  textDecoration: 'none'
                }}>
                  +91 12345 67890
                </a>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <FiMapPin style={{ color: 'var(--primary)' }} />
                <span style={{ color: 'var(--text-secondary)' }}>
                  Library Help Desk
                </span>
              </li>
            </ul>
          </div>

          {/* Location */}
          <div>
            <h3 style={{
              fontSize: '1.125rem',
              fontWeight: '700',
              marginBottom: '1.5rem',
              color: 'var(--text-primary)'
            }}>
              Location
            </h3>
            <p style={{
              color: 'var(--text-secondary)',
              lineHeight: '1.7',
              marginBottom: '1rem'
            }}>
              <strong>IIT University Library</strong><br />
              Ground Floor Entrance<br />
              Available 7 AM - 11 PM
            </p>
            <div style={{
              padding: '1rem',
              background: 'var(--bg-card)',
              borderRadius: '0.75rem',
              border: '1px solid var(--border)'
            }}>
              <p style={{
                fontSize: '0.875rem',
                color: 'var(--text-secondary)',
                margin: 0
              }}>
                <strong>Emergency Contact:</strong><br />
                Library Security: Ext. 777<br />
                24/7 Support Available
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div style={{
          paddingTop: '2rem',
          borderTop: '1px solid var(--border)',
          textAlign: 'center',
          color: 'var(--text-secondary)'
        }}>
          <p style={{ marginBottom: '0.5rem' }}>
            &copy; {currentYear} Smart Locker System - IIT University. All rights reserved.
          </p>
          <p style={{ fontSize: '0.875rem', opacity: 0.8 }}>
            Developed by 2nd Year Computer Science Students • IIT University Project
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;