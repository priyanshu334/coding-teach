"use client"
import { Button } from "@/components/ui/button";
import Container from "@/components/layout/container";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";

const HeroScene = dynamic(() => import("@/components/3d/sceen1"), {
  ssr: false,
});

export default function Hero() {
  const router = useRouter()
  return (
    <section className="relative py-32">
      <Container>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div className="space-y-6">
            <span className="text-sm text-muted-foreground border border-border px-4 py-1 rounded-full">
              Limited 20 Seats • Online Cohort
            </span>

            <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight">
              A Structured Introduction to Computer Science
            </h1>

            <p className="text-lg text-muted-foreground">
              A foundational program for school students (6th–12th grade)
              designed to build real understanding of computers, systems,
              networks, and the web — before writing serious code.
            </p>

            <div className="flex gap-4 pt-4">
              <Button  size="lg" onClick={()=>router.push("/form")}>Apply for the Cohort</Button>
              <Button size="lg" variant="outline">
                View Curriculum
              </Button>
            </div>
          </div>

          {/* Right 3D Model */}
          <div className="relative">
            <HeroScene />
          </div>
        </div>
      </Container>

      {/* Subtle radial glow */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_30%_30%,rgba(0,0,0,0.05),transparent_60%)] dark:bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.05),transparent_60%)]" />
    </section>
  );
}