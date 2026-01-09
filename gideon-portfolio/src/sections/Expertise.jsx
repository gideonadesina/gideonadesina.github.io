export default function Expertise() {
  return (
    <section id="expertise" className="mx-auto max-w-6xl px-8 py-24">
      <h2 className="text-center text-5xl font-extrabold">
        My <span className="text-blue-600">Expertise</span>
      </h2>

      <div className="mt-16 grid grid-cols-1 gap-10 md:grid-cols-3">
        <div className="text-center">
          <div className="mx-auto flex h-[170px] w-[190px] items-center justify-center rounded-[15px] bg-slate-200">
            <span className="text-4xl">🎨</span>
          </div>
          <h3 className="mt-6 text-xl font-bold">Frontend Developer</h3>
          <p className="mt-3 text-slate-600">
            Building clean, responsive and engaging user interfaces.
          </p>
        </div>

        <div className="text-center">
          <div className="mx-auto flex h-[170px] w-[190px] items-center justify-center rounded-[15px] bg-slate-200">
            <span className="text-4xl">💼</span>
          </div>
          <h3 className="mt-6 text-xl font-bold">Freelancer</h3>
          <p className="mt-3 text-slate-600">
            Delivering modern websites and web apps for clients.
          </p>
        </div>

        <div className="text-center">
          <div className="mx-auto flex h-[170px] w-[190px] items-center justify-center rounded-[15px] bg-slate-200">
            <span className="text-4xl">⚛️</span>
          </div>
          <h3 className="mt-6 text-xl font-bold">React Developer</h3>
          <p className="mt-3 text-slate-600">
            Creating dynamic, component-driven web applications.
          </p>
        </div>
      </div>
    </section>
  );
}
