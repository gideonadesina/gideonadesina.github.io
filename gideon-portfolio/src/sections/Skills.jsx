const bubbles = [
  { name: "HTML5", icon: "🧱" },
  { name: "CSS3", icon: "🎨" },
  { name: "JavaScript", icon: "⚡" },
  { name: "React", icon: "⚛️" },
  { name: "Tailwind", icon: "💨" },
  { name: "Git", icon: "🔧" },
  { name: "Cybersecurity", icon: "🛡️" },
];

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-6 py-20">
      <div className="mb-10">
        <h2 className="text-3xl font-extrabold tracking-tight text-slate-900">
          Skills
        </h2>
        <p className="mt-2 max-w-2xl text-slate-600">
          Tools and skills I use to build clean, secure, and modern web experiences.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {/* Bubble grid */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
          {bubbles.map((b) => (
            <div
              key={b.name}
              className="flex items-center justify-center gap-2 rounded-3xl bg-white/80 px-5 py-6 text-center shadow-soft backdrop-blur"
            >
              <span className="text-2xl">{b.icon}</span>
              <span className="text-sm font-bold text-slate-800">{b.name}</span>
            </div>
          ))}
        </div>

        {/* Skill highlights */}
        <div className="rounded-3xl bg-white/80 p-8 shadow-soft backdrop-blur">
          <h3 className="text-xl font-extrabold text-slate-900">What I focus on</h3>
          <ul className="mt-4 space-y-3 text-slate-700">
            <li>✅ Responsive UI (mobile-first) and clean layouts</li>
            <li>✅ React component architecture and reusable UI</li>
            <li>✅ Security-minded development (OWASP mindset)</li>
            <li>✅ Performance, SEO basics, and deployment readiness</li>
            <li>✅ Collaboration: Git/GitHub workflow</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
