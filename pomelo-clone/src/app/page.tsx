import AmbientHue from "@/components/common/AmbientHue";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import Capabilities from "@/components/sections/Capabilities";
import CardDesigner from "@/components/sections/CardDesigner";
import Contact from "@/components/sections/Contact";
import Hero from "@/components/sections/Hero";
import ModularSystem from "@/components/sections/ModularSystem";
import PartnerMarquee from "@/components/sections/PartnerMarquee";
import Projects from "@/components/sections/Projects";
import Testimonials from "@/components/sections/Testimonials";
import UseCases from "@/components/sections/UseCases";

export default function Home() {
  return (
    <>
      <AmbientHue />
      <Navbar />
      <Hero />
      <PartnerMarquee />
      <UseCases />
      <CardDesigner />
      <ModularSystem />
      <Capabilities />
      <Projects />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}
