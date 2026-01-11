import { FaLinkedinIn, FaGithub, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function SocialRail() {
  return (
    <div className="fixed left-5 top-1/2 z-50 hidden -translate-y-1/2 flex-col gap-3 md:flex">
      <a
        className="grid h-12 w-12 place-items-center rounded-full bg-white shadow-soft transition hover:-translate-y-1 hover:shadow-lg"
        href="https://www.linkedin.com/in/gideon-adesina-5b1a4128a"
        target="_blank"
        rel="noreferrer"
        aria-label="LinkedIn"
        title="LinkedIn"
      >
        <FaLinkedinIn />
      </a>

      <a
        className="grid h-12 w-12 place-items-center rounded-full bg-white shadow-soft transition hover:-translate-y-1 hover:shadow-lg"
        href="https://github.com/gideonadesina"
        target="_blank"
        rel="noreferrer"
        aria-label="GitHub"
        title="GitHub"
      >
        <FaGithub />
      </a>

      <a
        className="grid h-12 w-12 place-items-center rounded-full bg-white shadow-soft transition hover:-translate-y-1 hover:shadow-lg"
        href="https://wa.me/2348025523317"
        target="_blank"
        rel="noreferrer"
        aria-label="WhatsApp"
        title="WhatsApp"
      >
        <FaWhatsapp />
      </a>

      <a
        className="grid h-12 w-12 place-items-center rounded-full bg-white shadow-soft transition hover:-translate-y-1 hover:shadow-lg"
        href="mailto:adesinagideon113@gmail.com"
        aria-label="Email"
        title="Email"
      >
        <MdEmail />
      </a>

      {/* ✅ CV button (now inside the rail so it shows) */}
      <a
        href="/Adesina_Gideon_CV.pdf"
        target="_blank"
        rel="noreferrer"
        className="grid h-12 w-12 place-items-center rounded-full bg-white shadow-soft transition hover:-translate-y-1 hover:shadow-lg"
        aria-label="View CV"
        title="View CV"
      >
        <span className="text-lg">📄</span>
      </a>
    </div>
  );}
