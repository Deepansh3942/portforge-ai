import * as React from "react";

type ButtonVariant = "default" | "outline";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
};

function cx(...parts: Array<string | undefined | false | null>) {
  return parts.filter(Boolean).join(" ");
}

export function Button({ className, variant = "default", ...props }: ButtonProps) {
  const base =
    "inline-flex items-center justify-center font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/40 disabled:pointer-events-none disabled:opacity-50";

  const variants: Record<ButtonVariant, string> = {
    default: "bg-white/10 text-white hover:bg-white/15",
    outline: "border border-white/10 bg-transparent text-white hover:bg-white/5",
  };

  return (
    <button
      className={cx(base, variants[variant], className)}
      type={props.type ?? "button"}
      {...props}
    />
  );
}

