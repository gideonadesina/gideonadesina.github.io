export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-24">
      <div className="text-center">
        <h2 className="text-5xl font-extrabold tracking-tight text-slate-900">
          Get In <span className="text-[color:var(--brand)]">Touch</span>!
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-slate-600">
          Have a project, collaboration, or a security-focused web task? Send a message.
        </p>
      </div>

      {/* Contact cards */}
      <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
        <div className="flex items-center gap-4 rounded-3xl bg-rose-100/70 p-6 shadow-soft">
          <div className="grid h-12 w-12 place-items-center rounded-2xl bg-white text-xl">
            ✉️
          </div>
          <div>
            <div className="text-xs font-bold tracking-widest text-slate-600">EMAIL</div>
            <a
              className="mt-1 block font-semibold text-slate-800"
              href="mailto:adesinagideon113@gmail.com"
            >
              adesinagideon113@gmail.com
            </a>
          </div>
        </div>

        <div className="flex items-center gap-4 rounded-3xl bg-sky-100/70 p-6 shadow-soft">
          <div className="grid h-12 w-12 place-items-center rounded-2xl bg-white text-xl">
            📱
          </div>
          <div>
            <div className="text-xs font-bold tracking-widest text-slate-600">WHATSAPP</div>
            <a
              className="mt-1 block font-semibold text-slate-800"
              href="https://wa.me/2348025523317"
              target="_blank"
              rel="noreferrer"
            >
              (+234) 802 552 3317
            </a>
          </div>
        </div>
      </div>

      {/* Form */}
      <form
        className="mt-12 space-y-6"
        onSubmit={(e) => {
          e.preventDefault();
          alert("Form connected ✅ (Next step: make it send emails)");
        }}
      >
        <input
          className="w-full rounded-3xl bg-sky-100/60 px-6 py-6 text-slate-800 placeholder:text-slate-500 outline-none shadow-soft"
          placeholder="Your Name"
          required
        />
        <input
          type="email"
          className="w-full rounded-3xl bg-sky-100/60 px-6 py-6 text-slate-800 placeholder:text-slate-500 outline-none shadow-soft"
          placeholder="Your Email"
          required
        />
        <textarea
          rows="6"
          className="w-full resize-none rounded-3xl bg-sky-100/60 px-6 py-6 text-slate-800 placeholder:text-slate-500 outline-none shadow-soft"
          placeholder="Your Message"
          required
        />

        <div className="flex justify-center">
          <button
            type="submit"
            className="rounded-2xl bg-[color:var(--brand)] px-10 py-4 text-sm font-semibold text-white shadow-soft"
          >
            Send Message
          </button>
        </div>
      </form>
    </section>
  );
}
