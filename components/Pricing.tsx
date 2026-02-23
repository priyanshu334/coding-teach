"use client";

import Container from "@/components/layout/container";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";

const HeroScene = dynamic(() => import("./3d/sceen1"), {
  ssr: false,
  loading: () => (
    <div className="w-full aspect-[4/3] sm:aspect-video md:aspect-[5/4] flex items-center justify-center bg-muted/40 rounded-xl border border-border/50">
      <p className="text-muted-foreground animate-pulse">Loading scene...</p>
    </div>
  ),
});

export default function Pricing() {
  const router = useRouter();

  return (
    <section className="py-16 sm:py-20 lg:py-24 border-t border-border">
      <Container>
        <div className="max-w-5xl mx-auto">
          {/* Mobile-first: content on top, 3D below */}
          <div className="flex flex-col lg:flex-row-reverse gap-10 lg:gap-16 xl:gap-20 items-center">

            {/* Left Side – 3D (appears below on mobile) */}
            <div className="w-full lg:w-1/2 order-2 lg:order-1">
              <div className="relative w-full max-w-[420px] sm:max-w-[480px] lg:max-w-none mx-auto lg:mx-0">
                  <HeroScene />
              </div>
            </div>

            {/* Right Side – Pricing Content (first on mobile) */}
            <div className="w-full lg:w-1/2 order-1 lg:order-2 space-y-10 lg:space-y-12 text-center lg:text-left">
              {/* Header */}
              <div className="space-y-4">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
                  Pricing
                </h2>
                <p className="text-lg sm:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0">
                  Simple, transparent, and affordable — no hidden fees, no surprises.
                </p>
              </div>

              {/* Pricing Card – centered on mobile, left-aligned on desktop */}
              <div className="flex justify-center lg:justify-start">
                <Card className="w-full max-w-md border-2 border-primary/30 shadow-xl shadow-primary/5 dark:shadow-primary/10 bg-gradient-to-b from-card to-card/95">
                  <CardHeader className="pb-6 text-center">
                    <CardTitle className="text-2xl sm:text-3xl font-bold">
                      Full Cohort Access
                    </CardTitle>
                    <div className="mt-4">
                      <span className="text-5xl sm:text-6xl font-extrabold tracking-tight">
                        ₹2,000
                      </span>
                      <span className="text-xl text-muted-foreground"> / cohort</span>
                    </div>
                    <p className="mt-2 text-sm text-muted-foreground">
                      One-time payment • Entire program
                    </p>
                  </CardHeader>

                  <CardContent className="space-y-5 text-left">
                    <ul className="space-y-3 text-muted-foreground">
                      <li className="flex items-center gap-3">
                        <span className="text-primary text-xl">✓</span>
                        Multi-week structured curriculum
                      </li>
                      <li className="flex items-center gap-3">
                        <span className="text-primary text-xl">✓</span>
                        4 live interactive sessions per week
                      </li>
                      <li className="flex items-center gap-3">
                        <span className="text-primary text-xl">✓</span>
                        3 guided practice & doubt days
                      </li>
                      <li className="flex items-center gap-3">
                        <span className="text-primary text-xl">✓</span>
                        Small cohort + personal mentorship
                      </li>
                      <li className="flex items-center gap-3">
                        <span className="text-primary text-xl">✓</span>
                        Final project review & certificate
                      </li>
                    </ul>

                    <div className="pt-6">
                      <Button 
                        size="lg" 
                        className="w-full text-base sm:text-lg py-6"
                        onClick={() => router.push("/form")}
                      >
                        Apply & Secure Your Seat
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}