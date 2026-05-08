import { Button } from "@/components/ui/button";

import DashboardPreview from "../dashboard-preview/dashboard-preview";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center pt-32">
      <div className="grid w-full items-center gap-16 lg:grid-cols-2">
        {/* LEFT */}
        <div className="space-y-8">
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

          <div className="space-y-6">
            <h1
              className="
                max-w-3xl
                text-5xl
                font-black
                leading-tight
                tracking-tight
                md:text-7xl
              "
            >
              Optimize. Build.
              <br />

              <span className="text-gradient">Land Your Dream Role.</span>
            </h1>

            <p
              className="
                max-w-xl
                text-lg
                leading-relaxed
                text-white/60
              "
            >
              PortForge AI analyzes your resume, enhances your skills, and builds
              a powerful portfolio that gets you noticed by top companies.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <Button
              className="
                h-14
                rounded-xl
                border
                border-cyan-400/30
                bg-cyan-500/15
                px-8
                text-base
                text-cyan-200
                hover:bg-cyan-500/25
              "
            >
              Upload Your Resume
            </Button>

            <Button
              variant="outline"
              className="
                h-14
                rounded-xl
                border-cyan-400/20
                bg-transparent
                px-8
                text-base
                text-white/80
                hover:bg-white/5
              "
            >
              See How It Works
            </Button>
          </div>

          <div className="flex flex-wrap gap-8 pt-4 text-sm text-white/50">
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

