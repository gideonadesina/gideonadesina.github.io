import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "expertise", label: "Expertise" },
    { id: "work", label: "Work" },
    { id: "skills", label: "Skills" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <>
      <header className="fixed top-0 z-50 w-full bg-white/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          
          {/* Left Hamburger (mobile only) */}
          <button
            onClick={() => setOpen(true)}
            className="md:hidden text-slate-900"
          >
            ☰
          </button>

          {/* Logo */}
          <div className="relative select-none text-xl font-extrabold tracking-tight">
  <span className="text-slate-900">Adesina</span>{" "}
  <span className="text-[color:var(--brand)]">Gideon</span>
  <div className="absolute -bottom-1 left-0 h-[2px] w-10 bg-[color:var(--brand)]" />
</div>

          {/* Desktop Nav */}
          <nav className="hidden gap-8 md:flex">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="text-sm font-medium text-slate-700 hover:text-[color:var(--brand)]"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-0 z-40 transition ${
          open ? "visible" : "invisible"
        }`}
      >
        {/* Overlay */}
        <div
          onClick={() => setOpen(false)}
          className={`absolute inset-0 bg-black/40 transition-opacity ${
            open ? "opacity-100" : "opacity-0"
          }`}
        />

        {/* Drawer Panel */}
        <div
          className={`absolute left-0 top-0 h-full w-72 bg-white p-8 shadow-2xl transition-transform duration-300 ${
            open ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <button
            onClick={() => setOpen(false)}
            className="mb-10 text-slate-500"
          >
            ✕
          </button>

          <div className="flex flex-col gap-6">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setOpen(false)}
                className="text-base font-semibold text-slate-800"
              >
                {item.label}
              </a>
            ))}

            {/* Resume Link */}
            <a
              href="/Adesina_Gideon_CV.pdf"
              target="_blank"
              className="mt-4 rounded-xl bg-[color:var(--brand)] px-4 py-3 text-center text-sm font-semibold text-white"
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </>
  );
 }