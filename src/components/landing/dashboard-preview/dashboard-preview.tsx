export default function DashboardPreview() {
  return (
    <div
      className="
        glass-strong
        neon-border
        group
        relative
        overflow-hidden
        rounded-3xl
        p-0
        w-full
        max-w-[800px]
        justify-self-center
        lg:justify-self-start
        lg:origin-top-left
        lg:scale-[0.93]
        lg:h-[440px]
        xl:h-[468px]
        transition-all
        duration-300
        hover:border-cyan-300/25
        hover:shadow-[0_0_0_1px_rgba(56,189,248,0.22),0_0_34px_rgba(0,140,255,0.18)]
      "
    >
      <div className="p-3 sm:p-4 h-full flex flex-col">
        {/* Top bar */}
        <div className="flex items-center justify-between border-b border-white/5 pb-2.5">
          <div className="flex items-center gap-3">
            <div className="grid h-7 w-7 place-items-center rounded-full border border-cyan-400/20 bg-cyan-500/5">
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                className="text-cyan-300"
              >
                <path
                  d="M12 7.5V12l3 1.5"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M21 12a9 9 0 1 1-9-9"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </div>

            <div className="text-sm font-medium text-white/80">
              Dashboard Overview
            </div>
          </div>
        </div>

        <div className="pt-3 grid flex-1 min-h-0 gap-3.5 sm:gap-4 sm:grid-cols-2 items-stretch">
          {/* ATS */}
          <div className="glass neon-border rounded-2xl p-3.5 sm:p-4 h-full flex flex-col transition-all duration-300 group-hover:shadow-[0_0_0_1px_rgba(56,189,248,0.18),0_0_26px_rgba(0,140,255,0.12)]">
            <div className="text-sm font-semibold text-white/85 sm:text-base">
              ATS Score
            </div>

            <div className="mt-2 flex-1 min-h-0 grid place-items-center">
              <div className="relative h-28 w-28 sm:h-32 sm:w-32">
                <div
                  className="absolute inset-0 rounded-full"
                  style={{
                    background:
                      "conic-gradient(from 210deg, rgba(56,189,248,0.95) 0deg, rgba(59,130,246,0.95) 220deg, rgba(255,255,255,0.10) 220deg, rgba(255,255,255,0.10) 360deg)",
                    filter: "drop-shadow(0 0 14px rgba(0,140,255,0.18))",
                  }}
                />
                <div className="absolute inset-[11px] rounded-full bg-[#050816]/70 ring-1 ring-white/5" />
                <div className="absolute inset-0 grid place-items-center text-center">
                  <div className="text-4xl font-bold tracking-tight text-cyan-100 sm:text-5xl">
                    86
                  </div>
                  <div className="mt-1 text-xs text-white/60 sm:text-sm">
                    /100
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-1 text-center">
              <div className="text-sm font-semibold text-emerald-400 sm:text-base">
                Great
              </div>
              <div className="mt-0.5 text-sm text-white/55">
                Well optimized!
              </div>
            </div>
          </div>

          {/* Recommendations */}
          <div className="glass neon-border rounded-2xl p-3.5 sm:p-4 h-full flex flex-col transition-all duration-300 group-hover:shadow-[0_0_0_1px_rgba(56,189,248,0.18),0_0_26px_rgba(0,140,255,0.12)]">
            <div className="text-sm font-semibold text-white/85 sm:text-base">
              Top Recommendations
            </div>

            <div className="mt-4 flex-1 min-h-0 grid grid-rows-4 gap-2 text-sm">
              {[
                "Add more quantified achievements",
                "Include more relevant keywords",
                "Improve project descriptions",
                "Add certifications",
              ].map((label) => (
                <div
                  key={label}
                  className="
                    flex
                    items-center
                    gap-3
                    w-full
                    h-full
                    min-w-0
                    rounded-xl
                    border
                    border-white/5
                    bg-white/[0.02]
                    px-3
                    py-2
                    text-white/75
                    transition
                    hover:border-cyan-400/15
                    hover:bg-white/[0.035]
                  "
                >
                  <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full border border-cyan-400/20 bg-cyan-500/5 text-cyan-300">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M20 6 9 17l-5-5"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <span className="min-w-0 whitespace-normal break-words leading-snug">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Glow */}
      <div
        className="
          absolute
          bottom-[-100px]
          left-1/2
          h-[200px]
          w-[200px]
          -translate-x-1/2
          rounded-full
          bg-cyan-500/20
          blur-3xl
        "
      />

      <div
        className="
          absolute
          inset-0
          rounded-3xl
          border
          border-cyan-400/5
          pointer-events-none
        "
      />

      {/* soft top glow */}
      <div
        className="
          pointer-events-none
          absolute
          inset-x-0
          top-0
          h-40
          bg-gradient-to-b
          from-cyan-500/10
          to-transparent
        "
      />
    </div>
  );
}

