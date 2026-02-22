import Curriculum from "@/components/cirriculam";
import CohortDesign from "@/components/cohort-design";
import Footer from "@/components/Footer";
import Hero from "@/components/HeroSection";
import Philosophy from "@/components/Philosophy";
import Pricing from "@/components/Pricing";
import ProgramStructure from "@/components/ProgramStructure";
import { Cigarette } from "lucide-react";

export default function Home(){
  return (
    <main>
      <Hero/>
      <Philosophy/>
      <ProgramStructure/>
      <Curriculum/>
      <CohortDesign/>
      <Pricing/>
      <Footer/>
    </main>
  )
}