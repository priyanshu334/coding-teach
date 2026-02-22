"use client";

import { Button } from "@/components/ui/button";
import { ModeToggle } from "./Mode-toogle";
import Container from "./layout/container";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl border-b border-border bg-background/70">
        <Container>

 <div className="flex h-16 items-center justify-between">
  <Link href={"/"}>
      <h1 className="text-lg font-semibold tracking-tight">
            CodeGurukul
          </h1>
  </Link>
      

          <div className="flex items-center gap-4">
            <Button variant="ghost">Curriculum</Button>
            <Button variant="ghost">Pricing</Button>
            <Button>Enroll</Button>
            <ModeToggle />
          </div>
        </div>

        </Container>
       
    </header>
  );
}