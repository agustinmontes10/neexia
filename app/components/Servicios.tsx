import { services } from "@/app/lib/landing-data";
import ServiceIcon from "./ServiceIcon";

export default function Servicios() {
  return (
    <section
      id="servicios"
      className="max-w-[1280px] mx-auto px-6 sm:px-12 py-16 sm:py-24"
    >
      <div className="max-w-[640px] mx-auto mb-16 text-center">
        <p className="text-[13px] font-bold uppercase tracking-[0.08em] text-brand mb-4">
          Servicios
        </p>
        <h2 className="text-[32px] sm:text-[44px] font-extrabold tracking-[-0.02em] mb-4 leading-[1.1]">
          Todo lo que necesitás para escalar con IA
        </h2>
        <p className="text-lg text-[#555555] leading-relaxed">
          Soluciones concretas, pensadas para negocios reales — no ciencia
          ficción.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((s) => (
          <div
            key={s.num}
            className="group relative border border-[#ECECEC] rounded-[20px] px-8 pt-9 pb-8 flex flex-col gap-5 bg-white overflow-hidden transition-all duration-200 hover:border-[#FFDCCB] hover:shadow-[0_16px_32px_rgba(17,17,17,0.07)] hover:-translate-y-1"
          >
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-brand scale-x-0 origin-left transition-transform duration-[250ms] group-hover:scale-x-100" />

            <div className="flex items-start justify-between">
              <div className="w-14 h-14 rounded-[14px] bg-[#FFF1EC] flex items-center justify-center">
                <ServiceIcon shape={s.icon} />
              </div>
              <div className="text-[13px] font-bold text-[#DDDDDD] tracking-[0.02em] tabular-nums">
                {s.num}
              </div>
            </div>

            <div className="flex flex-col gap-2.5 flex-1">
              <h3 className="text-[21px] font-bold tracking-[-0.01em]">
                {s.title}
              </h3>
              <p className="text-[15px] text-[#666666] leading-relaxed">
                {s.desc}
              </p>
            </div>

            <div className="flex flex-col gap-2 pt-4 border-t border-[#F2F2F2]">
              {s.features.map((f) => (
                <div
                  key={f}
                  className="flex items-center gap-2.5 text-sm text-[#444444]"
                >
                  <span className="w-[5px] h-[5px] rounded-full bg-brand shrink-0" />
                  {f}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
