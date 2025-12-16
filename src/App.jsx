import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { 
  FiLock, 
  FiZap, 
  FiSmartphone, 
  FiBattery, 
  FiBarChart2, 
  FiGlobe,
  FiMail,
  FiPhone,
  FiMapPin,
  FiSend,
  FiBook,
  FiArrowUp,
  FiCheck,
  FiMoon,
  FiSun,
  FiMenu,
  FiX
} from 'react-icons/fi';
import './styles/App.css';

function App() {
  const [theme, setTheme] = useState('light');
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    document.body.className = theme;
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

  useEffect(() => {
    let lastScrollY = window.scrollY;
    
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Show button when scrolled down more than 300px and scrolling down
      if (currentScrollY > 300 && currentScrollY > lastScrollY) {
        setShowScrollTop(true);
      } else if (currentScrollY < lastScrollY || currentScrollY <= 300) {
        setShowScrollTop(false);
      }
      
      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    
    // Small delay to ensure mobile menu closes before scrolling
    setTimeout(() => {
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        // Get the actual navbar height dynamically
        const navbar = document.querySelector('.navbar');
        const navbarHeight = navbar ? navbar.offsetHeight : 60;
        
        // Get element position relative to document
        const elementRect = targetElement.getBoundingClientRect();
        const elementTop = elementRect.top + window.pageYOffset;
        
        // For home section, scroll to top
        if (targetId === 'home') {
          window.scrollTo({
            top: 0,
            behavior: 'smooth'
          });
          return;
        }
        
        // For other sections, calculate scroll position with proper offset
        // Account for navbar and add padding to show section headers
        const headerPadding = 40; // Space to show section headers below navbar
        const scrollPosition = elementTop - navbarHeight - headerPadding;
        
        window.scrollTo({
          top: Math.max(0, scrollPosition),
          behavior: 'smooth'
        });
      }
    }, 100);
  };

  const teamMembers = [
    { name: 'Branavaram', role: 'Project Lead & Backend Architect', initials: 'RV', color: '#0066FF', image: '/images/branavaram.jpg' },
    { name: 'Riyas', role: 'UI/UX Design Lead', initials: 'PS', color: '#8B5CF6', image: '/images/riyas.jpg' },
    { name: 'Dhanush', role: 'Hardware Systems Engineer', initials: 'AP', color: '#10B981', image: '/images/Dhanush.jpg' },
    { name: 'Aqeel', role: 'Security & Testing Lead', initials: 'NS', color: '#F59E0B', image: '/images/aqeel.jpg' },
    { name: 'Shehan', role: 'Operations Director', initials: 'KM', color: '#EC4899', image: '/images/shehan.jpg' }
  ];

  const features = [
    { icon: FiLock, title: 'Military-Grade Security', description: 'AES-256 encryption with real-time threat detection and SOC2 compliance.' },
    { icon: FiZap, title: 'Instant Access', description: 'QR code validation in under 500ms with cloud-synced zero-latency access.' },
    { icon: FiSmartphone, title: 'Enterprise Platform', description: 'Centralized dashboard with advanced analytics and administration controls.' },
    { icon: FiBattery, title: 'Redundant Systems', description: 'Triple redundancy with 72hr backup power and manual override.' },
    { icon: FiBarChart2, title: 'AI Analytics', description: 'Predictive maintenance and smart allocation using machine learning.' },
    { icon: FiGlobe, title: 'Global Standards', description: 'ISO 27001 compliant with institutional security protocols.' }
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
              <img src="/images/logo.jpg" alt="SmartLockers Logo" className="logo-icon" />
              <div>
                <h1>SmartLockers</h1>
                <p className="logo-subtitle">IIT UNIVERSITY</p>
              </div>
            </div>
            <div className={`nav-links ${mobileMenuOpen ? 'mobile-open' : ''}`}>
              {['Home', 'Features', 'Process', 'Team', 'Contact'].map((item) => {
                const targetId = item.toLowerCase() === 'home' ? 'home' : item.toLowerCase();
                return (
                  <a 
                    key={item} 
                    href={`#${targetId}`} 
                    className="nav-link"
                    onClick={(e) => handleNavClick(e, targetId)}
                  >
                    {item}
                  </a>
                );
              })}
            </div>
            <div className="nav-actions">
              <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
                {theme === 'light' ? <FiMoon /> : <FiSun />}
              </button>
              <button className="btn btn-primary">Student Portal</button>
              <button 
                className="mobile-menu-toggle"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <FiX /> : <FiMenu />}
              </button>
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
                  <FiSend className="btn-icon" />
                  Book a Demo
                </button>
                <button className="btn btn-outline">
                  <FiBook className="btn-icon" />
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
                      <div className="mockup-icon">
                        <FiLock />
                      </div>
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
                  <div className="badge-icon">
                    <FiCheck />
                  </div>
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
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div key={index} className="feature-card">
                  <div className="feature-icon">
                    <IconComponent />
                  </div>
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                  <div className="feature-tags">
                    <span className="tag">Enterprise</span>
                    <span className="tag">Secure</span>
                    <span className="tag">Scalable</span>
                  </div>
                </div>
              );
            })}
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
                  <img 
                    src={member.image} 
                    alt={member.name}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      borderRadius: '50%'
                    }}
                    onError={(e) => {
                      // Fallback to initials if image fails to load
                      e.target.style.display = 'none';
                      e.target.parentElement.textContent = member.initials;
                    }}
                  />
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
                  <div className="contact-icon">
                    <FiMail />
                  </div>
                  <div>
                    <div className="contact-label">Email</div>
                    <div className="contact-value">smartlocker@iit.ac.lk</div>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="contact-icon">
                    <FiPhone />
                  </div>
                  <div>
                    <div className="contact-label">Phone</div>
                    <div className="contact-value">+91 12345 67890</div>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="contact-icon">
                    <FiMapPin />
                  </div>
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
                <img src="/images/logo.jpg" alt="SmartLockers Logo" className="logo-icon" />
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
            <p>© 2025 Smart Locker System. All rights reserved.</p>
            <p className="footer-note">A final year project by IIT Computer Science Department</p>
          </div>
        </div>
      </footer>

      {/* Scroll to Top */}
      <button 
        className={`scroll-top ${showScrollTop ? 'visible' : ''}`} 
        onClick={scrollToTop}
        aria-label="Scroll to top"
      >
        <FiArrowUp />
      </button>
    </div>
  );
}

export default App;
