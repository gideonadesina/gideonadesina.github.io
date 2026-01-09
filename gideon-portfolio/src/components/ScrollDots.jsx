import { useEffect, useState } from "react";

const ids = ["home", "about", "expertise", "work", "skills", "contact"];

export default function ScrollDots() {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const sections = ids.map((id) => document.getElementById(id)).filter(Boolean);

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
    <div className="fixed right-6 top-1/2 z-40 hidden -translate-y-1/2 flex-col gap-3 md:flex">
      {ids.map((id) => (
        <button
          key={id}
          onClick={() => go(id)}
          aria-label={`Go to ${id}`}
          className={`h-3 w-3 rounded-full transition ${
            active === id ? "bg-[color:var(--brand)]" : "bg-slate-300"
          }`}
        />
      ))}
    </div>
  );
}
