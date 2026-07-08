import { cases } from "@/app/lib/landing-data";

export default function Casos() {
  return (
    <section
      id="casos"
      className="max-w-[1280px] mx-auto px-6 sm:px-12 py-16 sm:py-24"
    >
      <div className="max-w-[640px] mx-auto mb-16 text-center">
        <p className="text-[13px] font-bold uppercase tracking-[0.08em] text-brand mb-4">
          Casos de éxito
        </p>
        <h2 className="text-[32px] sm:text-[44px] font-extrabold tracking-[-0.02em] mb-4 leading-[1.1]">
          Resultados que se ven
        </h2>
        <p className="text-lg text-[#555555] leading-relaxed">
          Algunos de los negocios que ya transformamos con IA.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {cases.map((c) => (
          <div
            key={c.name + c.metric}
            className="border border-[#ECECEC] rounded-2xl overflow-hidden flex flex-col"
          >
            <div className="aspect-video flex items-center justify-center text-[#AAAAAA] font-mono text-xs bg-[repeating-linear-gradient(135deg,_#FAFAFA,_#FAFAFA_10px,_#F2F2F2_10px,_#F2F2F2_20px)]">
              [ logo / foto cliente ]
            </div>
            <div className="p-7 flex flex-col gap-3">
              <div>
                <div className="text-[26px] font-extrabold text-brand">
                  {c.metric}
                </div>
                <div className="text-[13px] text-[#999999]">
                  {c.metricLabel}
                </div>
              </div>
              <p className="text-[15px] text-[#444444] leading-relaxed">
                &ldquo;{c.quote}&rdquo;
              </p>
              <div className="text-sm font-semibold mt-2">{c.name}</div>
              <div className="text-[13px] text-[#999999]">{c.role}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
