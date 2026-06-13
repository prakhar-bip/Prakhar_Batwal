import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { FiBookOpen, FiCpu, FiServer, FiLayers } from 'react-icons/fi';

const AnimatedCounter = ({ endValue, suffix = '', prefix = '', duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const elementRef = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          let startTime = null;
          const start = 0;

          const animate = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);
            setCount(Math.floor(progress * (endValue - start) + start));
            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              setCount(endValue);
            }
          };

          requestAnimationFrame(animate);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [endValue, duration]);

  return (
    <span ref={elementRef}>
      {prefix}
      {count}
      {suffix}
    </span>
  );
};

const About = () => {
  const stats = [
    { label: 'DSA Problems Solved', endValue: 400, suffix: '+' },
    { label: 'Hackathon Team standing', endValue: 10, prefix: 'Top ' },
    { label: 'Major Projects Led', endValue: 4, suffix: '+' },
  ];

  const focusAreas = [
    { icon: <FiServer className="text-primary" size={24} />, title: 'Distributed Systems', desc: 'Designing resilient microservices and high-throughput real-time messaging pipelines.' },
    { icon: <FiCpu className="text-accent" size={24} />, title: 'Backend Engineering', desc: 'Developing clean APIs using robust protocols, stateful session caching, and fast indexing.' },
    { icon: <FiLayers className="text-primary" size={24} />, title: 'MLOps', desc: 'Automating pipelines, managing model lifecycle metrics, and deploying scalable inference servers.' },
    { icon: <FiBookOpen className="text-accent" size={24} />, title: 'AI Engineering', desc: 'Orchestrating multi-agent systems and integrating advanced cognitive reasoning pipelines.' },
  ];

  return (
    <section id="about" className="py-24 relative border-t border-border bg-surface/30">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Title */}
        <div className="text-left mb-16">
          <span className="font-mono text-sm font-semibold text-primary uppercase tracking-wider">
            Background &amp; Vision
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-text mt-3 tracking-tight">
            Turning Ideas Into Reliable Systems
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Narrative Column */}
          <div className="lg:col-span-7 space-y-8 text-left">
            <div className="space-y-6 text-base md:text-lg text-muted leading-relaxed">
              <p>
                I am a Computer Science &amp; Engineering student at <span className="text-text font-semibold">Parul University</span> (Aug 2023 – Apr 2027) specializing in high-throughput backend architecture, distributed systems, and Machine Learning Operations (MLOps).
              </p>
              <p>
                My passion lies in bridging reliable, production-grade infrastructure with intelligent systems. I design architectures that remain resilient under real-world load, optimize queries, and leverage machine learning to automate complex tasks.
              </p>
            </div>

            {/* Engineering Creed Block */}
            <motion.div 
              className="border-l-4 border-primary pl-6 py-2 my-8 bg-surface/50 rounded-r-lg"
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className="font-mono text-xs uppercase tracking-wider text-muted font-bold block mb-1">
                Engineering Creed
              </span>
              <p className="text-lg md:text-xl font-medium italic text-text">
                "Software engineering is about writing clean, auditable, maintainable, and self-documenting systems that remain reliable under real-world scale."
              </p>
            </motion.div>

            {/* Core Focus Matrix */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
              {focusAreas.map((focus) => (
                <div key={focus.title} className="p-5 rounded-lg border border-border bg-surface/20 flex flex-col space-y-3 hover:border-primary/50 transition-all duration-300">
                  <div className="flex items-center space-x-3">
                    {focus.icon}
                    <h3 className="font-bold text-text text-base md:text-lg">{focus.title}</h3>
                  </div>
                  <p className="text-sm text-muted">{focus.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Metrics & Education Column */}
          <div className="lg:col-span-5 space-y-8 text-left">
            
            {/* Stats Panel */}
            <div className="p-8 rounded-xl border border-border bg-surface/50 shadow-sm space-y-8">
              <h3 className="font-mono text-xs uppercase tracking-widest text-muted font-bold border-b border-border pb-3">
                Key Performance Metrics
              </h3>
              <div className="grid grid-cols-1 gap-8">
                {stats.map((stat, idx) => (
                  <div key={idx} className="flex flex-col">
                    <span className="text-4xl md:text-5xl font-extrabold text-primary tracking-tight">
                      <AnimatedCounter
                        endValue={stat.endValue}
                        suffix={stat.suffix}
                        prefix={stat.prefix}
                      />
                    </span>
                    <span className="text-sm font-medium text-muted mt-1">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Education Panel */}
            <div className="p-8 rounded-xl border border-border bg-surface/50 shadow-sm space-y-4">
              <h3 className="font-mono text-xs uppercase tracking-widest text-muted font-bold border-b border-border pb-3">
                Academic Foundation
              </h3>
              <div className="space-y-2">
                <span className="font-semibold text-text text-lg block">Parul University</span>
                <span className="text-sm text-primary font-medium block">B.Tech Computer Science &amp; Engineering</span>
                <span className="text-xs text-muted font-mono block">August 2023 – April 2027</span>
              </div>
            </div>
            
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
