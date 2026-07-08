export default function Hero() {
  return (
    <section className="max-w-[1280px] mx-auto px-6 sm:px-12 pt-16 sm:pt-24 pb-20 sm:pb-[120px] flex flex-col items-center text-center">
      <div className="inline-flex items-center gap-2 px-3.5 py-1.5 border border-[#ECECEC] rounded-full text-[13px] font-medium text-[#555555] mb-8">
        <span className="w-1.5 h-1.5 rounded-full bg-brand inline-block" />
        IA aplicada a tu negocio, sin vueltas
      </div>

      <h1 className="text-[40px] sm:text-[56px] lg:text-[72px] leading-[1.05] font-extrabold tracking-[-0.03em] mb-6 max-w-[900px]">
        Hacemos que la IA trabaje para tu empresa
      </h1>

      <p className="text-lg sm:text-xl leading-relaxed text-[#555555] max-w-[620px] mb-10">
        Ayudamos a pymes y startups a automatizar procesos, atender mejor a
        sus clientes y tomar decisiones más inteligentes, con soluciones de
        IA hechas a medida.
      </p>

      <div className="flex gap-4 flex-wrap justify-center mb-20">
        <a
          href="#contacto"
          className="bg-brand text-white px-8 py-4 rounded-[10px] text-base font-semibold hover:bg-brand-dark transition-colors"
        >
          Agendá una llamada
        </a>
        <a
          href="#servicios"
          className="bg-white text-black px-8 py-4 rounded-[10px] text-base font-semibold border border-[#E2E2E2] hover:border-black transition-colors"
        >
          Ver servicios
        </a>
      </div>

      <div className="w-full max-w-[1000px] aspect-[16/8] rounded-[20px] border border-[#ECECEC] flex items-center justify-center text-[#999999] font-mono text-sm bg-[repeating-linear-gradient(135deg,_#FAFAFA,_#FAFAFA_12px,_#F2F2F2_12px,_#F2F2F2_24px)]">
        [ screenshot / demo del producto ]
      </div>
    </section>
  );
}
