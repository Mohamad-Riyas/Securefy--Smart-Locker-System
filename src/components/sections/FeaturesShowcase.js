import React from 'react';
import { InView } from 'react-intersection-observer';

const FeaturesShowcase = () => {
  const features = [
    {
      icon: '🔐',
      title: 'Military-Grade Security',
      description: 'AES-256 encryption, biometric verification, and real-time threat detection ensure unparalleled security.',
      stats: ['99.99% Uptime', 'Zero Data Breaches', 'SOC2 Certified']
    },
    {
      icon: '⚡',
      title: 'Instant Access',
      description: 'QR code generation and validation in under 500ms. Cloud-synced access control with zero latency.',
      stats: ['<500ms Response', '99.9% Availability', 'Global CDN']
    },
    {
      icon: '📱',
      title: 'Enterprise Platform',
      description: 'Centralized dashboard with advanced analytics, reporting, and administration controls.',
      stats: ['Real-time Analytics', 'API Integration', 'Custom Workflows']
    },
    {
      icon: '🔋',
      title: 'Redundant Systems',
      description: 'Triple redundancy with backup power, offline mode, and manual override capabilities.',
      stats: ['99.999% Reliability', '72hr Backup', 'Manual Override']
    },
    {
      icon: '📊',
      title: 'Advanced Analytics',
      description: 'AI-powered insights, predictive maintenance, and usage pattern analysis.',
      stats: ['Predictive AI', 'Usage Analytics', 'Smart Allocation']
    },
    {
      icon: '🌐',
      title: 'Global Standards',
      description: 'Compliant with ISO 27001, GDPR, and institutional security protocols.',
      stats: ['ISO 27001', 'GDPR Compliant', 'Institutional Protocols']
    }
  ];

  return (
    <section id="features" className="section-padding bg-grid-pattern">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Enterprise-Grade Features</h2>
          <p className="section-subtitle">
            Built with cutting-edge technology to meet the highest standards of security and reliability
          </p>
        </div>

        <div className="grid-3">
          {features.map((feature, index) => (
            <InView key={index} threshold={0.1} triggerOnce>
              {({ inView, ref }) => (
                <div
                  ref={ref}
                  className={`card ${inView ? 'animate-fadeInUp' : ''}`}
                  style={{
                    animationDelay: `${index * 0.1}s`
                  }}
                >
                  <div className="card-icon">
                    <span style={{ fontSize: '24px' }}>{feature.icon}</span>
                  </div>
                  <h3 style={{
                    fontSize: '20px',
                    fontWeight: '700',
                    marginBottom: '12px',
                    color: 'var(--gray-900)'
                  }}>
                    {feature.title}
                  </h3>
                  <p style={{
                    color: 'var(--gray-600)',
                    marginBottom: '20px',
                    lineHeight: '1.6'
                  }}>
                    {feature.description}
                  </p>
                  <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '8px'
                  }}>
                    {feature.stats.map((stat, statIndex) => (
                      <span key={statIndex}
                        style={{
                          padding: '6px 12px',
                          background: 'var(--gray-100)',
                          borderRadius: 'var(--radius-full)',
                          fontSize: '12px',
                          fontWeight: '600',
                          color: 'var(--primary)'
                        }}
                      >
                        {stat}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </InView>
          ))}
        </div>

        {/* Feature Comparison */}
        <div className="card"
          style={{
            marginTop: '60px',
            background: 'var(--gradient-glass)',
            borderColor: 'rgba(0, 102, 255, 0.1)'
          }}
        >
          <h3 style={{
            textAlign: 'center',
            fontSize: '24px',
            fontWeight: '700',
            marginBottom: '30px',
            color: 'var(--gray-900)'
          }}>
            Why Choose Our Solution?
          </h3>
          <div className="grid-3">
            <div style={{ textAlign: 'center' }}>
              <div style={{
                fontSize: '48px',
                fontWeight: '800',
                color: 'var(--primary)',
                marginBottom: '12px'
              }}>
                10x
              </div>
              <div style={{
                fontSize: '14px',
                color: 'var(--gray-600)',
                fontWeight: '600'
              }}>
                Faster than traditional systems
              </div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{
                fontSize: '48px',
                fontWeight: '800',
                color: 'var(--accent)',
                marginBottom: '12px'
              }}>
                99.9%
              </div>
              <div style={{
                fontSize: '14px',
                color: 'var(--gray-600)',
                fontWeight: '600'
              }}>
                System reliability guarantee
              </div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{
                fontSize: '48px',
                fontWeight: '800',
                color: 'var(--success)',
                marginBottom: '12px'
              }}>
                24/7
              </div>
              <div style={{
                fontSize: '14px',
                color: 'var(--gray-600)',
                fontWeight: '600'
              }}>
                Security monitoring & support
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesShowcase;