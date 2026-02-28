import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Statement from "@/components/Statement";
import Clarity from "@/components/Clarity";
import ValueProp from "@/components/ValueProp";
import HabitsKeywords from "@/components/HabitsKeywords";
import Features from "@/components/Features";
import Relationship from "@/components/Relationship";
import Steadiness from "@/components/Steadiness";
import Waitlist from "@/components/Waitlist";
import WhyItWorks from "@/components/WhyItWorks";
import DifferentApproach from "@/components/DifferentApproach";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Statement />
      <Clarity />
      <ValueProp />
      <HabitsKeywords />
      <Features />
      <Relationship />
      <Steadiness />
      <Waitlist />
      <WhyItWorks />
      <DifferentApproach />
      <FAQ />
      <Footer />
    </>
  );
}
