import Container from "@/components/layout/container";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import HeroScene from "./3d/sceen1";

export default function Pricing() {
  return (
    <section className="py-24 border-t border-border">
      <Container>
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">

          {/* Left Side – 3D */}
          <div className="order-2 lg:order-1">
            <div className="w-full max-w-md mx-auto lg:mx-0">
              <HeroScene />
            </div>
          </div>

          {/* Right Side – Pricing Content */}
          <div className="space-y-12 order-1 lg:order-2">

            {/* Header */}
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
                Pricing
              </h2>
              <p className="text-lg text-muted-foreground">
                A simple and transparent structure. No hidden fees.
              </p>
            </div>

            {/* Pricing Card */}
            <Card className="w-full max-w-md border border-border shadow-none">
              <CardHeader className="space-y-2">
                <CardTitle className="text-2xl font-semibold">
                  Full Cohort Access
                </CardTitle>
                <p className="text-4xl font-bold tracking-tight">
                  ₹2,000
                </p>
                <p className="text-muted-foreground text-sm">
                  Entire structured program
                </p>
              </CardHeader>

              <CardContent className="space-y-4 text-muted-foreground">
                <p>• Multi-week structured curriculum</p>
                <p>• 4 live sessions per week</p>
                <p>• 3 guided practice days</p>
                <p>• Small cohort mentorship</p>
                <p>• Final project review</p>

                <div className="pt-6">
                  <Button className="w-full">
                    Apply for Enrollment
                  </Button>
                </div>
              </CardContent>
            </Card>

          </div>
        </div>
      </Container>
    </section>
  );
}