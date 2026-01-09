import gideon from "../assets/gideon.png";

export default function Home() {
  return (
    <section id="home" className="mx-auto max-w-6xl px-8 pt-28 pb-20">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        
        {/* LEFT CONTENT */}
        <div className="space-y-6">
          <p className="flex items-center gap-2 text-slate-500">
            Hello, I am <span className="text-xl">👋</span>
          </p>

          <h1 className="text-5xl font-extrabold tracking-tight text-slate-950 md:text-6xl">
            Adesina <span className="text-[color:var(--brand)]">Gideon</span>
          </h1>

          <p className="text-lg font-semibold text-slate-800">
            Frontend Developer & Cybersecurity Specialist
          </p>

          <p className="max-w-xl leading-relaxed text-slate-600">
            I build modern, fast websites and web applications — with security
            baked in from day one.
          </p>

          <div className="flex flex-wrap gap-4 pt-2">
            <a
              href="#work"
              className="rounded-xl bg-[color:var(--brand)] px-6 py-3 text-sm font-semibold text-white shadow-soft transition hover:opacity-90"
            >
              View Work
            </a>

            <a
              href="mailto:adesinagideon113@gmail.com"
              className="rounded-xl border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-800 shadow-soft transition hover:bg-slate-50"
            >
              Hire Me
            </a>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative flex justify-center items-center">
          {/* Background circle */}
          <div className="absolute h-[360px] w-[360px] rounded-full bg-slate-200/60" />
          <div className="absolute h-[360px] w-[360px] rounded-full bg-[color:var(--brand)]/10" />

          <img
            src={gideon}
            alt="Adesina Gideon"
            className="relative z-10 h-[420px] object-contain"
          />
        </div>
      </div>
    </section>
  );
}
