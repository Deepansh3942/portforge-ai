import type React from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
};

export default function SectionContainer({ children, className }: Props) {
  return (
    <section className={`py-24 md:py-32 ${className || ""}`}>{children}</section>
  );
}

