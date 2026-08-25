"use client";

import { useEffect, useState } from "react";
import { RESUMES } from "@/lib/portfolio-data";
import { ANALYTICS_EVENTS, trackEvent } from "@/lib/analytics";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";

function PreviewSkeleton() {
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-secondary/20">
      <div className="w-full max-w-2xl space-y-4 p-8">
        <div className="h-8 w-1/2 animate-pulse rounded bg-muted-foreground/20" />
        <div className="h-3 w-1/3 animate-pulse rounded bg-muted-foreground/15" />
        <div className="h-px bg-border" />
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="h-3 animate-pulse rounded bg-muted-foreground/10"
            style={{
              width: `${95 - ((i * 7) % 45)}%`,
              animationDelay: `${i * 70}ms`,
            }}
          />
        ))}
        <p className="pt-4 font-mono text-[10px] tracking-widest text-muted-foreground uppercase">
          Loading resume…
        </p>
      </div>
    </div>
  );
}

export function ResumeViewer() {
  const [active, setActive] = useState(0);
  const [open, setOpen] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const resume = RESUMES[active] ?? RESUMES[0]!;

  // Reset the skeleton whenever the visible document changes.
  useEffect(() => {
    setLoaded(false);
  }, [resume.fileId, open]);

  // Explicit ESC-to-close (in addition to the dialog default).
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const openPreview = (i: number) => {
    setActive(i);
    setOpen(true);
    trackEvent(ANALYTICS_EVENTS.resumePreviewOpen, {
      version: RESUMES[i]!.title,
      fileId: RESUMES[i]!.fileId,
    });
  };

  const switchVersion = (i: number) => {
    if (i === active) return;
    setActive(i);
    trackEvent(ANALYTICS_EVENTS.resumeVersionSwitch, {
      version: RESUMES[i]!.title,
      from: resume.title,
    });
  };

  return (
    <div className="border border-border bg-background">
      <div className="grid grid-cols-1 gap-px bg-border md:grid-cols-3">
        {RESUMES.map((r, i) => (
          <div
            key={r.fileId}
            className="group flex flex-col bg-background p-6 transition-colors hover:bg-surface"
          >
            <div className="mb-3 flex items-center gap-2 font-mono text-[10px] text-primary">
              <span className="inline-block size-1.5 rounded-full bg-primary animate-pulse-dot" />
              {r.code}
            </div>
            <h3 className="mb-1 text-lg font-bold">{r.title}</h3>
            <p className="font-mono text-xs text-muted-foreground">{r.subtext}</p>
            <button
              type="button"
              onClick={() => openPreview(i)}
              className="mt-6 inline-flex w-fit items-center bg-primary px-4 py-2 font-mono text-xs tracking-widest text-primary-foreground uppercase transition-all hover:brightness-110"
            >
              Preview Resume
            </button>
          </div>
        ))}
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="fixed inset-0 z-50 flex h-screen w-screen max-w-none translate-x-0 translate-y-0 flex-col rounded-none border-0 bg-background p-0">
          <DialogTitle className="sr-only">
            {resume.title} resume preview
          </DialogTitle>

          {/* Top bar */}
          <div className="flex h-14 shrink-0 items-center justify-between border-b border-border px-4 pr-14">
            <div className="flex items-center gap-2 overflow-x-auto font-mono text-[10px] text-muted-foreground">
              {RESUMES.map((r, i) => (
                <button
                  key={r.fileId}
                  type="button"
                  onClick={() => switchVersion(i)}
                  aria-pressed={active === i}
                  className={`shrink-0 border px-3 py-1.5 text-xs transition-all duration-300 ${
                    active === i
                      ? "border-primary bg-primary/10 text-primary"
                      : "border-border hover:border-muted-foreground hover:text-foreground"
                  }`}
                >
                  {r.title}
                </button>
              ))}
            </div>

            <div className="flex shrink-0 items-center gap-3">
              <span className="hidden font-mono text-[10px] tracking-widest text-muted-foreground uppercase sm:inline">
                Esc to close
              </span>
              <a
                href={resume.downloadUrl}
                target="_blank"
                rel="noreferrer"
                onClick={() =>
                  trackEvent(ANALYTICS_EVENTS.resumeDownload, {
                    version: resume.title,
                    fileId: resume.fileId,
                  })
                }
                className="bg-primary px-4 py-2 font-mono text-xs tracking-widest text-primary-foreground uppercase transition-all hover:brightness-110"
              >
                Download PDF
              </a>
            </div>
          </div>

          {/* Full-screen preview */}
          <div className="relative flex-1 overflow-hidden">
            {!loaded && <PreviewSkeleton />}
            <iframe
              key={resume.fileId}
              src={resume.previewUrl}
              title={`${resume.title} resume preview`}
              onLoad={() => setLoaded(true)}
              className={`absolute inset-0 h-full w-full bg-secondary/20 transition-opacity duration-500 ${
                loaded ? "opacity-100" : "opacity-0"
              }`}
              allow="autoplay"
            />
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
