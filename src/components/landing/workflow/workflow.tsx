import SectionContainer from "@/components/layout/section-container";

const STEPS = [
  {
    step: "01",
    title: "Add a role",
    description:
      "Save the job link, company details, and your initial notes in seconds.",
  },
  {
    step: "02",
    title: "Tailor your resume",
    description:
      "Attach the resume version you submitted and get AI suggestions for improvement.",
  },
  {
    step: "03",
    title: "Prepare & follow up",
    description:
      "Schedule interviews, generate role-specific questions, and track follow-ups.",
  },
  {
    step: "04",
    title: "Learn from outcomes",
    description:
      "Spot patterns, fix bottlenecks, and iterate with insights from your pipeline.",
  },
];

export default function Workflow() {
  return (
    <SectionContainer className="relative">
      <div id="workflow" className="mx-auto max-w-6xl scroll-mt-24">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
              A workflow that stays lightweight
            </h2>
            <p className="mt-3 text-base leading-relaxed text-white/70">
              From application to offer, PortForge keeps each step clear—so you
              can focus on momentum.
            </p>
          </div>
          <a
            href="#cta"
            className="inline-flex w-fit items-center justify-center rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white/90 transition hover:bg-white/10"
          >
            Start building your pipeline
          </a>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {STEPS.map((s) => (
            <div key={s.step} className="glass neon-hover rounded-3xl p-6">
              <div className="flex items-center justify-between">
                <div className="text-xs font-semibold tracking-wider text-white/60">
                  STEP {s.step}
                </div>
                <div className="h-px flex-1 bg-white/10 mx-4" />
                <div className="text-xs font-semibold text-cyan-300/80">
                  Workflow
                </div>
              </div>
              <div className="mt-4 text-lg font-semibold text-white">
                {s.title}
              </div>
              <p className="mt-2 text-sm leading-relaxed text-white/70">
                {s.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
}

