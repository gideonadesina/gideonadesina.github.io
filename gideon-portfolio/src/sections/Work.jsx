import { useMemo, useState } from "react";
import { projects } from "../data/projects";

const filters = ["All", "Web", "Cyber"];

export default function Work() {
  const [active, setActive] = useState("All");

  const list = useMemo(() => {
    if (active === "All") return projects;
    return projects.filter((p) => p.category === active);
  }, [active]);

  return (
    <section id="work" className="mx-auto max-w-6xl px-6 py-20">
      <div className="mb-10">
        <h2 className="text-3xl font-extrabold tracking-tight text-slate-900">My Work</h2>
        <p className="mt-2 max-w-2xl text-slate-600">
          A few projects — we’ll add your real ones after the layout is complete.
        </p>
      </div>

      {/* Filter pills */}
      <div className="mb-10 flex flex-wrap gap-3">
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setActive(f)}
            className={`rounded-full px-6 py-3 text-sm font-semibold shadow-soft ${
              active === f ? "bg-[color:var(--brand)] text-white" : "bg-white text-slate-700"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {list.map((p) => (
          <div
            key={p.title}
            className="rounded-3xl bg-white/80 p-6 shadow-soft backdrop-blur"
          >
            <div className="text-xs font-bold tracking-widest text-slate-500">{p.category}</div>
            <h3 className="mt-2 text-xl font-extrabold text-slate-900">{p.title}</h3>
            <p className="mt-3 text-slate-600">{p.description}</p>

            <div className="mt-4 flex flex-wrap gap-2">
              {p.stack.map((s) => (
                <span
                  key={s}
                  className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700"
                >
                  {s}
                </span>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={p.live}
                className="rounded-xl bg-[color:var(--brand)] px-5 py-3 text-sm font-semibold text-white shadow-soft"
              >
                Live Demo
              </a>
              <a
                href={p.github}
                target="_blank"
                rel="noreferrer"
                className="rounded-xl bg-white px-5 py-3 text-sm font-semibold text-slate-800 shadow-soft"
              >
                GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
