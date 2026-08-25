const round = (n: number) => Math.round(n * 100) / 100;

const RING_NODES = Array.from({ length: 28 }, (_, i) => {
  const angle = (i / 28) * Math.PI * 2 - Math.PI / 2;
  const radius = i % 2 === 0 ? 132 : 106;
  return {
    x: round(160 + Math.cos(angle) * radius),
    y: round(160 + Math.sin(angle) * radius),
    delay: (i % 7) * 0.34,
  };
});

const SPOKES = RING_NODES.filter((_, i) => i % 2 === 0);

/**
 * Animated 28-node multi-agent orchestration graph (Saarthi).
 * Pure SVG + CSS animation — no raster assets.
 */
export function AgentGraph() {
  return (
    <svg
      viewBox="0 0 320 320"
      role="img"
      aria-label="Saarthi multi-agent orchestration graph with 28 agent nodes"
      className="h-full w-full"
    >
      <defs>
        <radialGradient id="core-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="var(--color-primary)" stopOpacity="0.55" />
          <stop offset="100%" stopColor="var(--color-primary)" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* orbit rings */}
      <circle
        cx="160"
        cy="160"
        r="132"
        fill="none"
        stroke="var(--color-border)"
        strokeWidth="1"
      />
      <circle
        cx="160"
        cy="160"
        r="106"
        fill="none"
        stroke="var(--color-border)"
        strokeWidth="1"
        strokeDasharray="2 6"
      />
      <circle
        cx="160"
        cy="160"
        r="62"
        fill="none"
        stroke="var(--color-primary)"
        strokeWidth="1"
        strokeOpacity="0.35"
        strokeDasharray="6 10"
        className="animate-dash-flow"
      />

      {/* spokes from orchestrator to outer agents */}
      {SPOKES.map((node, i) => (
        <line
          key={`spoke-${i}`}
          x1="160"
          y1="160"
          x2={node.x}
          y2={node.y}
          stroke="var(--color-primary)"
          strokeOpacity="0.28"
          strokeWidth="1"
          strokeDasharray="3 9"
          className="animate-dash-flow"
          style={{ animationDelay: `${i * 0.12}s` }}
        />
      ))}

      {/* agent nodes */}
      {RING_NODES.map((node, i) => (
        <g key={`node-${i}`}>
          <circle
            cx={node.x}
            cy={node.y}
            r={i % 4 === 0 ? 4 : 2.6}
            fill={i % 4 === 0 ? "var(--color-primary)" : "var(--color-muted-foreground)"}
            className="animate-node-blink"
            style={{ animationDelay: `${node.delay}s` }}
          />
        </g>
      ))}

      {/* orchestrator core */}
      <circle cx="160" cy="160" r="54" fill="url(#core-glow)" />
      <rect
        x="126"
        y="126"
        width="68"
        height="68"
        fill="var(--color-background)"
        stroke="var(--color-primary)"
        strokeWidth="1"
      />
      <text
        x="160"
        y="155"
        textAnchor="middle"
        className="fill-primary font-mono"
        fontSize="17"
        letterSpacing="1"
      >
        28
      </text>
      <text
        x="160"
        y="172"
        textAnchor="middle"
        className="fill-muted-foreground font-mono"
        fontSize="7"
        letterSpacing="1.6"
      >
        AGENTS
      </text>
      <circle
        cx="160"
        cy="182"
        r="2"
        fill="var(--color-primary)"
        className="animate-pulse-dot"
      />
    </svg>
  );
}
