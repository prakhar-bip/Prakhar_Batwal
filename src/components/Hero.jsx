import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiArrowRight, FiDownload, FiCode } from 'react-icons/fi';

const Hero = () => {
  const socialLinks = [
    { name: 'GitHub', icon: <FiGithub size={20} />, url: 'https://github.com/prakhar-bip' },
    { name: 'LinkedIn', icon: <FiLinkedin size={20} />, url: 'https://linkedin.com/in/prakhar-batwal-a72323249' },
    { name: 'LeetCode', icon: <FiCode size={20} />, url: 'https://leetcode.com/u/Prakhar_batwal/' },
    { name: 'Email', icon: <FiMail size={20} />, url: 'mailto:prakharbatwal418@gmail.com' }
  ];

  return (
    <section id="hero" className="relative min-h-screen w-full flex items-center justify-center pt-24 overflow-hidden grid-lines">
      {/* Background Radial Glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 glow-primary rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 glow-accent rounded-full pointer-events-none" />

      <div className="max-w-7xl w-full mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center z-10">
        
        {/* Left Typography Column */}
        <div className="lg:col-span-7 flex flex-col justify-center text-left space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="font-mono text-xs md:text-sm font-semibold uppercase tracking-widest text-primary bg-primary/10 px-3 py-1.5 rounded-full">
              Full-Stack Backend & MLOps
            </span>
          </motion.div>

          <motion.h1
            className="text-4xl md:text-6xl font-extrabold tracking-tight text-text leading-tight"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Prakhar Batwal
          </motion.h1>

          <motion.h2
            className="text-xl md:text-2xl font-semibold text-muted max-w-xl"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Full-Stack Backend Developer &amp; Machine Learning Operations Engineer
          </motion.h2>

          <motion.p
            className="text-base md:text-lg text-muted/80 max-w-xl leading-relaxed"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            I build scalable backend systems, AI-powered products, and machine learning infrastructure that solve real-world problems.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            className="flex flex-wrap gap-4 pt-4"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <a
              href="#featured"
              className="flex items-center space-x-2 bg-primary hover:bg-primary/95 text-white dark:text-darkBg font-medium px-6 py-3 rounded-lg shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all duration-300 group"
            >
              <span>Explore Work</span>
              <FiArrowRight className="group-hover:translate-x-1 transition-transform duration-200" />
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download="Prakhar_Batwal_Resume.pdf"
              className="flex items-center space-x-2 border border-border bg-surface hover:bg-surface/85 text-text font-medium px-6 py-3 rounded-lg transition-all duration-300"
            >
              <FiDownload />
              <span>Download Resume</span>
            </a>
          </motion.div>

          {/* Social Badges */}
          <motion.div
            className="flex items-center space-x-4 pt-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg border border-border bg-surface/40 hover:bg-surface text-muted hover:text-primary transition-all duration-300 hover:scale-105"
                title={social.name}
              >
                {social.icon}
              </a>
            ))}
          </motion.div>
        </div>

        {/* Right Animated SVG Visual Column */}
        <div className="lg:col-span-5 w-full flex justify-center items-center">
          <motion.div
            className="relative w-full aspect-square max-w-[450px]"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <svg
              viewBox="0 0 400 400"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full"
            >
              {/* Outer Orbiting Path */}
              <motion.circle
                cx="200"
                cy="200"
                r="150"
                stroke="var(--color-border)"
                strokeWidth="1.5"
                strokeDasharray="5,10"
                animate={{ rotate: 360 }}
                transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
              />

              {/* Inner Orbiting Path */}
              <motion.circle
                cx="200"
                cy="200"
                r="100"
                stroke="var(--color-border)"
                strokeWidth="1"
                strokeDasharray="4,8"
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
              />

              {/* Central Server Node */}
              <g>
                <circle
                  cx="200"
                  cy="200"
                  r="30"
                  fill="url(#centralGradient)"
                  className="stroke-primary stroke-2"
                />
                <motion.circle
                  cx="200"
                  cy="200"
                  r="30"
                  stroke="var(--color-primary)"
                  strokeWidth="1"
                  fill="transparent"
                  animate={{ scale: [1, 1.4, 1], opacity: [0.6, 0, 0.6] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                />
                <path
                  d="M192 195h16v10h-16zM192 201h16M192 205h16"
                  stroke="var(--color-bg)"
                  strokeWidth="1.5"
                />
              </g>

              {/* Distributed Node 1 (Database) */}
              <g>
                <motion.g
                  animate={{
                    x: [0, 10, -10, 0],
                    y: [0, -15, 10, 0]
                  }}
                  transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
                >
                  <circle cx="80" cy="120" r="16" fill="var(--color-surface)" stroke="var(--color-border)" strokeWidth="2" />
                  <circle cx="80" cy="120" r="4" fill="var(--color-accent)" />
                  <line x1="200" y1="200" x2="80" y2="120" stroke="var(--color-border)" strokeWidth="1" strokeDasharray="3,3" />
                  {/* Pulse along line */}
                  <motion.circle
                    r="3"
                    fill="var(--color-accent)"
                    animate={{
                      cx: [200, 80],
                      cy: [200, 120]
                    }}
                    transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
                  />
                </motion.g>
              </g>

              {/* Distributed Node 2 (AI Broker) */}
              <g>
                <motion.g
                  animate={{
                    x: [0, -12, 12, 0],
                    y: [0, 10, -15, 0]
                  }}
                  transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                >
                  <circle cx="320" cy="150" r="20" fill="var(--color-surface)" stroke="var(--color-border)" strokeWidth="2" />
                  <circle cx="320" cy="150" r="5" fill="var(--color-primary)" />
                  <line x1="200" y1="200" x2="320" y2="150" stroke="var(--color-border)" strokeWidth="1" strokeDasharray="3,3" />
                  {/* Pulse along line */}
                  <motion.circle
                    r="3.5"
                    fill="var(--color-primary)"
                    animate={{
                      cx: [200, 320],
                      cy: [200, 150]
                    }}
                    transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                  />
                </motion.g>
              </g>

              {/* Distributed Node 3 (Kafka Stream) */}
              <g>
                <motion.g
                  animate={{
                    x: [0, 8, -8, 0],
                    y: [0, 12, -12, 0]
                  }}
                  transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
                >
                  <circle cx="130" cy="310" r="18" fill="var(--color-surface)" stroke="var(--color-border)" strokeWidth="2" />
                  <path d="M125 305h10v10h-10z" stroke="var(--color-primary)" strokeWidth="1.5" />
                  <line x1="200" y1="200" x2="130" y2="310" stroke="var(--color-border)" strokeWidth="1" strokeDasharray="3,3" />
                  {/* Pulse along line */}
                  <motion.circle
                    r="3"
                    fill="var(--color-primary)"
                    animate={{
                      cx: [200, 130],
                      cy: [200, 310]
                    }}
                    transition={{ duration: 5, repeat: Infinity, ease: 'linear' }}
                  />
                </motion.g>
              </g>

              {/* Distributed Node 4 (ML Model) */}
              <g>
                <motion.g
                  animate={{
                    x: [0, -10, 10, 0],
                    y: [0, -8, 12, 0]
                  }}
                  transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
                >
                  <circle cx="290" cy="290" r="15" fill="var(--color-surface)" stroke="var(--color-border)" strokeWidth="2" />
                  <polygon points="290,285 295,293 285,293" fill="var(--color-accent)" />
                  <line x1="200" y1="200" x2="290" y2="290" stroke="var(--color-border)" strokeWidth="1" strokeDasharray="3,3" />
                  {/* Pulse along line */}
                  <motion.circle
                    r="3"
                    fill="var(--color-accent)"
                    animate={{
                      cx: [200, 290],
                      cy: [200, 290]
                    }}
                    transition={{ duration: 4.5, repeat: Infinity, ease: 'linear' }}
                  />
                </motion.g>
              </g>

              {/* Floating Data Packets */}
              <g>
                <motion.circle cx="100" cy="180" r="2.5" fill="var(--color-primary)"
                  animate={{ y: [0, -30, 0], opacity: [0.3, 1, 0.3] }}
                  transition={{ duration: 4, repeat: Infinity }}
                />
                <motion.circle cx="280" cy="100" r="2" fill="var(--color-accent)"
                  animate={{ y: [0, 40, 0], opacity: [0.2, 0.8, 0.2] }}
                  transition={{ duration: 5, repeat: Infinity }}
                />
                <motion.circle cx="220" cy="320" r="3" fill="var(--color-primary)"
                  animate={{ x: [0, 30, 0], opacity: [0.1, 0.9, 0.1] }}
                  transition={{ duration: 6, repeat: Infinity }}
                />
              </g>

              {/* Definitions for Gradients */}
              <defs>
                <radialGradient id="centralGradient" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="var(--color-primary)" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="var(--color-surface)" />
                </radialGradient>
              </defs>
            </svg>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
