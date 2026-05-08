export default function DashboardPreview() {
  return (
    <div
      className="
        glass-strong
        neon-border
        relative
        overflow-hidden
        rounded-3xl
        p-6
      "
    >
      <div className="space-y-6">
        {/* Top */}
        <div className="flex items-center justify-between">
          <div className="text-sm text-white/70">Dashboard Overview</div>

          <div className="text-cyan-400">✦</div>
        </div>

        {/* Analytics */}
        <div className="grid gap-4 md:grid-cols-2">
          <div className="glass rounded-2xl p-6">
            <div className="mb-4 text-sm text-white/60">ATS Score</div>

            <div className="text-5xl font-bold text-cyan-400">86</div>

            <div className="mt-2 text-sm text-emerald-400">
              Well Optimized
            </div>
          </div>

          <div className="glass rounded-2xl p-6">
            <div className="mb-4 text-sm text-white/60">Skill Match</div>

            <div className="h-40 rounded-xl border border-cyan-400/10 bg-cyan-500/5" />
          </div>
        </div>

        {/* Recommendations */}
        <div className="glass rounded-2xl p-6">
          <div className="mb-4 text-sm text-white/60">Top Recommendations</div>

          <div className="space-y-3 text-sm text-white/70">
            <div>✓ Add quantified achievements</div>
            <div>✓ Improve React keyword density</div>
            <div>✓ Add more project metrics</div>
            <div>✓ Improve ATS readability</div>
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
    </div>
  );
}

