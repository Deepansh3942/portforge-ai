"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <header className="fixed left-0 top-0 z-50 w-full px-6 py-5">
      <div
        className="
          glass
          neon-border
          mx-auto
          flex
          max-w-7xl
          items-center
          justify-between
          rounded-2xl
          px-8
          py-4
        "
      >
        {/* Logo */}
        <Link
          href="/"
          className="
            flex
            items-center
            gap-3
          "
        >
          <div
            className="
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-xl
              border
              border-cyan-400/20
              bg-cyan-500/10
              text-cyan-300
              shadow-[0_0_20px_rgba(0,140,255,0.15)]
            "
          >
            P
          </div>

          <div className="text-lg font-semibold tracking-wide">
            <span className="text-cyan-400">
              PortForge
            </span>{" "}
            AI
          </div>
        </Link>

        {/* Nav */}
        <nav className="hidden items-center gap-10 md:flex">
          <a
            href="#features"
            className="
              text-sm
              text-white/60
              transition-all
              hover:text-cyan-300
            "
          >
            Features
          </a>

          <a
            href="#workflow"
            className="
              text-sm
              text-white/60
              transition-all
              hover:text-cyan-300
            "
          >
            Workflow
          </a>

          <a
            href="#dashboard"
            className="
              text-sm
              text-white/60
              transition-all
              hover:text-cyan-300
            "
          >
            Dashboard
          </a>
        </nav>

        {/* CTA */}
        <button
          className="
            rounded-xl
            border
            border-cyan-400/20
            bg-cyan-500/10
            px-6
            py-3
            text-sm
            text-cyan-200

            shadow-[0_0_20px_rgba(0,140,255,0.12)]

            transition-all

            hover:border-cyan-400/40
            hover:bg-cyan-500/20
            hover:shadow-[0_0_30px_rgba(0,140,255,0.22)]
          "
        >
          Upload Resume
        </button>
      </div>
    </header>
  );
}
