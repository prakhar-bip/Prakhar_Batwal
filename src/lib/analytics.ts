/**
 * Lightweight, provider-agnostic event tracking.
 * Forwards to whichever analytics script is present on the page
 * (Google Analytics / GTM / Plausible / Umami) and keeps a local
 * tally so counts are inspectable even without a provider.
 */

type Props = Record<string, string | number | boolean>;

const STORAGE_KEY = "portfolio:events";

function bumpLocalCount(name: string, props: Props) {
  if (typeof window === "undefined") return;
  try {
    const key = `${name}:${props["version"] ?? "all"}`;
    const raw = window.localStorage.getItem(STORAGE_KEY);
    const tally = raw ? (JSON.parse(raw) as Record<string, number>) : {};
    tally[key] = (tally[key] ?? 0) + 1;
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(tally));
  } catch {
    /* storage unavailable — ignore */
  }
}

export function trackEvent(name: string, props: Props = {}) {
  if (typeof window === "undefined") return;

  const w = window as unknown as {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
    plausible?: (name: string, opts?: { props: Props }) => void;
    umami?: { track: (name: string, props?: Props) => void };
  };

  try {
    w.gtag?.("event", name, props);
    w.plausible?.(name, { props });
    w.umami?.track(name, props);
    if (!w.gtag && Array.isArray(w.dataLayer)) {
      w.dataLayer.push({ event: name, ...props });
    }
  } catch {
    /* never let tracking break the UI */
  }

  bumpLocalCount(name, props);
  window.dispatchEvent(new CustomEvent("portfolio:track", { detail: { name, props } }));
}

export const ANALYTICS_EVENTS = {
  resumePreviewOpen: "resume_preview_open",
  resumeVersionSwitch: "resume_version_switch",
  resumeDownload: "resume_download_click",
} as const;
