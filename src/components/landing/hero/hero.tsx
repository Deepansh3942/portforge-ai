import { Button } from "@/components/ui/button";

import DashboardPreview from "../dashboard-preview/dashboard-preview";

export default function Hero() {
  return (
    <section className="relative flex min-h-[100dvh] items-center py-16 lg:py-20">
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-[0.35]" />
      <div className="pointer-events-none absolute left-1/2 top-[-220px] h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-3xl" />
      <div className="grid w-full items-start gap-10 lg:grid-cols-2 lg:gap-12">
        {/* LEFT */}
        <div className="space-y-6">
          <div
            className="
              inline-flex
              items-center
              rounded-full
              border
              border-cyan-400/20
              bg-cyan-500/5
              px-4
              py-2
              text-xs
              tracking-wide
              text-cyan-300
            "
          >
            AI-POWERED CAREER INTELLIGENCE
          </div>

          <div className="space-y-4">
            <h1
              className="
                max-w-3xl
                text-4xl
                font-black
                leading-[1.05]
                tracking-tight
                sm:text-5xl
                lg:text-6xl
              "
            >
              Optimize. Build.
              <br />

              <span className="text-gradient">Land Your Dream Role.</span>
            </h1>

            <p
              className="
                max-w-xl
                text-base
                leading-relaxed
                text-white/60
                sm:text-lg
              "
            >
              PortForge AI analyzes your resume, enhances your skills, and builds
              a powerful portfolio that gets you noticed by top companies.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <Button
              className="
                h-11
                rounded-xl
                border
                border-cyan-400/20
                bg-cyan-500/15
                px-6
                text-sm
                text-cyan-100

                shadow-[0_0_25px_rgba(0,140,255,0.18)]

                transition-all

                hover:bg-cyan-500/25
                hover:shadow-[0_0_40px_rgba(0,140,255,0.28)]
              "
            >
              Upload Your Resume
            </Button>

            <Button
              variant="outline"
              className="
                h-11
                rounded-xl
                border-cyan-400/20
                bg-transparent
                px-6
                text-sm
                text-white/80
                hover:bg-white/5
              "
            >
              See How It Works
            </Button>
          </div>

          <div className="flex flex-wrap gap-6 pt-2 text-xs text-white/50 sm:text-sm">
            <div>✦ AI-Powered</div>
            <div>✦ ATS Optimized</div>
            <div>✦ Career Focused</div>
          </div>
        </div>

        {/* RIGHT */}
        <DashboardPreview />
      </div>
    </section>
  );
}

