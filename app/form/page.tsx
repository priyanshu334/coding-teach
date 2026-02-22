"use client";

import Container from "@/components/layout/container";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function Enrollment() {
  return (
    <section className="py-24 border-t border-border">
      <Container>
        <div className="max-w-3xl mx-auto space-y-12">

          {/* Header */}
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
              Enrollment
            </h2>
            <p className="text-lg text-muted-foreground">
              Submit your details to receive cohort information and next steps.
            </p>
          </div>

          {/* Form Card */}
          <Card className="border border-border shadow-none">
            <CardHeader>
              <CardTitle className="text-xl font-medium">
                Apply for the Upcoming Cohort
              </CardTitle>
            </CardHeader>

            <CardContent className="space-y-6">

              <div className="space-y-2">
                <Label htmlFor="name">Student Name</Label>
                <Input id="name" placeholder="Enter full name" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="grade">Grade</Label>
                <Input id="grade" placeholder="6th – 12th" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Parent Email</Label>
                <Input id="email" type="email" placeholder="Enter email address" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Parent Phone</Label>
                <Input id="phone" placeholder="Enter contact number" />
              </div>

              <div className="pt-4">
                <Button className="w-full">
                  Submit Application
                </Button>
              </div>

            </CardContent>
          </Card>

        </div>
      </Container>
    </section>
  );
}