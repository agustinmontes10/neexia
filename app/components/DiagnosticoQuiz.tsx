"use client";

import { useMemo, useState } from "react";
import {
  RUBROS,
  getRubro,
  DIAGNOSTICO_API_URL,
  type RubroSlug,
  type Informe,
  type Calculo,
} from "@/app/lib/diagnostico-data";
import { whatsappLink } from "@/app/lib/site";
import AnimatedMetric from "@/app/components/AnimatedMetric";

type Phase = "select" | "quiz" | "loading" | "result" | "error";

type Contacto = { nombre: string; email: string; telefono: string };

function CheckIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4 shrink-0 text-brand" aria-hidden="true">
      <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.2" opacity="0.3" />
      <path d="M5 8.3L7.1 10.3L11.2 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function DiagnosticoQuiz() {
  const [phase, setPhase] = useState<Phase>("select");
  const [rubro, setRubro] = useState<RubroSlug | null>(null);
  const [stepIndex, setStepIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [openText, setOpenText] = useState("");
  const [contacto, setContacto] = useState<Contacto>({ nombre: "", email: "", telefono: "" });
  const [informe, setInforme] = useState<Informe | null>(null);
  const [calculo, setCalculo] = useState<Calculo | null>(null);

  const config = rubro ? getRubro(rubro) : undefined;

  const visibleQuestions = useMemo(() => {
    if (!config?.questions) return [];
    return config.questions.filter((q) => !q.condition || q.condition(answers));
  }, [config, answers]);

  const totalSteps = visibleQuestions.length + 1; // +1 = paso de contacto
  const current = visibleQuestions[stepIndex];
  const isContactStep = stepIndex === visibleQuestions.length;

  function selectRubro(slug: RubroSlug) {
    const cfg = getRubro(slug);
    if (!cfg?.available) return;
    setRubro(slug);
    setPhase("quiz");
    setStepIndex(0);
  }

  function selectOption(key: string, value: string) {
    setAnswers((a) => ({ ...a, [key]: value }));
  }

  function canContinue() {
    if (isContactStep) {
      const okEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contacto.email.trim());
      return contacto.nombre.trim().length > 1 && okEmail;
    }
    if (!current) return false;
    if (current.type === "open") return openText.trim().length >= 8;
    return !!answers[current.key];
  }

  function goBack() {
    setStepIndex((i) => Math.max(0, i - 1));
  }

  async function goNext() {
    if (current?.type === "open") {
      setAnswers((a) => ({ ...a, [current.key]: openText.trim() }));
    }
    if (isContactStep) {
      await submitDiagnostico();
      return;
    }
    setStepIndex((i) => i + 1);
  }

  async function submitDiagnostico() {
    setPhase("loading");
    const payload = { rubro, ...answers, contacto };
    try {
      const controller = new AbortController();
      const timeout = setTimeout(() => controller.abort(), 30000);
      const res = await fetch(DIAGNOSTICO_API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
        signal: controller.signal,
      });
      clearTimeout(timeout);
      if (!res.ok) throw new Error(`status ${res.status}`);
      const data = await res.json();
      if (!data?.informe || !data?.calculo) throw new Error("respuesta incompleta");
      setInforme(data.informe as Informe);
      setCalculo(data.calculo as Calculo);
      setPhase("result");
    } catch {
      setPhase("error");
    }
  }

  const progressPct = phase === "quiz" ? Math.round(((stepIndex + 0.4) / totalSteps) * 100) : 100;

  return (
    <div className="max-w-[640px] mx-auto">
      {phase === "select" && (
        <div className="flex flex-col gap-6">
          <p className="text-[15px] text-[#555555] leading-relaxed">
            Elegí el rubro que mejor describe tu negocio. Vamos sumando rubros de a poco — si el tuyo
            todavía no está, escribinos y te lo armamos.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {RUBROS.map((r) => (
              <button
                key={r.slug}
                type="button"
                onClick={() => selectRubro(r.slug)}
                disabled={!r.available}
                className={`flex items-center justify-between gap-3 rounded-2xl border px-5 py-4 text-left text-[15px] font-medium transition-colors focus-visible:outline-2 focus-visible:outline-brand focus-visible:outline-offset-2 ${
                  r.available
                    ? "border-[#ECECEC] hover:border-brand cursor-pointer text-[#111111]"
                    : "border-[#F2F2F2] text-[#B1B1B1] cursor-not-allowed"
                }`}
              >
                {r.label}
                {!r.available && (
                  <span className="text-[11px] font-semibold uppercase tracking-[0.05em] text-[#B1B1B1]">
                    Muy pronto
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>
      )}

      {phase === "quiz" && current && (
        <div className="flex flex-col gap-6">
          <div className="h-[3px] rounded-full bg-[#F1F1F1] overflow-hidden">
            <div
              className="h-full bg-brand rounded-full transition-[width] duration-300"
              style={{ width: `${progressPct}%` }}
            />
          </div>

          <div key={stepIndex} className="flex flex-col gap-5 animate-fade-up">
            <p className="text-[12px] font-bold uppercase tracking-[0.08em] text-brand">
              {current.eyebrow}
            </p>
            <h2 className="text-[24px] sm:text-[28px] font-extrabold tracking-[-0.01em] leading-[1.2]">
              {current.question}
            </h2>
            {current.hint && (
              <p className="text-[14px] text-[#777777] -mt-2 leading-relaxed">{current.hint}</p>
            )}

            {current.type === "options" && (
              <div className="flex flex-col gap-2.5">
                {current.options?.map((o) => {
                  const selected = answers[current.key] === o.value;
                  return (
                    <button
                      key={o.value}
                      type="button"
                      onClick={() => selectOption(current.key, o.value)}
                      className={`flex items-center justify-between gap-3 w-full text-left px-5 py-4 rounded-2xl border text-[15.5px] transition-colors focus-visible:outline-2 focus-visible:outline-brand focus-visible:outline-offset-2 ${
                        selected ? "border-brand bg-[#FFF1EC]" : "border-[#ECECEC] hover:border-brand"
                      }`}
                    >
                      {o.label}
                      {selected && <CheckIcon />}
                    </button>
                  );
                })}
              </div>
            )}

            {current.type === "open" && (
              <div className="flex flex-col gap-2">
                <textarea
                  value={openText}
                  onChange={(e) => setOpenText(e.target.value)}
                  maxLength={400}
                  placeholder={current.placeholder}
                  rows={5}
                  className="w-full rounded-2xl border border-[#ECECEC] px-5 py-4 text-[15.5px] leading-relaxed resize-y outline-none focus:border-brand"
                />
                <span className="text-[12px] text-[#B1B1B1] text-right">{openText.length} / 400</span>
              </div>
            )}
          </div>

          <NavButtons
            onBack={goBack}
            onNext={goNext}
            backDisabled={stepIndex === 0}
            nextDisabled={!canContinue()}
            nextLabel="Continuar"
          />
        </div>
      )}

      {phase === "quiz" && isContactStep && (
        <div className="flex flex-col gap-6">
          <div className="h-[3px] rounded-full bg-[#F1F1F1] overflow-hidden">
            <div className="h-full bg-brand rounded-full" style={{ width: "100%" }} />
          </div>
          <div className="flex flex-col gap-5 animate-fade-up">
            <p className="text-[12px] font-bold uppercase tracking-[0.08em] text-brand">Último paso</p>
            <h2 className="text-[24px] sm:text-[28px] font-extrabold tracking-[-0.01em] leading-[1.2]">
              Dejanos tus datos para ver tu diagnóstico
            </h2>
            <p className="text-[14px] text-[#777777] -mt-2 leading-relaxed">
              Es gratis y sin compromiso. Te llega también una copia por email.
            </p>
            <div className="flex flex-col gap-3">
              <input
                type="text"
                placeholder="Tu nombre"
                value={contacto.nombre}
                onChange={(e) => setContacto((c) => ({ ...c, nombre: e.target.value }))}
                className="w-full rounded-2xl border border-[#ECECEC] px-5 py-4 text-[15.5px] outline-none focus:border-brand"
              />
              <input
                type="email"
                placeholder="vos@ejemplo.com"
                value={contacto.email}
                onChange={(e) => setContacto((c) => ({ ...c, email: e.target.value }))}
                className="w-full rounded-2xl border border-[#ECECEC] px-5 py-4 text-[15.5px] outline-none focus:border-brand"
              />
              <input
                type="tel"
                placeholder="Teléfono (opcional)"
                value={contacto.telefono}
                onChange={(e) => setContacto((c) => ({ ...c, telefono: e.target.value }))}
                className="w-full rounded-2xl border border-[#ECECEC] px-5 py-4 text-[15.5px] outline-none focus:border-brand"
              />
            </div>
          </div>
          <NavButtons
            onBack={goBack}
            onNext={goNext}
            backDisabled={false}
            nextDisabled={!canContinue()}
            nextLabel="Ver mi diagnóstico"
          />
        </div>
      )}

      {phase === "loading" && (
        <div className="flex flex-col items-center justify-center gap-4 py-24 text-center">
          <div className="w-9 h-9 rounded-full border-[3px] border-[#F1F1F1] border-t-brand animate-spin" />
          <p className="text-[14.5px] text-[#777777]">Analizando tus respuestas…</p>
        </div>
      )}

      {phase === "result" && informe && calculo && (
        <div className="flex flex-col gap-6 animate-fade-up">
          <div className="rounded-[24px] bg-black px-8 py-9 text-center flex flex-col items-center gap-2">
            <div className="text-brand text-[48px] sm:text-[56px] font-extrabold leading-none tabular-nums">
              <AnimatedMetric value={`${calculo.horas_totales_ahorradas}h`} active={true} />
              <span className="text-[18px] text-white/70 font-semibold ml-2">/ semana</span>
            </div>
            <p className="text-white/80 text-[14px]">podrían recuperar automatizando lo de abajo</p>
          </div>

          <p className="text-[15px] text-[#444444] leading-relaxed">{informe.resumen_horas}</p>

          {answers.pregunta_abierta && (
            <blockquote className="border-l-[3px] border-brand pl-4 text-[15px] italic text-[#555555]">
              “{answers.pregunta_abierta}”
            </blockquote>
          )}

          <div className="flex flex-col gap-4">
            {informe.recomendaciones.map((r, i) => (
              <div key={i} className="rounded-2xl border border-[#ECECEC] px-6 py-5 flex flex-col gap-2">
                <div className="flex items-center justify-between gap-3">
                  <h3 className="text-[16.5px] font-bold tracking-[-0.01em]">{r.area}</h3>
                  {r.horas_estimadas && (
                    <span className="text-[12px] font-semibold text-brand bg-[#FFF1EC] px-3 py-1 rounded-full whitespace-nowrap">
                      ~{r.horas_estimadas}
                    </span>
                  )}
                </div>
                <p className="text-[14.5px] text-[#555555] leading-relaxed">
                  <span className="font-semibold text-[#111111]">Hoy: </span>
                  {r.diagnostico}
                </p>
                <p className="text-[14.5px] text-[#555555] leading-relaxed">
                  <span className="font-semibold text-[#111111]">Con Neexia: </span>
                  {r.solucion}
                </p>
              </div>
            ))}
          </div>

          <div className="flex flex-col items-center gap-3 pt-2 text-center">
            <p className="text-[15px] text-[#555555] max-w-[440px] leading-relaxed">
              {informe.cierre}
            </p>
            <a
              href={whatsappLink(
                `Hola! Hice el diagnóstico gratuito de Neexia (${informe.titulo}) y quiero charlar sobre los resultados.`
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-brand text-white px-7 py-3.5 rounded-[10px] text-[15px] font-semibold hover:bg-brand-dark transition-colors focus-visible:outline-2 focus-visible:outline-brand focus-visible:outline-offset-2"
            >
              Quiero mi llamada gratuita
            </a>
            <span className="text-[12px] text-[#B1B1B1]">
              Te enviamos una copia de este informe a tu email.
            </span>
          </div>
        </div>
      )}

      {phase === "error" && (
        <div className="flex flex-col items-center gap-4 py-16 text-center">
          <p className="text-[16px] font-semibold">
            Uy, tuvimos un problema generando tu informe.
          </p>
          <p className="text-[14.5px] text-[#777777] max-w-[420px] leading-relaxed">
            Tus respuestas no se perdieron, pero preferimos que hables directo con nosotros para no
            hacerte esperar.
          </p>
          <a
            href={whatsappLink("Hola! Intenté hacer el diagnóstico gratuito en la web y tuve un error.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-black text-white px-6 py-3.5 rounded-[10px] text-[15px] font-semibold hover:bg-brand transition-colors focus-visible:outline-2 focus-visible:outline-brand focus-visible:outline-offset-2"
          >
            Escribinos por WhatsApp
          </a>
        </div>
      )}
    </div>
  );
}

function NavButtons({
  onBack,
  onNext,
  backDisabled,
  nextDisabled,
  nextLabel,
}: {
  onBack: () => void;
  onNext: () => void;
  backDisabled: boolean;
  nextDisabled: boolean;
  nextLabel: string;
}) {
  return (
    <div className="flex items-center justify-between gap-3 pt-2">
      <button
        type="button"
        onClick={onBack}
        disabled={backDisabled}
        className="px-4 py-3 text-[14.5px] font-medium text-[#777777] hover:text-brand transition-colors disabled:invisible focus-visible:outline-2 focus-visible:outline-brand focus-visible:outline-offset-2"
      >
        Atrás
      </button>
      <button
        type="button"
        onClick={onNext}
        disabled={nextDisabled}
        className="px-7 py-3.5 rounded-[10px] text-[15px] font-semibold bg-black text-white hover:bg-brand transition-colors disabled:opacity-30 disabled:cursor-not-allowed focus-visible:outline-2 focus-visible:outline-brand focus-visible:outline-offset-2"
      >
        {nextLabel}
      </button>
    </div>
  );
}
