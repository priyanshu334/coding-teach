"use client";

import { Button } from "@/components/ui/button";
import { ModeToggle } from "./Mode-toogle";
import Container from "./layout/container";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils"; // ← assuming you have this utility

export default function Navbar() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl border-b border-border bg-background/70">
      <Container>
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" onClick={closeMenu}>
            <h1 className="text-xl font-bold tracking-tight">
              CodeGurukul
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-4">
            <Button variant="ghost" asChild>
              Curriculum
            </Button>

            <Button variant="ghost" asChild>
              Pricing
            </Button>

            <Button variant="ghost" asChild>
              Blogs
            </Button>

            <Button onClick={() => router.push("/form")}>Enroll</Button>

            <ModeToggle />
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden flex items-center gap-2">
            <ModeToggle />
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={cn(
            "md:hidden overflow-hidden transition-all duration-300 ease-in-out",
            isOpen ? "max-h-80 py-4" : "max-h-0"
          )}
        >
          <div className="flex flex-col items-center gap-4 pb-2">
            <Button
              variant="ghost"
              className="w-full justify-center"
              onClick={() => {
                router.push("/curriculum");
                closeMenu();
              }}
            >
              Curriculum
            </Button>

            <Button
              variant="ghost"
              className="w-full justify-center"
              onClick={() => {
                router.push("/pricing");
                closeMenu();
              }}
            >
              Pricing
            </Button>

            <Button
              variant="ghost"
              className="w-full justify-center"
              onClick={() => {
                router.push("/dashboard/blog");
                closeMenu();
              }}
            >
              Blogs
            </Button>

            <Button
              className="w-full sm:w-auto"
              onClick={() => {
                router.push("/form");
                closeMenu();
              }}
            >
              Enroll Now
            </Button>
          </div>
        </div>
      </Container>
    </header>
  );
}