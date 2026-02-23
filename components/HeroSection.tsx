"use client";

import { Button } from "@/components/ui/button";
import Container from "@/components/layout/container";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";

const HeroScene = dynamic(() => import("@/components/3d/sceen1"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-64 md:h-96 flex items-center justify-center bg-muted/30 rounded-xl">
      <p className="text-muted-foreground">Loading 3D scene...</p>
    </div>
  ),
});

export default function Hero() {
  const router = useRouter();

  return (
    <section className="relative py-16 md:py-24 lg:py-32 overflow-hidden">
      <Container>
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-12 xl:gap-16 items-center">
          {/* Left Content – comes first on mobile */}
          <div className="w-full lg:w-1/2 space-y-6 md:space-y-8 text-center lg:text-left">
            <span className="inline-block text-sm font-medium text-muted-foreground border border-border px-4 py-1.5 rounded-full tracking-wide">
              Limited 20 Seats • Online Cohort
            </span>

            <h1 className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight md:leading-snug">
              A Structured Introduction to Computer Science
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0">
              A foundational program for school students (6th–12th grade)
              designed to build real understanding of computers, systems,
              networks, and the web — before writing serious code.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 md:pt-6 justify-center lg:justify-start">
              <Button size="lg" onClick={() => router.push("/form")} className="min-w-[180px]">
                Apply for the Cohort
              </Button>
              <Button size="lg" variant="outline" className="min-w-[180px]">
                View Curriculum
              </Button>
            </div>
          </div>

          {/* Right 3D Model */}
          <div className="w-full lg:w-1/2 h-[320px] sm:h-[400px] md:h-[480px] lg:h-[520px] xl:h-[580px]">
              <HeroScene />
          </div>
        </div>
      </Container>

      {/* Optional subtle background glow – full width */}
      <div className="absolute inset-0 -z-10 pointer-events-none bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 dark:from-primary/10 dark:via-transparent dark:to-secondary/10" />
      <div className="absolute inset-0 -z-10 pointer-events-none bg-[radial-gradient(circle_at_20%_30%,rgba(var(--primary-rgb),0.06),transparent_50%)] dark:bg-[radial-gradient(circle_at_20%_30%,rgba(59,130,246,0.08),transparent_60%)]" />
    </section>
  );
}