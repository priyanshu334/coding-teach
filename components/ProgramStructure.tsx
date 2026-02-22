import Container from "@/components/layout/container";

export default function ProgramStructure() {
  return (
    <section className="py-24 border-t border-border">
      <Container>
        <div className="max-w-6xl mx-auto space-y-16">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
              Program Structure
            </h2>
            <p className="text-lg text-muted-foreground">
              The cohort is designed around progressive understanding —
              beginning with systems, moving into application, and reinforced
              through guided mentorship.
            </p>
          </div>

          {/* Grid */}
          <div className="grid md:grid-cols-3 gap-10">
            
            {/* Column 1 */}
            <div className="space-y-4">
              <h3 className="text-xl font-medium">Foundations</h3>
              <p className="text-muted-foreground leading-relaxed">
                Students begin by understanding how computers process
                information, how memory works, how operating systems manage
                tasks, and how networks connect machines globally.
              </p>
            </div>

            {/* Column 2 */}
            <div className="space-y-4">
              <h3 className="text-xl font-medium">Application</h3>
              <p className="text-muted-foreground leading-relaxed">
                Core web technologies are introduced with intention —
                HTML, CSS, JavaScript, version control, and deployment —
                always connected back to underlying concepts.
              </p>
            </div>

            {/* Column 3 */}
            <div className="space-y-4">
              <h3 className="text-xl font-medium">Mentorship</h3>
              <p className="text-muted-foreground leading-relaxed">
                Small cohorts ensure thoughtful feedback, structured practice,
                assignment review, and space for questions. The goal is not
                speed, but clarity and confidence.
              </p>
            </div>

          </div>
        </div>
      </Container>
    </section>
  );
}