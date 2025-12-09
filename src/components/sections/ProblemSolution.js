import React from 'react';
import { motion } from 'framer-motion';
import { FiAlertTriangle, FiCheckCircle } from 'react-icons/fi';

const ProblemSolution = () => {
  return (
    <section className="py-20" style={{ 
      background: 'linear-gradient(135deg, var(--bg-secondary) 0%, var(--bg-primary) 100%)'
    }}>
      <div className="container">
        <h2 className="section-title">Transforming Library Access</h2>
        <p className="section-subtitle">
          Addressing campus challenges with innovative solutions designed for IIT students
        </p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '3rem',
          marginTop: '4rem'
        }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '3rem'
          }}>
            {/* Problem Card */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              style={{
                padding: '3rem',
                borderRadius: '1.5rem',
                background: 'linear-gradient(135deg, rgba(239, 68, 68, 0.05), transparent)',
                border: '1px solid rgba(239, 68, 68, 0.2)',
                transition: 'transform 0.3s ease'
              }}
              whileHover={{ y: -10 }}
            >
              <div style={{
                width: '4rem',
                height: '4rem',
                borderRadius: '1rem',
                background: 'linear-gradient(135deg, #fee2e2, #fecaca)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#dc2626',
                fontSize: '1.5rem',
                marginBottom: '1.5rem'
              }}>
                <FiAlertTriangle />
              </div>
              <h3 style={{
                fontSize: '1.875rem',
                fontWeight: '700',
                marginBottom: '1rem',
                color: 'var(--text-primary)'
              }}>
                The Campus Challenge
              </h3>
              <p style={{
                color: 'var(--text-secondary)',
                lineHeight: '1.7',
                fontSize: '1.125rem'
              }}>
                Students face security risks, inconvenience, and limited study space due to 
                personal belongings in the library. Heavy backpacks, valuable items, and 
                lack of secure storage create barriers to productive study sessions.
              </p>
            </motion.div>

            {/* Solution Card */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              style={{
                padding: '3rem',
                borderRadius: '1.5rem',
                background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.05), transparent)',
                border: '1px solid rgba(16, 185, 129, 0.2)',
                transition: 'transform 0.3s ease'
              }}
              whileHover={{ y: -10 }}
            >
              <div style={{
                width: '4rem',
                height: '4rem',
                borderRadius: '1rem',
                background: 'linear-gradient(135deg, #d1fae5, #a7f3d0)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#059669',
                fontSize: '1.5rem',
                marginBottom: '1.5rem'
              }}>
                <FiCheckCircle />
              </div>
              <h3 style={{
                fontSize: '1.875rem',
                fontWeight: '700',
                marginBottom: '1rem',
                color: 'var(--text-primary)'
              }}>
                Our Smart Solution
              </h3>
              <p style={{
                color: 'var(--text-secondary)',
                lineHeight: '1.7',
                fontSize: '1.125rem'
              }}>
                A fully automated locker ecosystem designed specifically for IIT University. 
                Combining cutting-edge technology with user-centric design to provide 
                seamless, secure, and intelligent storage solutions.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;