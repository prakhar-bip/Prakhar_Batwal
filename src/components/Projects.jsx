import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink, FiServer, FiActivity, FiShare2, FiHeart, FiTrendingUp, FiShield, FiAlertTriangle } from 'react-icons/fi';

const Projects = () => {
  const projectsData = [
    {
      title: 'High Throughput Notification Engine',
      category: 'Distributed Systems',
      repo: 'https://github.com/prakhar-bip/Notification_Engine',
      tech: ['Java 17', 'Spring Boot', 'Kafka', 'Redis', 'MySQL', 'Docker'],
      icon: <FiServer className="text-primary" size={18} />,
      metrics: 'Sub 50ms Lookup Latency',
      highlights: [
        'Priority event queues via Kafka with distributed rate limiting.',
        'Dead Letter Queue (DLQ) & Exponential Backoff recovery.'
      ]
    },
    {
      title: 'CollabMind',
      category: 'Real-time Systems',
      repo: 'https://github.com/Siddharth4629/--collabmind_ai',
      live: 'https://collabmind-frontend.onrender.com',
      tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Redis', 'Socket.io'],
      icon: <FiShare2 className="text-accent" size={18} />,
      metrics: 'Sub 100ms Synced Board',
      highlights: [
        'Real-time collaborative whiteboard for 50+ concurrent users.',
        'Socket-based differential state storage & sync.'
      ]
    },
    {
      title: 'AushadhSanchaya',
      category: 'Full-Stack & Vision',
      repo: 'https://github.com/prakhar-bip/AushadhSanchaya',
      live: 'https://aushadhsanchay.onrender.com',
      tech: ['React', 'Node.js', 'MongoDB', 'Gemini Vision'],
      icon: <FiHeart className="text-primary" size={18} />,
      metrics: '35% Waste Reduction',
      highlights: [
        'FEFO routing engine with ACID-compliant transactions.',
        'Gemini Vision OCR API for medicine barcode parsing.'
      ]
    },
    {
      title: 'Goodreads Recommendation System',
      category: 'Machine Learning',
      repo: 'https://github.com/prakhar-bip/goodreads-recommendation-system',
      tech: ['TensorFlow', 'FAISS', 'Transformers', 'FastAPI', 'Docker'],
      icon: <FiTrendingUp className="text-accent" size={18} />,
      metrics: 'Hit Rate@10 = 25.2% | MRR = 0.1078',
      highlights: [
        'Two-Tower recommendation model architecture.',
        'Approximate Nearest Neighbor (ANN) search via FAISS.'
      ]
    },
    {
      title: 'Real Estate Valuation Engine',
      category: 'Machine Learning',
      repo: 'https://github.com/prakhar-bip/real-estate-valuation-engine',
      tech: ['XGBoost', 'LightGBM', 'SHAP', 'FastAPI', 'Docker'],
      icon: <FiActivity className="text-primary" size={18} />,
      metrics: 'R² Accuracy = 0.847',
      highlights: [
        'Ensemble modeling using XGBoost and LightGBM trees.',
        'Explainable AI feature contributions via SHAP analysis.'
      ]
    },
    {
      title: 'TruthLens',
      category: 'Natural Language Processing',
      repo: 'https://github.com/prakhar-bip/TruthLens',
      tech: ['TF-IDF', 'Scikit-Learn', 'NLTK', 'OpenAI', 'FastAPI'],
      icon: <FiAlertTriangle className="text-accent" size={18} />,
      metrics: 'Fake News Classifier',
      highlights: [
        'Political bias analysis & news verification engines.',
        'NLTK preprocessing & sentiment scoring metrics.'
      ]
    },
    {
      title: 'Network Security Pipeline',
      category: 'MLOps & Security',
      repo: 'https://github.com/prakhar-bip/NetworkSecurity',
      tech: ['MLflow', 'DagsHub', 'FastAPI', 'MongoDB'],
      icon: <FiShield className="text-primary" size={18} />,
      metrics: 'Automated Lifecycle Drift',
      highlights: [
        'Automated model retraining loops with data drift alerts.',
        'Experiment registry and staging tracking via MLflow.'
      ]
    }
  ];

  return (
    <section id="projects" className="py-20 relative border-t border-border bg-surface/10">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-left mb-12">
          <span className="font-mono text-sm font-semibold text-primary uppercase tracking-wider">
            Engineering Projects
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-text mt-3 tracking-tight">
            Systems &amp; Models Showcase
          </h2>
          <p className="text-sm md:text-base text-muted mt-2 max-w-2xl">
            A deep dive into distributed services, database transactions, real-time collaboration engines, and machine learning models.
          </p>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projectsData.map((project, idx) => (
            <motion.div
              key={idx}
              className="p-5 rounded-xl border border-border bg-surface/30 hover:bg-surface/60 transition-all duration-300 flex flex-col justify-between hover:border-primary/50 relative overflow-hidden group"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.04 }}
            >
              <div>
                {/* Header */}
                <div className="flex items-start justify-between">
                  <div className="p-2 rounded-lg border border-border bg-surface/60">
                    {project.icon}
                  </div>
                  <span className="font-mono text-[9px] font-bold text-primary uppercase tracking-wider border border-primary/20 bg-primary/5 px-2 py-0.5 rounded-full">
                    {project.category}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-sm md:text-base font-bold text-text mt-3 group-hover:text-primary transition-colors duration-200 text-left">
                  {project.title}
                </h3>

                {/* Core Metric Badge (If any) */}
                {project.metrics && (
                  <div className="mt-1.5 py-0.5 px-2 rounded bg-accent/5 border border-accent/20 text-accent font-mono text-[10px] font-semibold text-left inline-block">
                    {project.metrics}
                  </div>
                )}

                {/* Technical Stack Tags */}
                <div className="flex flex-wrap gap-1 mt-3">
                  {project.tech.map((tech) => (
                    <span key={tech} className="font-mono text-[9px] font-medium text-muted bg-surface/40 px-2 py-0.5 rounded">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Highlights Bullet List */}
                <ul className="mt-4 space-y-1.5 text-left">
                  {project.highlights.map((highlight, index) => (
                    <li key={index} className="text-xs text-muted/90 flex items-start space-x-1.5">
                      <span className="text-primary font-bold mt-0.5">&bull;</span>
                      <span className="leading-relaxed">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center space-x-3 mt-6 pt-3 border-t border-border/40">
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-1.5 text-xs font-semibold text-muted hover:text-text transition-colors duration-200"
                >
                  <FiGithub size={13} />
                  <span>GitHub</span>
                </a>
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-1.5 text-xs font-semibold text-primary hover:text-primary/80 transition-colors duration-200"
                  >
                    <FiExternalLink size={13} />
                    <span>Live Demo</span>
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;
