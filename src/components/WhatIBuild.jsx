import { motion } from 'framer-motion';
import { FiCpu, FiTrendingUp, FiActivity, FiLayers, FiShield, FiHeart, FiShare2, FiServer } from 'react-icons/fi';

const WhatIBuild = () => {
  const capabilities = [
    {
      title: 'AI Agent Systems',
      evidence: 'Saarthi',
      projectKey: 'Saarthi',
      desc: 'Orchestrating multi-agent systems that model software architecture and generate full-stack APIs.',
      outcome: '28-Agent AI workspace',
      icon: <FiCpu size={24} className="text-primary" />,
      techs: ['FastAPI', 'MongoDB', 'LangGraph', 'Google ADK', 'React']
    },
    {
      title: 'Distributed Event Processing',
      evidence: 'Notification Engine',
      projectKey: 'Notification Engine',
      desc: 'High-throughput microservices using asynchronous queue ingestion and caching.',
      outcome: 'Sub-50ms lookup latency',
      icon: <FiServer size={24} className="text-accent" />,
      techs: ['Java', 'Spring Boot', 'Kafka', 'Redis', 'Docker']
    },
    {
      title: 'Real-Time Collaboration Platforms',
      evidence: 'CollabMind',
      projectKey: 'CollabMind',
      desc: 'Stateful WebSocket synchronizers supporting concurrent drawing, canvas versions, and socket nodes.',
      outcome: 'Sub-100ms sync latency',
      icon: <FiShare2 size={24} className="text-primary" />,
      techs: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Redis', 'Socket.io']
    },
    {
      title: 'Healthcare Inventory Systems',
      evidence: 'AushadhSanchaya',
      projectKey: 'AushadhSanchaya',
      desc: 'Acid-compliant transactional routers enforcing FEFO (First-Expiry First-Out) shelf-life models.',
      outcome: '35% waste reduction',
      icon: <FiHeart size={24} className="text-accent" />,
      techs: ['React', 'Node.js', 'Express.js', 'MongoDB']
    },
    {
      title: 'Recommendation Engines',
      evidence: 'Goodreads System',
      projectKey: 'Goodreads Recommendation System',
      desc: 'Two-Tower deep learning model pipelines for fast semantic retrieval.',
      outcome: 'Hit Rate@10 = 25.2%',
      icon: <FiTrendingUp size={24} className="text-primary" />,
      techs: ['Python', 'TensorFlow', 'FAISS', 'SentenceTransformers', 'FastAPI', 'Docker']
    },
    {
      title: 'Explainable AI Systems',
      evidence: 'Valuation Engine',
      projectKey: 'Real Estate Valuation Engine',
      desc: 'Ensemble model evaluators integrating SHAP contributions for fully auditable valuation outputs.',
      outcome: 'R² Accuracy = 0.847',
      icon: <FiActivity size={24} className="text-accent" />,
      techs: ['Python', 'XGBoost', 'SHAP', 'FastAPI', 'Docker']
    },
    {
      title: 'NLP Intelligence Platforms',
      evidence: 'TruthLens',
      projectKey: 'TruthLens',
      desc: 'Tokenizers and classifier pipelines analyzing sentiment structures and political article bias.',
      outcome: 'Explainable Predictions',
      icon: <FiLayers size={24} className="text-primary" />,
      techs: ['Python', 'FastAPI']
    },
    {
      title: 'Production MLOps Pipelines',
      evidence: 'Security Pipeline',
      projectKey: 'Network Security Pipeline',
      desc: 'Continuous integration loops checking for data drift, tracking metrics, and publishing models.',
      outcome: 'Continuous Lifecycle Drift',
      icon: <FiShield size={24} className="text-accent" />,
      techs: ['Python', 'MLflow', 'DagsHub', 'FastAPI', 'MongoDB', 'Docker']
    }
  ];

  return (
    <section id="capabilities" className="py-24 relative border-t border-border bg-surface/10">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-left mb-16">
          <span className="font-mono text-sm font-semibold text-primary uppercase tracking-wider">
            Capabilities Matrix
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-text mt-3 tracking-tight">
            What I Build
          </h2>
          <p className="text-base md:text-lg text-muted mt-3 max-w-2xl">
            A showcase of software engineering capabilities mapped directly to active systems and measurable production outcomes.
          </p>
        </div>

        {/* Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {capabilities.map((cap) => {
            return (
              <motion.div
                key={cap.title}
                className="p-6 rounded-xl border text-left transition-all duration-300 flex flex-col justify-between min-h-[18rem] h-auto border-border bg-surface/30 hover:border-primary/50"
                whileHover={{ y: -4 }}
              >
                <div className="space-y-4">
                  {/* Icon & Title */}
                  <div className="flex items-center justify-between">
                    <div className="p-3 rounded-lg border border-border bg-surface/50">
                      {cap.icon}
                    </div>
                    <span className="font-mono text-[9px] font-bold text-primary uppercase tracking-wider border border-primary/20 bg-primary/5 px-2.5 py-1 rounded-full">
                      {cap.outcome}
                    </span>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-base font-bold text-text group-hover:text-primary transition-colors duration-250">
                      {cap.title}
                    </h3>
                    <p className="text-xs text-muted leading-relaxed">
                      {cap.desc}
                    </p>
                  </div>
                </div>

                {/* Evidence Indicator */}
                <div className="pt-4 border-t border-border/40 flex items-center justify-between text-xs font-mono">
                  <span className="text-muted/60">Evidence</span>
                  <span className="font-semibold text-muted hover:text-primary transition-colors duration-200">
                    {cap.evidence}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default WhatIBuild;
