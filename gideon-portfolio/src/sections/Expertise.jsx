// gideon-portfolio/src/sections/Expertise.jsx

function IconFoundations({ className = "" }) {
  return (
    <svg
      viewBox="0 0 320 200"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* soft bg */}
      <rect x="0" y="0" width="320" height="200" rx="24" fill="url(#g1)" />
      {/* blocks */}
      <rect x="56" y="108" width="80" height="48" rx="14" fill="white" fillOpacity="0.85" />
      <rect x="144" y="84" width="120" height="72" rx="16" fill="white" fillOpacity="0.85" />
      <rect x="56" y="56" width="88" height="44" rx="14" fill="white" fillOpacity="0.85" />
      {/* lines */}
      <path d="M96 78h24" stroke="rgba(15,23,42,.35)" strokeWidth="6" strokeLinecap="round" />
      <path d="M176 112h56" stroke="rgba(15,23,42,.28)" strokeWidth="6" strokeLinecap="round" />
      <path d="M176 132h40" stroke="rgba(15,23,42,.22)" strokeWidth="6" strokeLinecap="round" />
      <defs>
        <linearGradient id="g1" x1="40" y1="10" x2="300" y2="200" gradientUnits="userSpaceOnUse">
          <stop stopColor="rgba(99,102,241,.22)" />
          <stop offset="1" stopColor="rgba(14,165,233,.18)" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function IconFullStack({ className = "" }) {
  return (
    <svg
      viewBox="0 0 320 200"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <rect x="0" y="0" width="320" height="200" rx="24" fill="url(#g2)" />
      {/* layered cards */}
      <rect x="64" y="52" width="192" height="40" rx="14" fill="white" fillOpacity="0.85" />
      <rect x="52" y="86" width="216" height="48" rx="16" fill="white" fillOpacity="0.85" />
      <rect x="76" y="124" width="168" height="36" rx="14" fill="white" fillOpacity="0.85" />
      {/* api dots */}
      <circle cx="92" cy="76" r="6" fill="rgba(15,23,42,.25)" />
      <circle cx="114" cy="76" r="6" fill="rgba(15,23,42,.18)" />
      <circle cx="136" cy="76" r="6" fill="rgba(15,23,42,.12)" />
      {/* route line */}
      <path
        d="M104 110c30 0 34-18 62-18 28 0 32 18 60 18"
        stroke="rgba(15,23,42,.25)"
        strokeWidth="6"
        strokeLinecap="round"
      />
      <defs>
        <linearGradient id="g2" x1="20" y1="0" x2="300" y2="210" gradientUnits="userSpaceOnUse">
          <stop stopColor="rgba(14,165,233,.20)" />
          <stop offset="1" stopColor="rgba(34,197,94,.14)" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function IconAI({ className = "" }) {
  return (
    <svg
      viewBox="0 0 320 200"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <rect x="0" y="0" width="320" height="200" rx="24" fill="url(#g3)" />
      {/* nodes */}
      <circle cx="86" cy="110" r="14" fill="white" fillOpacity="0.88" />
      <circle cx="160" cy="78" r="18" fill="white" fillOpacity="0.88" />
      <circle cx="236" cy="120" r="16" fill="white" fillOpacity="0.88" />
      <circle cx="206" cy="70" r="10" fill="white" fillOpacity="0.88" />
      {/* connections */}
      <path d="M98 102L144 86" stroke="rgba(15,23,42,.25)" strokeWidth="6" strokeLinecap="round" />
      <path d="M176 90L222 110" stroke="rgba(15,23,42,.22)" strokeWidth="6" strokeLinecap="round" />
      <path d="M190 76L198 72" stroke="rgba(15,23,42,.18)" strokeWidth="6" strokeLinecap="round" />
      {/* spark */}
      <path
        d="M160 126l10-18 10 18-20 0Zm10-44 10 18-20 0 10-18Z"
        fill="rgba(15,23,42,.18)"
      />
      <defs>
        <linearGradient id="g3" x1="40" y1="0" x2="300" y2="220" gradientUnits="userSpaceOnUse">
          <stop stopColor="rgba(99,102,241,.22)" />
          <stop offset="1" stopColor="rgba(236,72,153,.14)" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export default function Expertise() {
  const items = [
    {
      title: "Software Engineering Foundations",
      desc: "Strengthening core computer science principles—problem-solving, data structures, clean code, and system thinking—to build scalable and maintainable applications.",
      Visual: IconFoundations,
    },
    {
      title: "Full-Stack Development",
      desc: "Building responsive web systems with Next.js & TypeScript, integrating APIs and structured backend logic with performance, clarity, and usability in mind.",
      Visual: IconFullStack,
    },
    {
      title: "Intelligent Systems (Emerging Focus)",
      desc: "Exploring AI-powered workflows and automation using Python and backend-driven architecture to build intelligent, data-informed digital solutions.",
      Visual: IconAI,
    },
  ];

  return (
    <section id="expertise" className="mx-auto max-w-6xl px-8 py-28">
      <h2 className="text-center text-5xl font-extrabold tracking-tight text-slate-900">
        My<span className="text-[color:var(--brand)]">Expertise</span>
      </h2>

      <p className="mx-auto mt-6 max-w-2xl text-center text-slate-600">
        Clear direction, strong fundamentals, and systems-first building.
      </p>

      <div className="mt-20 grid grid-cols-1 gap-12 md:grid-cols-3">
        {items.map(({ title, desc, Visual }) => (
          <div
            key={title}
            className="group relative overflow-hidden rounded-3xl bg-white p-10 shadow-soft transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl"
          >
            {/* Visual “image” area */}
            <div className="relative mx-auto mb-7 h-[170px] w-full max-w-[260px]">
              {/* soft glow behind */}
              <div className="absolute -inset-6 rounded-[28px] bg-[color:var(--brand)]/10 blur-2xl opacity-60 transition duration-500 group-hover:opacity-90" />

              {/* actual svg card */}
              <div className="relative overflow-hidden rounded-[26px] ring-1 ring-slate-200/70">
                <Visual className="h-[170px] w-full transform transition duration-700 will-change-transform group-hover:-rotate-1 group-hover:scale-[1.03]" />
              </div>

              {/* floating accent dot */}
              <div className="pointer-events-none absolute -right-1 -top-1 h-4 w-4 rounded-full bg-[color:var(--brand)]/70 blur-[1px] opacity-70 animate-[float_3.2s_ease-in-out_infinite]" />
            </div>

            {/* Accent line */}
            <div className="mb-6 h-1 w-14 rounded-full bg-[color:var(--brand)] transition-all duration-300 group-hover:w-24" />

            <h3 className="text-xl font-bold text-slate-900">{title}</h3>
            <p className="mt-4 text-sm leading-relaxed text-slate-600">{desc}</p>
          </div>
        ))}
      </div>

      {/* Tailwind custom keyframes without config:
          We can do it inline via arbitrary animation class, but we need keyframes.
          Put this style tag once in your app (layout) OR keep it here. */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
      `}</style>
    </section>
  );
 }