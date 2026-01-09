export default function Expertise() {
  const items = [
    {
      emoji: "🎨",
      title: "Frontend Developer",
      desc: "I design and build modern, responsive user interfaces using React and modern web technologies, focused on performance and usability.",
    },
    {
      emoji: "💼",
      title: "Freelancer",
      desc: "I work with clients to turn ideas into functional digital products, delivering clean solutions from concept to deployment.",
    },
    {
      emoji: "🛡️",
      title: "Cybersecurity Specialist",
      desc: "I integrate security best practices into applications, helping protect systems, data, and users from common vulnerabilities.",
    },
  ];

  return (
    <section id="expertise" className="mx-auto max-w-6xl px-8 py-24">
      <h2 className="text-center text-5xl font-extrabold tracking-tight text-slate-900">
        My <span className="text-[color:var(--brand)]">Expertise</span>
      </h2>

      <div className="mt-16 grid grid-cols-1 gap-10 md:grid-cols-3">
        {items.map((item) => (
          <div
            key={item.title}
            className="group rounded-2xl bg-white p-8 text-center shadow-soft transition duration-200 hover:-translate-y-2 hover:shadow-xl"
          >
            {/* Emoji badge (acts like a clean “image”) */}
            <div className="mx-auto flex h-[170px] w-[190px] items-center justify-center rounded-[15px] bg-slate-200/60 transition group-hover:bg-slate-200">
              <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-white shadow-soft transition group-hover:scale-105">
                <span className="text-4xl">{item.emoji}</span>
              </div>
            </div>

            <h3 className="mt-7 text-xl font-extrabold text-slate-900">
              {item.title}
            </h3>

            {/* Balanced paragraph height */}
            <p className="mx-auto mt-3 max-w-[28ch] text-sm leading-relaxed text-slate-600">
              {item.desc}
            </p>

            {/* subtle underline accent on hover */}
            <div className="mx-auto mt-6 h-1 w-10 rounded-full bg-slate-200 transition group-hover:bg-[color:var(--brand)]" />
          </div>
        ))}
      </div>
    </section>
  );
}
