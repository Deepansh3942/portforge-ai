import PageContainer from "@/components/layout/page-container";

import Hero from "@/components/landing/hero/hero";
import Features from "@/components/landing/features/features";

export default function HomePage() {
  return (
    <PageContainer>
      <Hero />
      <Features />
    </PageContainer>
  );
}
