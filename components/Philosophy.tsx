import Container from "@/components/layout/container";

export default function Philosophy() {
  return (
    <section className="py-24 border-t border-border">
      <Container>
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
            Learning to code should begin with understanding systems.
          </h2>

          <p className="text-lg text-muted-foreground leading-relaxed">
            This program is designed to introduce students to the core ideas
            behind computing — how machines process information, how operating
            systems manage resources, how networks connect the world, and how
            the web functions beneath the surface.
          </p>

          <p className="text-lg text-muted-foreground leading-relaxed">
            Instead of rushing into frameworks and trends, the focus remains on
            clarity, structured thinking, and long-term foundations.
          </p>
        </div>
      </Container>
    </section>
  );
}