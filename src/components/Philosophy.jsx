import { motion } from 'framer-motion';

const Philosophy = () => {
  return (
    <section id="philosophy" className="py-32 relative border-t border-border bg-surface/20 overflow-hidden flex items-center justify-center">
      
      {/* Premium Ambient SVG Background */}
      <div className="absolute inset-0 z-0 opacity-40">
        <svg viewBox="0 0 1000 400" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          {/* Wave Path 1 */}
          <motion.path
            d="M0,100 C150,150 350,50 500,100 C650,150 850,50 1000,100 L1000,400 L0,400 Z"
            fill="transparent"
            stroke="var(--color-border)"
            strokeWidth="0.8"
            animate={{
              d: [
                "M0,100 C150,150 350,50 500,100 C650,150 850,50 1000,100",
                "M0,130 C180,80 300,120 500,80 C700,40 820,130 1000,130",
                "M0,100 C150,150 350,50 500,100 C650,150 850,50 1000,100"
              ]
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
          />
          {/* Wave Path 2 */}
          <motion.path
            d="M0,150 C200,90 300,210 500,150 C700,90 800,210 1000,150"
            fill="transparent"
            stroke="var(--color-primary)"
            strokeWidth="0.5"
            strokeOpacity="0.4"
            animate={{
              d: [
                "M0,150 C200,90 300,210 500,150 C700,90 800,210 1000,150",
                "M0,110 C220,160 280,110 500,170 C720,230 780,160 1000,110",
                "M0,150 C200,90 300,210 500,150"
              ]
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 1
            }}
          />
        </svg>
      </div>

      <div className="max-w-4xl mx-auto px-6 text-center z-10 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <span className="font-mono text-xs uppercase tracking-widest text-primary font-bold">
            Core Philosophy
          </span>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-text tracking-tight leading-tight select-none">
            "Software engineering is about building systems people can trust."
          </h2>
          <div className="w-16 h-[2px] bg-primary mx-auto my-6" />
          <p className="text-sm md:text-base text-muted font-mono max-w-lg mx-auto">
            Auditability. Scalability. Fault Tolerance.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Philosophy;
