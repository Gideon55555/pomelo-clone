import AmbientHue from "@/components/common/AmbientHue";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import Capabilities from "@/components/sections/Capabilities";
import CardDesigner from "@/components/sections/CardDesigner";
import Contact from "@/components/sections/Contact";
import Hero from "@/components/sections/Hero";
import ModularSystem from "@/components/sections/ModularSystem";
import Testimonials from "@/components/sections/Testimonials";
import UseCases from "@/components/sections/UseCases";

export default function Home() {
  return (
    <>
      <AmbientHue />
      <Navbar />
      <Hero />
      <UseCases />
      <CardDesigner />
      <ModularSystem />
      <Capabilities />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}
