import { motion } from "framer-motion";

export default function Home() {
  return (
    <section id="home" className="relative min-h-[92vh] overflow-hidden">
      {/* soft background circles */}
      <div className="absolute -right-40 -top-40 h-[520px] w-[520px] rounded-full bg-white/60 blur-sm" />
      <div className="absolute -left-48 top-40 h-[420px] w-[420px] rounded-full bg-white/50 blur-sm" />

      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-6 pt-28 md:grid-cols-2">
        {/* Left floating cards */}
        <div className="space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full max-w-md rounded-2xl bg-white/80 p-6 shadow-soft backdrop-blur"
          >
            <div className="text-sm text-slate-500">Hello, I am</div>

            <div className="mt-2 flex items-center gap-3">
              <span className="text-2xl">👋</span>
              <h1 className="text-4xl font-extrabold tracking-tight">
                Adesina <span className="text-[color:var(--brand)]">Gideon</span>
              </h1>
            </div>

            <p className="mt-4 text-slate-600">
              Frontend developer and cybersecurity specialist building modern web experiences with security in mind.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="#work"
                className="rounded-xl bg-[color:var(--brand)] px-5 py-3 text-sm font-semibold text-white shadow-soft"
              >
                View Work
              </a>
              <a
                href="#contact"
                className="rounded-xl bg-white px-5 py-3 text-sm font-semibold text-slate-800 shadow-soft"
              >
                Hire Me
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.08 }}
            className="w-full max-w-md rounded-2xl bg-white/70 p-6 text-center shadow-soft backdrop-blur"
          >
            <div className="text-xs font-semibold tracking-widest text-slate-500">
              FRONTEND DEVELOPER
            </div>
            <div className="mt-1 text-xs font-semibold tracking-widest text-slate-500">
              CYBERSECURITY SPECIALIST
            </div>
          </motion.div>
        </div>

        {/* Image placeholder (we’ll add your cut-out photo next) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="relative mx-auto flex h-[460px] w-[320px] items-end justify-center rounded-[40px] bg-white/60 shadow-soft backdrop-blur md:h-[520px] md:w-[360px]"
        >
          <div className="absolute bottom-0 left-0 right-0 mx-auto h-[70%] w-[120%] rounded-t-full bg-white/60" />
          <div className="relative z-10 mb-10 text-center text-slate-500">
            Add your cut-out photo here
          </div>
        </motion.div>
      </div>
    </section>
  );
}
