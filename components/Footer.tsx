import Container from "@/components/layout/container";

export default function Footer() {
  return (
    <footer className="border-t border-border">
      <Container>
        <div className="py-20">

          {/* Top Grid */}
          <div className="grid md:grid-cols-4 gap-12 text-sm">

            {/* Brand Column */}
            <div className="space-y-4 md:col-span-2">
              <h3 className="text-base font-semibold tracking-tight">
                CodeGurukul
              </h3>
              <p className="text-muted-foreground max-w-sm leading-relaxed">
                A structured introduction to computer science for school students.
                Designed around clarity, systems thinking, and long-term foundations.
              </p>
            </div>

            {/* Program Links */}
            <div className="space-y-4">
              <h4 className="font-medium text-foreground">Program</h4>
              <ul className="space-y-3 text-muted-foreground">
                <li className="hover:text-foreground transition-colors cursor-pointer">
                  Curriculum
                </li>
                <li className="hover:text-foreground transition-colors cursor-pointer">
                  Cohort Design
                </li>
                <li className="hover:text-foreground transition-colors cursor-pointer">
                  Pricing
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div className="space-y-4">
              <h4 className="font-medium text-foreground">Contact</h4>
              <ul className="space-y-3 text-muted-foreground">
                <li>Online Cohort</li>
                <li>hello@codegurukul.com</li>
              </ul>
            </div>
          </div>

          {/* Bottom Strip */}
          <div className="mt-16 pt-8 border-t border-border text-xs text-muted-foreground flex flex-col md:flex-row justify-between items-center gap-4">
            <p>© {new Date().getFullYear()} CodeGurukul</p>
            <p>Designed with clarity and intention.</p>
          </div>

        </div>
      </Container>
    </footer>
  );
}