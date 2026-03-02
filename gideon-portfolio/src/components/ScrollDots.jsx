import { useEffect, useMemo, useState } from "react";

const DEFAULT_IDS = ["home", "about", "expertise", "work", "skills", "contact"];

export default function ScrollDots({
  ids = DEFAULT_IDS,
  /** If you pass activeId, ScrollDots becomes controlled and will sync with other navs */
  activeId,
  /** Optional callback when a dot is clicked */
  onNavigate,
  /** Height of your fixed header (px). Used for accurate scrolling. */
  headerOffset = 96,
}) {
  const sectionIds = useMemo(() => ids.filter(Boolean), [ids]);

  const [internalActive, setInternalActive] = useState(sectionIds[0] || "home");
  const currentActive = activeId ?? internalActive;

  useEffect(() => {
    // If controlled, don't manage internal active state.
    if (activeId) return;

    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (!sections.length) return;

    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (b.intersectionRatio || 0) - (a.intersectionRatio || 0))[0];

        if (visible?.target?.id) setInternalActive(visible.target.id);
      },
      {
        // Tuned so the "active" section changes when it's meaningfully in view
        root: null,
        threshold: [0, 0.15, 0.3, 0.6],
        rootMargin: "-15% 0px -65% 0px",
      }
    );

    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, [activeId, sectionIds]);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (!el) return;

    // More accurate than scrollIntoView when you have a fixed header
    const y = el.getBoundingClientRect().top + window.scrollY - headerOffset;

    window.scrollTo({ top: y, behavior: "smooth" });
    onNavigate?.(id);
  };

  return (
    <div className="fixed right-6 top-1/2 z-40 hidden -translate-y-1/2 flex-col gap-3 md:flex">
      {sectionIds.map((id) => {
        const isActive = currentActive === id;

        return (
          <button
            key={id}
            onClick={() => scrollTo(id)}
            aria-label={`Go to ${id}`}
            className={[
              "h-3 w-3 rounded-full transition-all duration-300",
              "ring-4 ring-transparent hover:ring-[color:var(--brand)]/10",
              isActive
                ? "bg-[color:var(--brand)] scale-110"
                : "bg-slate-300 hover:bg-slate-400",
            ].join(" ")}
          />
        );
      })}
    </div>
  );
 }