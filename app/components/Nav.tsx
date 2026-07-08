import Image from "next/image";

const links = [
  { href: "#servicios", label: "Servicios" },
  { href: "#proceso", label: "Cómo trabajamos" },
  { href: "#casos", label: "Casos de éxito" },
];

export default function Nav() {
  return (
    <nav className="flex items-center justify-between max-w-[1280px] mx-auto px-6 sm:px-12 py-6">
      <Image src="/logoNeexia.svg" alt="Neexia" width={923} height={237} className="h-7 w-auto" priority />
      <div className="hidden md:flex items-center gap-9">
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="text-[15px] font-medium text-[#111111] hover:text-brand transition-colors"
          >
            {link.label}
          </a>
        ))}
        <a
          href="#contacto"
          className="bg-black text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-brand transition-colors"
        >
          Hablemos
        </a>
      </div>
      <a
        href="#contacto"
        className="md:hidden bg-black text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-brand transition-colors"
      >
        Hablemos
      </a>
    </nav>
  );
}
