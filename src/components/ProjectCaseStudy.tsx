import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

type CaseStudy = {
  problem: string;
  story: string;
  role: string;
  outcome: string;
};

export type Project = {
  name: string;
  category: string;
  repo: string;
  demo: string | null;
  tech: string[];
  metric: string;
  highlights: string[];
  caseStudy: CaseStudy;
};

export function ProjectCaseStudy({ project }: { project: Project }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <article className="bg-background p-8 transition-colors hover:bg-surface">
        <div className="flex items-start justify-between gap-4">
          <span className="font-mono text-[10px] tracking-widest text-primary uppercase">
            {project.category}
          </span>
          <span className="font-mono text-[10px] text-muted-foreground">
            {project.metric}
          </span>
        </div>

        <button
          type="button"
          onClick={() => setOpen(true)}
          className="group mt-4 block text-left"
        >
          <h3 className="text-2xl font-bold tracking-tight transition-colors group-hover:text-primary">
            {project.name}
          </h3>
        </button>

        <ul className="mt-4 space-y-2">
          {project.highlights.map((h) => (
            <li key={h} className="flex gap-3 text-sm text-pretty text-muted-foreground">
              <span className="mt-2 size-1 shrink-0 bg-primary" />
              {h}
            </li>
          ))}
        </ul>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span
              key={t}
              className="border border-border px-2 py-1 font-mono text-[10px] text-faint"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap gap-6 border-t border-border pt-4 font-mono text-[10px] tracking-widest uppercase">
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="text-primary transition-opacity hover:opacity-80"
          >
            Read the story &rarr;
          </button>
          <a
            href={project.repo}
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-primary"
          >
            View Code &rarr;
          </a>
          {project.demo ? (
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              className="transition-colors hover:text-primary"
            >
              Live Demo &rarr;
            </a>
          ) : null}
        </div>
      </article>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-h-[85vh] overflow-y-auto border-border bg-background sm:max-w-2xl">
          <DialogHeader>
            <span className="font-mono text-[10px] tracking-widest text-primary uppercase">
              {project.category}
            </span>
            <DialogTitle className="text-3xl font-black tracking-tighter">
              {project.name}
            </DialogTitle>
            <DialogDescription className="text-base text-pretty">
              {project.caseStudy.problem}
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-8 pt-2">
            <section>
              <h4 className="mb-2 font-mono text-[10px] tracking-widest text-muted-foreground uppercase">
                The story
              </h4>
              <p className="text-sm leading-relaxed text-pretty">
                {project.caseStudy.story}
              </p>
            </section>

            <section>
              <h4 className="mb-2 font-mono text-[10px] tracking-widest text-muted-foreground uppercase">
                My role
              </h4>
              <p className="text-sm leading-relaxed text-pretty">
                {project.caseStudy.role}
              </p>
            </section>

            <section>
              <h4 className="mb-2 font-mono text-[10px] tracking-widest text-muted-foreground uppercase">
                What it solved
              </h4>
              <p className="text-sm leading-relaxed text-pretty">
                {project.caseStudy.outcome}
              </p>
            </section>

            <section>
              <h4 className="mb-3 font-mono text-[10px] tracking-widest text-muted-foreground uppercase">
                Built with
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="border border-border px-2 py-1 font-mono text-[10px] text-muted-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </section>

            <div className="flex flex-wrap gap-6 border-t border-border pt-4 font-mono text-[10px] tracking-widest uppercase">
              <a
                href={project.repo}
                target="_blank"
                rel="noreferrer"
                className="border-b border-primary pb-1 text-primary"
              >
                View Code &rarr;
              </a>
              {project.demo ? (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="border-b border-muted-foreground pb-1 text-muted-foreground transition-colors hover:text-foreground"
                >
                  Live Demo &rarr;
                </a>
              ) : null}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
