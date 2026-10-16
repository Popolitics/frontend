import Image from "next/image";
import Link from "next/link";

const links = [
  { href: "/assemblee-nationale", label: "Assemblée nationale" },
  { href: "/senat", label: "Sénat" },
  { href: "/parlement-europeen", label: "Parlement européen" },
  { href: "/connexion", label: "Connexion" },
];

export default function Header() {
  return (
    <header className="border-b border-black/10 dark:border-white/10">
      <nav className="mx-auto flex h-16 max-w-5xl items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2 font-semibold">
          <Image src="/logo.png" alt="" width={32} height={32} priority />
          POPolitics
        </Link>
        <ul className="flex gap-6 text-sm">
          {links.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="hover:underline">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
