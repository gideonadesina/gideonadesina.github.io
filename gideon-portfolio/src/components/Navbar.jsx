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

  useEffect(() => {
    const sections = links.map((l) => document.getElementById(l.id)).filter(Boolean);

    const io = new IntersectionObserver(
      (entries) => {
        const hit = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0))[0];
        if (hit?.target?.id) setActive(hit.target.id);
      },
      { threshold: [0.2, 0.35, 0.5], rootMargin: "-20% 0px -60% 0px" }
    );

    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  
  
const go = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header className="fixed left-0 right-0 top-0 z-[2]">
      <div className="mx-auto flex max-w-6xl justify-center px-8 pt-6">
        <nav className="flex h-[68px] w-full max-w-[768px] items-center justify-between rounded-2xl border border-white/20 bg-white/25 px-8 py-4 backdrop-blur-[4px] shadow-soft">
          {/* Left brand (optional like Yusuf logo) */}
          <button
            onClick={() => go("home")}
            className="font-extrabold tracking-tight text-slate-800"
            aria-label="Go Home"
          >
            Gideon
          </button>

          {/* Links */}
          <div className="flex items-center gap-10">
            {links.map((l) => (
              <button
                key={l.id}
                onClick={() => go(l.id)}
                className={`text-[12.8px] font-medium uppercase leading-[19.2px] transition
                  ${active === l.id ? "text-[color:var(--brand)]" : "text-slate-500"}
                `}
              >
                {l.label}
              </button>
            ))}
          </div>
        </nav>
    </div>
    </header>
  );
}
