import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiLock, FiShield, FiClock, FiSmartphone, FiUsers, FiCheck, FiPlay } from 'react-icons/fi';

function App() {
  const [theme, setTheme] = useState('dark');

  const teamMembers = [
    { name: 'Branavaram', role: 'Project Lead', color: 'bg-blue-100 dark:bg-blue-900' },
    { name: 'Riyas', role: 'UI/UX Designer', color: 'bg-purple-100 dark:bg-purple-900' },
    { name: 'Dhanush', role: 'Hardware Engineer', color: 'bg-green-100 dark:bg-green-900' },
    { name: 'Aqeel', role: 'Security & Testing Lead', color: 'bg-red-100 dark:bg-red-900' },
    { name: 'Shehan', role: 'Operations Director', color: 'bg-yellow-100 dark:bg-yellow-900' },
  ];

  const features = [
    { icon: <FiShield />, title: 'QR Code Security', desc: 'One-time QR codes for maximum security' },
    { icon: <FiClock />, title: 'Real-Time Availability', desc: 'Live locker status updates' },
    { icon: <FiSmartphone />, title: 'Mobile-First', desc: 'Access from any device' },
    { icon: <FiUsers />, title: 'Exclusive for IIT', desc: 'Verified students only' },
  ];

  const stats = [
    { value: '24/7', label: 'Secure Access' },
    { value: '500+', label: 'Active Users' },
    { value: '99.9%', label: 'Uptime' },
    { value: '<30s', label: 'Reservation' },
  ];

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}>
      {/* Navigation */}
      <nav className={`sticky top-0 z-50 ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-blue-600 rounded-lg">
              <FiLock className="text-white text-xl" />
            </div>
            <div>
              <h1 className="text-2xl font-bold">SmartLockers</h1>
              <p className="text-sm opacity-70">IIT University</p>
            </div>
          </div>
          
          <div className="hidden md:flex space-x-8">
            {['Home', 'Features', 'How It Works', 'Team', 'Contact'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-blue-500 transition-colors">
                {item}
              </a>
            ))}
          </div>
          
          <div className="flex items-center space-x-4">
            <button 
              onClick={toggleTheme}
              className="p-2 rounded-full bg-gray-200 dark:bg-gray-700"
            >
              {theme === 'dark' ? '🌙' : '☀️'}
            </button>
            <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              Student Portal
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 mb-6">
                <FiCheck className="mr-2" />
                Exclusively for IIT Students
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Secure Storage,{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
                  Smart Access
                </span>{' '}
                for Academic Excellence
              </h1>
              
              <p className="text-xl opacity-80 mb-8">
                Revolutionize your library experience with our intelligent locker system. 
                Reserve secure storage in seconds, access with QR codes, and focus on your education.
              </p>
              
              <div className="flex flex-wrap gap-4 mb-12">
                <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg flex items-center hover:opacity-90 transition-opacity">
                  <FiLock className="mr-2" />
                  Reserve Locker
                </button>
                <button className="px-8 py-3 border-2 border-blue-600 text-blue-600 rounded-lg flex items-center hover:bg-blue-50 transition-colors">
                  <FiPlay className="mr-2" />
                  Watch Demo
                </button>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="text-center"
                  >
                    <div className="text-3xl font-bold text-blue-500">{stat.value}</div>
                    <div className="text-sm opacity-70">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-white to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-3xl p-8 shadow-2xl">
                <div className="aspect-video rounded-2xl overflow-hidden bg-gradient-to-r from-blue-500/20 to-purple-500/20">
                  {/* Locker Image */}
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="text-center">
                      <FiLock className="text-8xl text-blue-500 mx-auto mb-4" />
                      <p className="text-lg font-semibold">Smart Locker Interface</p>
                    </div>
                  </div>
                </div>
                
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ repeat: Infinity, duration: 3 }}
                  className="absolute -bottom-6 -right-6 bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-2xl"
                >
                  <div className="w-32 h-32 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">QR</div>
                      <div className="text-xs opacity-70 mt-1">SCAN TO UNLOCK</div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gray-100 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">Key Features</h2>
          <p className="text-xl text-center opacity-80 mb-12 max-w-2xl mx-auto">
            Designed exclusively for IIT University's needs
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="w-14 h-14 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center text-white text-2xl mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="opacity-70">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">Meet Our Team</h2>
          <p className="text-xl text-center opacity-80 mb-12">
            A dedicated team of IIT students
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-900 rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className={`w-24 h-24 rounded-full mx-auto mb-4 ${member.color} flex items-center justify-center text-2xl`}>
                  {member.name.charAt(0)}
                </div>
                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                <p className="text-blue-500 font-semibold mb-3">{member.role}</p>
                <p className="text-sm opacity-70">Lorem ipsum dolor sit amet consectetur</p>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-20 text-center">
            <div className="inline-block px-8 py-4 rounded-2xl bg-blue-50 dark:bg-blue-900/30">
              <p className="opacity-80">
                In collaboration with <span className="font-bold">IIT Library Committee</span> • 
                Mentored by <span className="font-bold">Prof. S. Kumar</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-8 ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-100'}`}>
        <div className="container mx-auto px-4 text-center">
          <p className="text-lg font-bold mb-2">Smart Locker System</p>
          <p className="opacity-70">A final year project by IIT Computer Science Department</p>
          <p className="mt-4 opacity-50 text-sm">© 2023 IIT University. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;