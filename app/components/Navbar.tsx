// app/components/Navbar.tsx
import Link from "next/link";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/resume", label: "Resume" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <header className="border-b border-pink-200/50 bg-white/60 backdrop-blur-md sticky top-0 z-20">
      <nav className="max-w-5xl mx-auto px-4 py-4 flex justify-center">
        <div className="flex items-center gap-3 sm:gap-5 text-sm text-slate-600">

          {navItems.map((item, idx) => (
            <div key={item.href} className="flex items-center">
              <Link
                href={item.href}
                className="hover:text-pink-500 transition-colors"
              >
                {item.label}
              </Link>
            </div>
          ))}

        </div>
      </nav>
    </header>
  );
}
