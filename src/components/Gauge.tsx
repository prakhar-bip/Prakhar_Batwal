import { useEffect, useRef, useState } from "react";

/** Reveals its children once scrolled into view (one-shot). */
export function useInView<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return { ref, inView };
}

export function Gauge({
  name,
  level,
  metric,
}: {
  name: string;
  level: number;
  metric: string;
}) {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <div ref={ref} className="group">
      <div className="mb-2 flex items-baseline justify-between font-mono text-[10px]">
        <span className="text-foreground">{name}</span>
        <span className="text-muted-foreground">{level}%</span>
      </div>
      <div className="relative h-1 overflow-hidden bg-border">
        <div
          className="gauge-fill absolute top-0 left-0 h-full bg-primary"
          style={{ width: inView ? `${level}%` : "0%" }}
        />
      </div>
      <p className="mt-2 font-mono text-[9px] tracking-wide text-faint uppercase opacity-0 transition-opacity group-hover:opacity-100">
        {metric}
      </p>
    </div>
  );
}
