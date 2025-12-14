import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; 
import App from './App';

function App() {
  const [theme, setTheme] = useState('light');
  const [activeStep, setActiveStep] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [isTablet, setIsTablet] = useState(window.innerWidth >= 768 && window.innerWidth < 1024);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // Team member images and logo (replace these with actual image URLs)
  const teamImages = {
    branavaram: '/images/branavaram.jpg',
    dhanush: '/images/Dhanush.jpg',
    riyas: '/images/riyas.jpg',
    aqeel: '/images/aqeel.jpg',
    shehan: '/images/shehan.jpg',
    logo: '/images/logo.jpg' // Add your logo image path here
  };

  // Securefy Color Themes - Modern, Trustworthy, Loveable
  const colors = {
    light: {
      primary: '#4A6CF7', // Calming Blue - Trust & Security
      secondary: '#10B981', // Fresh Green - Success & Growth
      accent: '#FFFFFF', // White
      highlight: '#F59E0B', // Warm Amber - Energy & Attention
      background: 'linear-gradient(135deg, #F8FAFC 0%, #F1F5F9 100%)', // Soft Gray Gradient
      card: 'rgba(255, 255, 255, 0.98)',
      text: '#1E293B', // Dark Blue-Gray
      textSecondary: '#64748B',
      glass: 'rgba(255, 255, 255, 0.92)',
      gradient: 'linear-gradient(135deg, #4A6CF7 0%, #8B5CF6 100%)', // Blue to Purple
      success: '#10B981',
      warning: '#F59E0B',
      danger: '#EF4444',
      info: '#3B82F6',
      logoGradient: 'linear-gradient(135deg, #4A6CF7 0%, #8B5CF6 100%)'
    },
    dark: {
      primary: '#60A5FA', // Bright Blue
      secondary: '#34D399', // Bright Green
      accent: '#0F172A', // Dark Navy
      highlight: '#FBBF24', // Bright Amber
      background: 'linear-gradient(135deg, #0F172A 0%, #1E293B 100%)', // Deep Navy Gradient
      card: 'rgba(30, 41, 59, 0.95)',
      text: '#F1F5F9', // Light Blue-Gray
      textSecondary: '#94A3B8',
      glass: 'rgba(15, 23, 42, 0.92)',
      gradient: 'linear-gradient(135deg, #60A5FA 0%, #A78BFA 100%)', // Light Blue to Light Purple
      success: '#34D399',
      warning: '#FBBF24',
      danger: '#F87171',
      info: '#60A5FA',
      logoGradient: 'linear-gradient(135deg, #60A5FA 0%, #A78BFA 100%)'
    }
  };

  const currentColors = colors[theme];

  // Animated background particles
  const [particles, setParticles] = useState([]);
  const [floatingShapes, setFloatingShapes] = useState([]);
  const heroRef = useRef(null);
  const featuresRef = useRef(null);
  const howItWorksRef = useRef(null);
  const teamRef = useRef(null);
  const contactRef = useRef(null);
  
  // Handle responsive layout
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      setIsTablet(window.innerWidth >= 768 && window.innerWidth < 1024);
      // Close mobile menu when resizing to desktop
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    // Create particles for animated background
    const newParticles = [];
    const particleCount = isMobile ? 20 : (isTablet ? 35 : 50);
    
    for (let i = 0; i < particleCount; i++) {
      newParticles.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * (isMobile ? 2 : 3) + 1,
        speed: Math.random() * 0.8 + 0.3,
        opacity: Math.random() * 0.2 + 0.1,
        delay: Math.random() * 5,
        color: theme === 'light' ? '#4A6CF7' : '#60A5FA'
      });
    }
    setParticles(newParticles);

    // Create floating geometric shapes for beautiful background
    const newShapes = [];
    const shapeCount = isMobile ? 8 : (isTablet ? 12 : 15);
    const shapes = ['circle', 'square', 'triangle'];
    
    for (let i = 0; i < shapeCount; i++) {
      newShapes.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * (isMobile ? 40 : 60) + 20,
        speed: Math.random() * 0.5 + 0.2,
        opacity: Math.random() * 0.05 + 0.02,
        delay: Math.random() * 10,
        type: shapes[Math.floor(Math.random() * shapes.length)],
        rotation: Math.random() * 360,
        blur: Math.random() * 10 + 5,
        color: theme === 'light' ? 
          `rgba(74, 108, 247, ${Math.random() * 0.1 + 0.03})` : 
          `rgba(96, 165, 250, ${Math.random() * 0.1 + 0.03})`
      });
    }
    setFloatingShapes(newShapes);

    // Auto rotate steps
    const interval = setInterval(() => {
      setActiveStep(prev => (prev + 1) % 6);
    }, 3000);

    return () => clearInterval(interval);
  }, [theme, isMobile, isTablet]);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (mobileMenuOpen && !event.target.closest('.mobile-menu') && !event.target.closest('.mobile-menu-button')) {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [mobileMenuOpen]);

  const libraryFeatures = [
    {
      icon: '🔐',
      title: 'Military-Grade Encryption',
      description: 'Bank-level 256-bit AES encryption ensures your belongings are completely secure.',
      gradient: 'linear-gradient(135deg, #4A6CF7 0%, #8B5CF6 100%)'
    },
    {
      icon: '⚡',
      title: 'Instant Access',
      description: 'Reserve and access lockers instantly with QR code scanning technology.',
      gradient: 'linear-gradient(135deg, #F59E0B 0%, #FBBF24 100%)'
    },
    {
      icon: '📱',
      title: 'Smart Control',
      description: 'Control everything from your phone with our intuitive web application.',
      gradient: 'linear-gradient(135deg, #EF4444 0%, #F87171 100%)'
    },
    {
      icon: '📊',
      title: 'Advanced Analytics',
      description: 'Real-time usage analytics and predictive availability for optimal planning.',
      gradient: 'linear-gradient(135deg, #8B5CF6 0%, #A78BFA 100%)'
    },
    {
      icon: '🔔',
      title: 'Smart Alerts',
      description: 'Automated notifications and alerts for security and convenience.',
      gradient: 'linear-gradient(135deg, #3B82F6 0%, #60A5FA 100%)'
    }
  ];

  const howItWorks = [
    {
      step: 1,
      icon: '👤',
      title: 'Biometric Login',
      description: 'Authenticate using your institutional credentials via our secure portal',
      features: ['NIC ID', 'Library ID', 'IIT ID']
    },
    {
      step: 2,
      icon: '📍',
      title: 'Smart Locker Selection',
      description: 'System recommends optimal lockers based on your schedule and location',
      features: ['Smart suggestions', 'Real-time map', 'Optimal routing']
    },
    {
      step: 3,
      icon: '📅',
      title: 'Flexible Reservation',
      description: 'Book lockers for hours, days, or entire academic terms',
      features: ['Flexible timing', 'Auto-extend', 'Group bookings']
    },
    {
      step: 4,
      icon: '🔑',
      title: 'Digital Key',
      description: 'Generate secure digital keys or use biometric access',
      features: ['Digital keys', 'Biometric access', 'Temporary codes']
    },
    {
      step: 5,
      icon: '🛡️',
      title: 'Secure Storage',
      description: 'Store items with 24/7 monitoring and instant alerts',
      features: ['24/7 monitoring', 'Instant alerts', 'Activity logs']
    },
    {
      step: 6,
      icon: '📈',
      title: 'Advanced Management',
      description: 'Track usage, receive insights, and manage preferences',
      features: ['Usage analytics', 'Smart insights', 'Preferences']
    }
  ];

  const projectTeam = [
    {
      id: 'Branavaram',
      name: 'Branavaram',
      role: 'Project Lead & Backend Architect',
      department: 'BEng(HONS) Software Engineering',
      github: 'https://github.com/branavaram',
      linkedin: 'https://linkedin.com/in/branavaram',
      image: teamImages.branavaram
    },
    {
      id: 'Dhanush',
      name: 'Dhanush',
      role: 'Hardware Systems Engineer',
      department: 'BEng(HONS) Software Engineering',
      github: 'https://github.com/RajasegaranDhanush',
      linkedin: 'https://www.linkedin.com/authwall?trk=bf&trkInfo=AQGmmrs0WhbzxwAAAZr9XHAIlxc0WeTJ7EkR8KneCBzvrdcXFhC1QnGsc7dRE-FFBFjp7t1qMz21fCmjQgJ5UBVSfuSfIE8S_AL8tWkXMkftkPXoo8UqboHcyuHx0fwJ6cxIThg=&original_referer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fin%2Frajasegaran-dhanush-13410434a%2F',
      image: teamImages.dhanush
    },
    {
      id: 'Riyas',
      name: 'Mohamad Riyas',
      role: 'UI/UX Design Lead',
      department: 'BEng(HONS) Software Engineering',
      github: 'https://github.com/Mohamad-Riyas',
      linkedin: 'https://www.linkedin.com/in/mohamad-riyas-94735b350',
      image: teamImages.riyas
    },
    {
      id: 'Aqeel',
      name: 'Aqeel',
      role: 'Security & Testing Lead',
      department: 'BEng(HONS) Software Engineering',
      github: 'https://github.com/aqeel',
      linkedin: 'https://linkedin.com/in/aqeel',
      image: teamImages.aqeel
    },
    {
      id: 'Shehan',
      name: 'Shehan Randil',
      role: 'Operations Director',
      department: 'BEng(HONS) Software Engineering',
      github: 'https://github.com/shehan',
      linkedin: 'https://linkedin.com/in/shehan-randhil',
      image: teamImages.shehan
    }
  ];

  // Scroll to section function
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      // Close mobile menu after clicking
      if (isMobile) {
        setMobileMenuOpen(false);
      }
    }
  };

  // Responsive styles object - MODIFIED: Reduced padding
  const responsive = {
    // Padding - Reduced for minimal background padding
    sectionPadding: isMobile ? '20px 0' : isTablet ? '30px 0' : '40px 0',
    heroPadding: isMobile ? '40px 0' : isTablet ? '60px 0' : '80px 0',
    containerPadding: isMobile ? '0 20px' : isTablet ? '0 30px' : '0 40px',
    
    // Font sizes
    h1Size: isMobile ? '32px' : isTablet ? '48px' : '64px',
    h2Size: isMobile ? '28px' : isTablet ? '36px' : '48px',
    h3Size: isMobile ? '20px' : isTablet ? '22px' : '24px',
    bodySize: isMobile ? '14px' : isTablet ? '16px' : '18px',
    smallSize: isMobile ? '12px' : '14px',
    
    // Grid columns
    heroGrid: isMobile ? '1fr' : '1.2fr 1fr',
    featuresGrid: isMobile ? '1fr' : isTablet ? 'repeat(2, 1fr)' : 'repeat(3, 1fr)',
    processGrid: isMobile ? '1fr' : isTablet ? 'repeat(2, 1fr)' : 'repeat(3, 1fr)',
    teamGrid: isMobile ? '1fr' : isTablet ? 'repeat(2, 1fr)' : 'repeat(3, 1fr)',
    statsGrid: isMobile ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)',
    
    // Gaps
    gapSmall: isMobile ? '15px' : isTablet ? '20px' : '30px',
    gapMedium: isMobile ? '20px' : isTablet ? '30px' : '40px',
    gapLarge: isMobile ? '30px' : isTablet ? '40px' : '60px',
    
    // Button sizes
    buttonPadding: isMobile ? '12px 24px' : isTablet ? '15px 30px' : '18px 40px',
    ctaButtonPadding: isMobile ? '15px 30px' : isTablet ? '18px 40px' : '20px 50px',
    
    // Navigation
    navGap: isMobile ? '15px' : isTablet ? '25px' : '40px',
    navPadding: isMobile ? '10px 15px' : isTablet ? '12px 20px' : '15px 30px',
    logoSize: isMobile ? '35px' : isTablet ? '45px' : '50px',
    logoFont: isMobile ? '18px' : isTablet ? '20px' : '22px',
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: currentColors.background,
      color: currentColors.text,
      fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, sans-serif',
      position: 'relative',
      overflowX: 'hidden'
    }}>
      {/* Enhanced Animated Background */}
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 1,
        pointerEvents: 'none',
        overflow: 'hidden'
      }}>
        {/* Animated Grid Background */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '200%',
          height: '200%',
          backgroundImage: `linear-gradient(${theme === 'light' ? 'rgba(74, 108, 247, 0.03)' : 'rgba(96, 165, 250, 0.03)'} 1px, transparent 1px),
                           linear-gradient(90deg, ${theme === 'light' ? 'rgba(74, 108, 247, 0.03)' : 'rgba(96, 165, 250, 0.03)'} 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
          animation: 'gridMove 40s linear infinite',
          opacity: 0.5
        }} />

        {/* Floating Geometric Shapes */}
        {floatingShapes.map(shape => (
          <div
            key={shape.id}
            style={{
              position: 'absolute',
              left: `${shape.x}%`,
              top: `${shape.y}%`,
              width: `${shape.size}px`,
              height: `${shape.size}px`,
              background: shape.color,
              borderRadius: shape.type === 'circle' ? '50%' : shape.type === 'triangle' ? '50%' : '10px',
              opacity: shape.opacity,
              animation: `shapeFloat ${30 / shape.speed}s infinite ease-in-out ${shape.delay}s`,
              filter: `blur(${shape.blur}px)`,
              transform: `rotate(${shape.rotation}deg)`,
              clipPath: shape.type === 'triangle' ? 'polygon(50% 0%, 0% 100%, 100% 100%)' : 'none'
            }}
          />
        ))}

        {/* Animated Particles */}
        {particles.map(particle => (
          <div
            key={particle.id}
            style={{
              position: 'absolute',
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              background: `radial-gradient(circle, ${particle.color} 0%, transparent 70%)`,
              borderRadius: '50%',
              opacity: particle.opacity,
              animation: `particleFloat ${20 / particle.speed}s infinite linear ${particle.delay}s`,
              filter: 'blur(1px)'
            }}
          />
        ))}

        {/* Gradient Orbs */}
        <div style={{
          position: 'absolute',
          top: '20%',
          right: '10%',
          width: '300px',
          height: '300px',
          background: `radial-gradient(circle, ${theme === 'light' ? 'rgba(74, 108, 247, 0.15)' : 'rgba(96, 165, 250, 0.15)'} 0%, transparent 70%)`,
          borderRadius: '50%',
          filter: 'blur(40px)',
          animation: 'orbFloat 20s ease-in-out infinite alternate'
        }} />

        <div style={{
          position: 'absolute',
          bottom: '10%',
          left: '15%',
          width: '200px',
          height: '200px',
          background: `radial-gradient(circle, ${theme === 'light' ? 'rgba(16, 185, 129, 0.1)' : 'rgba(52, 211, 153, 0.1)'} 0%, transparent 70%)`,
          borderRadius: '50%',
          filter: 'blur(30px)',
          animation: 'orbFloat 25s ease-in-out infinite alternate-reverse'
        }} />
      </div>

      {/* Custom CSS Animations */}
      <style>{`
        @keyframes particleFloat {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          25% { transform: translate(20px, -30px) rotate(90deg); }
          50% { transform: translate(0, -60px) rotate(180deg); }
          75% { transform: translate(-20px, -30px) rotate(270deg); }
        }
        
        @keyframes shapeFloat {
          0%, 100% { 
            transform: translateY(0) rotate(0deg) scale(1); 
          }
          25% { 
            transform: translateY(-20px) rotate(90deg) scale(1.1); 
          }
          50% { 
            transform: translateY(0) rotate(180deg) scale(1); 
          }
          75% { 
            transform: translateY(20px) rotate(270deg) scale(0.9); 
          }
        }
        
        @keyframes gridMove {
          0% { transform: translate(0, 0); }
          100% { transform: translate(-50px, -50px); }
        }
        
        @keyframes orbFloat {
          0% { transform: translate(0, 0) scale(1); opacity: 0.3; }
          50% { transform: translate(50px, -30px) scale(1.2); opacity: 0.5; }
          100% { transform: translate(-30px, 40px) scale(0.8); opacity: 0.3; }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        
        @keyframes shimmer {
          0% { background-position: -1000px 0; }
          100% { background-position: 1000px 0; }
        }
        
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(50px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }
        
        @keyframes glow {
          0%, 100% { box-shadow: 0 0 20px ${currentColors.primary}80; }
          50% { box-shadow: 0 0 40px ${currentColors.primary}; }
        }
        
        @keyframes wave {
          0% { transform: translateX(-100%) translateY(0); }
          50% { transform: translateX(100%) translateY(-10px); }
          100% { transform: translateX(-100%) translateY(0); }
        }
        
        @keyframes secureGlow {
          0%, 100% { 
            box-shadow: 
              0 0 20px ${currentColors.primary}40,
              0 0 40px ${currentColors.secondary}20,
              inset 0 1px 0 rgba(255, 255, 255, 0.1);
          }
          50% { 
            box-shadow: 
              0 0 30px ${currentColors.primary}60,
              0 0 60px ${currentColors.secondary}40,
              inset 0 1px 0 rgba(255, 255, 255, 0.2);
          }
        }
        
        @keyframes logoGlow {
          0%, 100% { 
            filter: drop-shadow(0 0 5px ${currentColors.primary});
          }
          50% { 
            filter: drop-shadow(0 0 15px ${currentColors.primary});
          }
        }
        
        .glass-effect {
          background: ${currentColors.glass};
          backdrop-filter: blur(20px) saturate(180%);
          -webkit-backdrop-filter: blur(20px) saturate(180%);
          border: 1px solid rgba(255, 255, 255, 0.125);
        }
        
        .gradient-text {
          background: ${currentColors.gradient};
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          background-size: 200% auto;
          animation: gradient 3s ease infinite;
        }
        
        .logo-text {
          background: ${currentColors.logoGradient};
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          font-weight: 800;
          animation: logoGlow 3s ease-in-out infinite;
        }
        
        .shimmer-effect {
          background: linear-gradient(90deg, 
            transparent 0%, 
            rgba(255, 255, 255, 0.2) 50%, 
            transparent 100%);
          background-size: 1000px 100%;
          animation: shimmer 2s infinite linear;
        }
        
        .secure-glow {
          animation: secureGlow 3s ease-in-out infinite;
        }
        
        .team-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: inherit;
          transition: transform 0.3s ease;
        }
        
        /* Mobile menu styles */
        @media (max-width: 767px) {
          .mobile-hidden {
            display: none;
          }
          
          .mobile-menu {
            display: flex;
            flex-direction: column;
            position: fixed;
            top: 80px;
            left: 0;
            right: 0;
            background: ${currentColors.glass};
            backdrop-filter: blur(20px);
            padding: 20px;
            z-index: 999;
            border-bottom: 2px solid ${currentColors.primary}20;
            transform: translateY(-100%);
            opacity: 0;
            visibility: hidden;
            transition: all 0.3s ease;
          }
          
          .mobile-menu.active {
            transform: translateY(0);
            opacity: 1;
            visibility: visible;
          }
        }
      `}</style>

      {/* Navigation */}
      <nav style={{
        position: 'fixed',
        top: 0,
        width: '100%',
        background: 'rgba(66, 57, 57, 0)',
        backdropFilter: 'blur(10px) saturate(150%)',
        WebkitBackdropFilter: 'blur(15px) saturate(180%)',
        padding: isMobile ? '12px 0' : '15px 0',
        zIndex: 1000,
        borderBottom: `1px solid rgba(${theme === 'light' ? '74, 108, 247' : '96, 165, 250'}, 0.15)`,
        boxShadow: `0 4px 12px rgba(0, 0, 0, 0.05)`
      }}>
        <div style={{ 
          maxWidth: '1400px', 
          margin: '0 auto', 
          padding: responsive.containerPadding 
        }}>
          <div style={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center' 
          }}>
            {/* Logo */}
            <div 
              style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: isMobile ? '8px' : '12px',
                transition: 'all 0.3s ease',
                cursor: 'pointer',
                flexShrink: 0
              }}
              onClick={() => scrollToSection('home')}
              onMouseEnter={(e) => {
                if (!isMobile) e.currentTarget.style.transform = 'scale(1.05)';
              }}
              onMouseLeave={(e) => {
                if (!isMobile) e.currentTarget.style.transform = 'scale(1)';
              }}
            >
              <div style={{
                width: isMobile ? '32px' : '40px',
                height: isMobile ? '32px' : '40px',
                background: currentColors.gradient,
                borderRadius: isMobile ? '6px' : '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: currentColors.accent,
                fontWeight: 'bold',
                fontSize: isMobile ? '14px' : '16px',
                boxShadow: `0 3px 10px ${currentColors.primary}30`,
                animation: 'secureGlow 3s ease-in-out infinite',
                overflow: 'hidden'
              }}>
                <img 
                  src={teamImages.logo} 
                  alt="Securefy Logo"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    borderRadius: 'inherit'
                  }}
                />
              </div>
              <div>
                <div className="logo-text" style={{ 
                  fontSize: isMobile ? '16px' : '20px', 
                  fontWeight: '800',
                  letterSpacing: '-0.5px',
                  lineHeight: '1.1'
                }}>
                  Securefy
                </div>
                <div style={{ 
                  fontSize: isMobile ? '9px' : '11px',
                  letterSpacing: '0.5px',
                  fontWeight: '600',
                  color: currentColors.textSecondary,
                  display: isMobile ? 'none' : 'block'
                }}>
                  SMART CAMPUS SECURITY
                </div>
              </div>
            </div>

            {/* Desktop Navigation */}
            {!isMobile && (
              <div style={{ 
                display: 'flex', 
                gap: isMobile ? '15px' : '20px', 
                alignItems: 'center'
              }}>
                {['Home', 'Features', 'Process', 'Team', 'Contact'].map(item => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    style={{
                      background: 'none',
                      border: 'none',
                      color: currentColors.text,
                      fontSize: '14px',
                      fontWeight: '600',
                      cursor: 'pointer',
                      padding: '6px 12px',
                      position: 'relative',
                      transition: 'all 0.3s ease',
                      whiteSpace: 'nowrap',
                      borderRadius: '6px'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.color = currentColors.primary;
                      e.target.style.background = 'rgba(255, 255, 255, 0.1)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.color = currentColors.text;
                      e.target.style.background = 'transparent';
                    }}
                  >
                    {item}
                  </button>
                ))}
                
                {/* Theme Toggle */}
                <button
                  onClick={() => {
                    setTheme(theme === 'light' ? 'dark' : 'light');
                  }}
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '8px',
                    background: 'rgba(255, 255, 255, 0.1)',
                    border: `1px solid ${currentColors.primary}30`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    fontSize: '16px',
                    color: currentColors.text,
                    transition: 'all 0.3s ease',
                    marginLeft: '10px'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)';
                    e.currentTarget.style.transform = 'rotate(180deg) scale(1.1)';
                    e.currentTarget.style.boxShadow = `0 0 15px ${currentColors.primary}30`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                    e.currentTarget.style.transform = 'rotate(0deg) scale(1)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  {theme === 'light' ? '🌙' : '☀️'}
                </button>
              </div>
            )}

            {/* Mobile Menu Button */}
            {isMobile && (
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <button
                  onClick={() => {
                    setTheme(theme === 'light' ? 'dark' : 'light');
                  }}
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '8px',
                    background: 'rgba(255, 255, 255, 0.1)',
                    border: `1px solid ${currentColors.primary}30`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    fontSize: '16px',
                    color: currentColors.text,
                    transition: 'all 0.3s ease'
                  }}
                >
                  {theme === 'light' ? '🌙' : '☀️'}
                </button>
                
                <button
                  className="mobile-menu-button"
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '8px',
                    background: currentColors.gradient,
                    border: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    fontSize: '18px',
                    color: currentColors.accent,
                    transition: 'all 0.3s ease'
                  }}>
                  {mobileMenuOpen ? '✕' : '☰'}
                </button>
              </div>
            )}
          </div>

          {/* Mobile Menu (Hidden by default) */}
          {isMobile && (
            <div className={`mobile-menu ${mobileMenuOpen ? 'active' : ''}`} style={{
              position: 'absolute',
              top: '60px',
              left: '20px',
              right: '20px',
              background: 'rgba(255, 255, 255, 0.08)',
              backdropFilter: 'blur(15px) saturate(180%)',
              WebkitBackdropFilter: 'blur(15px) saturate(180%)',
              padding: '15px',
              zIndex: 999,
              borderRadius: '12px',
              border: `1px solid ${currentColors.primary}20`,
              transform: mobileMenuOpen ? 'translateY(0)' : 'translateY(-10px)',
              opacity: mobileMenuOpen ? 1 : 0,
              visibility: mobileMenuOpen ? 'visible' : 'hidden',
              transition: 'all 0.3s ease',
              boxShadow: `0 8px 25px rgba(0, 0, 0, 0.1)`
            }}>
              {['Home', 'Features', 'Process', 'Team', 'Contact'].map(item => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: currentColors.text,
                    fontSize: '15px',
                    fontWeight: '600',
                    cursor: 'pointer',
                    padding: '10px 15px',
                    textAlign: 'left',
                    width: '100%',
                    transition: 'all 0.3s ease',
                    borderRadius: '6px',
                    marginBottom: '5px'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = currentColors.primary;
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = currentColors.text;
                    e.currentTarget.style.background = 'transparent';
                  }}
                >
                  {item}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" ref={heroRef} style={{ 
        padding: responsive.heroPadding,
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{ 
          maxWidth: '1400px', 
          margin: '0 auto', 
          padding: responsive.containerPadding,
          position: 'relative',
          zIndex: 2
        }}>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: responsive.heroGrid, 
            gap: responsive.gapLarge,
            alignItems: 'center'
          }}>
            {/* Left Content */}
            <div style={{ order: isMobile ? 2 : 1 }}>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '10px 20px',
                background: currentColors.glass,
                backdropFilter: 'blur(10px)',
                borderRadius: '50px',
                fontSize: isMobile ? '12px' : '14px',
                fontWeight: '600',
                marginBottom: '20px',
                border: `1px solid ${currentColors.primary}20`,
                animation: 'slideInUp 0.6s ease-out'
              }}>
                <div style={{
                  width: '6px',
                  height: '6px',
                  background: currentColors.secondary,
                  borderRadius: '50%',
                  animation: 'pulse 2s infinite'
                }} />
                ✅ Coming Soon...
              </div>
              
              <h1 style={{
                fontSize: responsive.h1Size,
                fontWeight: '800',
                lineHeight: '1.2',
                marginBottom: '20px',
                letterSpacing: isMobile ? '-0.5px' : '-1px',
                animation: 'slideInUp 0.8s ease-out'
              }}>
                <span style={{ color: currentColors.text }}>Your Campus,</span><br />
                <span className="gradient-text">Your Security,</span><br />
                <span style={{ color: currentColors.text }}>Our <span className="gradient-text">Promise</span></span>
              </h1>
              
              <p style={{
                fontSize: responsive.bodySize,
                marginBottom: '30px',
                lineHeight: '1.6',
                animation: 'slideInUp 1s ease-out'
              }}>
                Securefy redefines campus storage with library security, 
                advanced technology, and seamless convenience. Experience 
                peace of mind with every locker access.
              </p>
              
              {/* CTA Buttons */}
              <div style={{ 
                display: 'flex', 
                gap: responsive.gapSmall, 
                flexWrap: 'wrap',
                animation: 'slideInUp 1.2s ease-out',
                marginBottom: isMobile ? '30px' : '0'
              }}>
                <button
                  onClick={() => scrollToSection('process')}
                  style={{
                    padding: responsive.buttonPadding,
                    background: currentColors.gradient,
                    color: currentColors.accent,
                    border: 'none',
                    borderRadius: isMobile ? '8px' : '12px',
                    fontSize: isMobile ? '14px' : '16px',
                    fontWeight: '600',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    boxShadow: `0 5px 20px ${currentColors.primary}40`,
                    position: 'relative',
                    overflow: 'hidden',
                    flex: isMobile ? '1' : 'none',
                    minWidth: isMobile ? '140px' : 'auto'
                  }}
                  onMouseEnter={(e) => {
                    if (!isMobile) {
                      e.currentTarget.style.transform = 'translateY(-5px) scale(1.05)';
                      e.currentTarget.style.boxShadow = `0 10px 30px ${currentColors.primary}60`;
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isMobile) {
                      e.currentTarget.style.transform = 'translateY(0) scale(1)';
                      e.currentTarget.style.boxShadow = `0 5px 20px ${currentColors.primary}40`;
                    }
                  }}
                >
                  <span style={{ position: 'relative', zIndex: 2 }}>
                    Get Started Free →
                  </span>
                  <div className="shimmer-effect" style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    zIndex: 1
                  }} />
                </button>
                
                <button
                  onClick={() => scrollToSection('features')}
                  style={{
                    padding: responsive.buttonPadding,
                    background: 'transparent',
                    color: currentColors.primary,
                    border: `2px solid ${currentColors.primary}`,
                    borderRadius: isMobile ? '8px' : '12px',
                    fontSize: isMobile ? '14px' : '16px',
                    fontWeight: '600',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    position: 'relative',
                    overflow: 'hidden',
                    flex: isMobile ? '1' : 'none',
                    minWidth: isMobile ? '140px' : 'auto'
                  }}
                  onMouseEnter={(e) => {
                    if (!isMobile) {
                      e.currentTarget.style.background = currentColors.gradient;
                      e.currentTarget.style.color = currentColors.accent;
                      e.currentTarget.style.borderColor = 'transparent';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isMobile) {
                      e.currentTarget.style.background = 'transparent';
                      e.currentTarget.style.color = currentColors.primary;
                      e.currentTarget.style.borderColor = currentColors.primary;
                    }
                  }}
                >
                  See Features
                </button>
              </div>
            </div>            
            {/* Right Visual - Interactive Securefy Dashboard */}
            <div style={{
              position: 'relative',
              animation: 'float 6s ease-in-out infinite',
              order: isMobile ? 1 : 2,
              display: isMobile ? 'block' : 'block'
            }}>
              <div style={{
                background: currentColors.glass,
                borderRadius: isMobile ? '20px' : '30px',
                padding: isMobile ? '20px' : '30px',
                boxShadow: `0 20px 40px ${currentColors.primary}20`,
                border: `1px solid ${currentColors.primary}20`,
                transformStyle: 'preserve-3d',
                perspective: '1000px',
                marginBottom: isMobile ? '30px' : '0'
              }}>
                {/* Floating Security Badge */}
                {!isMobile && (
                  <div style={{
                    position: 'absolute',
                    top: '-20px',
                    right: '-20px',
                    width: '80px',
                    height: '80px',
                    background: currentColors.gradient,
                    borderRadius: '15px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: currentColors.accent,
                    fontSize: '30px',
                    transform: 'rotate(15deg)',
                    animation: 'float 4s ease-in-out infinite 0.5s',
                    boxShadow: `0 15px 30px ${currentColors.primary}30`
                  }}>
                    🛡️
                  </div>
                )}
                
                {/* Main Dashboard */}
                <div style={{
                  position: 'relative',
                  zIndex: 2,
                  background: currentColors.card,
                  borderRadius: isMobile ? '15px' : '20px',
                  padding: isMobile ? '20px' : '25px',
                  boxShadow: 'inset 0 2px 10px rgba(0, 0, 0, 0.05)'
                }}>
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: '20px',
                    paddingBottom: '15px',
                    borderBottom: `2px solid ${currentColors.primary}20`
                  }}>
                    <div>
                      <div style={{ 
                        fontSize: isMobile ? '8px' : '10px', 
                        color: currentColors.primary,
                        fontWeight: '800',
                        marginBottom: '2px',
                        letterSpacing: '1px'
                      }}>
                        SECUREFY DASHBOARD
                      </div>
                      <div style={{ 
                        fontSize: isMobile ? '18px' : '22px', 
                        fontWeight: '800',
                        background: currentColors,
                        WebkitBackgroundClip: 'text',
                        backgroundClip: 'text'
                      }}>
                        Security Center
                      </div>
                    </div>
                    <div style={{
                      width: isMobile ? '40px' : '50px',
                      height: isMobile ? '40px' : '50px',
                      background: currentColors.gradient,
                      borderRadius: isMobile ? '10px' : '12px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: currentColors.accent,
                      fontSize: isMobile ? '18px' : '22px',
                      animation: 'secureGlow 3s ease-in-out infinite'
                    }}>
                      🔒
                    </div>
                  </div>
                  
                  {/* Interactive Security Grid */}
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(6, 1fr)',
                    gap: isMobile ? '6px' : '10px',
                    marginBottom: '20px'
                  }}>
                    {Array.from({ length: 24 }).map((_, i) => (
                      <div 
                        key={i}
                        style={{
                          aspectRatio: '1',
                          background: i % 4 === activeStep ? currentColors.gradient : `${currentColors.primary}15`,
                          borderRadius: '6px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: i % 4 === activeStep ? currentColors.accent : currentColors.primary,
                          fontSize: isMobile ? '10px' : '12px',
                          fontWeight: '700',
                          cursor: 'pointer',
                          transition: 'all 0.3s ease',
                          transform: i % 4 === activeStep ? 'scale(1.1)' : 'scale(1)',
                          animation: i % 4 === activeStep ? 'pulse 2s infinite' : 'none',
                          border: i % 4 === activeStep ? `2px solid ${currentColors.secondary}` : 'none'
                        }}
                        onMouseEnter={(e) => {
                          if (!isMobile && i % 4 !== activeStep) {
                            e.currentTarget.style.transform = 'scale(1.1) rotate(5deg)';
                            e.currentTarget.style.background = `${currentColors.primary}40`;
                          }
                        }}
                        onMouseLeave={(e) => {
                          if (!isMobile && i % 4 !== activeStep) {
                            e.currentTarget.style.transform = 'scale(1) rotate(0deg)';
                            e.currentTarget.style.background = `${currentColors.primary}15`;
                          }
                        }}
                      >
                        {i < 9 ? '0' + (i + 1) : i + 1}
                      </div>
                    ))}
                  </div>
                  
                  {/* Security Status */}
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '15px',
                    padding: '15px',
                    background: `${currentColors.primary}08`,
                    borderRadius: '10px',
                    border: `2px dashed ${currentColors.secondary}30`,
                    position: 'relative',
                    overflow: 'hidden'
                  }}>
                    <div style={{
                      width: isMobile ? '50px' : '60px',
                      height: isMobile ? '50px' : '60px',
                      background: currentColors.accent,
                      borderRadius: '8px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: currentColors.primary,
                      fontSize: isMobile ? '20px' : '24px',
                      fontWeight: 'bold',
                      border: `2px solid ${currentColors.secondary}`,
                      animation: 'float 3s ease-in-out infinite',
                      flexShrink: 0
                    }}>
                      ✅
                    </div>
                    <div style={{ flex: 1 }}>
                      <div style={{
                        fontSize: isMobile ? '9px' : '11px',
                        color: currentColors.secondary,
                        fontWeight: '800',
                        marginBottom: '4px',
                        letterSpacing: '0.5px'
                      }}>
                        SYSTEM STATUS: ALL SECURE
                      </div>
                      <div style={{
                        fontSize: isMobile ? '11px' : '13px',
                        color: currentColors.textSecondary,
                        lineHeight: '1.4'
                      }}>
                        All lockers monitored • 24/7 security • 256-bit encryption enabled
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Wave Animation */}
        {!isMobile && (
          <div style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            width: '200%',
            height: '100px',
            background: `linear-gradient(90deg, ${currentColors.primary}20 0%, ${currentColors.secondary}40 50%, ${currentColors.primary}20 100%)`,
            animation: 'wave 20s linear infinite',
            opacity: 0.3,
            zIndex: 1
          }} />
        )}
      </section>

      {/* Features Section */}
      <section id="features" ref={featuresRef} style={{ 
        padding: responsive.sectionPadding,
        position: 'relative'
      }}>
        <div style={{ 
          maxWidth: '1400px', 
          margin: '0 auto', 
          padding: responsive.containerPadding 
        }}>
          <div style={{ 
            textAlign: 'center', 
            marginBottom: responsive.gapLarge,
            animation: 'slideInUp 0.8s ease-out'
          }}>
            <div style={{
              display: 'inline-block',
              padding: '6px 15px',
              background: currentColors.glass,
              borderRadius: '50px',
              marginBottom: '15px',
              border: `1px solid ${currentColors.primary}20`
            }}>
              <span style={{
                color: currentColors.primary,
                fontWeight: '600',
                fontSize: isMobile ? '11px' : '13px',
                letterSpacing: '1px'
              }}>
                CUTTING-EDGE FEATURES
              </span>
            </div>
            <h2 style={{
              fontSize: responsive.h2Size,
              fontWeight: '800',
              marginBottom: '15px',
              lineHeight: '1.2'
            }}>
              <span style={{ color: currentColors.text }}>Next-Generation</span>{' '}
              <span className="gradient-text">Security Technology</span>
            </h2>
            <p style={{
              fontSize: responsive.bodySize,
              color: currentColors.textSecondary,
              maxWidth: '700px',
              margin: '0 auto',
              lineHeight: '1.6'
            }}>
              Combining military-grade security with advanced technology for unparalleled protection
            </p>
          </div>
          
          {/* Feature Cards */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: responsive.featuresGrid,
            gap: responsive.gapMedium
          }}>
            {libraryFeatures.map((feature, index) => (
              <div 
                key={index}
                style={{
                  background: currentColors.glass,
                  padding: isMobile ? '25px' : '30px',
                  borderRadius: isMobile ? '20px' : '25px',
                  border: `1px solid ${feature.gradient.match(/rgba?\(([^)]+)\)/)?.[1] || currentColors.primary}20`,
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  animation: `slideInUp 0.8s ease-out ${index * 0.1}s both`,
                  position: 'relative',
                  overflow: 'hidden'
                }}
                onMouseEnter={(e) => {
                  if (!isMobile) {
                    e.currentTarget.style.transform = 'translateY(-10px) scale(1.02)';
                    e.currentTarget.style.boxShadow = `0 20px 40px ${currentColors.primary}20`;
                    e.currentTarget.style.borderColor = feature.gradient.match(/rgba?\(([^)]+)\)/)?.[1] || currentColors.primary;
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isMobile) {
                    e.currentTarget.style.transform = 'translateY(0) scale(1)';
                    e.currentTarget.style.boxShadow = 'none';
                    e.currentTarget.style.borderColor = feature.gradient.match(/rgba?\(([^)]+)\)/)?.[1] || currentColors.primary + '20';
                  }
                }}
              >
                {/* Gradient Overlay */}
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  background: feature.gradient,
                  opacity: 0,
                  transition: 'opacity 0.4s ease',
                  zIndex: 0
                }} />
                
                <div style={{ position: 'relative', zIndex: 1 }}>
                  <div style={{
                    width: isMobile ? '50px' : '60px',
                    height: isMobile ? '50px' : '60px',
                    background: currentColors.glass,
                    borderRadius: isMobile ? '15px' : '18px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: isMobile ? '24px' : '28px',
                    marginBottom: '20px',
                    border: `2px solid ${feature.gradient.match(/rgba?\(([^)]+)\)/)?.[1] || currentColors.primary}`,
                    animation: 'float 3s ease-in-out infinite'
                  }}>
                    {feature.icon}
                  </div>
                  <h3 style={{
                    fontSize: isMobile ? '18px' : '20px',
                    fontWeight: '700',
                    marginBottom: '15px',
                    color: currentColors.text,
                    lineHeight: '1.3'
                  }}>
                    {feature.title}
                  </h3>
                  <p style={{
                    color: currentColors.textSecondary,
                    lineHeight: '1.6',
                    fontSize: isMobile ? '13px' : '15px',
                    marginBottom: '20px'
                  }}>
                    {feature.description}
                  </p>
                  <div style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    color: currentColors.primary,
                    fontWeight: '600',
                    fontSize: isMobile ? '12px' : '14px',
                    padding: '8px 16px',
                    background: `${currentColors.primary}10`,
                    borderRadius: '50px',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    if (!isMobile) {
                      e.currentTarget.style.background = `${currentColors.primary}20`;
                      e.currentTarget.style.transform = 'translateX(5px)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isMobile) {
                      e.currentTarget.style.background = `${currentColors.primary}10`;
                      e.currentTarget.style.transform = 'translateX(0)';
                    }
                  }}>
                    Learn More →
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="process" ref={howItWorksRef} style={{ 
        padding: responsive.sectionPadding,
        background: currentColors.glass,
        position: 'relative'
      }}>
        <div style={{ 
          maxWidth: '1400px', 
          margin: '0 auto', 
          padding: responsive.containerPadding 
        }}>
          <div style={{ 
            textAlign: 'center', 
            marginBottom: responsive.gapLarge,
            animation: 'slideInUp 0.8s ease-out'
          }}>
            <div style={{
              display: 'inline-block',
              padding: '6px 15px',
              background: currentColors.gradient,
              borderRadius: '50px',
              marginBottom: '15px'
            }}>
              <span style={{
                color: currentColors.accent,
                fontWeight: '600',
                fontSize: isMobile ? '11px' : '13px',
                letterSpacing: '1px'
              }}>
                SIMPLE 6-STEP PROCESS
              </span>
            </div>
            <h2 style={{
              fontSize: responsive.h2Size,
              fontWeight: '800',
              marginBottom: '15px',
              lineHeight: '1.2'
            }}>
              <span className="gradient-text">Seamless Security</span>{' '}
              <span style={{ color: currentColors.text }}>in Minutes</span>
            </h2>
            <p style={{
              fontSize: responsive.bodySize,
              color: currentColors.textSecondary,
              maxWidth: '700px',
              margin: '0 auto',
              lineHeight: '1.6'
            }}>
              Experience security that's powerful yet incredibly simple to use
            </p>
          </div>

          {/* Interactive Process Flow */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: responsive.processGrid,
            gap: responsive.gapMedium,
            marginBottom: responsive.gapLarge
          }}>
            {howItWorks.map((step, index) => (
              <div 
                key={index}
                style={{
                  background: currentColors.card,
                  padding: isMobile ? '25px 20px' : '30px 25px',
                  borderRadius: isMobile ? '20px' : '25px',
                  textAlign: 'center',
                  border: `3px solid ${index === activeStep ? currentColors.primary : 'transparent'}`,
                  transition: 'all 0.4s ease',
                  transform: index === activeStep ? 'scale(1.05)' : 'scale(1)',
                  animation: `slideInUp 0.8s ease-out ${index * 0.1}s both`,
                  boxShadow: index === activeStep ? `0 15px 30px ${currentColors.primary}20` : '0 5px 15px rgba(0, 0, 0, 0.1)',
                  cursor: 'pointer'
                }}
                onClick={() => {
                  setActiveStep(index);
                }}
                onMouseEnter={(e) => {
                  if (!isMobile) {
                    e.currentTarget.style.transform = 'scale(1.05)';
                    e.currentTarget.style.boxShadow = `0 15px 30px ${currentColors.primary}20`;
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isMobile && index !== activeStep) {
                    e.currentTarget.style.transform = 'scale(1)';
                    e.currentTarget.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
                  }
                }}
              >
                {/* Step Number */}
                <div style={{
                  width: isMobile ? '40px' : '50px',
                  height: isMobile ? '40px' : '50px',
                  background: index === activeStep ? currentColors.gradient : currentColors.glass,
                  color: index === activeStep ? currentColors.accent : currentColors.primary,
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: isMobile ? '18px' : '20px',
                  fontWeight: 'bold',
                  margin: '0 auto 20px',
                  boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)',
                  animation: index === activeStep ? 'secureGlow 2s infinite' : 'none'
                }}>
                  {step.step}
                </div>
                
                {/* Step Icon */}
                <div style={{
                  fontSize: isMobile ? '36px' : '42px',
                  marginBottom: '15px',
                  animation: 'float 4s ease-in-out infinite',
                  animationDelay: `${index * 0.5}s`
                }}>
                  {step.icon}
                </div>
                
                {/* Step Title */}
                <h3 style={{
                  fontSize: isMobile ? '16px' : '18px',
                  fontWeight: '700',
                  marginBottom: '10px',
                  color: currentColors.text,
                  lineHeight: '1.3'
                }}>
                  {step.title}
                </h3>
                
                {/* Step Description */}
                <p style={{
                  color: currentColors.textSecondary,
                  lineHeight: '1.5',
                  fontSize: isMobile ? '12px' : '14px',
                  marginBottom: '15px'
                }}>
                  {step.description}
                </p>
                
                {/* Features */}
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '6px'
                }}>
                  {step.features.map((feature, i) => (
                    <div 
                      key={i}
                      style={{
                        padding: '6px 12px',
                        background: `${currentColors.primary}08`,
                        borderRadius: '50px',
                        fontSize: isMobile ? '11px' : '12px',
                        color: currentColors.primary,
                        fontWeight: '500',
                        transition: 'all 0.3s ease'
                      }}
                      onMouseEnter={(e) => {
                        if (!isMobile) {
                          e.currentTarget.style.background = `${currentColors.primary}15`;
                          e.currentTarget.style.transform = 'translateX(3px)';
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (!isMobile) {
                          e.currentTarget.style.background = `${currentColors.primary}08`;
                          e.currentTarget.style.transform = 'translateX(0)';
                        }
                      }}
                    >
                      ✓ {feature}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Process Visualization */}
          <div style={{
            background: currentColors.card,
            borderRadius: isMobile ? '20px' : '25px',
            padding: isMobile ? '30px' : '40px',
            textAlign: 'center',
            boxShadow: `0 15px 30px ${currentColors.primary}15`,
            animation: 'slideInUp 1s ease-out'
          }}>
            <div style={{
              display: 'inline-flex',
              flexDirection: isMobile ? 'column' : 'row',
              alignItems: 'center',
              gap: '15px',
              padding: isMobile ? '20px' : '25px',
              background: currentColors.glass,
              borderRadius: '15px',
              marginBottom: '20px',
              border: `2px solid ${currentColors.primary}20`,
              width: isMobile ? '100%' : 'auto'
            }}>
              <div style={{
                fontSize: '28px',
                animation: 'pulse 2s infinite'
              }}>
                ⚡
              </div>
              <div style={{ textAlign: isMobile ? 'center' : 'left' }}>
                <div style={{
                  fontSize: isMobile ? '16px' : '18px',
                  fontWeight: '700',
                  color: currentColors.primary,
                  marginBottom: '3px'
                }}>
                  Average Access Time: 8.5 Seconds
                </div>
                <div style={{
                  fontSize: isMobile ? '12px' : '13px',
                  color: currentColors.textSecondary
                }}>
                  75% faster than traditional locker systems
                </div>
              </div>
            </div>
            
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              marginTop: '20px'
            }}>
              {howItWorks.map((_, index) => (
                <div 
                  key={index}
                  style={{
                    width: index === activeStep ? (isMobile ? '30px' : '40px') : (isMobile ? '8px' : '12px'),
                    height: isMobile ? '8px' : '12px',
                    background: index === activeStep ? currentColors.primary : currentColors.textSecondary,
                    borderRadius: '50px',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    opacity: index === activeStep ? 1 : 0.5
                  }}
                  onClick={() => setActiveStep(index)}
                  onMouseEnter={(e) => {
                    if (!isMobile) {
                      e.currentTarget.style.width = '20px';
                      e.currentTarget.style.background = currentColors.primary;
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isMobile && index !== activeStep) {
                      e.currentTarget.style.width = '12px';
                      e.currentTarget.style.background = currentColors.textSecondary;
                    }
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" ref={teamRef} style={{ 
        padding: responsive.sectionPadding,
        position: 'relative'
      }}>
        <div style={{ 
          maxWidth: '1400px', 
          margin: '0 auto', 
          padding: responsive.containerPadding 
        }}>
          <div style={{ 
            textAlign: 'center', 
            marginBottom: responsive.gapLarge,
            animation: 'slideInUp 0.8s ease-out'
          }}>
            <h2 style={{
              fontSize: responsive.h2Size,
              fontWeight: '800',
              marginBottom: '15px',
              lineHeight: '1.2'
            }}>
              <span style={{ color: currentColors.text }}>Our</span>{' '}
              <span className="gradient-text">Security Experts</span>
            </h2>
            <p style={{
              fontSize: responsive.bodySize,
              color: currentColors.textSecondary,
              maxWidth: '700px',
              margin: '0 auto',
              lineHeight: '1.6'
            }}>
              A team of software engineers specializing in secure campus solutions
              </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: responsive.teamGrid,
            gap: responsive.gapMedium,
            marginBottom: responsive.gapLarge
          }}>
            {projectTeam.map((member, index) => (
              <div 
                key={index}
                className="glass-effect"
                style={{
                  padding: isMobile ? '25px' : '30px',
                  borderRadius: isMobile ? '20px' : '25px',
                  textAlign: 'center',
                  transition: 'all 0.4s ease',
                  animation: `slideInUp 0.8s ease-out ${index * 0.1}s both`,
                  border: `1px solid ${currentColors.primary}20`
                }}
                onMouseEnter={(e) => {
                  if (!isMobile) {
                    e.currentTarget.style.transform = 'translateY(-10px)';
                    e.currentTarget.style.boxShadow = `0 20px 40px ${currentColors.primary}15`;
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isMobile) {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = 'none';
                  }
                }}
              >
                {/* Team Member Image */}
                <div style={{
                  width: isMobile ? '120px' : '150px',
                  height: isMobile ? '120px' : '150px',
                  background: currentColors.gradient,
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 25px',
                  border: `4px solid ${currentColors.card}`,
                  boxShadow: `0 10px 30px ${currentColors.primary}20`,
                  overflow: 'hidden',
                  position: 'relative',
                  animation: 'float 4s ease-in-out infinite'
                }}>
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="team-image"
                    style={{
                      transition: 'transform 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                      if (!isMobile) {
                        e.target.style.transform = 'scale(1.1)';
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!isMobile) {
                        e.target.style.transform = 'scale(1)';
                      }
                    }}
                  />
                  {/* Gradient Overlay */}
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    background: 'linear-gradient(to bottom, transparent 60%, rgba(0,0,0,0.3))',
                    borderRadius: '50%'
                  }} />
                </div>
                
                <h3 style={{
                  fontSize: isMobile ? '20px' : '24px',
                  fontWeight: '800',
                  marginBottom: '8px',
                  color: currentColors.text,
                  lineHeight: '1.3'
                }}>
                  {member.name}
                </h3>
                
                <div style={{
                  color: currentColors.primary,
                  fontWeight: '700',
                  marginBottom: '10px',
                  fontSize: isMobile ? '14px' : '16px',
                  padding: '8px 18px',
                  background: `${currentColors.primary}10`,
                  borderRadius: '50px',
                  display: 'inline-block',
                  lineHeight: '1.2'
                }}>
                  {member.role}
                </div>
                
                <div style={{
                  color: currentColors.textSecondary,
                  fontSize: isMobile ? '13px' : '14px',
                  marginBottom: '15px',
                  fontWeight: '500',
                  lineHeight: '1.4'
                }}>
                  {member.department}
                </div>
                
                <p style={{
                  color: currentColors.textSecondary,
                  fontSize: isMobile ? '13px' : '14px',
                  lineHeight: '1.6',
                  marginBottom: '25px',
                  minHeight: '60px'
                }}>
                  {member.bio}
                </p>
                
                {/* Social Links */}
                <div style={{
                  display: 'flex',
                  justifyContent: 'center',
                  gap: '12px',
                  marginTop: '20px'
                }}>
                  <a
                    href={member.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      width: '40px',
                      height: '40px',
                      background: currentColors.glass,
                      borderRadius: '10px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: currentColors.text,
                      textDecoration: 'none',
                      transition: 'all 0.3s ease',
                      border: `1px solid ${currentColors.primary}20`
                    }}
                    onMouseEnter={(e) => {
                      if (!isMobile) {
                        e.currentTarget.style.background = currentColors.primary;
                        e.currentTarget.style.color = currentColors.accent;
                        e.currentTarget.style.transform = 'translateY(-5px)';
                        e.currentTarget.style.boxShadow = `0 10px 20px ${currentColors.primary}30`;
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!isMobile) {
                        e.currentTarget.style.background = currentColors.glass;
                        e.currentTarget.style.color = currentColors.text;
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.boxShadow = 'none';
                      }
                    }}
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" 
                            fill="currentColor"/>
                    </svg>
                  </a>
                  
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      width: '40px',
                      height: '40px',
                      background: currentColors.glass,
                      borderRadius: '10px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: currentColors.text,
                      textDecoration: 'none',
                      transition: 'all 0.3s ease',
                      border: `1px solid ${currentColors.primary}20`
                    }}
                    onMouseEnter={(e) => {
                      if (!isMobile) {
                        e.currentTarget.style.background = '#0077B5';
                        e.currentTarget.style.color = currentColors.accent;
                        e.currentTarget.style.transform = 'translateY(-5px)';
                        e.currentTarget.style.boxShadow = `0 10px 20px rgba(0, 119, 181, 0.3)`;
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!isMobile) {
                        e.currentTarget.style.background = currentColors.glass;
                        e.currentTarget.style.color = currentColors.text;
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.boxShadow = 'none';
                      }
                    }}
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" 
                            fill="currentColor"/>
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div style={{
            textAlign: 'center',
            animation: 'slideInUp 1s ease-out'
          }}>
            <div style={{
              display: 'inline-flex',
              flexDirection: isMobile ? 'column' : 'row',
              alignItems: 'center',
              gap: isMobile ? '15px' : '20px',
              padding: isMobile ? '25px' : '30px',
              background: currentColors.glass,
              borderRadius: isMobile ? '20px' : '25px',
              border: `2px solid ${currentColors.primary}20`,
              width: isMobile ? '100%' : 'auto',
              maxWidth: '900px'
            }}>
              <div style={{
                fontSize: isMobile ? '32px' : '36px',
                animation: 'float 3s ease-in-out infinite'
              }}>
                🤝
              </div>
              <div style={{ 
                textAlign: isMobile ? 'center' : 'left',
                flex: 1 
              }}>
                <h3 style={{
                  fontSize: isMobile ? '20px' : '22px',
                  fontWeight: '700',
                  marginBottom: '8px',
                  color: currentColors.text,
                  lineHeight: '1.3'
                }}>
                  Join Our Security Community
                </h3>
                <p style={{
                  color: currentColors.textSecondary,
                  maxWidth: '600px',
                  margin: '0 auto',
                  lineHeight: '1.5',
                  fontSize: isMobile ? '14px' : '16px'
                }}>
                  Help us build the most secure campus experience. Your feedback shapes our security.
                </p>
              </div>
              <button
                onClick={() => scrollToSection('contact')}
                style={{
                  padding: isMobile ? '12px 24px' : '14px 28px',
                  background: currentColors.gradient,
                  color: currentColors.accent,
                  border: 'none',
                  borderRadius: isMobile ? '8px' : '10px',
                  fontSize: isMobile ? '14px' : '15px',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  whiteSpace: 'nowrap'
                }}
                onMouseEnter={(e) => {
                  if (!isMobile) {
                    e.currentTarget.style.transform = 'scale(1.05)';
                    e.currentTarget.style.boxShadow = `0 10px 25px ${currentColors.primary}30`;
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isMobile) {
                    e.currentTarget.style.transform = 'scale(1)';
                    e.currentTarget.style.boxShadow = 'none';
                  }
                }}
              >
                Join Community
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section id="contact" ref={contactRef} style={{ 
        padding: responsive.sectionPadding,
        textAlign: 'center',
        position: 'relative'
      }}>
        <div style={{ 
          maxWidth: '800px', 
          margin: '0 auto', 
          padding: responsive.containerPadding 
        }}>
          <div style={{
            background: currentColors.glass,
            padding: isMobile ? '30px' : '40px',
            borderRadius: isMobile ? '25px' : '30px',
            boxShadow: `0 20px 40px ${currentColors.primary}20`,
            animation: 'slideInUp 1s ease-out'
          }}>
            <div style={{
              width: isMobile ? '60px' : '70px',
              height: isMobile ? '60px' : '70px',
              background: currentColors.gradient,
              borderRadius: isMobile ? '15px' : '18px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: currentColors.accent,
              fontSize: isMobile ? '30px' : '36px',
              margin: '0 auto 20px',
              animation: 'secureGlow 3s ease-in-out infinite'
            }}>
              🔒
            </div>
            
            <h2 style={{
              fontSize: responsive.h2Size,
              fontWeight: '800',
              marginBottom: '15px',
              lineHeight: '1.2'
            }}>
              <span className="gradient-text">Ready to Experience</span><br />
              <span style={{ color: currentColors.text }}>True Security?</span>
            </h2>
            
            <p style={{
              fontSize: responsive.bodySize,
              color: currentColors.textSecondary,
              marginBottom: '30px',
              lineHeight: '1.5'
            }}>
              Join thousands of students who trust Securefy for their campus storage needs
            </p>
            
            <div style={{
              display: 'flex',
              flexDirection: isMobile ? 'column' : 'row',
              gap: isMobile ? '15px' : '20px',
              justifyContent: 'center',
              alignItems: 'center'
            }}>
              <button
                onClick={() => scrollToSection('home')}
                style={{
                  padding: responsive.ctaButtonPadding,
                  background: currentColors.gradient,
                  color: currentColors.accent,
                  border: 'none',
                  borderRadius: isMobile ? '10px' : '12px',
                  fontSize: isMobile ? '16px' : '18px',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  boxShadow: `0 10px 25px ${currentColors.primary}40`,
                  width: isMobile ? '100%' : 'auto',
                  minWidth: isMobile ? 'auto' : '200px'
                }}
                onMouseEnter={(e) => {
                  if (!isMobile) {
                    e.currentTarget.style.transform = 'scale(1.05)';
                    e.currentTarget.style.boxShadow = `0 15px 35px ${currentColors.primary}60`;
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isMobile) {
                    e.currentTarget.style.transform = 'scale(1)';
                    e.currentTarget.style.boxShadow = `0 10px 25px ${currentColors.primary}40`;
                  }
                }}
              >
                Get Started Free
              </button>
              
              <button
                onClick={() => scrollToSection('process')}
                style={{
                  padding: responsive.ctaButtonPadding,
                  background: 'transparent',
                  color: currentColors.primary,
                  border: `2px solid ${currentColors.primary}`,
                  borderRadius: isMobile ? '10px' : '12px',
                  fontSize: isMobile ? '16px' : '18px',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  width: isMobile ? '100%' : 'auto',
                  minWidth: isMobile ? 'auto' : '200px'
                }}
                onMouseEnter={(e) => {
                  if (!isMobile) {
                    e.currentTarget.style.background = currentColors.primary;
                    e.currentTarget.style.color = currentColors.accent;
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isMobile) {
                    e.currentTarget.style.background = 'transparent';
                    e.currentTarget.style.color = currentColors.primary;
                  }
                }}
              >
                Schedule Demo
              </button>
            </div>
            
            <div style={{
              marginTop: '30px',
              color: currentColors.textSecondary,
              fontSize: isMobile ? '12px' : '14px',
              lineHeight: '1.5'
            }}>
              🎓 <strong>Free Campus Service</strong> • No credit card required • Enterprise-grade security
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        background: theme === 'light' ? '#0F172A' : '#0A0F1E',
        color: '#F1F5F9',
        padding: isMobile ? '50px 0 20px' : '70px 0 30px',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Footer Background Elements */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'radial-gradient(circle at 20% 80%, rgba(74, 108, 247, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(16, 185, 129, 0.08) 0%, transparent 50%)',
          zIndex: 0
        }} />

        <div style={{ 
          maxWidth: '1400px', 
          margin: '0 auto', 
          padding: responsive.containerPadding,
          position: 'relative',
          zIndex: 1
        }}>
          {/* Main Footer Content */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : isTablet ? '1fr 1fr' : '2fr repeat(3, 1fr)',
            gap: responsive.gapMedium,
            marginBottom: responsive.gapLarge
          }}>
            {/* Brand Section */}
            <div>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: isMobile ? '12px' : '15px',
                marginBottom: '20px'
              }}>
                <div style={{
                  width: isMobile ? '45px' : '55px',
                  height: isMobile ? '45px' : '55px',
                  background: currentColors.gradient,
                  borderRadius: isMobile ? '10px' : '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: currentColors.accent,
                  fontWeight: 'bold',
                  fontSize: isMobile ? '18px' : '22px',
                  boxShadow: `0 5px 15px ${currentColors.primary}40`,
                  animation: 'secureGlow 3s ease-in-out infinite',
                  overflow: 'hidden'
                }}>
                  <img 
                    src={teamImages.logo} 
                    alt="Securefy Logo"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      borderRadius: 'inherit'
                    }}
                  />
                </div>
                <div>
                  <div className="logo-text" style={{ 
                    fontSize: isMobile ? '22px' : '26px', 
                    fontWeight: '800',
                    letterSpacing: '-0.5px',
                    lineHeight: '1.1'
                  }}>
                    Securefy
                  </div>
                  <div style={{ 
                    fontSize: isMobile ? '11px' : '12px', 
                    color: '#94A3B8',
                    letterSpacing: '1px',
                    fontWeight: '600',
                    marginTop: '2px'
                  }}>
                    SMART CAMPUS SECURITY
                  </div>
                </div>
              </div>
              
              <p style={{
                color: '#94A3B8',
                lineHeight: '1.6',
                fontSize: isMobile ? '13px' : '14px',
                marginBottom: '25px',
                maxWidth: '400px'
              }}>
                Empowering campuses with military-grade security solutions. 
                A free service dedicated to student safety and convenience.
              </p>
              
            </div>
            {/* Team - Updated with scroll to team section */}
            <div>
              <h4 style={{
                fontSize: isMobile ? '16px' : '17px',
                fontWeight: '700',
                marginBottom: '20px',
                color: '#F1F5F9',
                letterSpacing: '0.5px'
              }}>
                Team Members
              </h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {['Branavaram', 'Dhanush', 'Riyas', 'Aqeel', 'Shehan'].map((item, i) => (
                  <button 
                    key={i}
                    onClick={() => scrollToSection('team')}
                    style={{
                      background: 'none',
                      border: 'none',
                      color: '#94A3B8',
                      textDecoration: 'none',
                      fontSize: isMobile ? '13px' : '14px',
                      transition: 'all 0.3s ease',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      cursor: 'pointer',
                      textAlign: 'left',
                      padding: '0'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = currentColors.primary;
                      e.currentTarget.style.transform = 'translateX(5px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = '#94A3B8';
                      e.currentTarget.style.transform = 'translateX(0)';
                    }}
                  >
                    <span style={{ 
                      fontSize: '10px', 
                      color: currentColors.primary,
                      transition: 'all 0.3s ease'
                    }}>
                      →
                    </span>
                    {item}
                  </button>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 style={{
                fontSize: isMobile ? '16px' : '17px',
                fontWeight: '700',
                marginBottom: '20px',
                color: '#F1F5F9',
                letterSpacing: '0.5px'
              }}>
                Quick Links
              </h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {['Home', 'Features', 'Process', 'Team', 'Contact'].map((item, i) => (
                  <button 
                    key={i}
                    onClick={() => scrollToSection(item.toLowerCase().replace(' ', ''))}
                    style={{
                      background: 'none',
                      border: 'none',
                      color: '#94A3B8',
                      textDecoration: 'none',
                      fontSize: isMobile ? '13px' : '14px',
                      transition: 'all 0.3s ease',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      cursor: 'pointer',
                      textAlign: 'left',
                      padding: '0'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = currentColors.primary;
                      e.currentTarget.style.transform = 'translateX(5px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = '#94A3B8';
                      e.currentTarget.style.transform = 'translateX(0)';
                    }}
                  >
                    <span style={{ 
                      fontSize: '10px', 
                      color: currentColors.primary,
                      transition: 'all 0.3s ease'
                    }}>
                      →
                    </span>
                    {item}
                  </button>
                ))}
              </div>
            </div>
            
            {/* Services */}
            <div>
              <h4 style={{
                fontSize: isMobile ? '16px' : '17px',
                fontWeight: '700',
                marginBottom: '20px',
                color: '#F1F5F9',
                letterSpacing: '0.5px'
              }}>
                Our Services
              </h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {['Campus Lockers', 'Library Storage', 'Event Storage', 'Sports Equipment', '24/7 Monitoring', 'Emergency Access'].map((service, i) => (
                  <button 
                    key={i}
                    onClick={() => scrollToSection('features')}
                    style={{
                      background: 'none',
                      border: 'none',
                      color: '#94A3B8',
                      textDecoration: 'none',
                      fontSize: isMobile ? '13px' : '14px',
                      transition: 'all 0.3s ease',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      cursor: 'pointer',
                      textAlign: 'left',
                      padding: '0'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = currentColors.secondary;
                      e.currentTarget.style.transform = 'translateX(5px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = '#94A3B8';
                      e.currentTarget.style.transform = 'translateX(0)';
                    }}
                  >
                    <span style={{ 
                      fontSize: '12px', 
                      color: currentColors.secondary
                    }}>
                      ✓
                    </span>
                    {service}
                  </button>
                ))}
              </div>
            </div>
          </div>
          {/* Divider */}
          <div style={{
            height: '1px',
            background: 'linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.1) 50%, transparent 100%)',
            margin: '30px 0'
          }} />
          
          {/* Bottom Bar */}
          <div style={{
            display: 'flex',
            flexDirection: isMobile ? 'column' : 'row',
            justifyContent: 'space-between',
            alignItems: isMobile ? 'flex-start' : 'center',
            gap: isMobile ? '20px' : '0'
          }}>
            {/* Copyright */}
            <div>
              <div style={{
                fontSize: isMobile ? '12px' : '13px',
                color: '#94A3B8',
                marginBottom: '8px'
              }}>
                © 2024 Securefy Smart Locker System. All rights reserved.
              </div>
              <div style={{
                fontSize: isMobile ? '11px' : '12px',
                color: '#64748B',
                display: 'flex',
                flexWrap: 'wrap',
                gap: '15px'
              }}>
                <button 
                  onClick={() => scrollToSection('contact')}
                  style={{ 
                    background: 'none',
                    border: 'none',
                    color: '#64748B', 
                    textDecoration: 'none', 
                    transition: 'color 0.3s ease',
                    cursor: 'pointer',
                    fontSize: 'inherit',
                    padding: '0'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.color = currentColors.primary}
                  onMouseLeave={(e) => e.currentTarget.style.color = '#64748B'}>
                  Privacy Policy
                </button>
                <button 
                  onClick={() => scrollToSection('contact')}
                  style={{ 
                    background: 'none',
                    border: 'none',
                    color: '#64748B', 
                    textDecoration: 'none', 
                    transition: 'color 0.3s ease',
                    cursor: 'pointer',
                    fontSize: 'inherit',
                    padding: '0'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.color = currentColors.primary}
                  onMouseLeave={(e) => e.currentTarget.style.color = '#64748B'}>
                  Terms of Service
                </button>
                <button 
                  onClick={() => scrollToSection('contact')}
                  style={{ 
                    background: 'none',
                    border: 'none',
                    color: '#64748B', 
                    textDecoration: 'none', 
                    transition: 'color 0.3s ease',
                    cursor: 'pointer',
                    fontSize: 'inherit',
                    padding: '0'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.color = currentColors.primary}
                  onMouseLeave={(e) => e.currentTarget.style.color = '#64748B'}>
                  Cookie Policy
                </button>
                <button 
                  onClick={() => scrollToSection('contact')}
                  style={{ 
                    background: 'none',
                    border: 'none',
                    color: '#64748B', 
                    textDecoration: 'none', 
                    transition: 'color 0.3s ease',
                    cursor: 'pointer',
                    fontSize: 'inherit',
                    padding: '0'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.color = currentColors.primary}
                  onMouseLeave={(e) => e.currentTarget.style.color = '#64748B'}>
                  Security Compliance
                </button>
              </div>
            </div>
          </div>
          
          {/* Back to Top Button */}
          <button
            onClick={() => scrollToSection('home')}
            style={{
              position: 'absolute',
              right: isMobile ? '20px' : (isTablet ? '30px' : '40px'),
              bottom: '30px',
              width: isMobile ? '40px' : '45px',
              height: isMobile ? '40px' : '45px',
              background: currentColors.gradient,
              border: 'none',
              borderRadius: isMobile ? '10px' : '12px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: currentColors.accent,
              fontSize: isMobile ? '18px' : '20px',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              boxShadow: `0 5px 15px ${currentColors.primary}30`,
              zIndex: 2
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-5px)';
              e.currentTarget.style.boxShadow = `0 10px 25px ${currentColors.primary}50`;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = `0 5px 15px ${currentColors.primary}30`;
            }}
            aria-label="Back to top"
          >
            ↑
          </button>
        </div>
      </footer>
    </div>
  );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
