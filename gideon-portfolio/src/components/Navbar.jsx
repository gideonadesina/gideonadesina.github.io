import { useEffect, useState } from "react";

const links = [
  { id: "home", label: "HOME" },
  { id: "about", label: "ABOUT" },
  { id: "work", label: "WORK" },
  { id: "skills", label: "SKILLS" },
  { id: "contact", label: "CONTACT" },
];

export default function Navbar() {
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const ids = links.map((l) => l.id);
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0))[0];
        if (visible?.target?.id) setActive(visible.target.id);
      },
      { root: null, threshold: [0.2, 0.35, 0.5], rootMargin: "-20% 0px -60% 0px" }
    );

    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  const go = (id) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header className="fixed left-0 right-0 top-0 z-40">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <button
          onClick={() => go("home")}
          className="rounded-xl bg-white/70 px-4 py-2 text-sm font-extrabold tracking-tight shadow-soft backdrop-blur"
        >
          AG
        </button>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-7 rounded-2xl bg-white/70 px-6 py-3 shadow-soft backdrop-blur md:flex">
          {links.map((l) => (
            <button
              key={l.id}
              onClick={() => go(l.id)}
              className={`text-xs font-bold tracking-widest ${
                active === l.id ? "text-[color:var(--brand)]" : "text-slate-600"
              }`}
            >
              {l.label}
            </button>
          ))}
        </nav>

        {/* Mobile */}
        <button
          onClick={() => setOpen((v) => !v)}
          className="grid h-11 w-11 place-items-center rounded-2xl bg-white/70 text-slate-700 shadow-soft backdrop-blur md:hidden"
          aria-label="Menu"
        >
          ☰
        </button>
      </div>

      {open && (
        <div className="mx-auto max-w-6xl px-6 md:hidden">
          <div className="rounded-2xl bg-white/80 p-4 shadow-soft backdrop-blur">
            <div className="flex flex-col gap-3">
              {links.map((l) => (
                <button
                  key={l.id}
                  onClick={() => go(l.id)}
                  className={`rounded-xl px-4 py-3 text-left text-sm font-semibold ${
                    active === l.id ? "bg-white text-[color:var(--brand)]" : "text-slate-700"
                  }`}
                >
                  {l.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
