import gideon from "../assets/gideon.png";

export default function Home() {
  return (
    <section
      id="home"
      className="relative mx-auto max-w-6xl px-8 pt-32 pb-24"
    >
      <div className="grid items-center gap-16 lg:grid-cols-2">

        {/* LEFT CONTENT */}
        <div className="space-y-8">

          {/* Subtle intro */}
          <p className="text-sm font-medium uppercase tracking-widest text-slate-500">
            Software Engineering Learner
          </p>

          {/* Name */}
          <h1 className="text-5xl font-extrabold leading-tight tracking-tight text-slate-950 md:text-6xl">
            Adesina{" "}
            <span className="text-[color:var(--brand)]">Gideon</span>
          </h1>

          {/* Strong positioning */}
          <p className="max-w-xl text-lg leading-relaxed text-slate-700">
            I build scalable full-stack web systems while strengthening my
            foundations in computer science, backend architecture, and
            AI-powered applications.
          </p>

          {/* CTA */}
          <div className="flex flex-wrap gap-4 pt-4">
            <a
              href="#work"
              className="rounded-xl bg-[color:var(--brand)] px-7 py-3 text-sm font-semibold text-white shadow-soft transition duration-300 hover:scale-[1.03] hover:opacity-95"
            >
              View Projects
            </a>

            <a
              href="mailto:adesinagideon113@gmail.com"
              className="rounded-xl border border-slate-200 bg-white px-7 py-3 text-sm font-semibold text-slate-800 shadow-soft transition duration-300 hover:bg-slate-50 hover:scale-[1.03]"
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative flex justify-center items-center">

          {/* Animated soft glow */}
          <div className="absolute h-[380px] w-[380px] rounded-full bg-[color:var(--brand)]/15 blur-3xl animate-pulse" />

          {/* Glass card container */}
          <div className="relative rounded-[32px] bg-white/70 p-6 shadow-2xl backdrop-blur-md transition duration-500 hover:scale-[1.02]">

            <img
              src={gideon}
              alt="Adesina Gideon"
              className="h-[320px] w-auto object-contain"
            />

          </div>
        </div>
      </div>
    </section>
  );
 }