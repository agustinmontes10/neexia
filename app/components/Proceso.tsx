import { steps } from "@/app/lib/landing-data";

// Matches the proceso-step-N keyframes in globals.css, staggered across the
// shared proceso-fill timeline. Only kicks in at lg, where steps sit in one row.
const STEP_ANIMATIONS = [
  "lg:animate-proceso-step-0",
  "lg:animate-proceso-step-1",
  "lg:animate-proceso-step-2",
  "lg:animate-proceso-step-3",
];

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
        <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="hidden lg:block absolute left-0 right-0 top-5 h-[3px] rounded-full">
            <div className="relative h-full w-0 rounded-full bg-gradient-to-r from-brand/60 to-brand animate-proceso-fill">
              <span className="absolute top-1/2 right-0 w-2.5 h-2.5 rounded-full bg-brand animate-proceso-tip-glow" />
            </div>
          </div>
          {steps.map((step, i) => (
            <div key={step.n} className="relative z-10 flex flex-col gap-3">
              <div
                className={`w-fit text-4xl font-extrabold text-[#EDEDED] bg-[#FAFAFA] tracking-[-0.02em] ${STEP_ANIMATIONS[i] ?? ""}`}
              >
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
