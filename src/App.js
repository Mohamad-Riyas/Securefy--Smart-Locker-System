import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  document.title = 'Smart Locker System | IIT University Library';

  const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 
        'At Securefy, we combine smart technology, strong security, and simple user-friendly design to deliver solutions that truly make life easier. Our system is built with a focus on innovation, reliability, and trust, ensuring that every user enjoys a seamless and secure experience.'
      );
    }
    
    // Update OG tags for social sharing
    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute('content', 
        'Enterprise smart locker system for IIT University Library with military-grade security and instant QR access.'
      );
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const teamMembers = [
    { name: 'Branavaram', role: 'Project Lead & Backend Architect', initials: 'RV', color: '#0066FF' },
    { name: 'Riyas', role: 'UI/UX Design Lead', initials: 'PS', color: '#8B5CF6' },
    { name: 'Dhanush', role: 'Hardware Systems Engineer', initials: 'AP', color: '#10B981' },
    { name: 'Aqeel', role: 'Security & Testing Lead', initials: 'NS', color: '#F59E0B' },
    { name: 'Shehan', role: 'Operations Director', initials: 'KM', color: '#EC4899' }
  ];

  const features = [
    { icon: '🔐', title: 'Military-Grade Security', description: 'AES-256 encryption with real-time threat detection and SOC2 compliance.' },
    { icon: '⚡', title: 'Instant Access', description: 'QR code validation in under 500ms with cloud-synced zero-latency access.' },
    { icon: '📱', title: 'Enterprise Platform', description: 'Centralized dashboard with advanced analytics and administration controls.' },
    { icon: '🔋', title: 'Redundant Systems', description: 'Triple redundancy with 72hr backup power and manual override.' },
    { icon: '📊', title: 'AI Analytics', description: 'Predictive maintenance and smart allocation using machine learning.' },
    { icon: '🌐', title: 'Global Standards', description: 'ISO 27001 compliant with institutional security protocols.' }
  ];

  const timeline = [
    { step: '01', title: 'Availability Check', desc: 'Real-time locker status via web portal' },
    { step: '02', title: 'Secure Reservation', desc: 'One-click booking with IIT authentication' },
    { step: '03', title: 'QR Generation', desc: 'Time-sensitive QR code delivery' },
    { step: '04', title: 'Instant Access', desc: 'Scan & access within seconds' }
  ];

  const stats = [
    { value: '99.9%', label: 'System Uptime', suffix: '' },
    { value: '2.5K', label: 'Active Users', suffix: '+' },
    { value: '<30s', label: 'Booking Time', suffix: '' },
    { value: '24/7', label: 'Security', suffix: ' Monitoring' }
  ];

  return (
    <div className={`app ${theme}`}>
      <Helmet>
        <title>Smart Locker System | IIT University Library</title>
        <meta 
          name="description" 
          content="At Securefy, we combine smart technology, strong security, and simple user-friendly design to deliver solutions that truly make life easier. Our system is built with a focus on innovation, reliability, and trust, ensuring that every user enjoys a seamless and secure experience. We don't just provide a service we provide peace of mind, backed by modern engineering and a commitment to excellence."
        />
        <meta name="keywords" content="smart locker system, IIT University, secure storage, campus lockers, IoT lockers, student storage" />
        <meta property="og:title" content="Smart Locker System | IIT University Library" />
        <meta property="og:description" content="Enterprise smart locker system revolutionizing campus storage through innovative technology for IIT University." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://security.online" />
      </Helmet>

      {/* Navigation */}
      <nav className="navbar">
        <div className="container">
          <div className="nav-content">
            <div className="logo">
              <div className="logo-icon">🔒</div>
              <div>
                <h1>SmartLockers</h1>
                <p className="logo-subtitle">IIT UNIVERSITY</p>
              </div>
            </div>
            <div className="nav-links">
              {['Home', 'Features', 'Process', 'Team', 'Contact'].map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} className="nav-link">
                  {item}
                </a>
              ))}
            </div>
            <div className="nav-actions">
              <button className="theme-toggle" onClick={toggleTheme}>
                {theme === 'light' ? '🌙' : '☀️'}
              </button>
              <button className="btn btn-primary">Student Portal</button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-bg"></div>
        <div className="container">
          <div className="hero-grid">
            <div className="hero-content">
              <div className="hero-badge">
                <span className="badge-dot"></span>
                EXCLUSIVELY FOR IIT UNIVERSITY
              </div>
              <h1 className="hero-title">
                Intelligent Storage <span className="gradient-text">Solutions</span> for Academic Excellence
              </h1>
              <p className="hero-description">
                Enterprise-grade smart locker system designed specifically for IIT University. 
                Seamlessly integrate secure storage with cutting-edge technology.
              </p>
              <div className="hero-actions">
                <button className="btn btn-accent">
                  <span className="btn-icon">🚀</span>
                  Book a Demo
                </button>
                <button className="btn btn-outline">
                  <span className="btn-icon">📚</span>
                  View Case Study
                </button>
              </div>
              <div className="hero-stats">
                {stats.map((stat, index) => (
                  <div key={index} className="stat-item">
                    <div className="stat-value">{stat.value}{stat.suffix}</div>
                    <div className="stat-label">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="hero-visual">
              <div className="mockup-container">
                <div className="mockup-header">
                  <div>
                    <div className="mockup-subtitle">SMART LOCKER SYSTEM</div>
                    <div className="mockup-title">Available Lockers: <span className="highlight">47/120</span></div>
                  </div>
                  <div className="mockup-icon">🔒</div>
                </div>
                <div className="locker-grid">
                  {Array.from({ length: 24 }).map((_, i) => (
                    <div key={i} className={`locker-cell ${i % 4 === 0 ? 'occupied' : ''}`}>
                      {i + 1}
                    </div>
                  ))}
                </div>
                <div className="qr-section">
                  <div className="qr-code">QR</div>
                  <div>
                    <div className="qr-title">SCAN TO ACCESS</div>
                    <div className="qr-subtitle">One-time code valid for 15 minutes</div>
                  </div>
                </div>
                <div className="floating-badge">
                  <div className="badge-icon">✓</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="features">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Enterprise-Grade Features</h2>
            <p className="section-subtitle">
              Built with cutting-edge technology to meet the highest standards
            </p>
          </div>
          <div className="features-grid">
            {features.map((feature, index) => (
              <div key={index} className="feature-card">
                <div className="feature-icon">{feature.icon}</div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
                <div className="feature-tags">
                  <span className="tag">Enterprise</span>
                  <span className="tag">Secure</span>
                  <span className="tag">Scalable</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section id="process" className="timeline">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Four-Step Process</h2>
            <p className="section-subtitle">
              Simple, secure, and efficient locker access
            </p>
          </div>
          <div className="timeline-container">
            <div className="timeline-line"></div>
            {timeline.map((step, index) => (
              <div key={index} className="timeline-step">
                <div className="step-number">{step.step}</div>
                <div className="step-content">
                  <h3>{step.title}</h3>
                  <p>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="team">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Leadership Team</h2>
            <p className="section-subtitle">
              Experts in technology, security, and campus operations
            </p>
          </div>
          <div className="team-grid">
            {teamMembers.map((member, index) => (
              <div key={index} className="team-card">
                <div className="team-avatar" style={{ background: member.color }}>
                  {member.initials}
                </div>
                <h3>{member.name}</h3>
                <p className="team-role">{member.role}</p>
                <p className="team-bio">Specialized in system architecture and security protocols.</p>
                <div className="team-social">
                  <button className="social-btn">LinkedIn</button>
                  <button className="social-btn">Email</button>
                </div>
              </div>
            ))}
          </div>
          <div className="collaboration">
            <p>In partnership with <strong>IIT Library Committee</strong> • Guided by <strong>Prof. S. Kumar</strong></p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info">
              <h2>Get in Touch</h2>
              <p>Ready to transform your campus storage experience?</p>
              <div className="contact-details">
                <div className="contact-item">
                  <div className="contact-icon">📧</div>
                  <div>
                    <div className="contact-label">Email</div>
                    <div className="contact-value">smartlocker@iit.ac.in</div>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="contact-icon">📱</div>
                  <div>
                    <div className="contact-label">Phone</div>
                    <div className="contact-value">+91 12345 67890</div>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="contact-icon">📍</div>
                  <div>
                    <div className="contact-label">Location</div>
                    <div className="contact-value">IIT University Library</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="contact-form">
              <h3>Schedule a Demo</h3>
              <form>
                <input type="text" placeholder="Full Name" className="form-input" />
                <input type="email" placeholder="Email Address" className="form-input" />
                <input type="text" placeholder="Department" className="form-input" />
                <textarea placeholder="Message" rows="4" className="form-textarea"></textarea>
                <button type="submit" className="btn btn-primary">Submit Request</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-brand">
              <div className="logo">
                <div className="logo-icon">🔒</div>
                <div>
                  <h1>SmartLockers</h1>
                  <p className="logo-subtitle">IIT UNIVERSITY</p>
                </div>
              </div>
              <p className="footer-description">
                Enterprise smart locker system revolutionizing campus storage through innovative technology.
              </p>
            </div>
            <div className="footer-links">
              <h4>Product</h4>
              <a href="#features">Features</a>
              <a href="#process">How It Works</a>
              <a href="#team">Team</a>
              <a href="#contact">Contact</a>
            </div>
            <div className="footer-links">
              <h4>Resources</h4>
              <a href="#">Documentation</a>
              <a href="#">API Reference</a>
              <a href="#">Support</a>
              <a href="#">Status</a>
            </div>
            <div className="footer-links">
              <h4>Legal</h4>
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
              <a href="#">Security</a>
              <a href="#">Compliance</a>
            </div>
          </div>
          <div className="footer-bottom">
            <p>© 2024 Smart Locker System. All rights reserved.</p>
            <p className="footer-note">A final year project by IIT Computer Science Department</p>
          </div>
        </div>
      </footer>

      {/* Scroll to Top */}
      <button className="scroll-top" onClick={scrollToTop}>
        ↑
      </button>
    </div>
  );
}

export default App;
