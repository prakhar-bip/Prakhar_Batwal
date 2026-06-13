import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Premium SVG-based Full Body Robot with 3D perspective walking depth scaling
const RobotSVG = ({ section, legAngle }) => {
  const getRobotFace = () => {
    switch (section) {
      case 'hero': // Smiling arches
        return (
          <>
            <path d="M25 21 Q28 17 31 21" stroke="var(--color-primary)" strokeWidth="2.2" fill="none" strokeLinecap="round" />
            <path d="M37 21 Q40 17 43 21" stroke="var(--color-primary)" strokeWidth="2.2" fill="none" strokeLinecap="round" />
            <path d="M31 27 Q34 29 37 27" stroke="var(--color-primary)" strokeWidth="1.5" fill="none" strokeLinecap="round" />
          </>
        );
      case 'about': // Attentive / Smart Glasses
        return (
          <>
            <rect x="24" y="19" width="7" height="5" rx="1.5" stroke="var(--color-primary)" strokeWidth="1.8" fill="none" />
            <rect x="37" y="19" width="7" height="5" rx="1.5" stroke="var(--color-primary)" strokeWidth="1.8" fill="none" />
            <line x1="31" y1="21.5" x2="37" y2="21.5" stroke="var(--color-primary)" strokeWidth="1.8" />
          </>
        );
      case 'capabilities': // Cool (Sunglasses / Visor)
        return (
          <>
            <polygon points="23,18 45,18 43,23 25,23" fill="var(--color-accent)" stroke="var(--color-accent)" strokeWidth="1" strokeLinejoin="round" />
            <line x1="26" y1="19.5" x2="32" y2="19.5" stroke="#FFFFFF" strokeWidth="0.8" />
          </>
        );
      case 'skills': // Taking Interest (Tilted curious head/eyes)
        return (
          <>
            <circle cx="28" cy="22" r="3" fill="var(--color-primary)" />
            <circle cx="40" cy="22" r="3" fill="var(--color-primary)" />
            <circle cx="28" cy="21" r="1" fill="#FFFFFF" />
            <circle cx="40" cy="21" r="1" fill="#FFFFFF" />
            <path d="M30 27 Q34 25 38 27" stroke="var(--color-primary)" strokeWidth="1.5" fill="none" strokeLinecap="round" />
          </>
        );
      case 'featured': // Proud (Happy wide eyes & smiling)
        return (
          <>
            <circle cx="28" cy="21" r="3.5" fill="var(--color-accent)" />
            <circle cx="40" cy="21" r="3.5" fill="var(--color-accent)" />
            <circle cx="29" cy="20" r="1" fill="#FFFFFF" />
            <circle cx="41" cy="20" r="1" fill="#FFFFFF" />
            <path d="M30 26.5 Q34 29.5 38 26.5" stroke="var(--color-accent)" strokeWidth="1.8" fill="none" strokeLinecap="round" />
          </>
        );
      case 'projects': // Scanning/Radar
        return (
          <>
            <line x1="24" y1="21.5" x2="44" y2="21.5" stroke="var(--color-primary)" strokeWidth="2.5" strokeLinecap="round" />
            <motion.line
              x1="24"
              y1="21.5"
              x2="44"
              y2="21.5"
              stroke="var(--color-primary)"
              strokeWidth="1"
              animate={{ y: [-3, 3, -3] }}
              transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
            />
          </>
        );
      case 'timeline': // Calm (Relaxed curved eyes)
        return (
          <>
            <path d="M25 22 Q29 25 33 22" stroke="var(--color-primary)" strokeWidth="2" fill="none" strokeLinecap="round" />
            <path d="M35 22 Q39 25 43 22" stroke="var(--color-primary)" strokeWidth="2" fill="none" strokeLinecap="round" />
            <line x1="31" y1="27" x2="37" y2="27" stroke="var(--color-primary)" strokeWidth="1.5" strokeLinecap="round" />
          </>
        );
      case 'philosophy': // Thoughtful closed lines
        return (
          <>
            <line x1="25" y1="21" x2="31" y2="21" stroke="var(--color-primary)" strokeWidth="2" />
            <line x1="37" y1="21" x2="43" y2="21" stroke="var(--color-primary)" strokeWidth="2" />
          </>
        );
      case 'contact': // Heart eyes
        return (
          <>
            <text x="28" y="24" fill="#FF5C5C" fontSize="11" textAnchor="middle">♥</text>
            <text x="40" y="24" fill="#FF5C5C" fontSize="11" textAnchor="middle">♥</text>
          </>
        );
      default:
        return (
          <>
            <circle cx="28" cy="21" r="2.5" fill="var(--color-primary)" />
            <circle cx="40" cy="21" r="2.5" fill="var(--color-primary)" />
          </>
        );
    }
  };

  // Define arms paths based on active section (postures)
  let leftArmD = "M19 48 L12 68";
  let rightArmD = "M45 48 L52 68";
  let chestGlow = "var(--color-primary)";

  switch (section) {
    case 'hero': // Waving Left Arm posture
      leftArmD = "M19 48 Q12 36 10 24 Q16 16 20 8";
      break;
    case 'about': // Attentive (Hands behind back)
      leftArmD = "M19 48 L13 65 L22 72";
      rightArmD = "M45 48 L51 65 L42 72";
      break;
    case 'capabilities': // Cool (Arms Crossed)
      leftArmD = "M19 48 Q28 55 35 52";
      rightArmD = "M45 48 Q36 55 29 52";
      chestGlow = "var(--color-accent)";
      break;
    case 'skills': // Pointing Right
      leftArmD = "M19 48 L12 65";
      rightArmD = "M45 48 L58 48 L64 45";
      break;
    case 'featured': // Proud (Hands on hips)
      leftArmD = "M19 48 L11 60 L18 68";
      rightArmD = "M45 48 L53 60 L46 68";
      chestGlow = "var(--color-accent)";
      break;
    case 'projects': // Attentive scanning
      leftArmD = "M19 48 L25 65 L32 62";
      rightArmD = "M45 48 L52 68";
      break;
    case 'timeline': // Calm folded hands
      leftArmD = "M19 48 L27 65 L32 65";
      rightArmD = "M45 48 L37 65 L32 65";
      chestGlow = "var(--color-accent)";
      break;
    case 'philosophy': // Hand on chin
      leftArmD = "M19 48 L24 64 L30 36";
      rightArmD = "M45 48 L37 65 L32 65";
      break;
    case 'contact': // Double Waving
      leftArmD = "M19 48 Q12 36 10 24 Q16 16 20 8";
      rightArmD = "M45 48 Q52 36 54 24 Q48 16 44 8";
      chestGlow = "#FF5C5C";
      break;
  }

  // Define dynamic animations for left and right arm
  let leftArmAnimation = { rotate: 0 };
  let leftArmTransition = {};
  let rightArmAnimation = { rotate: 0 };
  let rightArmTransition = {};

  if (section === 'hero') {
    leftArmAnimation = { rotate: [0, -18, 12, -18, 0] };
    leftArmTransition = { repeat: Infinity, duration: 1.6, ease: "easeInOut" };
  } else if (legAngle !== 0) {
    leftArmAnimation = { rotate: -legAngle * 0.5 };
  }

  if (section === 'contact') {
    leftArmAnimation = { rotate: [0, -15, 10, -15, 0] };
    leftArmTransition = { repeat: Infinity, duration: 1.6, ease: "easeInOut" };
    rightArmAnimation = { rotate: [0, 15, -10, 15, 0] };
    rightArmTransition = { repeat: Infinity, duration: 1.6, ease: "easeInOut" };
  } else if (legAngle !== 0) {
    rightArmAnimation = { rotate: legAngle * 0.5 };
  }

  // 3D Depth Scaling based on leg angle (closer limb becomes thicker and scales outward)
  const leftLegWidth = 3.5 + (legAngle / 20) * 0.8;
  const rightLegWidth = 3.5 - (legAngle / 20) * 0.8;

  const leftArmWidth = 3.0;
  const rightArmWidth = 3.0;

  // Offset paths slightly left/right based on swing to simulate 3D walking stride breadth
  const leftLegPath = `M26 80 L${26 - (legAngle / 15)} 112 L${31 - (legAngle / 15)} 112`;
  const rightLegPath = `M38 80 L${38 + (legAngle / 15)} 112 L${43 + (legAngle / 15)} 112`;

  return (
    <svg viewBox="0 0 80 130" className="w-16 h-28" xmlns="http://www.w3.org/2000/svg">
      {/* Robot Antenna */}
      <line x1="32" y1="12" x2="32" y2="4" stroke="var(--color-border)" strokeWidth="1.8" />
      <circle cx="32" cy="3" r="1.5" fill={chestGlow} />

      {/* Main Breathing Bobbing Container (breathes continuously when standing still) */}
      <motion.g
        animate={legAngle === 0 ? { y: [0, -2, 0] } : { y: 0 }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      >
        {/* Robot Head */}
        <rect x="20" y="12" width="24" height="24" rx="8" fill="var(--color-surface)" stroke="var(--color-border)" strokeWidth="1.8" />
        <rect x="22" y="14" width="20" height="16" rx="5" fill="#0D1117" stroke="#30363D" strokeWidth="1" />
        
        {/* Neck */}
        <rect x="30" y="36" width="4" height="6" fill="var(--color-border)" />

        {/* Torso/Body */}
        <rect x="18" y="42" width="28" height="38" rx="6" fill="var(--color-surface)" stroke="var(--color-border)" strokeWidth="1.8" />
        {/* Chest Light Core */}
        <circle cx="32" cy="61" r="4.5" fill={chestGlow} className="animate-pulse" />

        {/* Animated Left Arm */}
        <motion.path
          d={leftArmD}
          stroke="var(--color-border)"
          strokeWidth={leftArmWidth}
          strokeLinecap="round"
          fill="none"
          animate={leftArmAnimation}
          transition={leftArmTransition}
          style={{ transformOrigin: "19px 48px" }}
        />

        {/* Animated Right Arm */}
        <motion.path
          d={rightArmD}
          stroke="var(--color-border)"
          strokeWidth={rightArmWidth}
          strokeLinecap="round"
          fill="none"
          animate={rightArmAnimation}
          transition={rightArmTransition}
          style={{ transformOrigin: "45px 48px" }}
        />

        {/* Solid shoulder joints overlay to cover connection point and prevent detachment */}
        <circle cx="19" cy="48" r="2.5" fill="var(--color-surface)" stroke="var(--color-border)" strokeWidth="1.2" />
        <circle cx="45" cy="48" r="2.5" fill="var(--color-surface)" stroke="var(--color-border)" strokeWidth="1.2" />

        {/* Face Screen Expressions (with periodic eye blinking animation loop) */}
        <motion.g
          animate={{ scaleY: [1, 1, 1, 0.1, 1, 1] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
          style={{ transformOrigin: "32px 21px" }}
        >
          {getRobotFace()}
        </motion.g>
      </motion.g>

      {/* Animated Left Leg (Thicker joint with horizontal foot line) */}
      <motion.path
        d={leftLegPath}
        stroke="var(--color-border)"
        strokeWidth={leftLegWidth}
        strokeLinecap="round"
        fill="none"
        animate={{ rotate: legAngle }}
        style={{ transformOrigin: "26px 80px" }}
      />

      {/* Animated Right Leg (Thicker joint with horizontal foot line) */}
      <motion.path
        d={rightLegPath}
        stroke="var(--color-border)"
        strokeWidth={rightLegWidth}
        strokeLinecap="round"
        fill="none"
        animate={{ rotate: -legAngle }}
        style={{ transformOrigin: "38px 80px" }}
      />
    </svg>
  );
};

const TourGuide = () => {
  const [currentSection, setCurrentSection] = useState('hero');
  // Welcome bubble is visible by default at first
  const [isBubbleVisible, setIsBubbleVisible] = useState(true);
  const [robotTop, setRobotTop] = useState('10vh');
  const [legAngle, setLegAngle] = useState(0);

  const scrollPhase = useRef(0);
  const lastScrollY = useRef(0);
  const stopTimeout = useRef(null);

  const sectionMessages = {
    hero: "👋 Welcome! I'm Prakhar's tour companion. Scroll down to start exploring!",
    about: "📖 Here is his academic background at Parul University and core engineering focus.",
    capabilities: "🕶️ Cool capabilities: 28-agent systems and sub-50ms queue latency.",
    skills: "📊 Ecosystem interest: click blueprint nodes to check backend/MLOps readiness.",
    featured: "💻 Proud centerpiece: Saarthi! It conceptualizes, designs, and repairs full-stack apps.",
    projects: "⚙️ Here are 7 other backend projects showing database hit rates and MLOps metrics.",
    timeline: "🏆 Calm milestones: Top 10 SIH hackathon finals and 400+ DSA solved.",
    philosophy: "🧠 Here is his core belief: write clean, maintainable systems that scale reliably.",
    contact: "📬 Let's collaborate! Reach out directly via email, LinkedIn, or GitHub."
  };

  useEffect(() => {
    const sectionIds = ['hero', 'about', 'capabilities', 'skills', 'featured', 'projects', 'timeline', 'philosophy', 'contact'];
    
    const observerOptions = {
      root: null,
      rootMargin: '-30% 0px -40% 0px',
      threshold: 0.1
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          setCurrentSection(id);
          // Automatically open the speech bubble to introduce the new section!
          setIsBubbleVisible(true);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    
    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Continuous scroll mapping & leg-swing walking cycle
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const diff = Math.abs(currentScrollY - lastScrollY.current);
      
      // Advance leg swing cycle phase dynamically based on scroll delta
      if (diff > 0.5) {
        scrollPhase.current += diff * 0.035;
        const targetAngle = Math.sin(scrollPhase.current) * 20;
        setLegAngle(targetAngle);
      }
      
      lastScrollY.current = currentScrollY;

      // Calculate continuous top offset
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const pct = maxScroll > 0 ? currentScrollY / maxScroll : 0;
      
      const minTop = 10; // vh
      const maxTop = 84; // vh
      const currentTop = minTop + pct * (maxTop - minTop);
      setRobotTop(`${currentTop}vh`);

      // Smoothly reset legs when scrolling halts
      if (stopTimeout.current) clearTimeout(stopTimeout.current);
      stopTimeout.current = setTimeout(() => {
        setLegAngle(0);
      }, 100);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (stopTimeout.current) clearTimeout(stopTimeout.current);
    };
  }, []);

  // Auto-dismiss bubble after exactly 2 seconds when shown (to avoid blocking viewport)
  useEffect(() => {
    if (isBubbleVisible) {
      const timer = setTimeout(() => {
        setIsBubbleVisible(false);
      }, 2000); // 2000ms = 2 seconds
      return () => clearTimeout(timer);
    }
  }, [isBubbleVisible, currentSection]);

  const handleRobotClick = () => {
    setIsBubbleVisible(!isBubbleVisible);
  };

  return (
    <>
      {/* Walkway Line on the left side (aligned precisely to robot's center axis) */}
      <div className="fixed left-[59px] top-0 bottom-0 w-[2px] bg-border/20 z-[58] hidden md:block" />

      {/* Scroll-bound Robot Companion */}
      <motion.div
        style={{
          top: robotTop
        }}
        className="fixed left-5 z-[60] font-sans flex items-center space-x-4 pointer-events-none select-none max-w-xs md:max-w-md hidden md:flex"
      >
        {/* Robot Body Button */}
        <div className="relative flex flex-col items-center pointer-events-auto flex-shrink-0">
          <button
            onClick={handleRobotClick}
            className="cursor-pointer bg-transparent border-none outline-none focus:outline-none hover:scale-105 transition-transform duration-200"
            title="Click to toggle speech explanation"
          >
            <RobotSVG section={currentSection} legAngle={legAngle} />
          </button>
        </div>

        {/* Speech Bubble on the right of the robot */}
        <AnimatePresence>
          {isBubbleVisible && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8, x: 10 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              exit={{ opacity: 0, scale: 0.8, x: 10 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className="glassmorphism p-3.5 rounded-2xl shadow-xl border border-border/70 text-left pointer-events-auto cursor-default relative w-64 md:w-80"
            >
              {/* Left-pointing bubble pointer aligned to robot screen height */}
              <div className="absolute left-[-6px] top-1/2 -translate-y-1/2 w-3 h-3 bg-surface border-l border-b border-border/70 rotate-45" />

              <div className="pl-2 pr-5">
                <span className="text-[9px] font-mono font-bold text-primary block mb-0.5">TOUR COMPANION</span>
                <p className="text-[11px] font-semibold text-text/90 leading-relaxed">
                  {sectionMessages[currentSection]}
                </p>
              </div>
              
              <button
                onClick={() => setIsBubbleVisible(false)}
                className="absolute top-1.5 right-1.5 p-0.5 text-muted hover:text-text cursor-pointer hover:bg-surface/50 rounded-full transition-colors text-[9px] font-bold"
                title="Dismiss text"
              >
                ✕
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </>
  );
};

export default TourGuide;
