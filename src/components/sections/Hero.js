import React, { useEffect, useRef } from 'react';
import Typed from 'react-typed';

const Hero = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    // Add parallax effect
    const handleScroll = () => {
      if (heroRef.current) {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;
        heroRef.current.style.transform = `translate3d(0, ${rate}px, 0)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const stats = [
    { number: '99.9%', label: 'System Uptime' },
    { number: '2,500+', label: 'Active Users' },
    { number: '<30s', label: 'Average Booking Time' },
    { number: '24/7', label: 'Security Monitoring' }
  ];

  return (
    <section id="hero" className="section-padding"
      style={{
        position: 'relative',
        overflow: 'hidden',
        background: 'linear-gradient(135deg, #0A2540 0%, #0F172A 100%)',
        color: 'white'
      }}
    >
      {/* Animated Background */}
      <div ref={heroRef}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 0
        }}
      >
        <div style={{
          position: 'absolute',
          top: '10%',
          left: '10%',
          width: '400px',
          height: '400px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(0, 102, 255, 0.1) 0%, transparent 70%)',
          filter: 'blur(40px)'
        }} />
        <div style={{
          position: 'absolute',
          bottom: '10%',
          right: '10%',
          width: '300px',
          height: '300px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(0, 212, 170, 0.1) 0%, transparent 70%)',
          filter: 'blur(40px)'
        }} />
      </div>

      <div className="container"
        style={{
          position: 'relative',
          zIndex: 1
        }}
      >
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '60px',
          alignItems: 'center'
        }}>
          {/* Left Content */}
          <div className="animate-slideInLeft">
            {/* Badge */}
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '8px 20px',
              background: 'rgba(255, 255, 255, 0.1)',
              borderRadius: 'var(--radius-full)',
              marginBottom: '32px',
              backdropFilter: 'blur(10px)'
            }}>
              <div style={{
                width: '8px',
                height: '8px',
                background: 'var(--accent)',
                borderRadius: '50%',
                animation: 'pulse 2s ease-in-out infinite'
              }} />
              <span style={{
                fontSize: '14px',
                fontWeight: '600'
              }}>
                EXCLUSIVELY FOR IIT UNIVERSITY
              </span>
            </div>

            {/* Title */}
            <h1 style={{
              fontSize: 'clamp(40px, 5vw, 64px)',
              fontWeight: '800',
              lineHeight: '1.1',
              marginBottom: '24px'
            }}>
              Intelligent Storage Solutions for{' '}
              <span className="gradient-text">
                <Typed
                  strings={['Academic Excellence', 'Secure Campus', 'Modern Students']}
                  typeSpeed={50}
                  backSpeed={30}
                  loop
                />
              </span>
            </h1>

            {/* Description */}
            <p style={{
              fontSize: '20px',
              color: 'rgba(255, 255, 255, 0.8)',
              marginBottom: '40px',
              lineHeight: '1.6'
            }}>
              Enterprise-grade smart locker system designed specifically for IIT University. 
              Seamlessly integrate secure storage with cutting-edge technology for an 
              unparalleled academic experience.
            </p>

            {/* CTA Buttons */}
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '16px',
              marginBottom: '60px'
            }}>
              <button className="btn btn-accent">
                <span>🚀</span> Book a Demo
              </button>
              <button className="btn btn-secondary"
                style={{
                  background: 'rgba(255, 255, 255, 0.1)',
                  borderColor: 'rgba(255, 255, 255, 0.3)',
                  color: 'white'
                }}
              >
                <span>📚</span> View Case Study
              </button>
            </div>

            {/* Stats */}
            <div className="grid-4">
              {stats.map((stat, index) => (
                <div key={index}
                  style={{
                    textAlign: 'center'
                  }}
                >
                  <div style={{
                    fontSize: '32px',
                    fontWeight: '800',
                    color: 'var(--accent)',
                    marginBottom: '8px',
                    fontFamily: 'var(--font-primary)'
                  }}>
                    {stat.number}
                  </div>
                  <div style={{
                    fontSize: '14px',
                    color: 'rgba(255, 255, 255, 0.7)',
                    fontWeight: '500'
                  }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Visual */}
          <div className="animate-slideInRight"
            style={{
              position: 'relative'
            }}
          >
            {/* Main Mockup */}
            <div style={{
              position: 'relative',
              background: 'var(--gradient-glass)',
              borderRadius: 'var(--radius-3xl)',
              padding: '30px',
              boxShadow: '0 50px 100px rgba(0, 0, 0, 0.3)',
              transformStyle: 'preserve-3d',
              perspective: '1000px'
            }}>
              {/* Locker Interface */}
              <div style={{
                background: 'linear-gradient(135deg, rgba(10, 37, 64, 0.8), rgba(15, 23, 42, 0.9))',
                borderRadius: 'var(--radius-xl)',
                padding: '30px',
                border: '1px solid rgba(255, 255, 255, 0.1)'
              }}>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: '30px'
                }}>
                  <div>
                    <div style={{
                      fontSize: '12px',
                      color: 'var(--accent)',
                      fontWeight: '600',
                      marginBottom: '4px'
                    }}>
                      SMART LOCKER SYSTEM
                    </div>
                    <div style={{
                      fontSize: '20px',
                      fontWeight: '700',
                      color: 'white'
                    }}>
                      Available Lockers: <span style={{ color: 'var(--accent)' }}>47/120</span>
                    </div>
                  </div>
                  <div style={{
                    width: '40px',
                    height: '40px',
                    background: 'var(--gradient-primary)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '20px'
                  }}>
                    🔒
                  </div>
                </div>

                {/* Locker Grid */}
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(6, 1fr)',
                  gap: '10px',
                  marginBottom: '30px'
                }}>
                  {Array.from({ length: 24 }).map((_, i) => (
                    <div key={i}
                      style={{
                        aspectRatio: '1',
                        background: i % 4 === 0 ? 'var(--gradient-accent)' : 'rgba(255, 255, 255, 0.05)',
                        borderRadius: '8px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '12px',
                        fontWeight: '600',
                        color: i % 4 === 0 ? 'white' : 'rgba(255, 255, 255, 0.5)',
                        transition: 'all var(--transition-base)',
                        cursor: 'pointer'
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.transform = 'scale(1.1)';
                        e.target.style.boxShadow = '0 10px 20px rgba(0, 212, 170, 0.3)';
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.transform = 'scale(1)';
                        e.target.style.boxShadow = 'none';
                      }}
                    >
                      {i + 1}
                    </div>
                  ))}
                </div>

                {/* QR Code Section */}
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '20px',
                  padding: '20px',
                  background: 'rgba(255, 255, 255, 0.05)',
                  borderRadius: 'var(--radius-lg)'
                }}>
                  <div style={{
                    width: '80px',
                    height: '80px',
                    background: 'white',
                    borderRadius: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '24px',
                    fontWeight: 'bold',
                    color: 'var(--primary)'
                  }}>
                    QR
                  </div>
                  <div>
                    <div style={{
                      fontSize: '14px',
                      color: 'var(--accent)',
                      fontWeight: '600',
                      marginBottom: '4px'
                    }}>
                      SCAN TO ACCESS
                    </div>
                    <div style={{
                      fontSize: '12px',
                      color: 'rgba(255, 255, 255, 0.7)'
                    }}>
                      One-time code valid for 15 minutes
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="animate-float"
                style={{
                  position: 'absolute',
                  top: '-20px',
                  right: '-20px',
                  background: 'var(--gradient-accent)',
                  padding: '20px',
                  borderRadius: 'var(--radius-xl)',
                  boxShadow: 'var(--shadow-2xl)'
                }}
              >
                <div style={{
                  fontSize: '24px',
                  fontWeight: '800',
                  color: 'white'
                }}>
                  ✓
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;