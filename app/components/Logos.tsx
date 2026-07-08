import { logos } from "@/app/lib/landing-data";

export default function Logos() {
  return (
    <section className="max-w-[1280px] mx-auto px-6 sm:px-12 pb-16 sm:pb-24">
      <p className="text-center text-[13px] font-semibold uppercase tracking-[0.08em] text-[#999999] mb-8">
        Confían en nosotros
      </p>
      <div className="flex items-center justify-center gap-10 sm:gap-16 flex-wrap">
        {logos.map((logo) => (
          <div
            key={logo.name}
            className="w-[120px] h-9 rounded-md flex items-center justify-center text-[#BBBBBB] font-mono text-[11px] bg-[repeating-linear-gradient(135deg,_#F5F5F5,_#F5F5F5_8px,_#EFEFEF_8px,_#EFEFEF_16px)]"
          >
            {logo.name}
          </div>
        ))}
      </div>
    </section>
  );
}
