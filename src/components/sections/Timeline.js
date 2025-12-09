import React from 'react';
import { motion } from 'framer-motion';
import { FiSearch, FiCalendar, FiSmartphone } from 'react-icons/fi';

const HowItWorks = () => {
  const steps = [
    {
      number: '01',
      icon: <FiSearch />,
      title: 'Check & Reserve',
      description: 'Access real-time locker availability through our student portal and reserve your preferred slot instantly.',
      color: 'linear-gradient(135deg, var(--primary), var(--primary-dark))'
    },
    {
      number: '02',
      icon: <FiCalendar />,
      title: 'Generate QR Code',
      description: 'Receive a unique, time-sensitive QR code directly to your registered IIT email or mobile device.',
      color: 'linear-gradient(135deg, var(--accent), var(--accent-dark))'
    },
    {
      number: '03',
      icon: <FiSmartphone />,
      title: 'Scan & Access',
      description: 'Simply scan your QR code at the locker unit for instant, secure access to your assigned storage space.',
      color: 'linear-gradient(135deg, #8b5cf6, #7c3aed)'
    }
  ];

  return (
    <section id="how-it-works" className="py-20">
      <div className="container">
        <h2 className="section-title">Seamless Three-Step Process</h2>
        <p className="section-subtitle">
          Experience the future of campus storage with our intuitive system
        </p>

        <div style={{ 
          position: 'relative',
          maxWidth: '900px',
          margin: '5rem auto 0'
        }}>
          {/* Connecting Line */}
          <div style={{
            position: 'absolute',
            top: '4rem',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '80%',
            height: '2px',
            background: 'linear-gradient(90deg, transparent, var(--primary), transparent)',
            zIndex: 0
          }} />

          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '4rem',
            position: 'relative',
            zIndex: 1
          }}>
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '2rem',
                  flexDirection: index % 2 === 0 ? 'row' : 'row-reverse'
                }}
              >
                {/* Step Number */}
                <div style={{
                  flexShrink: 0,
                  width: '8rem',
                  height: '8rem',
                  borderRadius: '50%',
                  background: 'var(--bg-card)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '2.25rem',
                  fontWeight: '800',
                  color: 'var(--primary)',
                  boxShadow: 'var(--shadow-lg)',
                  border: '1px solid var(--border)',
                  position: 'relative',
                  zIndex: 1
                }}>
                  <div style={{
                    position: 'absolute',
                    inset: '-0.5rem',
                    background: step.color,
                    borderRadius: 'inherit',
                    opacity: 0.1,
                    zIndex: -1
                  }} />
                  {step.number}
                </div>

                {/* Step Content */}
                <div style={{
                  flex: 1,
                  background: 'var(--bg-card)',
                  padding: '2rem',
                  borderRadius: '1.5rem',
                  boxShadow: 'var(--shadow-lg)',
                  border: '1px solid var(--border)',
                  textAlign: index % 2 === 0 ? 'left' : 'right'
                }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem',
                    marginBottom: '1rem',
                    flexDirection: index % 2 === 0 ? 'row' : 'row-reverse'
                  }}>
                    <div style={{
                      width: '3.5rem',
                      height: '3.5rem',
                      borderRadius: '1rem',
                      background: step.color,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'white',
                      fontSize: '1.5rem'
                    }}>
                      {step.icon}
                    </div>
                    <h3 style={{
                      fontSize: '1.5rem',
                      fontWeight: '700',
                      color: 'var(--text-primary)',
                      margin: 0
                    }}>
                      {step.title}
                    </h3>
                  </div>
                  <p style={{
                    color: 'var(--text-secondary)',
                    lineHeight: '1.7',
                    margin: 0
                  }}>
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;