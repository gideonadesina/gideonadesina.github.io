import { FaLinkedinIn, FaGithub, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function SocialRail() {
  return (
    <div className="fixed left-5 top-1/2 z-50 hidden -translate-y-1/2 flex-col gap-3 md:flex">
      <a
        className="grid h-12 w-12 place-items-center rounded-full bg-white shadow-soft"
        href="https://www.linkedin.com/in/gideon-adesina-5b1a4128a"
        target="_blank"
        rel="noreferrer"
        aria-label="LinkedIn"
      >
        <FaLinkedinIn />
      </a>
      <a
        className="grid h-12 w-12 place-items-center rounded-full bg-white shadow-soft"
        href="https://github.com/gideonadesina"
        target="_blank"
        rel="noreferrer"
        aria-label="GitHub"
      >
        <FaGithub />
      </a>
      <a
        className="grid h-12 w-12 place-items-center rounded-full bg-white shadow-soft"
        href="https://wa.me/2348064467550"
        target="_blank"
        rel="noreferrer"
        aria-label="WhatsApp"
      >
        <FaWhatsapp />
      </a>
      <a
        className="grid h-12 w-12 place-items-center rounded-full bg-white shadow-soft"
        href="mailto:adesinagideon113@gmail.com"
        aria-label="Email"
      >
        <MdEmail />
      </a>
    </div>
  );
}
