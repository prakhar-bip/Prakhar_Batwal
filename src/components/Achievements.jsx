import { motion } from 'framer-motion';
import { FiAward, FiUsers, FiCpu, FiCode, FiPenTool } from 'react-icons/fi';

const Achievements = () => {
  const achievements = [
    {
      title: 'Solved 400+ DSA Problems',
      badge: 'LeetCode',
      desc: 'Demonstrated solid understanding of algorithms, data structures, complexity analysis, and problem-solving paradigms.',
      icon: <FiCode size={18} />,
      date: 'Ongoing'
    },
    {
      title: 'Top 10 Elevate Hackathon Team',
      badge: 'Hackathon Achievement',
      desc: 'Competed against 700+ teams, designing and pitching a high-performance solution under intense time pressure.',
      icon: <FiAward size={18} />,
      date: '2024'
    },
    {
      title: 'Led 4-Person Engineering Team',
      badge: 'Leadership',
      desc: 'Coordinated development sprints, architectural reviews, and deployment pipelines for collaborative team projects.',
      icon: <FiUsers size={18} />,
      date: '2024 - Present'
    },
    {
      title: 'Built Enterprise Multi-Agent Workspace',
      badge: 'AI & Systems',
      desc: 'Designed and deployed Saarthi, integrating multiple specialized LLM agents with local filesystem tools and databases.',
      icon: <FiCpu size={18} />,
      date: '2025'
    },
    {
      title: 'Creates Software Engineering & System Design Content',
      badge: 'Community',
      desc: 'Writes in-depth technical case studies and architectural breakdowns to share distributed systems knowledge.',
      icon: <FiPenTool size={18} />,
      date: 'Continuous'
    }
  ];

  return (
    <section id="timeline" className="py-24 relative border-t border-border bg-surface/10 grid-lines">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-left mb-16">
          <span className="font-mono text-sm font-semibold text-primary uppercase tracking-wider">
            Milestones
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-text mt-3 tracking-tight">
            Key Achievements
          </h2>
          <p className="text-base md:text-lg text-muted mt-3 max-w-2xl">
            A chronological look at hackathons, academic leadership, and active system construction.
          </p>
        </div>

        {/* Timeline container */}
        <div className="relative border-l border-border/80 ml-4 md:ml-32 py-4 space-y-12">
          {achievements.map((item, idx) => (
            <motion.div
              key={idx}
              className="relative pl-8 md:pl-12 group"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              {/* Timeline Connector Dot */}
              <div className="absolute -left-[17px] top-1.5 p-1 rounded-full bg-bg border-2 border-border text-muted group-hover:border-primary group-hover:text-primary transition-all duration-300 z-10">
                {item.icon}
              </div>

              {/* Date Column (Absolute on desktop) */}
              <div className="hidden md:block absolute -left-32 top-2 w-20 text-right font-mono text-xs font-semibold text-muted/70 group-hover:text-primary transition-colors duration-250">
                {item.date}
              </div>

              {/* Content Card */}
              <div className="p-6 rounded-xl border border-border bg-surface/30 group-hover:bg-surface/50 group-hover:border-primary/40 transition-all duration-300 text-left max-w-3xl">
                <span className="md:hidden font-mono text-[10px] font-bold text-muted/60 block mb-2">
                  {item.date}
                </span>
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="text-lg font-bold text-text group-hover:text-primary transition-colors duration-200">
                    {item.title}
                  </h3>
                  <span className="font-mono text-[10px] font-semibold bg-primary/10 text-primary border border-primary/20 px-2.5 py-0.5 rounded-full">
                    {item.badge}
                  </span>
                </div>
                <p className="text-sm text-muted mt-3 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Achievements;
