"use client";

import Container from "@/components/layout/container";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Curriculum() {
  return (
    <section className="py-24 border-t border-border">
      <Container>
        <div className="max-w-4xl mx-auto space-y-16">

          {/* Section Header */}
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
              Curriculum Overview
            </h2>
            <p className="text-lg text-muted-foreground">
              The curriculum progresses from systems thinking to practical
              implementation, maintaining conceptual clarity at every stage.
            </p>
          </div>

          {/* Accordion */}
          <Accordion type="single" collapsible className="w-full">
            
            <AccordionItem value="item-1">
              <AccordionTrigger>
                Foundations of Computing
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed space-y-3">
                <p>• How computers process information</p>
                <p>• CPU, memory, and storage fundamentals</p>
                <p>• Operating system responsibilities</p>
                <p>• Processes, files, and resource management</p>
                <p>• How the internet routes information</p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger>
                Web Fundamentals
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed space-y-3">
                <p>• Structure with HTML</p>
                <p>• Styling principles with CSS</p>
                <p>• Programming basics using JavaScript</p>
                <p>• How browsers interpret and render code</p>
                <p>• Hosting and deployment basics</p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger>
                Developer Tools & Systems Thinking
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed space-y-3">
                <p>• Version control with Git</p>
                <p>• Understanding repositories and collaboration</p>
                <p>• Introduction to backend concepts</p>
                <p>• APIs and data exchange fundamentals</p>
                <p>• Project structuring and documentation</p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger>
                Introduction to Artificial Intelligence
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed space-y-3">
                <p>• What artificial intelligence means conceptually</p>
                <p>• Basics of machine learning logic</p>
                <p>• How large language models function at a high level</p>
                <p>• Ethical and responsible AI usage</p>
                <p>• Guided mini AI demonstration project</p>
              </AccordionContent>
            </AccordionItem>

          </Accordion>
        </div>
      </Container>
    </section>
  );
}