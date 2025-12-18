import React, { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom/client';
import {
  FaMoon, FaSun, FaLock, FaBolt, FaMobileAlt, FaChartLine, FaBell,
  FaUserShield, FaMapMarkerAlt, FaCalendarAlt, FaKey, FaShieldAlt,
  FaCheckCircle, FaHandshake, FaCheck, FaArrowUp, FaTimes, FaBars,
  FaTwitter, FaInstagram, FaGithub, FaLinkedin, FaPaperPlane, FaGlobe, FaEnvelope
} from 'react-icons/fa';
import { Helmet } from "react-helmet";

function App() {
  
  return (
    <>
      <Helmet>
        <title>Securefy – Smart Locker System</title>
        <meta name="description" content="Securefy is a smart locker system with QR access and AES-256 encryption for IIT University students." />
      </Helmet>
    </>
  );
  
  const [theme, setTheme] = useState('light');
  const [activeStep, setActiveStep] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [isTablet, setIsTablet] = useState(window.innerWidth >= 768 && window.innerWidth < 1024);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

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
      logoGradient: 'linear-gradient(135deg, #4A6CF7 0%, #8B5CF6 100%)',
      cardBorder: 'rgba(74, 108, 247, 0.2)',
      teamCardBg: 'rgba(255, 255, 255, 0.8)', // Higher opacity for visibility
      shadow: '0 10px 30px -10px rgba(74, 108, 247, 0.15)'
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
      logoGradient: 'linear-gradient(135deg, #60A5FA 0%, #A78BFA 100%)',
      cardBorder: 'rgba(96, 165, 250, 0.3)',
      teamCardBg: 'rgba(30, 41, 59, 0.8)', // Higher opacity for visibility
      shadow: '0 10px 30px -10px rgba(0, 0, 0, 0.3)'
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

  // Handle Mouse Move for Parallax Effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      // Normalize mouse position from -1 to 1
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: (e.clientY / window.innerHeight) * 2 - 1
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
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
        opacity: Math.random() * 0.15 + 0.05, // Increased from 0.05+0.02
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

  // Scroll listener for Back to Top button
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
      icon: <FaLock />,
      title: 'Military-Grade Encryption',
      description: 'Bank-level 256-bit AES encryption ensures your belongings are completely secure.',
      gradient: 'linear-gradient(135deg, #4A6CF7 0%, #8B5CF6 100%)'
    },
    {
      icon: <FaBolt />,
      title: 'Instant Access',
      description: 'Reserve and access lockers instantly with QR code scanning technology.',
      gradient: 'linear-gradient(135deg, #F59E0B 0%, #FBBF24 100%)'
    },
    {
      icon: <FaMobileAlt />,
      title: 'Smart Control',
      description: 'Control everything from your phone with our intuitive web application.',
      gradient: 'linear-gradient(135deg, #EF4444 0%, #F87171 100%)'
    },
    {
      icon: <FaChartLine />,
      title: 'Advanced Analytics',
      description: 'Real-time usage analytics and predictive availability for optimal planning.',
      gradient: 'linear-gradient(135deg, #8B5CF6 0%, #A78BFA 100%)'
    },
    {
      icon: <FaBell />,
      title: 'Smart Alerts',
      description: 'Automated notifications and alerts for security and convenience.',
      gradient: 'linear-gradient(135deg, #3B82F6 0%, #60A5FA 100%)'
    }
  ];

  const howItWorks = [
    {
      step: 1,
      icon: <FaUserShield />,
      title: 'Biometric Login',
      description: 'Authenticate using your institutional credentials via our secure portal',
      features: ['NIC ID', 'Library ID', 'IIT ID']
    },
    {
      step: 2,
      icon: <FaMapMarkerAlt />,
      title: 'Smart Locker Selection',
      description: 'System recommends optimal lockers based on your schedule and location',
      features: ['Smart suggestions', 'Real-time map', 'Optimal routing']
    },
    {
      step: 3,
      icon: <FaCalendarAlt />,
      title: 'Flexible Reservation',
      description: 'Book lockers for hours, days, or entire academic terms',
      features: ['Flexible timing', 'Auto-extend', 'Group bookings']
    },
    {
      step: 4,
      icon: <FaKey />,
      title: 'Digital Key',
      description: 'Generate secure digital keys or use biometric access',
      features: ['Digital keys', 'Biometric access', 'Temporary codes']
    },
    {
      step: 5,
      icon: <FaShieldAlt />,
      title: 'Secure Storage',
      description: 'Store items with 24/7 monitoring and instant alerts',
      features: ['24/7 monitoring', 'Instant alerts', 'Activity logs']
    },
    {
      step: 6,
      icon: <FaChartLine />,
      title: 'Advanced Management',
      description: 'Track usage, receive insights, and manage preferences',
      features: ['Usage analytics', 'Smart insights', 'Preferences']
    }
  ];

  const projectTeam = [
    {
      id: 'branavaram',
      name: 'Branavaram',
      role: 'Project Lead & Backend Architect',
      department: 'BEng(HONS) Software Engineering',
      github: 'https://github.com/branavaram',
      linkedin: 'https://www.linkedin.com/in/g-branavaram-351873209?utm_source=share_via&utm_content=profile&utm_medium=member_ios',
      image: teamImages.branavaram
    },
    {
      id: 'dhanush',
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
      id: 'aqeel',
      name: 'Aqeel',
      role: 'Security & Testing Lead',
      department: 'BEng(HONS) Software Engineering',
      github: 'https://github.com/aqeel',
      linkedin: 'https://www.linkedin.com/in/aqeel-aroos-12626231a/overlay/about-this-profile/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BCOXpTvF1QuSp%2B4SyrP4%2Bdg%3D%3D',
      image: teamImages.aqeel
    },
    {
      id: 'shehan',
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

  // Responsive styles object
  const responsive = {
    // Padding
    sectionPadding: isMobile ? '60px 0' : isTablet ? '80px 0' : '120px 0',
    heroPadding: isMobile ? '120px 0 60px' : isTablet ? '150px 0 80px' : '200px 0 100px',
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
    teamGrid: isMobile ? '1fr' : isTablet ? 'repeat(2, 1fr)' : 'repeat(5, 1fr)',
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
          opacity: 0.3,
          transform: `translate(${mousePosition.x * -30}px, ${mousePosition.y * -30}px)`,
          transition: 'transform 0.1s ease-out'
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
              transform: `rotate(${shape.rotation}deg) translate(${mousePosition.x * -60 * shape.speed}px, ${mousePosition.y * -60 * shape.speed}px)`,
              clipPath: shape.type === 'triangle' ? 'polygon(50% 0%, 0% 100%, 100% 100%)' : 'none',
              transition: 'transform 0.2s cubic-bezier(0.2, 0.8, 0.2, 1)'
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
              filter: 'blur(1px)',
              transform: `translate(${mousePosition.x * -100 * particle.speed}px, ${mousePosition.y * -100 * particle.speed}px)`,
              transition: 'transform 0.2s cubic-bezier(0.2, 0.8, 0.2, 1)'
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
          animation: 'orbFloat 20s ease-in-out infinite alternate',
          transform: `translate(${mousePosition.x * 50}px, ${mousePosition.y * 50}px)`,
          transition: 'transform 0.4s ease-out'
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
          animation: 'orbFloat 25s ease-in-out infinite alternate-reverse',
          transform: `translate(${mousePosition.x * 80}px, ${mousePosition.y * 80}px)`,
          transition: 'transform 0.4s ease-out'
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
        backdropFilter: 'blur(60px) saturate(150%)',
        WebkitBackdropFilter: 'blur(60px) saturate(180%)',
        padding: isMobile ? '12px 0' : '15px 0',
        zIndex: 1000,
        borderBottom: `1px solid rgba(${theme === 'light' ? '74, 108, 247' : '96, 165, 250'}, 0.15)`,
        boxShadow: `0 4px 12px rgba(0, 0, 0, 0.05)`
      }}>
        <div style={{
          maxWidth: '1400px',
          margin: '0 auto',
          padding: isMobile ? '0 20px' : '0 30px'
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
                  {theme === 'light' ? <FaMoon /> : <FaSun />}
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
                  {theme === 'light' ? <FaMoon /> : <FaSun />}
                </button>

                <button
                  className="mobile-menu-button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setMobileMenuOpen(!mobileMenuOpen);
                  }}
                  style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '12px',
                    background: currentColors.gradient,
                    border: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    fontSize: '20px',
                    color: currentColors.accent,
                    transition: 'all 0.3s ease',
                    position: 'relative',
                    zIndex: 1002,
                    boxShadow: `0 4px 12px ${currentColors.primary}40`
                  }}>
                  <div style={{ pointerEvents: 'none', display: 'flex' }}>
                    {mobileMenuOpen ? <FaTimes /> : <FaBars />}
                  </div>
                </button>
              </div>
            )}
          </div>

          {/* Mobile Menu (Hidden by default) */}
          {isMobile && (
            <>
              {/* Menu Backdrop */}
              <div
                style={{
                  position: 'fixed',
                  top: '70px',
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: 'rgba(0,0,0,0.5)',
                  backdropFilter: 'blur(3px)',
                  zIndex: 998,
                  opacity: mobileMenuOpen ? 1 : 0,
                  visibility: mobileMenuOpen ? 'visible' : 'hidden',
                  transition: 'all 0.3s ease',
                  pointerEvents: mobileMenuOpen ? 'auto' : 'none'
                }}
                onClick={() => setMobileMenuOpen(false)}
              />

              {/* Menu Content */}
              <div className={`mobile-menu ${mobileMenuOpen ? 'active' : ''}`} style={{
                position: 'fixed',
                top: '70px',
                left: '0',
                right: '0',
                background: currentColors.glass,
                backdropFilter: 'blur(20px) saturate(180%)',
                WebkitBackdropFilter: 'blur(20px) saturate(180%)',
                padding: '20px',
                zIndex: 999,
                borderBottom: `1px solid ${currentColors.cardBorder}`,
                transform: mobileMenuOpen ? 'translateY(0)' : 'translateY(-20px)',
                opacity: mobileMenuOpen ? 1 : 0,
                visibility: mobileMenuOpen ? 'visible' : 'hidden',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                boxShadow: currentColors.shadow,
                maxHeight: 'calc(100vh - 70px)',
                overflowY: 'auto'
              }}>
                {['Home', 'Features', 'Process', 'Team', 'Contact'].map((item, index) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      background: 'transparent',
                      border: 'none',
                      borderBottom: `1px solid ${currentColors.cardBorder}`,
                      color: currentColors.text,
                      fontSize: '16px',
                      fontWeight: '600',
                      cursor: 'pointer',
                      padding: '15px 10px',
                      textAlign: 'left',
                      width: '100%',
                      transition: 'all 0.2s ease',
                      animation: mobileMenuOpen ? `slideInUp 0.3s ease-out ${index * 0.05}s both` : 'none'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = currentColors.primary;
                      e.currentTarget.style.background = `${currentColors.primary}05`;
                      e.currentTarget.style.paddingLeft = '15px';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = currentColors.text;
                      e.currentTarget.style.background = 'transparent';
                      e.currentTarget.style.paddingLeft = '10px';
                    }}
                  >
                    {item}
                    <span style={{ fontSize: '12px', opacity: 0.5 }}>●</span>
                  </button>
                ))}
                <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'center' }}>
                  <button
                    onClick={() => scrollToSection('contact')}
                    style={{
                      width: '100%',
                      padding: '12px',
                      background: currentColors.gradient,
                      color: currentColors.accent,
                      border: 'none',
                      borderRadius: '10px',
                      fontSize: '16px',
                      fontWeight: '700',
                      cursor: 'pointer',
                      boxShadow: `0 4px 15px ${currentColors.primary}40`
                    }}
                  >
                    Get Started
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" ref={heroRef}
        onMouseMove={(e) => {
          const rect = e.currentTarget.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
          e.currentTarget.style.setProperty('--x', `${x}px`);
          e.currentTarget.style.setProperty('--y', `${y}px`);
        }}
        style={{
          padding: responsive.heroPadding,
          position: 'relative',
          overflow: 'hidden'
        }}>

        {/* Colorful "Antigravity" Fluid Effect */}
        <div className="hero-flare" style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          pointerEvents: 'none',
          zIndex: 0,
          filter: 'blur(60px) contrast(1.2) saturate(1.5)', // Gooey/Fluid look
          opacity: 0.6
        }}>
          {/* Orb 1: Cyan (Fastest) */}
          <div style={{
            position: 'absolute',
            left: 0,
            top: 0,
            width: '300px',
            height: '300px',
            background: 'radial-gradient(circle, rgba(34, 211, 238, 0.5) 0%, transparent 70%)',
            borderRadius: '50%',
            transform: 'translate(calc(var(--x, -150px) - 50%), calc(var(--y, -150px) - 50%))',
            transition: 'transform 0.8s cubic-bezier(0.075, 0.82, 0.165, 1)',
            mixBlendMode: 'screen'
          }} />

          {/* Orb 2: Purple (Medium) */}
          <div style={{
            position: 'absolute',
            left: 0,
            top: 0,
            width: '400px',
            height: '400px',
            background: 'radial-gradient(circle, rgba(168, 85, 247, 0.5) 0%, transparent 70%)',
            borderRadius: '50%',
            transform: 'translate(calc(var(--x, -200px) - 40% + 50px), calc(var(--y, -200px) - 40% - 50px))',
            transition: 'transform 1.2s cubic-bezier(0.075, 0.82, 0.165, 1)',
            mixBlendMode: 'screen'
          }} />

          {/* Orb 3: Pink (Slowest/Trailing) */}
          <div style={{
            position: 'absolute',
            left: 0,
            top: 0,
            width: '350px',
            height: '350px',
            background: 'radial-gradient(circle, rgba(236, 72, 153, 0.5) 0%, transparent 70%)',
            borderRadius: '50%',
            transform: 'translate(calc(var(--x, -175px) - 60% - 50px), calc(var(--y, -175px) - 60% + 50px))',
            transition: 'transform 1.6s cubic-bezier(0.075, 0.82, 0.165, 1)',
            mixBlendMode: 'screen'
          }} />
        </div>

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
                <span style={{ marginRight: '6px', fontSize: '16px', display: 'flex' }}><FaCheckCircle /></span> Coming Soon...
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
                    <FaShieldAlt />
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
                      <FaLock />
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
                      <FaCheckCircle />
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
                      <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                        <FaCheck size={10} /> {feature}
                      </span>
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
                <FaBolt />
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
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: responsive.gapMedium,
            marginBottom: responsive.gapLarge
          }}>
            {projectTeam.map((member, index) => (
              <div
                key={index}
                style={{
                  width: isMobile ? '100%' : isTablet ? 'calc(50% - 20px)' : 'calc(20% - 32px)',
                  background: currentColors.teamCardBg,
                  backdropFilter: 'blur(10px)',
                  WebkitBackdropFilter: 'blur(10px)',
                  padding: '35px 20px',
                  borderRadius: '24px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  position: 'relative',
                  border: `1px solid ${currentColors.cardBorder}`,
                  transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                  cursor: 'pointer',
                  overflow: 'hidden',
                  boxShadow: currentColors.shadow
                }}
                onMouseEnter={(e) => {
                  if (!isMobile) {
                    e.currentTarget.style.transform = 'translateY(-12px)';
                    e.currentTarget.style.boxShadow = `0 25px 50px -12px ${currentColors.primary}25`;
                    e.currentTarget.style.borderColor = currentColors.primary;
                    e.currentTarget.querySelector('.team-bg-glow').style.opacity = '0.15';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isMobile) {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = currentColors.shadow;
                    e.currentTarget.style.borderColor = currentColors.cardBorder;
                    e.currentTarget.querySelector('.team-bg-glow').style.opacity = '0';
                  }
                }}
              >
                {/* Hover Glow Effect */}
                <div
                  className="team-bg-glow"
                  style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '120%',
                    height: '120%',
                    background: `radial-gradient(circle, ${currentColors.primary} 0%, transparent 70%)`,
                    opacity: 0,
                    transition: 'opacity 0.4s ease',
                    zIndex: 0,
                    pointerEvents: 'none'
                  }}
                />

                {/* Profile Image Container */}
                <div style={{
                  position: 'relative',
                  zIndex: 1,
                  marginBottom: '25px',
                  width: '160px',
                  height: '160px'
                }}>
                  {/* Rotating Border Ring */}
                  <div style={{
                    position: 'absolute',
                    top: '-6px',
                    left: '-6px',
                    right: '-6px',
                    bottom: '-6px',
                    borderRadius: '50%',
                    background: currentColors.gradient,
                    zIndex: -1,
                    opacity: 0.7,
                    filter: 'blur(2px)'
                  }} />

                  {/* Clean Background Layer */}
                  <div style={{
                    position: 'absolute',
                    top: '-2px',
                    left: '-2px',
                    right: '-2px',
                    bottom: '-2px',
                    borderRadius: '50%',
                    background: currentColors.card,
                    zIndex: 0
                  }} />

                  {/* The Image */}
                  <img
                    src={member.image}
                    alt={member.name}
                    style={{
                      width: '100%',
                      height: '100%',
                      borderRadius: '50%',
                      objectFit: 'cover',
                      border: `4px solid ${currentColors.card}`,
                      position: 'relative',
                      zIndex: 1
                    }}
                  />

                  {/* Status Indicator */}
                  <div style={{
                    position: 'absolute',
                    bottom: '10px',
                    right: '10px',
                    width: '24px',
                    height: '24px',
                    background: '#10B981',
                    border: `3px solid ${currentColors.card}`,
                    borderRadius: '50%',
                    zIndex: 2,
                    boxShadow: '0 2px 5px rgba(0,0,0,0.2)'
                  }} />
                </div>

                {/* Content */}
                <div style={{
                  position: 'relative',
                  zIndex: 2,
                  textAlign: 'center',
                  width: '100%'
                }}>
                  <h3 style={{
                    fontSize: '22px',
                    fontWeight: '800',
                    color: currentColors.text,
                    marginBottom: '8px',
                    letterSpacing: '-0.5px'
                  }}>
                    {member.name}
                  </h3>

                  <div style={{
                    display: 'inline-block',
                    padding: '6px 16px',
                    borderRadius: '50px',
                    background: `${currentColors.primary}15`,
                    color: currentColors.primary,
                    fontSize: '13px',
                    fontWeight: '700',
                    letterSpacing: '0.5px',
                    marginBottom: '15px',
                    border: `1px solid ${currentColors.primary}20`
                  }}>
                    {member.role}
                  </div>

                  <div style={{
                    fontSize: '14px',
                    color: currentColors.textSecondary,
                    fontWeight: '500',
                    marginBottom: '25px',
                    height: '20px' // Reserved height
                  }}>
                    {member.department}
                  </div>

                  {/* Social Icons */}
                  <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    gap: '15px',
                    paddingTop: '20px',
                    borderTop: `1px solid ${currentColors.primary}10`,
                    width: '100%'
                  }}>
                    <a
                      href={member.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        color: currentColors.textSecondary,
                        transition: 'all 0.3s ease',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '38px',
                        height: '38px',
                        borderRadius: '50%',
                        background: 'rgba(255,255,255,0.05)'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = currentColors.text;
                        e.currentTarget.style.color = currentColors.card;
                        e.currentTarget.style.transform = 'translateY(-3px)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
                        e.currentTarget.style.color = currentColors.textSecondary;
                        e.currentTarget.style.transform = 'translateY(0)';
                      }}
                    >
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" fill="currentColor" /></svg>
                    </a>
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        color: currentColors.textSecondary,
                        transition: 'all 0.3s ease',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '38px',
                        height: '38px',
                        borderRadius: '50%',
                        background: 'rgba(255,255,255,0.05)'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = '#0077B5';
                        e.currentTarget.style.color = '#fff';
                        e.currentTarget.style.transform = 'translateY(-3px)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
                        e.currentTarget.style.color = currentColors.textSecondary;
                        e.currentTarget.style.transform = 'translateY(0)';
                      }}
                    >
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" fill="currentColor" /></svg>
                    </a>
                  </div>
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
                <FaHandshake />
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
              <FaLock />
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

      {/* Footer 2025 Redesign */}
      <footer style={{
        background: theme === 'light' ? 'linear-gradient(to top, #f1f5f9 0%, #fff 100%)' : 'linear-gradient(to top, #0f172a 0%, #1e293b 100%)',
        position: 'relative',
        overflow: 'hidden',
        padding: isMobile ? '60px 0 30px' : '100px 0 40px',
        borderTop: `1px solid ${currentColors.cardBorder}`
      }}>
        {/* Decorative Background Elements */}
        <div style={{
          position: 'absolute',
          top: '-20%',
          left: '-10%',
          width: '50%',
          height: '100%',
          background: `radial-gradient(circle, ${currentColors.primary}10 0%, transparent 70%)`,
          filter: 'blur(60px)',
          zIndex: 0
        }} />
        <div style={{
          position: 'absolute',
          bottom: '-20%',
          right: '-10%',
          width: '50%',
          height: '100%',
          background: `radial-gradient(circle, ${currentColors.secondary}10 0%, transparent 70%)`,
          filter: 'blur(60px)',
          zIndex: 0
        }} />

        <div style={{
          maxWidth: '1400px',
          margin: '0 auto',
          padding: responsive.containerPadding,
          position: 'relative',
          zIndex: 1
        }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : isTablet ? '1fr 1fr' : '1.5fr 1fr 1fr 1.2fr',
            gap: isMobile ? '40px' : '60px',
            marginBottom: '80px'
          }}>
            {/* Brand Column */}
            <div style={{ animation: 'slideInUp 0.5s ease-out' }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                marginBottom: '25px'
              }}>
                <div style={{
                  width: '40px',
                  height: '40px',
                  background: currentColors.gradient,
                  borderRadius: '10px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: `0 10px 20px ${currentColors.primary}30`
                }}>
                  <img
                    src={teamImages.logo}
                    alt="Logo"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      borderRadius: '10px'
                    }}
                  />
                </div>
                <div style={{ fontSize: '24px', fontWeight: '800', color: currentColors.text, letterSpacing: '-0.5px' }}>
                  Securefy
                </div>
              </div>
              <p style={{
                color: currentColors.textSecondary,
                lineHeight: '1.6',
                marginBottom: '30px',
                fontSize: '15px',
                maxWidth: '300px'
              }}>
                Pioneering the future of campus security with smart, seamless, and secure solutions for the modern student.
              </p>
              <div style={{ display: 'flex', gap: '15px' }}>
                {[FaTwitter, FaInstagram, FaGithub, FaLinkedin].map((Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '12px',
                      background: currentColors.glass,
                      border: `1px solid ${currentColors.cardBorder}`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: currentColors.textSecondary,
                      transition: 'all 0.3s ease',
                      cursor: 'pointer'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = currentColors.primary;
                      e.currentTarget.style.color = currentColors.accent;
                      e.currentTarget.style.transform = 'translateY(-3px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = currentColors.glass;
                      e.currentTarget.style.color = currentColors.textSecondary;
                      e.currentTarget.style.transform = 'translateY(0)';
                    }}
                  >
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            </div>

            {/* Product Links */}
            <div style={{ animation: 'slideInUp 0.6s ease-out' }}>
              <h4 style={{
                fontSize: '18px',
                fontWeight: '700',
                color: currentColors.text,
                marginBottom: '25px'
              }}>Product</h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {['Features', 'Process', 'Security', 'Enterprise', 'Changelog'].map((item, i) => (
                  <li key={i} style={{ marginBottom: '15px' }}>
                    <a
                      href={`#${item.toLowerCase()}`}
                      style={{
                        color: currentColors.textSecondary,
                        textDecoration: 'none',
                        fontSize: '15px',
                        transition: 'all 0.2s ease',
                        display: 'inline-block'
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.color = currentColors.primary;
                        e.target.style.transform = 'translateX(5px)';
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.color = currentColors.textSecondary;
                        e.target.style.transform = 'translateX(0)';
                      }}
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources Links */}
            <div style={{ animation: 'slideInUp 0.7s ease-out' }}>
              <h4 style={{
                fontSize: '18px',
                fontWeight: '700',
                color: currentColors.text,
                marginBottom: '25px'
              }}>Resources</h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {['Documentation', 'API Reference', 'Community', 'Help Center', 'Status'].map((item, i) => (
                  <li key={i} style={{ marginBottom: '15px' }}>
                    <a
                      href="#"
                      style={{
                        color: currentColors.textSecondary,
                        textDecoration: 'none',
                        fontSize: '15px',
                        transition: 'all 0.2s ease',
                        display: 'inline-block'
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.color = currentColors.primary;
                        e.target.style.transform = 'translateX(5px)';
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.color = currentColors.textSecondary;
                        e.target.style.transform = 'translateX(0)';
                      }}
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter */}
            <div style={{ animation: 'slideInUp 0.8s ease-out' }}>
              <h4 style={{
                fontSize: '18px',
                fontWeight: '700',
                color: currentColors.text,
                marginBottom: '25px'
              }}>Stay Updated</h4>
              <p style={{
                color: currentColors.textSecondary,
                fontSize: '14px',
                marginBottom: '20px',
                lineHeight: '1.6'
              }}>
                Get the latest updates on campus security and feature releases.
              </p>
              <div style={{
                position: 'relative',
                marginBottom: '15px'
              }}>
                <input
                  type="email"
                  placeholder="Enter your email"
                  style={{
                    width: '100%',
                    padding: '16px 20px',
                    borderRadius: '12px',
                    border: `1px solid ${currentColors.cardBorder}`,
                    background: currentColors.glass,
                    color: currentColors.text,
                    fontSize: '15px',
                    outline: 'none',
                    transition: 'border-color 0.3s ease'
                  }}
                  onFocus={(e) => e.target.style.borderColor = currentColors.primary}
                  onBlur={(e) => e.target.style.borderColor = currentColors.cardBorder}
                />
                <button
                  style={{
                    position: 'absolute',
                    right: '8px',
                    top: '8px',
                    bottom: '8px',
                    background: currentColors.primary,
                    color: currentColors.accent,
                    border: 'none',
                    borderRadius: '8px',
                    width: '40px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                  onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                >
                  <FaPaperPlane size={14} />
                </button>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: currentColors.textSecondary }}>
                <FaGlobe /> English (US)
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div style={{
            borderTop: `1px solid ${currentColors.cardBorder}`,
            paddingTop: '30px',
            display: 'flex',
            flexDirection: isMobile ? 'column' : 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '20px',
            animation: 'fadeIn 1s ease-out'
          }}>
            <div style={{
              fontSize: '14px',
              color: currentColors.textSecondary,
              textAlign: isMobile ? 'center' : 'left'
            }}>
              © 2025 Securefy Inc. All rights reserved.
            </div>
            <div style={{
              display: 'flex',
              gap: '30px',
              fontSize: '14px',
              fontWeight: '500'
            }}>
              {['Privacy', 'Terms', 'Security', 'Cookies'].map((item, i) => (
                <a
                  key={i}
                  href="#"
                  style={{
                    color: currentColors.textSecondary,
                    textDecoration: 'none',
                    transition: 'color 0.2s ease'
                  }}
                  onMouseEnter={(e) => e.target.style.color = currentColors.primary}
                  onMouseLeave={(e) => e.target.style.color = currentColors.textSecondary}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>

      {/* Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={() => scrollToSection('home')}
          style={{
            position: 'fixed',
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
            zIndex: 1000,
            animation: 'slideInUp 0.3s ease-out'
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
          <FaArrowUp />
        </button>
      )}
    </div>
  );
}

export default App;
