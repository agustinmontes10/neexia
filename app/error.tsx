"use client";

import Link from "next/link";
import { useEffect } from "react";
import Nav from "@/app/components/Nav";
import Footer from "@/app/components/Footer";

export default function Error({
  error,
  unstable_retry,
}: {
  error: Error & { digest?: string };
  unstable_retry: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="w-full min-h-screen bg-white text-[#111111] flex flex-col">
      <Nav />
      <section className="flex-1 flex flex-col items-center justify-center text-center px-6 py-24">
        <p className="text-[13px] font-bold uppercase tracking-[0.08em] text-brand mb-4">
          Algo salió mal
        </p>
        <h1 className="text-[28px] sm:text-[36px] font-extrabold tracking-[-0.02em] mb-4">
          Ocurrió un error inesperado
        </h1>
        <p className="text-[17px] text-[#555555] max-w-[440px] mb-8">
          Ya lo estamos revisando. Podés intentar de nuevo o volver al inicio.
        </p>
        <div className="flex items-center gap-4">
          <button
            onClick={() => unstable_retry()}
            className="bg-black text-white px-6 py-3.5 rounded-[10px] text-[15px] font-semibold hover:bg-brand transition-colors focus-visible:outline-2 focus-visible:outline-brand focus-visible:outline-offset-2"
          >
            Intentar de nuevo
          </button>
          <Link
            href="/"
            className="text-[15px] font-medium text-[#777777] hover:text-brand transition-colors focus-visible:outline-2 focus-visible:outline-brand focus-visible:outline-offset-2"
          >
            Volver al inicio
          </Link>
        </div>
      </section>
      <Footer />
    </div>
  );
}
