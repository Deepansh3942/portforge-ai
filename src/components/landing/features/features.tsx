import SectionContainer from "@/components/layout/section-container";

const FEATURES = [
  {
    title: "Job application tracking",
    description:
      "Capture every application with status, notes, links, and next actions—organized and searchable.",
  },
  {
    title: "Resume management",
    description:
      "Keep multiple resume versions, tailor them to roles, and track what you submitted for each job.",
  },
  {
    title: "Interview readiness",
    description:
      "Schedule interviews, store prep notes, and generate targeted questions based on the job description.",
  },
  {
    title: "Dashboard analytics",
    description:
      "See your funnel at a glance—applications, callbacks, interviews, offers—plus trends over time.",
  },
  {
    title: "AI resume analysis",
    description:
      "Get scoring, keyword gaps, and actionable edits so your resume matches the role intent.",
  },
  {
    title: "Career insights",
    description:
      "Identify skill gaps and plan your next steps with AI-driven recommendations.",
  },
];

export default function Features() {
  return (
    <SectionContainer className="relative" >
      <div id="features" className="mx-auto max-w-6xl scroll-mt-24">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
            Everything you need to run your job search
          </h2>
          <p className="mt-3 text-base leading-relaxed text-white/70">
            A single workspace to track progress, stay organized, and get smarter
            recommendations as you go.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((feature) => (
            <div
              key={feature.title}
              className="glass neon-hover rounded-3xl p-6"
            >
              <div className="text-base font-semibold text-white">
                {feature.title}
              </div>
              <p className="mt-2 text-sm leading-relaxed text-white/70">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
}

