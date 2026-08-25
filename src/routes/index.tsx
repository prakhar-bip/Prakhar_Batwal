import { createFileRoute } from "@tanstack/react-router";
import { AgentGraph } from "@/components/AgentGraph";
import { Gauge } from "@/components/Gauge";
import { ProjectCaseStudy } from "@/components/ProjectCaseStudy";
import { ResumeViewer } from "@/components/ResumeViewer";


import {
  ACHIEVEMENTS,
  BIO,
  CAPABILITIES,
  CREED,
  EDUCATION,
  HERO_METRICS,
  PHILOSOPHY,
  PROFILE,
  PROJECTS,
  
  SAARTHI,
  SKILL_CATEGORIES,
} from "@/lib/portfolio-data";

const TITLE = "Prakhar Batwal — Backend & MLOps Engineer";
const DESCRIPTION =
  "Portfolio of Prakhar Batwal: scalable backend systems, distributed event pipelines, multi-agent AI workspaces, and production MLOps infrastructure.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Status bar */}
      <nav className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-6 font-mono text-[10px] tracking-widest uppercase">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-2">
              <span className="animate-pulse-dot size-2 rounded-full bg-primary" />
              Open to opportunities
            </span>
            <span className="hidden text-muted-foreground md:inline">
              AI · ML · Software Engineer
            </span>
          </div>
          <div className="flex gap-6">
            <a href="#capabilities" className="transition-colors hover:text-primary">
              What I Do
            </a>
            <a href="#saarthi" className="transition-colors hover:text-primary">
              Saarthi
            </a>
            <a href="#resume" className="text-primary">
              Resume
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <header className="relative overflow-hidden border-b border-border px-6 pt-24 pb-16">
        <div className="bg-grid-mesh pointer-events-none absolute inset-0 opacity-[0.35] [mask-image:radial-gradient(ellipse_at_top_right,black,transparent_70%)]" />
        <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-end gap-12 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <div className="mb-4 font-mono text-xs tracking-[0.3em] text-primary uppercase">
              {PROFILE.tagline}
            </div>
            <h1 className="animate-rise-in mb-8 text-6xl leading-[0.85] font-extrabold tracking-tighter text-balance md:text-8xl">
              PRAKHAR
              <br />
              BATWAL
            </h1>
            <p className="max-w-xl text-lg leading-relaxed text-pretty text-muted-foreground">
              {PROFILE.summary}
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href={`mailto:${PROFILE.email}`}
                className="bg-primary px-6 py-3 font-mono text-xs tracking-widest text-primary-foreground uppercase transition-all hover:brightness-110"
              >
                Get in Touch
              </a>
              <a
                href="#projects"
                className="border border-border px-6 py-3 font-mono text-xs tracking-widest uppercase transition-all hover:bg-secondary"
              >
                See My Work
              </a>
            </div>
          </div>

          <div className="border-l border-border pl-8 lg:col-span-4">
            <div className="space-y-8">
              {HERO_METRICS.map((m) => (
                <div key={m.label}>
                  <div className="mb-1 font-mono text-[10px] tracking-widest text-muted-foreground uppercase">
                    {m.label}
                  </div>
                  <div className="font-mono text-3xl">
                    {m.value}{" "}
                    <span className="text-sm text-muted-foreground">{m.unit}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </header>

      {/* About */}
      <section className="border-b border-border px-6 py-20">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <h2 className="mb-8 text-4xl font-black tracking-tighter uppercase">
              Background
            </h2>
            <div className="max-w-2xl space-y-5 text-base leading-relaxed text-pretty text-muted-foreground">
              {BIO.map((p) => (
                <p key={p.slice(0, 24)}>{p}</p>
              ))}
            </div>
            <blockquote className="mt-10 border-l-2 border-primary pl-6">
              <p className="max-w-2xl text-sm leading-relaxed text-pretty italic">
                “{CREED}”
              </p>
            </blockquote>
          </div>
          <div className="lg:col-span-5">
            <div className="border border-border p-8">
              <div className="mb-6 font-mono text-[10px] tracking-widest text-primary uppercase">
                Education
              </div>
              <h3 className="text-xl font-bold">{EDUCATION.institution}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{EDUCATION.degree}</p>
              <p className="mt-6 border-t border-border pt-4 font-mono text-[10px] tracking-widest text-muted-foreground uppercase">
                {EDUCATION.timeline}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Resume links */}
      <section id="resume" className="border-b border-border px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex flex-wrap items-end justify-between gap-4">
            <h2 className="text-4xl font-black tracking-tighter uppercase">
              Resumes
            </h2>
            <div className="font-mono text-[10px] text-muted-foreground">
              3 tailored versions — preview and download
            </div>
          </div>

          <ResumeViewer />

        </div>
      </section>

      {/* Capabilities matrix */}
      <section id="capabilities" className="border-b border-border px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex flex-wrap items-end justify-between gap-4">
            <h2 className="text-4xl font-black tracking-tighter uppercase">
              What I Do
            </h2>
            <div className="font-mono text-[10px] text-muted-foreground">
              8 focus areas
            </div>
          </div>

          <div className="grid grid-cols-1 gap-px border border-border bg-border md:grid-cols-2 lg:grid-cols-4">
            {CAPABILITIES.map((c) => (
              <article
                key={c.id}
                className="space-y-4 bg-background p-6 transition-colors hover:bg-surface"
              >
                <div className="font-mono text-[10px] text-primary">[{c.id}]</div>
                <h4 className="font-bold">{c.name}</h4>
                <p className="text-sm text-pretty text-muted-foreground">
                  {c.description}
                </p>
                <p className="font-mono text-[10px] tracking-wide text-faint">
                  {c.tech}
                </p>
                <div className="flex justify-between border-t border-border pt-4">
                  <span className="font-mono text-[10px] text-muted-foreground">
                    {c.metricLabel}
                  </span>
                  <span className="font-mono text-[10px]">{c.metric}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Featured: Saarthi */}
      <section
        id="saarthi"
        className="relative overflow-hidden border-b border-border bg-surface/40 px-6 py-24"
      >
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 lg:grid-cols-2">
          <div>
            <div className="mb-6 inline-block border border-primary px-3 py-1 font-mono text-[10px] tracking-widest text-primary uppercase">
              Featured Project
            </div>
            <h2 className="mb-6 text-5xl font-black tracking-tighter italic uppercase">
              {SAARTHI.name}
            </h2>
            <p className="mb-8 text-lg leading-relaxed text-pretty text-muted-foreground">
              {SAARTHI.description}
            </p>

            <div className="space-y-6">
              {SAARTHI.steps.map((s, i) => (
                <div key={s.id} className="flex items-start gap-4">
                  <div
                    className={`flex size-6 shrink-0 items-center justify-center rounded-full border font-mono text-[10px] ${
                      i === 0
                        ? "border-primary text-primary"
                        : "border-border text-muted-foreground"
                    }`}
                  >
                    {s.id}
                  </div>
                  <div>
                    <h5
                      className={`text-sm font-bold tracking-wide uppercase ${
                        i === 0 ? "" : "text-muted-foreground"
                      }`}
                    >
                      {s.name}
                    </h5>
                    <p className="text-xs text-muted-foreground">{s.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap gap-2">
              {SAARTHI.tech.map((t) => (
                <span
                  key={t}
                  className="border border-border px-2 py-1 font-mono text-[10px] text-muted-foreground"
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="mt-12 flex gap-4">
              <a
                href={SAARTHI.repo}
                target="_blank"
                rel="noreferrer"
                className="border-b border-primary pb-1 font-mono text-xs text-primary"
              >
                View Code &rarr;
              </a>
              <a
                href={SAARTHI.demo}
                target="_blank"
                rel="noreferrer"
                className="border-b border-muted-foreground pb-1 font-mono text-xs text-muted-foreground transition-colors hover:text-foreground"
              >
                Live Demo
              </a>
            </div>
          </div>

          <div className="relative aspect-square border border-border bg-background p-8">
            <div className="bg-grid-line pointer-events-none absolute inset-0 opacity-10" />
            <AgentGraph />
            <span className="absolute bottom-4 left-1/2 -translate-x-1/2 font-mono text-[10px] tracking-[0.2em] text-faint uppercase">
              How Saarthi's agents work together
            </span>
          </div>
        </div>
      </section>

      {/* Skills gauges */}
      <section className="border-b border-border px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex flex-wrap items-end justify-between gap-4">
            <h2 className="text-4xl font-black tracking-tighter uppercase">
              Skills &amp; Tools
            </h2>
            <div className="font-mono text-[10px] text-muted-foreground">
              20 technologies
            </div>
          </div>
          <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
            {SKILL_CATEGORIES.map((cat) => (
              <div key={cat.title} className="space-y-6">
                <h3 className="border-b border-border pb-2 font-mono text-xs tracking-widest text-muted-foreground uppercase">
                  {cat.title}
                </h3>
                <div className="space-y-4">
                  {cat.skills.map((s) => (
                    <Gauge key={s.name} {...s} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="border-b border-border px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex flex-wrap items-end justify-between gap-4">
            <h2 className="text-4xl font-black tracking-tighter uppercase">
              Projects
            </h2>
            <div className="font-mono text-[10px] text-muted-foreground">
              7 selected projects
            </div>
          </div>

          <div className="grid grid-cols-1 gap-px border border-border bg-border lg:grid-cols-2">
            {PROJECTS.map((p) => (
              <ProjectCaseStudy key={p.name} project={p} />
            ))}
          </div>
        </div>
      </section>


      {/* Achievements */}
      <section className="border-b border-border px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-12 text-4xl font-black tracking-tighter uppercase">
            Highlights
          </h2>
          <div className="grid grid-cols-1 gap-y-8 md:grid-cols-12">
            {ACHIEVEMENTS.map((a) => (
              <div
                key={a.title}
                className="md:col-span-12 md:grid md:grid-cols-12 md:gap-8 md:border-t md:border-border md:py-6"
              >
                <div className="font-mono text-[10px] tracking-widest text-primary uppercase md:col-span-2">
                  {a.period}
                </div>
                <h3 className="mt-2 text-lg font-bold md:col-span-4 md:mt-0">
                  {a.title}
                </h3>
                <p className="mt-2 text-sm text-pretty text-muted-foreground md:col-span-6 md:mt-0">
                  {a.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="border-b border-border px-6 py-24">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-3xl leading-tight font-black tracking-tighter text-balance uppercase md:text-4xl">
            “{PHILOSOPHY.quote}”
          </p>
          <p className="mt-6 font-mono text-[10px] tracking-[0.3em] text-primary uppercase">
            {PHILOSOPHY.subtext}
          </p>
        </div>
      </section>

      {/* Contact footer */}
      <footer className="px-6 py-12">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 font-mono text-xs tracking-widest uppercase md:flex-row">
          <div className="text-muted-foreground">
            Building reliable, thoughtful software
          </div>
          <div className="flex flex-wrap justify-center gap-8">
            <a
              href={PROFILE.links.linkedin}
              target="_blank"
              rel="noreferrer"
              className="transition-colors hover:text-primary"
            >
              LinkedIn
            </a>
            <a
              href={PROFILE.links.github}
              target="_blank"
              rel="noreferrer"
              className="transition-colors hover:text-primary"
            >
              GitHub
            </a>
            <a
              href={PROFILE.links.leetcode}
              target="_blank"
              rel="noreferrer"
              className="transition-colors hover:text-primary"
            >
              LeetCode
            </a>
            <a href={`mailto:${PROFILE.email}`} className="text-primary">
              {PROFILE.email}
            </a>
          </div>
          <div className="text-muted-foreground">&copy; 2026 Prakhar Batwal</div>
        </div>
      </footer>
    </div>
  );
}
