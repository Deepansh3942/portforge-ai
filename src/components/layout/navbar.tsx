type NavbarProps = {
  className?: string;
};

export default function Navbar({ className }: NavbarProps) {
  return (
    <header
      className={[
        "sticky top-0 z-50 w-full border-b border-white/5 bg-black/20 backdrop-blur",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <div className="text-sm font-semibold tracking-tight">
          <span className="text-gradient">PortForge</span>
        </div>

        <nav className="flex items-center gap-6 text-sm text-white/80">
          <a className="neon-hover hover:text-white" href="#features">
            Features
          </a>
          <a className="neon-hover hover:text-white" href="#workflow">
            Workflow
          </a>
          <a className="neon-hover hover:text-white" href="#testimonials">
            Testimonials
          </a>
          <a className="neon-hover hover:text-white" href="#cta">
            Get started
          </a>
        </nav>
      </div>
    </header>
  );
}

