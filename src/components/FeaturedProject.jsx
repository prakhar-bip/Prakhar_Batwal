import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiGithub, FiExternalLink, FiCpu, FiTerminal, FiDatabase, FiSettings, FiCheckCircle } from 'react-icons/fi';

const workflowSteps = [
  { title: 'Concept Input', icon: <FiTerminal size={18} />, desc: 'Ingests product concepts and natural language requirements.' },
  { title: 'Blueprint Planner', icon: <FiSettings size={18} />, desc: 'Creates the orchestration flow and state transition diagrams.' },
  { title: 'Database Architect', icon: <FiDatabase size={18} />, desc: 'Generates secure MongoDB structures and index maps.' },
  { title: 'Code Generator', icon: <FiCpu size={18} />, desc: 'Assembles full-stack FastAPI models and UI structures.' },
  { title: 'Self-Repair Agent', icon: <FiCheckCircle size={18} />, desc: 'Runs validations, fixes syntax errors, and refactors paths.' }
];

const simulationLogs = [
  'Initializing Saarthi Multi-Agent workspace...',
  'User Concept: "Real-time task board with Redis caching"',
  'Requirement Analyzer: Parsing functional modules...',
  'Blueprint Planner: Generated LangGraph configuration...',
  'Database Architect: Creating MongoDB Atlas schemas...',
  'Database Architect: MongoDB MCP connection established.',
  'Backend Designer: Generating FastAPI endpoint controllers...',
  'API Contract: Created swagger.json blueprint.',
  'Security Architect: Enforcing JWT + RBAC security rules...',
  'Code Generator: Compiling backend and React views...',
  'Compiler: Verifying execution logs...',
  'Self-Repair: Patching import references (0 errors)...',
  'Export Engine: Deployment build bundle completed successfully.'
];

const FeaturedProject = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [logMessages, setLogMessages] = useState([simulationLogs[0]]);

  // Rotate steps and add logs over time
  useEffect(() => {
    const stepInterval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % workflowSteps.length);
    }, 4000);

    return () => clearInterval(stepInterval);
  }, []);

  useEffect(() => {
    let logIndex = 0;

    const logInterval = setInterval(() => {
      logIndex = (logIndex + 1) % simulationLogs.length;
      setLogMessages((prev) => {
        const next = [...prev, simulationLogs[logIndex]];
        if (next.length > 5) next.shift(); // Keep last 5
        return next;
      });
    }, 2500);

    return () => clearInterval(logInterval);
  }, []);


  return (
    <section id="featured" className="py-24 relative border-t border-border bg-surface/10">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] glow-primary rounded-full pointer-events-none opacity-[0.05]" />
      
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-left mb-16">
          <span className="font-mono text-sm font-semibold text-primary uppercase tracking-wider">
            Centerpiece Showcase
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-text mt-3 tracking-tight">
            Saarthi
          </h2>
          <p className="text-lg md:text-xl text-muted font-medium mt-2">
            Enterprise Grade AI Co-Founder and Multi-Agent Workspace
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Description Column */}
          <div className="lg:col-span-5 flex flex-col justify-between text-left space-y-6">
            <div className="space-y-6">
              <p className="text-base md:text-lg text-muted/90 leading-relaxed">
                Saarthi transforms loose product ideas into fully implementation-ready software systems. Using intelligent orchestration, it coordinate multiple specialized AI agents that map databases, write test cases, build schemas, and output clean codebases.
              </p>

              {/* Tech Badges */}
              <div className="flex flex-wrap gap-2 pt-2">
                {['Next.js 16', 'React 19', 'FastAPI', 'Google ADK', 'LangGraph', 'Gemini 3.5', 'MongoDB Atlas', 'Vertex AI', 'Cloud Run'].map((tech) => (
                  <span
                    key={tech}
                    className="font-mono text-xs font-semibold px-3 py-1 rounded bg-surface border border-border text-muted hover:text-primary transition-colors duration-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Links & CTA */}
            <div className="flex items-center space-x-4 pt-6">
              <a
                href="https://github.com/prakhar-bip/Saarthi"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 border border-border bg-surface hover:bg-surface/85 hover:border-primary/50 text-text font-medium px-5 py-2.5 rounded-lg transition-all duration-300"
              >
                <FiGithub size={18} />
                <span>GitHub Repo</span>
              </a>
              <a
                href="https://sarthi-gtu3eysx6q-uc.a.run.app"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 bg-primary hover:bg-primary/95 text-white dark:text-darkBg font-medium px-5 py-2.5 rounded-lg shadow-md transition-all duration-300"
              >
                <FiExternalLink size={18} />
                <span>Live Demo</span>
              </a>
            </div>
          </div>

          {/* Right Workflow Pipeline & Monitor Column */}
          <div className="lg:col-span-7 flex flex-col space-y-6">
            
            {/* Horizontal Workflow Line */}
            <div className="p-6 rounded-xl border border-border bg-surface/50">
              <h4 className="font-mono text-xs uppercase tracking-wider text-muted font-bold mb-6 text-left">
                Agent Compilation Pipeline
              </h4>
              <div className="grid grid-cols-5 gap-2 relative">
                {workflowSteps.map((step, idx) => {
                  const isActive = idx === activeStep;
                  return (
                    <div key={idx} className="flex flex-col items-center text-center relative z-10">
                      <div
                        className={`p-3 rounded-full border transition-all duration-500 ${
                          isActive
                            ? 'border-primary bg-primary/20 text-primary scale-110 shadow-sm shadow-primary/30'
                            : 'border-border bg-surface text-muted'
                        }`}
                      >
                        {step.icon}
                      </div>
                      <span
                        className={`text-[10px] md:text-xs font-semibold mt-3 transition-colors duration-300 hidden sm:block ${
                          isActive ? 'text-primary' : 'text-muted'
                        }`}
                      >
                        {step.title}
                      </span>
                    </div>
                  );
                })}
                {/* SVG Pipeline Line */}
                <div className="absolute top-[21px] left-[10%] right-[10%] h-[1px] bg-border z-0">
                  <div
                    className="h-full bg-primary transition-all duration-1000"
                    style={{ width: `${(activeStep / (workflowSteps.length - 1)) * 100}%` }}
                  />
                </div>
              </div>
              
              {/* Step Description */}
              <div className="mt-6 pt-4 border-t border-border/50 text-left min-h-[50px]">
                <p className="text-sm text-text font-medium">
                  {workflowSteps[activeStep].title}
                </p>
                <p className="text-xs text-muted mt-1">
                  {workflowSteps[activeStep].desc}
                </p>
              </div>
            </div>

            {/* Simulated Workspace Console */}
            <div className="p-6 rounded-xl border border-border bg-[#090D12] text-left font-mono text-xs overflow-hidden shadow-inner flex flex-col space-y-2 h-48">
              <div className="flex items-center justify-between border-b border-border/20 pb-2 mb-2 text-muted">
                <div className="flex items-center space-x-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500" />
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
                  <span className="w-2.5 h-2.5 rounded-full bg-green-500" />
                  <span className="pl-2">saarthi-agent-orchestrator.log</span>
                </div>
                <span className="text-[10px]">v1.0.0</span>
              </div>
              <div className="flex-1 flex flex-col justify-end space-y-1.5 overflow-hidden">
                <AnimatePresence>
                  {logMessages.map((log) => (
                    <motion.div
                      key={log}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className={`${
                        log.startsWith('User Concept') ? 'text-accent' :
                        log.startsWith('Compiler') || log.startsWith('Export') ? 'text-primary' : 'text-muted/80'
                      }`}
                    >
                      &gt; {log}
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default FeaturedProject;
