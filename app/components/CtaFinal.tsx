export default function CtaFinal() {
  return (
    <section className="max-w-[1280px] mx-auto mb-16 sm:mb-24 px-6 sm:px-12">
      <div className="bg-black rounded-[24px] py-16 sm:py-20 px-6 sm:px-12 flex flex-col items-center text-center gap-6">
        <h2 className="text-white text-[28px] sm:text-[40px] font-extrabold tracking-[-0.02em] max-w-[600px] leading-[1.15]">
          ¿Charlamos sobre cómo la IA puede ayudar a tu negocio?
        </h2>
        <p className="text-[#BBBBBB] text-[17px] max-w-[520px] leading-relaxed">
          Una llamada de 30 minutos, sin compromiso, para entender tu
          operación y ver dónde la IA suma valor real.
        </p>
        <a
          href="#contacto"
          className="bg-brand text-white px-8 py-4 rounded-[10px] text-base font-semibold hover:bg-brand-dark transition-colors mt-2"
        >
          Agendá tu llamada
        </a>
      </div>
    </section>
  );
}
