import { FaGithub, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import { FiMail } from "react-icons/fi";
import { SiPeerlist } from "react-icons/si";
import { socials } from "@/lib/content";

const links = [
  { href: socials.linkedin, label: "LinkedIn", Icon: FaLinkedinIn },
  { href: socials.github, label: "GitHub", Icon: FaGithub },
  { href: socials.twitter, label: "X (Twitter)", Icon: FaXTwitter },
  { href: socials.peerlist, label: "Peerlist", Icon: SiPeerlist },
  { href: socials.email, label: "Email", Icon: FiMail },
];

export default function Socials() {
  return (
    <ul className="socials">
      {links.map(({ href, label, Icon }) => (
        <li key={label}>
          <a href={href} aria-label={label} title={label} {...(href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
            <Icon aria-hidden="true" />
          </a>
        </li>
      ))}
    </ul>
  );
}
