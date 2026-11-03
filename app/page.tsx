import Nav from "@/app/components/Nav";
import Hero from "@/app/components/Hero";
import Intro from "@/app/components/Intro";
import Servicios from "@/app/components/Servicios";
import Proceso from "@/app/components/Proceso";
import Casos from "@/app/components/Casos";
import Faq from "@/app/components/Faq";
import CtaFinal from "@/app/components/CtaFinal";
import Footer from "@/app/components/Footer";

export default function Home() {
  // No overflow clipping on this wrapper: it would break `sticky` in Proceso.
  return (
    <div className="w-full min-h-screen bg-bone text-ink">
      <Nav overlay />
      <Hero />
      <Intro />
      <Servicios />
      <Proceso />
      <Casos />
      <Faq />
      <CtaFinal />
      <Footer />
    </div>
  );
}
