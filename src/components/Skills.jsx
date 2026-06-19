import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiCpu, FiServer, FiDatabase, FiSettings } from 'react-icons/fi';

const Skills = () => {
  const [activeTab, setActiveTab] = useState('backend');

  const categories = [
    { id: 'backend', label: 'Backend & Core', icon: <FiServer /> },
    { id: 'ai', label: 'AI & Machine Learning', icon: <FiCpu /> },
    { id: 'data', label: 'Data & Pipelines', icon: <FiDatabase /> },
    { id: 'mlops', label: 'MLOps & Infra', icon: <FiSettings /> }
  ];

  const skillsData = {
    backend: [
      { name: 'FastAPI', mastery: 92, metric: '<10ms API Overhead', desc: 'High-performance async REST interfaces for ML model inference and agentic workflows.', evidence: 'Saarthi' },
      { name: 'Spring Boot', mastery: 88, metric: 'Multi-threaded microservices', desc: 'Secure backend microservices with thread-pool executor pipelines.', evidence: 'Notification Engine' },
      { name: 'Java', mastery: 85, metric: 'Production core runtime', desc: 'Low-level multithreading and robust transactional services.', evidence: 'Notification Engine' },
      { name: 'Python', mastery: 95, metric: 'Dynamic pipeline foundation', desc: 'Unified language for training pipelines, RAG, and microservices.', evidence: 'Saarthi, Goodreads' },
      { name: 'Node.js', mastery: 88, metric: 'Event-driven WebSocket flow', desc: 'Fast, async real-time server entrypoints and socket communication.', evidence: 'CollabMind' },
      { name: 'React', mastery: 85, metric: 'Fluid reactive interfaces', desc: 'Interactive developer client dashboards and real-time state synchronization.', evidence: 'Saarthi, CollabMind' }
    ],
    ai: [
      { name: 'LangGraph', mastery: 90, metric: '28-Agent compilation graph', desc: 'Stateful, cyclic multi-agent orchestration pipelines.', evidence: 'Saarthi' },
      { name: 'Google ADK', mastery: 90, metric: 'Self-healing code compiler', desc: 'Orchestrates models to plan, execute, and debug codebases.', evidence: 'Saarthi' },
      { name: 'TensorFlow', mastery: 82, metric: 'Two-Tower deep neural retriever', desc: 'Deep learning book recommendation and context retrieval pipelines.', evidence: 'Goodreads System' },
      { name: 'FAISS', mastery: 85, metric: 'Sub-10ms vector retrieval', desc: 'Approximate Nearest Neighbor semantic context search.', evidence: 'Goodreads System' },
      { name: 'XGBoost', mastery: 88, metric: 'R² Accuracy = 0.847', desc: 'Gradient-boosted decision trees for property appraisement.', evidence: 'Valuation Engine' },
      { name: 'SHAP', mastery: 85, metric: 'Explainable feature importance', desc: 'Auditable local and global feature attribution weight logging.', evidence: 'Valuation Engine' }
    ],
    data: [
      { name: 'Kafka', mastery: 85, metric: 'High-volume event streams', desc: 'Asynchronous message consumer queues with DLQ recovery pipelines.', evidence: 'Notification Engine' },
      { name: 'Redis', mastery: 90, metric: 'Sub-5ms cache latency', desc: 'Distributed rate-limiting scripts and active state synchronization.', evidence: 'Notification Engine, CollabMind' },
      { name: 'MongoDB', mastery: 88, metric: 'ACID transactional schemas', desc: 'Flexible collections storing active canvas data and agent state.', evidence: 'Saarthi, AushadhSanchaya' },
      { name: 'PostgreSQL', mastery: 86, metric: 'Optimized query execution', desc: 'Relational data modeling, indexing, and transactional integrity.', evidence: 'Core Backend DB' }
    ],
    mlops: [
      { name: 'Docker', mastery: 90, metric: 'Hermetic container build', desc: 'Standardized and isolated microservices ready for cloud deployments.', evidence: 'Notification Engine, MLOps' },
      { name: 'MLflow', mastery: 84, metric: 'Model registry & tracking', desc: 'Logs experiment metrics, weights, and automated evaluation steps.', evidence: 'Security Pipeline' },
      { name: 'DagsHub', mastery: 80, metric: 'DVC data tracking pipeline', desc: 'Git-for-data repositories securing full dataset reproducibility.', evidence: 'Security Pipeline' },
      { name: 'Linux', mastery: 85, metric: 'Shell scripting & process flow', desc: 'Advanced automation, server management, and system auditing.', evidence: 'Infra Deployment' }
    ]
  };

  // Maps hovered nodes on left blueprint to tabs on right spec panel
  const handleNodeHover = (nodeId) => {
    if (nodeId) {
      setActiveTab(nodeId);
    }
  };

  return (
    <section id="skills" className="py-24 relative border-t border-border bg-surface/30 grid-lines overflow-hidden">
      {/* Visual background lights */}
      <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-primary/5 rounded-full filter blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-accent/5 rounded-full filter blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-left mb-16">
          <span className="font-mono text-sm font-semibold text-primary uppercase tracking-wider">
            Engineering Dashboard
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-text mt-3 tracking-tight">
            Engineering Ecosystem
          </h2>
          <p className="text-base md:text-lg text-muted mt-3 max-w-2xl">
            Click nodes on the architecture blueprint or select categories below to view concrete performance metrics.
          </p>
        </div>

        {/* Tab Controls (Mobile friendly) */}
        <div className="flex flex-wrap gap-2 mb-10 border-b border-border/50 pb-4 justify-start">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`flex items-center space-x-2.5 px-5 py-3 rounded-lg font-medium text-sm transition-all duration-300 relative border cursor-pointer ${
                activeTab === cat.id
                  ? 'border-primary/30 text-primary bg-primary/5 font-semibold'
                  : 'border-transparent text-muted hover:text-text hover:bg-surface/50'
              }`}
            >
              {cat.icon}
              <span>{cat.label}</span>
              {activeTab === cat.id && (
                <motion.div
                  layoutId="activeTabUnderline"
                  className="absolute bottom-[-17px] left-0 right-0 h-0.5 bg-primary"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* LEFT PANEL: Innovative SVG Blueprint (lg:col-span-5) */}
          <div className="lg:col-span-5 w-full flex flex-col items-center">
            <div className="glassmorphism p-6 rounded-2xl border border-border/60 w-full max-w-[450px]">
              <span className="text-[10px] font-mono font-bold tracking-widest text-muted uppercase block text-left mb-4">
                SYSTEM PIPELINE BLUEPRINT
              </span>
              
              <svg viewBox="0 0 320 380" className="w-full h-auto text-text" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Connection paths */}
                <path d="M160 50 L160 120" stroke="var(--color-border)" strokeWidth="1.5" strokeDasharray="4,4" />
                <path d="M160 120 L160 210" stroke="var(--color-border)" strokeWidth="1.5" strokeDasharray="4,4" />
                <path d="M160 210 L160 300" stroke="var(--color-border)" strokeWidth="1.5" strokeDasharray="4,4" />

                {/* Laser flow signals */}
                <motion.circle
                  r="3.5"
                  fill="var(--color-primary)"
                  animate={{ cy: [50, 120] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                  cx="160"
                />
                <motion.circle
                  r="3.5"
                  fill="var(--color-accent)"
                  animate={{ cy: [120, 210] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'linear', delay: 1 }}
                  cx="160"
                />
                <motion.circle
                  r="3.5"
                  fill="var(--color-primary)"
                  animate={{ cy: [210, 300] }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: 'linear', delay: 2 }}
                  cx="160"
                />

                {/* Node 1: Languages (mapped to backend tab for core runtime) */}
                <g
                  onMouseEnter={() => handleNodeHover('backend')}
                  onMouseLeave={() => handleNodeHover(null)}
                  onClick={() => setActiveTab('backend')}
                  className="cursor-pointer group"
                >
                  <circle
                    cx="160"
                    cy="50"
                    r="28"
                    fill="var(--color-surface)"
                    stroke={activeTab === 'backend' ? 'var(--color-primary)' : 'var(--color-border)'}
                    strokeWidth={activeTab === 'backend' ? '2.5' : '1.5'}
                    className="transition-all duration-300"
                  />
                  <foreignObject x="150" y="40" width="20" height="20">
                    <div className="w-full h-full flex items-center justify-center pointer-events-none">
                      <FiServer size={20} className={`transition-colors duration-300 ${activeTab === 'backend' ? 'text-primary' : 'text-muted'}`} />
                    </div>
                  </foreignObject>
                  <text x="160" y="94" textAnchor="middle" className={`text-[9px] font-mono font-bold uppercase tracking-wider ${activeTab === 'backend' ? 'fill-primary' : 'fill-muted'}`}>
                    1. CORE RUNTIMES
                  </text>
                </g>

                {/* Node 2: AI (mapped to AI tab) */}
                <g
                  onMouseEnter={() => handleNodeHover('ai')}
                  onMouseLeave={() => handleNodeHover(null)}
                  onClick={() => setActiveTab('ai')}
                  className="cursor-pointer group"
                >
                  <circle
                    cx="160"
                    cy="130"
                    r="28"
                    fill="var(--color-surface)"
                    stroke={activeTab === 'ai' ? 'var(--color-primary)' : 'var(--color-border)'}
                    strokeWidth={activeTab === 'ai' ? '2.5' : '1.5'}
                    className="transition-all duration-300"
                  />
                  <foreignObject x="150" y="120" width="20" height="20">
                    <div className="w-full h-full flex items-center justify-center pointer-events-none">
                      <FiCpu size={20} className={`transition-colors duration-300 ${activeTab === 'ai' ? 'text-primary' : 'text-muted'}`} />
                    </div>
                  </foreignObject>
                  <text x="160" y="174" textAnchor="middle" className={`text-[9px] font-mono font-bold uppercase tracking-wider ${activeTab === 'ai' ? 'fill-primary' : 'fill-muted'}`}>
                    2. AI MODEL LOGIC
                  </text>
                </g>

                {/* Node 3: Data (mapped to data tab) */}
                <g
                  onMouseEnter={() => handleNodeHover('data')}
                  onMouseLeave={() => handleNodeHover(null)}
                  onClick={() => setActiveTab('data')}
                  className="cursor-pointer group"
                >
                  <circle
                    cx="160"
                    cy="215"
                    r="28"
                    fill="var(--color-surface)"
                    stroke={activeTab === 'data' ? 'var(--color-primary)' : 'var(--color-border)'}
                    strokeWidth={activeTab === 'data' ? '2.5' : '1.5'}
                    className="transition-all duration-300"
                  />
                  <foreignObject x="150" y="205" width="20" height="20">
                    <div className="w-full h-full flex items-center justify-center pointer-events-none">
                      <FiDatabase size={20} className={`transition-colors duration-300 ${activeTab === 'data' ? 'text-primary' : 'text-muted'}`} />
                    </div>
                  </foreignObject>
                  <text x="160" y="259" textAnchor="middle" className={`text-[9px] font-mono font-bold uppercase tracking-wider ${activeTab === 'data' ? 'fill-primary' : 'fill-muted'}`}>
                    3. DATA &amp; STREAMS
                  </text>
                </g>

                {/* Node 4: MLOps (mapped to MLOps tab) */}
                <g
                  onMouseEnter={() => handleNodeHover('mlops')}
                  onMouseLeave={() => handleNodeHover(null)}
                  onClick={() => setActiveTab('mlops')}
                  className="cursor-pointer group"
                >
                  <circle
                    cx="160"
                    cy="300"
                    r="28"
                    fill="var(--color-surface)"
                    stroke={activeTab === 'mlops' ? 'var(--color-primary)' : 'var(--color-border)'}
                    strokeWidth={activeTab === 'mlops' ? '2.5' : '1.5'}
                    className="transition-all duration-300"
                  />
                  <foreignObject x="150" y="290" width="20" height="20">
                    <div className="w-full h-full flex items-center justify-center pointer-events-none">
                      <FiSettings size={20} className={`transition-colors duration-300 ${activeTab === 'mlops' ? 'text-primary' : 'text-muted'}`} />
                    </div>
                  </foreignObject>
                  <text x="160" y="344" textAnchor="middle" className={`text-[9px] font-mono font-bold uppercase tracking-wider ${activeTab === 'mlops' ? 'fill-primary' : 'fill-muted'}`}>
                    4. OPS &amp; INFRA
                  </text>
                </g>
              </svg>
              
              <div className="mt-4 p-3 bg-surface/50 border border-border/30 rounded-lg text-left">
                <span className="text-[9px] font-mono font-bold text-primary block mb-0.5">BLUEPRINT PIPELINE STATUS: ACTIVE</span>
                <p className="text-[10px] text-muted font-medium leading-relaxed">
                  Hovering over runtime nodes maps the corresponding analytical specifications and evidence on the right console.
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT PANEL: Tech Specification & Outcome Cards (lg:col-span-7) */}
          <div className="lg:col-span-7 w-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left"
              >
                {skillsData[activeTab].map((skill, index) => (
                  <div
                    key={skill.name}
                    className="p-5 glassmorphism rounded-xl border border-border/60 hover:border-primary/50 transition-all duration-300 flex flex-col justify-between min-h-[14rem] h-auto group hover:shadow-lg hover:shadow-primary/5"
                  >
                    <div>
                      {/* Card Title & outcome badge */}
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="font-bold text-text text-base tracking-tight group-hover:text-primary transition-colors">
                          {skill.name}
                        </h3>
                        <span className="font-mono text-[9px] font-bold text-primary border border-primary/20 bg-primary/5 px-2.5 py-1 rounded-full uppercase tracking-wider">
                          {skill.metric}
                        </span>
                      </div>
                      
                      <p className="text-xs text-muted leading-relaxed font-medium mb-4">
                        {skill.desc}
                      </p>
                    </div>

                    {/* Progress tracking bar */}
                    <div>
                      <div className="flex justify-between items-center text-[10px] font-mono font-semibold text-muted/80 mb-1.5">
                        <span className="flex items-center">
                          <span className="w-1.5 h-1.5 rounded-full bg-accent mr-1.5 animate-pulse" />
                          Evidence: {skill.evidence}
                        </span>
                        <span>{skill.mastery}% Readiness</span>
                      </div>
                      
                      <div className="w-full h-1.5 bg-border/40 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.mastery}%` }}
                          transition={{ duration: 0.8, delay: index * 0.05 }}
                          className="h-full bg-gradient-to-r from-primary to-accent"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Skills;
