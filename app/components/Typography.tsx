import type { JSX, ReactNode } from "react";
import { Italiana } from "next/font/google";

const italiana = Italiana({
  weight: "400",
  subsets: ["latin"],
});

type Align = "left" | "center" | "right";

export function PageHeading({
  eyebrow,
  children,
  align = "left",
  className = "",
}: {
  eyebrow?: string;
  children: ReactNode;
  align?: Align;
  className?: string;
}): JSX.Element {
  const alignment =
    align === "center" ? "text-center" : align === "right" ? "text-right" : "text-left";

  return (
    <div className={`space-y-2 ${alignment}`}>
      {eyebrow ? (
        <p className="text-[11px] uppercase tracking-[0.25em] text-pink-500/80">
          {eyebrow}
        </p>
      ) : null}
      <h1
        className={`${italiana.className} text-3xl sm:text-4xl text-slate-900 ${className}`}
      >
        {children}
      </h1>
    </div>
  );
}

export function SectionHeading({
  label,
  children,
  className = "",
}: {
  label?: string;
  children: ReactNode;
  className?: string;
}): JSX.Element {
  return (
    <div className={`flex items-center justify-between gap-3 ${className}`}>
      <h2 className="text-xl font-semibold text-slate-900">{children}</h2>
      {label ? (
        <span className="text-[11px] uppercase tracking-[0.15em] text-slate-500">
          {label}
        </span>
      ) : null}
    </div>
  );
}
