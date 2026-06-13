import { motion } from 'framer-motion';

const BackgroundWaves = () => {
  return (
    <div className="fixed inset-0 w-full h-full z-0 pointer-events-none overflow-hidden bg-transparent">
      {/* Premium Ambient Radial Blurs */}
      <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-primary/5 rounded-full filter blur-[120px] animate-pulse pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-accent/5 rounded-full filter blur-[120px] animate-pulse pointer-events-none" style={{ animationDelay: '2s' }} />

      <svg
        className="absolute w-[200%] h-full top-0 left-0"
        viewBox="0 0 2400 800"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Wave 1: Primary Cyan/Blue, upper wave */}
        <motion.path
          d="M 0 250 Q 300 150, 600 250 T 1200 250 Q 1500 150, 1800 250 T 2400 250"
          fill="none"
          stroke="var(--color-primary)"
          strokeWidth="1.5"
          opacity="0.22"
          style={{ filter: 'drop-shadow(0 0 8px var(--color-primary))' }}
          animate={{
            x: [0, -1200],
            y: [0, 15, 0],
          }}
          transition={{
            x: {
              ease: "linear",
              duration: 25,
              repeat: Infinity,
            },
            y: {
              ease: "easeInOut",
              duration: 8,
              repeat: Infinity,
            }
          }}
        />

        {/* Wave 2: Accent Green, opposite phase, middle wave */}
        <motion.path
          d="M 0 450 Q 300 550, 600 450 T 1200 450 Q 1500 550, 1800 450 T 2400 450"
          fill="none"
          stroke="var(--color-accent)"
          strokeWidth="1.2"
          opacity="0.16"
          style={{ filter: 'drop-shadow(0 0 8px var(--color-accent))' }}
          animate={{
            x: [0, -1200],
            y: [0, -20, 0],
          }}
          transition={{
            x: {
              ease: "linear",
              duration: 35,
              repeat: Infinity,
            },
            y: {
              ease: "easeInOut",
              duration: 10,
              repeat: Infinity,
            }
          }}
        />

        {/* Wave 3: Subtle deep Primary Blue, lower wave */}
        <motion.path
          d="M 0 650 Q 300 580, 600 650 T 1200 650 Q 1500 580, 1800 650 T 2400 650"
          fill="none"
          stroke="var(--color-primary)"
          strokeWidth="1.0"
          opacity="0.10"
          animate={{
            x: [0, -1200],
            y: [0, 10, 0],
          }}
          transition={{
            x: {
              ease: "linear",
              duration: 45,
              repeat: Infinity,
            },
            y: {
              ease: "easeInOut",
              duration: 12,
              repeat: Infinity,
            }
          }}
        />
      </svg>
    </div>
  );
};

export default BackgroundWaves;
