import Container from "@/components/layout/container";

export default function CohortDesign() {
  return (
    <section className="py-24 border-t border-border">
      <Container>
        <div className="max-w-5xl mx-auto space-y-16">

          {/* Section Header */}
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
              Cohort Design
            </h2>
            <p className="text-lg text-muted-foreground">
              The program is structured to balance guided instruction with
              independent practice, ensuring steady and meaningful progress.
            </p>
          </div>

          {/* Grid Layout */}
          <div className="grid md:grid-cols-2 gap-12">

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-medium">Live Instruction</h3>
                <p className="text-muted-foreground leading-relaxed mt-2">
                  Four live sessions per week focused on conceptual clarity,
                  guided walkthroughs, and structured discussion.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-medium">Independent Practice</h3>
                <p className="text-muted-foreground leading-relaxed mt-2">
                  Three dedicated practice days for assignments, problem
                  solving, and reinforcement of core ideas.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-medium">Small Cohort Size</h3>
                <p className="text-muted-foreground leading-relaxed mt-2">
                  Each batch is limited to 10–20 students to maintain
                  discussion quality and allow thoughtful feedback.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-medium">Duration & Format</h3>
                <p className="text-muted-foreground leading-relaxed mt-2">
                  Conducted online over a defined multi-week period,
                  with structured milestones and guided progression.
                </p>
              </div>
            </div>

          </div>

        </div>
      </Container>
    </section>
  );
}