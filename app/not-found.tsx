import Link from "next/link";
import Nav from "@/app/components/Nav";
import Footer from "@/app/components/Footer";

export default function NotFound() {
  return (
    <div className="w-full min-h-screen bg-white text-[#111111] flex flex-col">
      <Nav />
      <section className="flex-1 flex flex-col items-center justify-center text-center px-6 py-24">
        <p className="text-[13px] font-bold uppercase tracking-[0.08em] text-brand mb-4">
          Error 404
        </p>
        <h1 className="text-[34px] sm:text-[48px] font-extrabold tracking-[-0.02em] mb-4">
          No encontramos esta página
        </h1>
        <p className="text-[17px] text-[#555555] max-w-[440px] mb-8">
          Puede que el enlace esté roto o que la página se haya movido.
        </p>
        <Link
          href="/"
          className="inline-flex items-center bg-black text-white px-6 py-3.5 rounded-[10px] text-[15px] font-semibold hover:bg-brand transition-colors focus-visible:outline-2 focus-visible:outline-brand focus-visible:outline-offset-2"
        >
          Volver al inicio
        </Link>
      </section>
      <Footer />
    </div>
  );
}
