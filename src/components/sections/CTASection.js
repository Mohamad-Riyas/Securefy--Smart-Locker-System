import React from 'react';
import { motion } from 'framer-motion';
import { FiLock, FiCalendar } from 'react-icons/fi';

const CTA = () => {
  return (
    <section className="py-20">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{
            textAlign: 'center',
            background: 'linear-gradient(135deg, var(--primary), var(--primary-dark))',
            color: 'white',
            borderRadius: '2rem',
            padding: '5rem 2rem',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          {/* Background Pattern */}
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255,255,255,0.1) 0%, transparent 50%)',
            animation: 'float 20s linear infinite'
          }} />

          <div style={{ position: 'relative', zIndex: 1 }}>
            <h2 style={{
              fontSize: '3rem',
              fontWeight: '800',
              marginBottom: '1rem',
              color: 'white'
            }}>
              Ready to Transform Your Library Experience?
            </h2>
            
            <p style={{
              fontSize: '1.25rem',
              opacity: 0.9,
              marginBottom: '2.5rem',
              maxWidth: '600px',
              marginLeft: 'auto',
              marginRight: 'auto'
            }}>
              Join thousands of IIT students who have already embraced smart, 
              secure storage solutions. Reserve your locker today and experience 
              academic convenience redefined.
            </p>

            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '1rem',
              justifyContent: 'center'
            }}>
              <button className="btn" style={{
                background: 'white',
                color: 'var(--primary)',
                fontWeight: '600',
                minWidth: '180px'
              }}>
                <FiLock style={{ marginRight: '0.5rem' }} />
                Get Started Free
              </button>
              
              <button className="btn" style={{
                background: 'rgba(255, 255, 255, 0.1)',
                color: 'white',
                border: '2px solid rgba(255, 255, 255, 0.3)',
                fontWeight: '600',
                minWidth: '180px'
              }}>
                <FiCalendar style={{ marginRight: '0.5rem' }} />
                Schedule Demo
              </button>
            </div>

            <p style={{
              marginTop: '1.5rem',
              fontSize: '0.875rem',
              opacity: 0.7
            }}>
              *IIT email verification required • Free during academic year 2024
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;