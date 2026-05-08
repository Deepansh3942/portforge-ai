import "./globals.css";

import type { Metadata } from "next";

import BackgroundEffects from "@/components/layout/background-effects";

export const metadata: Metadata = {
  title: "PortForge AI",
  description: "AI-powered portfolio and career platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <BackgroundEffects />
        {children}
      </body>
    </html>
  );
}
