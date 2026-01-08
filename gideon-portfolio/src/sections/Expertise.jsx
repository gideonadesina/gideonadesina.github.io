import frontendImg from "../assets/expertise/frontend.png";
import freelancerImg from "../assets/expertise/freelancer.png";
import reactImg from "../assets/expertise/react.png";

const items = [
  {
    title: "Frontend Developer",
    desc: "A Frontend Developer with expertise in crafting engaging user experiences.",
    img: frontendImg,
  },
  {
    title: "Freelancer",
    desc: "An experienced freelance frontend developer capable of bringing a client's dream site to reality.",
    img: freelancerImg,
  },
  {
    title: "React Developer",
    desc: "A React Developer with a passion for building dynamic and interactive user interfaces.",
    img: reactImg,
  },
];

export default function Expertise() {
  return (
    <section id="expertise" className="mx-auto max-w-6xl px-8 py-24">
      <h2 className="text-center text-5xl font-extrabold tracking-tight text-slate-900">
        My <span className="text-[color:var(--brand)]">Expertise</span>
      </h2>

      <div className="mt-16 grid grid-cols-1 gap-10 md:grid-cols-3">
        {items.map((x) => (
          <div key={x.title}>
            <div className="mx-auto flex h-[170px] w-[190px] items-center justify-center rounded-[15px] bg-slate-200/60 p-8 shadow-soft">
              <img
                src={x.img}
                alt={x.title}
                className="h-[140px] w-[140px] object-contain"
              />
            </div>

            <h3 className="mt-8 text-2xl font-extrabold text-slate-900">{x.title}</h3>
            <p className="mt-4 leading-relaxed text-slate-600">{x.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
