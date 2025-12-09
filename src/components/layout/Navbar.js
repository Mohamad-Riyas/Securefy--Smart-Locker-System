import React, { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';

const Navbar = ({ theme, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', to: 'hero' },
    { label: 'Problem', to: 'problem' },
    { label: 'Features', to: 'features' },
    { label: 'Process', to: 'timeline' },
    { label: 'Team', to: 'team' },
    { label: 'Contact', to: 'contact' },
  ];

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}
      style={{
        position: 'fixed',
        top: 0,
        width: '100%',
        zIndex: 1000,
        padding: '20px 0',
        transition: 'all var(--transition-base)',
        background: scrolled ? 'var(--gradient-glass)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255, 255, 255, 0.1)' : 'none'
      }}
    >
      <div className="container">
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}>
          {/* Logo */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px'
          }}>
            <div style={{
              width: '40px',
              height: '40px',
              background: 'var(--gradient-primary)',
              borderRadius: '10px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontSize: '20px',
              fontWeight: 'bold'
            }}>
              🔒
            </div>
            <div>
              <h1 style={{
                fontSize: '24px',
                fontWeight: '800',
                background: 'var(--gradient-primary)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                margin: 0
              }}>
                SmartLockers
              </h1>
              <p style={{
                fontSize: '12px',
                color: 'var(--gray-500)',
                margin: 0,
                fontWeight: '500'
              }}>
                IIT UNIVERSITY
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div style={{
            display: 'none',
            alignItems: 'center',
            gap: '40px'
          }}
          className="desktop-nav"
          >
            {navItems.map((item) => (
              <ScrollLink
                key={item.label}
                to={item.to}
                smooth={true}
                duration={500}
                style={{
                  color: 'var(--gray-700)',
                  textDecoration: 'none',
                  fontWeight: '600',
                  fontSize: '15px',
                  cursor: 'pointer',
                  position: 'relative',
                  padding: '8px 0',
                  transition: 'color var(--transition-base)'
                }}
                activeClass="active"
                spy={true}
              >
                {item.label}
                <span style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  width: 0,
                  height: '2px',
                  background: 'var(--gradient-primary)',
                  transition: 'width var(--transition-base)'
                }}
                className="nav-indicator"
                />
              </ScrollLink>
            ))}
          </div>

          {/* Right Side Actions */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '20px'
          }}>
            <button
              onClick={toggleTheme}
              style={{
                width: '44px',
                height: '44px',
                borderRadius: '50%',
                background: 'var(--gray-100)',
                border: 'none',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                fontSize: '20px',
                transition: 'all var(--transition-base)'
              }}
              aria-label="Toggle theme"
            >
              {theme === 'light' ? '🌙' : '☀️'}
            </button>

            <button className="btn btn-primary"
              style={{
                padding: '12px 28px',
                fontSize: '14px'
              }}
            >
              Student Portal
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              style={{
                display: 'none',
                background: 'none',
                border: 'none',
                fontSize: '24px',
                cursor: 'pointer',
                color: 'var(--gray-700)'
              }}
              className="mobile-menu-btn"
              aria-label="Toggle menu"
            >
              {isOpen ? '✕' : '☰'}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            width: '100%',
            background: 'var(--white)',
            boxShadow: 'var(--shadow-xl)',
            padding: '20px',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px'
          }}
          className="mobile-nav"
          >
            {navItems.map((item) => (
              <ScrollLink
                key={item.label}
                to={item.to}
                smooth={true}
                duration={500}
                onClick={() => setIsOpen(false)}
                style={{
                  color: 'var(--gray-700)',
                  textDecoration: 'none',
                  fontWeight: '600',
                  fontSize: '16px',
                  padding: '12px 0',
                  borderBottom: '1px solid var(--gray-200)',
                  cursor: 'pointer'
                }}
              >
                {item.label}
              </ScrollLink>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;