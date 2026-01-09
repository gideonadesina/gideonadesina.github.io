import { useMemo, useState } from "react";
import { projects } from "../data/projects";

const filters = [
  { label: "All", value: "all" },
  { label: "Frontend", value: "frontend" },
  { label: "Cybersecurity", value: "cybersecurity" },
];

export default function Work() {
  const [active, setActive] = useState("all");

  const filtered = useMemo(() => {
    if (active === "all") return projects;
    return projects.filter((p) => p.category === active);
  }, [active]);

  return (
    <section id="work" className="mx-auto max-w-6xl px-8 py-24">
      <h2 className="text-center text-5xl font-extrabold tracking-tight text-slate-900">
        My <span className="text-[color:var(--brand)]">Work</span>
      </h2>

      {/* Filter buttons */}
      <div className="mt-10 flex flex-wrap justify-center gap-3">
        {filters.map((f) => {
          const isActive = active === f.value;
          return (
            <button
              key={f.value}
              onClick={() => setActive(f.value)}
              className={`rounded-xl px-6 py-3 text-sm font-semibold transition ${
                isActive
                  ? "bg-[color:var(--brand)] text-white shadow-soft"
                  : "bg-white text-slate-700 shadow-soft hover:bg-slate-50"
              }`}
            >
              {f.label}
            </button>
          );
        })}
      </div>

      {/* Projects grid */}
      <div className="mt-14 grid grid-cols-1 gap-10 md:grid-cols-2">
        {(filtered ?? []).map((p) => (
          <article
            key={p.id}
            className="group rounded-2xl bg-white p-6 shadow-soft transition hover:-translate-y-2 hover:shadow-xl"
          >
            <div className="h-56 w-full overflow-hidden rounded-xl bg-slate-100">
              <img
                src={p.image}
                alt={p.title}
                className="h-full w-full object-cover"
              />
            </div>

            <div className="mt-6">
              <h3 className="text-2xl font-extrabold text-slate-900">
                {p.title}
              </h3>
              <p className="mt-3 leading-relaxed text-slate-600">{p.desc}</p>

              {/* Tech tags */}
              <div className="mt-4 flex flex-wrap gap-2">
                {(Array.isArray(p.tech) ? p.tech : []).map((t) => (
                  <span
                    key={t}
                    className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className="mt-6 flex flex-wrap gap-3">
                {p.live ? (
                  <a
                    href={p.live}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-xl bg-[color:var(--brand)] px-5 py-3 text-sm font-semibold text-white shadow-soft transition hover:opacity-90"
                  >
                    Live Demo
                  </a>
                ) : (
                  <span className="rounded-xl bg-slate-100 px-5 py-3 text-sm font-semibold text-slate-500">
                    Live Demo (Soon)
                  </span>
                )}

                <a
                  href={p.github}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-800 shadow-soft transition hover:bg-slate-50"
                >
                  GitHub
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
