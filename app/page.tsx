import Nav from "@/app/components/Nav";
import Hero from "@/app/components/Hero";
import Resultados from "@/app/components/Resultados";
import Servicios from "@/app/components/Servicios";
import Proceso from "@/app/components/Proceso";
import Casos from "@/app/components/Casos";
import CtaFinal from "@/app/components/CtaFinal";
import Footer from "@/app/components/Footer";

export default function Home() {
  return (
    <div className="w-full min-h-screen bg-white text-[#111111]">
      <Nav />
      <Hero />
      {/* <Resultados /> */}
      <Servicios />
      <Proceso />
      <Casos />
      <CtaFinal />
      <Footer />
    </div>
  );
}
