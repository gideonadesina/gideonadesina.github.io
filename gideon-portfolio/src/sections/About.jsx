export default function About() {
  const highlights = [
    { label: "Based in", value: "Nigeria" },
    { label: "Primary Stack", value: "Next.js • TypeScript • Supabase" },
    { label: "Currently Learning", value: "Python • DSA • System Design" },
    { label: "Open to", value: "Internships • Entry-level • Freelance" },
  ];

  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-28">
      <div className="grid grid-cols-1 items-start gap-14 md:grid-cols-2">
        
        {/* LEFT */}
        <div>
          <h2 className="text-5xl font-extrabold tracking-tight text-slate-900">
            About <span className="text-[color:var(--brand)]">Me</span>
          </h2>

          <p className="mt-6 max-w-xl text-slate-600 leading-relaxed">
            I’m{" "}
            <span className="font-semibold text-slate-800">Adesina Gideon</span>{" "}
            — a software engineering learner and full-stack builder focused on
            creating clean, scalable web systems. I’m intentional about strong
            fundamentals: architecture, maintainability, performance, and real-world
            product thinking.
          </p>

          {/* Quick facts */}
          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {highlights.map((h) => (
              <div
                key={h.label}
                className="rounded-2xl bg-white p-5 shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="text-xs font-bold tracking-widest text-slate-500 uppercase">
                  {h.label}
                </div>
                <div className="mt-2 text-sm font-semibold text-slate-800">
                  {h.value}
                </div>
              </div>
            ))}
          </div>

          {/* Buttons */}
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="https://www.linkedin.com/in/gideon-adesina-5b1a4128a"
              target="_blank"
              rel="noreferrer"
              className="rounded-xl bg-[color:var(--brand)] px-7 py-3 text-sm font-semibold text-white shadow-soft transition duration-300 hover:opacity-95 hover:scale-[1.03]"
            >
              LinkedIn
            </a>

            <a
              href="https://github.com/gideonadesina"
              target="_blank"
              rel="noreferrer"
              className="rounded-xl border border-slate-200 bg-white px-7 py-3 text-sm font-semibold text-slate-800 shadow-soft transition duration-300 hover:bg-slate-50 hover:scale-[1.03]"
            >
              GitHub
            </a>
          </div>
        </div>

        {/* RIGHT */}
        <div className="space-y-8">
          {/* Card 1 */}
          <div className="relative overflow-hidden rounded-3xl bg-white p-8 shadow-soft transition duration-500 hover:shadow-2xl">
            <div className="absolute -top-16 -right-16 h-56 w-56 rounded-full bg-[color:var(--brand)]/10 blur-3xl" />

            <div className="text-xs font-bold tracking-widest text-slate-500">
              WHAT I DO
            </div>

            <h3 className="mt-3 text-2xl font-extrabold text-slate-900">
              Build modern web systems
            </h3>

            <p className="mt-3 text-slate-600 leading-relaxed">
              I design and build responsive, user-focused web applications with a
              strong emphasis on clean architecture, performance, and maintainability.
            </p>

            <div className="mt-8 h-1 w-20 rounded-full bg-[color:var(--brand)]" />
          </div>

          {/* Card 2 */}
          <div className="relative overflow-hidden rounded-3xl bg-white p-8 shadow-soft transition duration-500 hover:shadow-2xl">
            <div className="absolute -bottom-16 -left-16 h-56 w-56 rounded-full bg-slate-900/5 blur-3xl" />

            <div className="text-xs font-bold tracking-widest text-slate-500">
              CURRENT FOCUS
            </div>

            <h3 className="mt-3 text-2xl font-extrabold text-slate-900">
              Foundations → Systems → AI
            </h3>

            <p className="mt-3 text-slate-600 leading-relaxed">
              I’m strengthening computer science fundamentals and Python while
              building full-stack projects — with a long-term focus on AI-powered
              product engineering.
            </p>

            <div className="mt-8 h-1 w-20 rounded-full bg-[color:var(--brand)]" />
          </div>
        </div>
      </div>
    </section>
  );
}