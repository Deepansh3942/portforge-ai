const features = [
  {
    title: "AI Resume Analysis",
    description:
      "Deep resume intelligence powered by AI-driven evaluation.",
  },
  {
    title: "ATS Optimization",
    description:
      "Improve ATS compatibility and keyword matching.",
  },
  {
    title: "Portfolio Builder",
    description:
      "Generate futuristic developer portfolios instantly.",
  },
  {
    title: "Skill Gap Detection",
    description:
      "Identify missing skills for target job roles.",
  },
  {
    title: "Job Match Intelligence",
    description:
      "AI-powered job compatibility analysis.",
  },
  {
    title: "Career Recommendations",
    description:
      "Personalized suggestions to improve career growth.",
  },
];

export default function Features() {
  return (
    <section className="pt-16 pb-24 md:pt-20 md:pb-28">
      <div className="mb-16 space-y-4 text-center">
        <div
          className="
            inline-flex
            rounded-full
            border
            border-cyan-400/10
            bg-cyan-500/5
            px-4
            py-2
            text-xs
            tracking-wide
            text-cyan-300
          "
        >
          POWERFUL AI FEATURES
        </div>

        <h2 className="text-5xl font-bold tracking-tight">
          Everything You Need
          <br />

          <span className="text-gradient">
            To Advance Your Career
          </span>
        </h2>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="
              glass
              neon-border
              group
              relative
              overflow-hidden
              rounded-3xl
              p-8
              transition-all
              duration-300
              hover:-translate-y-2
            "
          >
            {/* Glow */}
            <div
              className="
                absolute
                inset-0
                opacity-0
                transition-opacity
                duration-300
                group-hover:opacity-100
              "
            >
              <div
                className="
                  absolute
                  left-1/2
                  top-1/2
                  h-40
                  w-40
                  -translate-x-1/2
                  -translate-y-1/2
                  rounded-full
                  bg-cyan-500/10
                  blur-3xl
                "
              />
            </div>

            {/* Icon */}
            <div
              className="
                mb-6
                flex
                h-14
                w-14
                items-center
                justify-center
                rounded-2xl
                border
                border-cyan-400/20
                bg-cyan-500/5
                text-cyan-300
              "
            >
              ✦
            </div>

            {/* Content */}
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold">
                {feature.title}
              </h3>

              <p className="leading-relaxed text-white/55">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
