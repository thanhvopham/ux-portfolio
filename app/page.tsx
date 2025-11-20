// app/page.tsx
import Link from "next/link";
import { Italiana } from "next/font/google";

const italiana = Italiana({
  weight: "400",
  subsets: ["latin"],
});

export default function HomePage() {
  return (
    <div className="relative min-h-[70vh] flex items-center justify-center px-6">
      <section className="max-w-4xl w-full bg-pink-50/70 border border-pink-100 rounded-3xl px-8 sm:px-14 py-16 shadow-sm text-center">
        {/* Label */}
        <p className="text-[11px] uppercase tracking-[0.25em] text-pink-500/80 mb-6">
          UX / UI · Front-End · Psychology
        </p>

        {/* Name */}
        <h1
          className={`${italiana.className} text-5xl sm:text-6xl md:text-7xl leading-tight text-slate-900`}
        >
          Thanh Vo-Pham
        </h1>

        {/* Description */}
        <p className="text-base sm:text-lg text-slate-700 max-w-xl mx-auto mt-4">
          UX/UI designer and front-end developer with a background in
          psychology, creating calm, thoughtful digital experiences.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex justify-center flex-wrap gap-3">
          <Link
            href="/projects"
            className="px-5 py-2.5 rounded-full bg-pink-500 text-white text-sm font-medium hover:bg-pink-400 transition-colors"
          >
            View my work
          </Link>
          <Link
            href="/about"
            className="px-5 py-2.5 rounded-full border border-pink-300 text-sm text-pink-600 hover:border-pink-500 hover:text-pink-700 transition-colors"
          >
            About me
          </Link>
        </div>
      </section>
    </div>
  );
}
