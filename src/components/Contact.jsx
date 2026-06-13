import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiLinkedin, FiGithub, FiCode, FiArrowRight } from 'react-icons/fi';

const Contact = () => {
  const [activeContact, setActiveContact] = useState(null);

  const contactMethods = [
    {
      id: 'email',
      name: 'Email',
      value: 'prakharbatwal418@gmail.com',
      url: 'mailto:prakharbatwal418@gmail.com',
      icon: <FiMail size={20} />,
      desc: 'Send a direct message for inquiries or collaborations.',
      color: 'var(--color-primary)'
    },
    {
      id: 'linkedin',
      name: 'LinkedIn',
      value: 'prakhar-batwal-a72323249',
      url: 'https://linkedin.com/in/prakhar-batwal-a72323249',
      icon: <FiLinkedin size={20} />,
      desc: 'Connect professionally and browse career highlights.',
      color: 'var(--color-accent)'
    },
    {
      id: 'github',
      name: 'GitHub',
      value: 'prakhar-bip',
      url: 'https://github.com/prakhar-bip',
      icon: <FiGithub size={20} />,
      desc: 'Browse repositories, system designs, and code.',
      color: 'var(--color-primary)'
    },
    {
      id: 'leetcode',
      name: 'LeetCode',
      value: 'Prakhar_batwal',
      url: 'https://leetcode.com/u/Prakhar_batwal/',
      icon: <FiCode size={20} />,
      desc: 'View data structure problem-solving standings.',
      color: 'var(--color-accent)'
    }
  ];

  // Map center coordinate (200, 200) to each card node coordinate
  const coordinates = {
    email: { x: 100, y: 100 },
    linkedin: { x: 300, y: 100 },
    github: { x: 100, y: 300 },
    leetcode: { x: 300, y: 300 }
  };

  return (
    <section id="contact" className="py-24 relative border-t border-border grid-lines">
      <div className="absolute top-1/4 right-1/4 w-80 h-80 glow-primary rounded-full pointer-events-none opacity-[0.05]" />
      
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-left mb-16">
          <span className="font-mono text-sm font-semibold text-primary uppercase tracking-wider">
            Collaboration Portal
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-text mt-3 tracking-tight">
            Let's Build Something Amazing Together
          </h2>
          <p className="text-base md:text-lg text-muted mt-3 max-w-2xl">
            Open to internships, collaborations, backend engineering roles, AI engineering opportunities, and software development projects.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Columns - Cards list */}
          <div className="lg:col-span-7 space-y-4 text-left">
            {contactMethods.map((method) => {
              const isActive = activeContact === method.id;
              return (
                <a
                  key={method.id}
                  href={method.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block p-6 rounded-xl border transition-all duration-300 bg-surface/30 group ${
                    isActive 
                      ? 'border-primary shadow-lg shadow-primary/5 bg-surface/50 scale-[1.01]' 
                      : 'border-border hover:border-primary/50'
                  }`}
                  onMouseEnter={() => setActiveContact(method.id)}
                  onMouseLeave={() => setActiveContact(null)}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className={`p-3 rounded-lg border transition-colors duration-300 ${
                        isActive ? 'bg-primary/10 border-primary text-primary' : 'bg-surface/60 border-border text-muted group-hover:text-text'
                      }`}>
                        {method.icon}
                      </div>
                      <div>
                        <span className="font-bold text-text text-base md:text-lg block group-hover:text-primary transition-colors duration-250">
                          {method.name}
                        </span>
                        <span className="font-mono text-xs text-muted block mt-0.5">
                          {method.value}
                        </span>
                      </div>
                    </div>
                    <FiArrowRight className="text-muted group-hover:translate-x-1 group-hover:text-primary transition-all duration-200" />
                  </div>
                  <p className="text-xs text-muted mt-4">
                    {method.desc}
                  </p>
                </a>
              );
            })}
          </div>

          {/* Right Column - Premium SVG Network Map */}
          <div className="lg:col-span-5 flex justify-center items-center">
            <div className="relative w-full aspect-square max-w-[360px] bg-surface/35 border border-border rounded-xl p-4 shadow-sm">
              <svg viewBox="0 0 400 400" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                {/* Connection lines from center (200,200) to nodes */}
                {Object.keys(coordinates).map((key) => {
                  const node = coordinates[key];
                  const isActive = activeContact === key;
                  return (
                    <g key={key}>
                      <line
                        x1="200"
                        y1="200"
                        x2={node.x}
                        y2={node.y}
                        stroke={isActive ? 'var(--color-primary)' : 'var(--color-border)'}
                        strokeWidth={isActive ? '2' : '1'}
                        strokeDasharray={isActive ? '0' : '4,4'}
                        className="transition-all duration-300"
                      />
                      {/* Pulse circle on active */}
                      {isActive && (
                        <motion.circle
                          r="4"
                          fill="var(--color-primary)"
                          animate={{
                            cx: [node.x, 200],
                            cy: [node.y, 200]
                          }}
                          transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
                        />
                      )}
                    </g>
                  );
                })}

                {/* Central Prakhar Batwal Core Node */}
                <circle cx="200" cy="200" r="30" fill="var(--color-surface)" stroke="var(--color-border)" strokeWidth="2" />
                <circle cx="200" cy="200" r="26" fill="var(--color-bg)" />
                <text x="200" y="204" textAnchor="middle" className="font-mono text-[10px] font-bold fill-primary">
                  PB
                </text>
                {activeContact && (
                  <motion.circle
                    cx="200"
                    cy="200"
                    r="34"
                    stroke="var(--color-primary)"
                    strokeWidth="1"
                    fill="transparent"
                    animate={{ scale: [1, 1.2, 1], opacity: [0.8, 0.2, 0.8] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                )}

                {/* Node: Email (100, 100) */}
                <g className="transition-all duration-300">
                  <circle cx="100" cy="100" r="20" fill="var(--color-surface)" stroke={activeContact === 'email' ? 'var(--color-primary)' : 'var(--color-border)'} strokeWidth="1.5" />
                  <foreignObject x="90" y="90" width="20" height="20">
                    <div className={`w-full h-full flex items-center justify-center ${activeContact === 'email' ? 'text-primary' : 'text-muted'}`}>
                      <FiMail size={12} />
                    </div>
                  </foreignObject>
                </g>

                {/* Node: LinkedIn (300, 100) */}
                <g className="transition-all duration-300">
                  <circle cx="300" cy="100" r="20" fill="var(--color-surface)" stroke={activeContact === 'linkedin' ? 'var(--color-accent)' : 'var(--color-border)'} strokeWidth="1.5" />
                  <foreignObject x="290" y="90" width="20" height="20">
                    <div className={`w-full h-full flex items-center justify-center ${activeContact === 'linkedin' ? 'text-accent' : 'text-muted'}`}>
                      <FiLinkedin size={12} />
                    </div>
                  </foreignObject>
                </g>

                {/* Node: GitHub (100, 300) */}
                <g className="transition-all duration-300">
                  <circle cx="100" cy="300" r="20" fill="var(--color-surface)" stroke={activeContact === 'github' ? 'var(--color-primary)' : 'var(--color-border)'} strokeWidth="1.5" />
                  <foreignObject x="90" y="290" width="20" height="20">
                    <div className={`w-full h-full flex items-center justify-center ${activeContact === 'github' ? 'text-primary' : 'text-muted'}`}>
                      <FiGithub size={12} />
                    </div>
                  </foreignObject>
                </g>

                {/* Node: LeetCode (300, 300) */}
                <g className="transition-all duration-300">
                  <circle cx="300" cy="300" r="20" fill="var(--color-surface)" stroke={activeContact === 'leetcode' ? 'var(--color-accent)' : 'var(--color-border)'} strokeWidth="1.5" />
                  <foreignObject x="290" y="290" width="20" height="20">
                    <div className={`w-full h-full flex items-center justify-center ${activeContact === 'leetcode' ? 'text-accent' : 'text-muted'}`}>
                      <FiCode size={12} />
                    </div>
                  </foreignObject>
                </g>
              </svg>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;
