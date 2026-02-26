 import { projects } from "../data/projects";

 export default function Work() {
  return (
    <section id="work" className="py-20">
      <div className="mx-auto w-full max-w-5xl px-4">
        {/* Heading */}
        <div className="mb-10">
          <h2 className="text-3xl font-extrabold text-slate-900">My Work</h2>
          <p className="mt-2 text-slate-600">
            Selected projects across product, frontend, and security.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {projects.map((p) => (
            <article
              key={p.title}
              className="rounded-3xl bg-white/70 p-4 shadow-soft backdrop-blur"
            >
              {/* Image */}
              <div className="relative overflow-hidden rounded-2xl bg-slate-100">
                <img
                  src={p.image}
                  alt={p.title}
                  className="h-[180px] w-full object-cover"
                  loading="lazy"
                />

                {/* Overlay icons (optional) */}
                <div className="absolute right-4 top-4 flex gap-3">
                  {p.live && (
                    <a
  href={p.live}
  target="_blank"
  rel="noreferrer"
  className="grid h-10 w-10 place-items-center rounded-full bg-white/90 shadow hover:bg-white"
  title="Open project"
>
  <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
    <path
      fill="currentColor"
      d="M14 3h7v7h-2V6.41l-9.29 9.3-1.42-1.42 9.3-9.29H14V3z"
    />
    <path
      fill="currentColor"
      d="M5 5h7v2H7v10h10v-5h2v7H5V5z"
    />
  </svg>
</a>
                  )}
                  {p.github && (
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noreferrer"
                      className="grid h-10 w-10 place-items-center rounded-full bg-white/90 shadow hover:bg-white"
                      title="GitHub"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        width="18"
                        height="18"
                        aria-hidden="true"
                      >
                        <path
                          fill="currentColor"
                          d="M12 .5C5.73.5.75 5.58.75 11.96c0 5.11 3.29 9.44 7.86 10.97.58.11.8-.26.8-.57v-2.1c-3.2.71-3.87-1.57-3.87-1.57-.52-1.36-1.26-1.72-1.26-1.72-1.03-.72.08-.71.08-.71 1.14.08 1.74 1.18 1.74 1.18 1.01 1.76 2.64 1.25 3.28.96.1-.75.4-1.25.72-1.54-2.55-.3-5.23-1.31-5.23-5.82 0-1.29.45-2.34 1.18-3.16-.12-.3-.51-1.52.11-3.16 0 0 .97-.32 3.18 1.2.92-.26 1.9-.39 2.88-.39s1.96.13 2.88.39c2.21-1.52 3.18-1.2 3.18-1.2.62 1.64.23 2.86.11 3.16.73.82 1.18 1.87 1.18 3.16 0 4.52-2.69 5.52-5.26 5.81.41.37.78 1.1.78 2.22v3.29c0 .31.21.69.81.57 4.56-1.54 7.85-5.86 7.85-10.97C23.25 5.58 18.27.5 12 .5Z"
                        />
                      </svg>
                    </a>
                  )}
                </div>
              </div>

              {/* Text */}
              <div className="mt-6">
                <h3 className="text-2xl font-bold text-slate-900">
                  {p.title}
                </h3>

                <p className="mt-1 text-sm text-slate-600 leading-relaxed">
                  {p.description}
                </p>

                {p.stack && (
                  <p className="mt-3 text-xs text-slate-600">
                    <span className="font-semibold text-slate-700">
                      Stack/Tools:
                    </span>{" "}
                    {p.stack}
                  </p>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}