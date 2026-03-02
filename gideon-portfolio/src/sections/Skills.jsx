// gideon-portfolio/src/sections/Skills.jsx

const skillGroups = [
  {
    title: "Core Languages",
    icons: ["ts", "js", "python", "html", "css"],
  },
  {
    title: "Frontend & Frameworks",
    icons: ["react", "nextjs", "tailwind"],
  },
  {
    title: "Backend & Data",
    icons: ["nodejs", "postgres", "supabase"],
  },
  {
    title: "Tooling & Deployment",
    icons: ["git", "github", "vercel"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-6 py-28">
      
      {/* Heading */}
      <div className="mb-16 text-center">
        <h2 className="text-5xl font-extrabold tracking-tight text-slate-900">
          Technical <span className="text-[color:var(--brand)]">Skills</span>
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-slate-600">
          Tools and foundations I use to build scalable and intelligent web systems.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-14 md:grid-cols-2">

        {/* Icon Skill Groups */}
        <div className="space-y-10">
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="group rounded-3xl bg-white p-8 shadow-soft transition duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <h3 className="text-lg font-bold text-slate-900">
                {group.title}
              </h3>

              <div className="mt-6 flex flex-wrap gap-4">
                {group.icons.map((icon) => (
                  <img
                    key={icon}
                    src={`https://skillicons.dev/icons?i=${icon}`}
                    alt={icon}
                    className="h-10 w-10 transition duration-300 group-hover:scale-110"
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Focus Panel */}
        <div className="relative overflow-hidden rounded-3xl bg-white p-10 shadow-soft transition duration-500 hover:shadow-2xl">
          
          <div className="absolute -top-20 -right-20 h-56 w-56 rounded-full bg-[color:var(--brand)]/10 blur-3xl" />

          <h3 className="text-2xl font-extrabold text-slate-900">
            What I Focus On
          </h3>

          <ul className="mt-8 space-y-5 text-slate-700">
            <li>✔ Scalable full-stack web applications</li>
            <li>✔ Clean, maintainable architecture</li>
            <li>✔ Strengthening data structures & problem-solving</li>
            <li>✔ System-driven backend logic</li>
            <li>✔ AI-powered product integration</li>
          </ul>

          <div className="mt-10 h-1 w-20 rounded-full bg-[color:var(--brand)]" />
        </div>
      </div>
    </section>
  );
}