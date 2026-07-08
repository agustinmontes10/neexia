import { steps } from "@/app/lib/landing-data";

export default function Proceso() {
  return (
    <section
      id="proceso"
      className="bg-[#FAFAFA] py-16 sm:py-24 px-6 sm:px-12 border-y border-[#F0F0F0]"
    >
      <div className="max-w-[1280px] mx-auto">
        <div className="max-w-[640px] mx-auto mb-16 text-center">
          <p className="text-[13px] font-bold uppercase tracking-[0.08em] text-brand mb-4">
            Cómo trabajamos
          </p>
          <h2 className="text-[32px] sm:text-[44px] font-extrabold tracking-[-0.02em] mb-4 leading-[1.1]">
            Un proceso simple, de punta a punta
          </h2>
          <p className="text-lg text-[#555555] leading-relaxed">
            Sin promesas vacías: te acompañamos en cada paso.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step) => (
            <div key={step.n} className="flex flex-col gap-3">
              <div className="text-4xl font-extrabold text-[#EDEDED] tracking-[-0.02em]">
                {step.n}
              </div>
              <h3 className="text-lg font-bold">{step.title}</h3>
              <p className="text-[15px] text-[#666666] leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
