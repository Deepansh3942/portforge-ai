import SectionContainer from "@/components/layout/section-container";

export default function Cta() {
  return (
    <SectionContainer className="relative">
      <div id="cta" className="mx-auto max-w-6xl scroll-mt-24">
        <div className="glass-strong neon-border rounded-3xl px-6 py-10 md:px-10 md:py-14">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
                Ready to make your job search feel predictable?
              </h2>
              <p className="mt-3 text-base leading-relaxed text-white/70">
                Start with a simple pipeline, then layer in AI insights as you
                go. PortForge keeps everything in one place.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row sm:justify-end">
              <a
                href="/signup"
                className="inline-flex items-center justify-center rounded-xl bg-cyan-500 px-6 py-3 text-sm font-semibold text-black transition hover:bg-cyan-400"
              >
                Create free account
              </a>
              <a
                href="#features"
                className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-white/90 transition hover:bg-white/10"
              >
                See what’s included
              </a>
            </div>
          </div>

          <div className="mt-8 grid gap-3 md:grid-cols-3">
            {[
              "No spreadsheets",
              "Clean timeline per role",
              "Insights that compound",
            ].map((t) => (
              <div key={t} className="glass rounded-2xl px-5 py-4 text-sm text-white/75">
                {t}
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}

