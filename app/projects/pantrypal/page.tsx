import type { JSX } from "react";
import Link from "next/link";
import { PageHeading, SectionHeading } from "../../components/Typography";

export const metadata = {
  title: "PantryPal | Thanh Vo-Pham",
  description:
    "PantryPal – a mobile app that reduces food waste with AI-powered ingredient tracking and recipe suggestions.",
};

export default function PantryPalPage(): JSX.Element {
  return (
    <article className="space-y-10 p-6 sm:p-8 rounded-2xl border border-slate-800/80 bg-pink-200/20">
      <Link
        href="/projects"
        className="text-m text-pink-500 hover:text-pink-600"
      >
        ← Back to work
      </Link>

      {/* Hero */}
      <header className="space-y-4">
        <PageHeading eyebrow="Case Study">PantryPal</PageHeading>
        <p className="text-sm text-slate-700 max-w">
          PantryPal is a mobile app that helps users reduce food waste by
          tracking ingredient expiry dates and suggesting recipes based on what
          they already have at home. Built for Macquarie University’s &quot;Tech
          to the Power of Us&quot; showcase, it combines sustainable design,
          behaviour change principles, and AI automation.
        </p>

        <div className="flex flex-wrap gap-3 text-xs text-slate-700">
          <span className="px-2 py-1 rounded-full bg-pink-50 border border-pink-200">
            Role: UX/UI · Front-end
          </span>
          <span className="px-2 py-1 rounded-full bg-pink-50 border border-pink-200">
            Duration: Apr – Oct 2025
          </span>
          <span className="px-2 py-1 rounded-full bg-pink-50 border border-pink-200">
            Tools: Figma, Flutter, React Native, Firebase, OpenAI
          </span>
        </div>
      </header>

      {/* Overview / Problem */}
      <section className="space-y-4">
        <SectionHeading>Problem & Goals</SectionHeading>
        <p className="text-sm text-slate-700 max-w">
          Australian households waste billions of dollars worth of food every
          year. People forget what is in their pantry, lose track of expiry
          dates, and often buy duplicates. At the same time, they care about
          sustainability but don’t have the time or mental energy to manually
          track every item.
        </p>
        <p className="text-sm text-slate-700 max-w">
          Our goal was to design an app that quietly supports sustainable food
          habits: keeping track of ingredients, surfacing upcoming expiries, and
          suggesting recipes based on what users already own – without adding
          extra effort.
        </p>
      </section>

      {/* Research */}
      <section className="space-y-4">
        <SectionHeading>Research & Insights</SectionHeading>
        <p className="text-sm text-slate-700 max-w">
          I ran quick interviews and surveys with students and young adults to
          understand their food routines. Key insights:
        </p>
        <ul className="text-sm text-slate-700 list-disc list-inside space-y-1 max-w-2xl">
          <li>People often forget what’s at the back of the fridge/pantry.</li>
          <li>Expiry tracking is seen as important, but too time-consuming.</li>
          <li>
            Users want fast, low-cognitive-load recipe ideas tailored to what
            they already have.
          </li>
        </ul>
      </section>

      {/* Visual design */}
      <section className="space-y-4">
        <SectionHeading>Visual Design and Figma Prototype</SectionHeading>
        <p className="text-sm text-slate-700 max-w">
          The final UI uses a calm, sustainable palette (greens, creams and
          neutrals), rounded cards and clear hierarchy to support stress-free
          decision making. Screens focus on inventory clarity, upcoming expiry
          alerts, and recipe cards that feel approachable rather than
          overwhelming.
        </p>

        {/* 👉 Insert high-fidelity UI mockups here */}
        <div className="w-full aspect-video rounded-2xl overflow-hidden border border-pink-200">
    <iframe
      style={{ border: "none" }}
      width="100%"
      height="100%"
      src="https://embed.figma.com/design/YVrMWfCfIRPi6Q4NXA0kX1/PantryPal?node-id=0-1&embed-host=share"
      allowFullScreen
    ></iframe>
  </div>
      </section>

      {/* Development & collaboration */}
      <section className="space-y-4">
        <SectionHeading>Development & Collaboration</SectionHeading>
        <p className="text-sm text-slate-700 max-w">
          I built the first MVP in Flutter, then migrated the front-end to React
          Native for better scalability. Scott, my teammate, designed and hosted
          the backend, including APIs and AI pipelines. Together, we integrated
          OpenAI for receipt and image parsing, and Firebase for data storage
          and sync.
        </p>
      </section>

      {/* Results */}
      <section className="space-y-4">
        <SectionHeading>Results & Impact</SectionHeading>
        <ul className="text-sm text-slate-700 list-disc list-inside space-y-1 max-w">
          <li>Working MVP used in live demos for the Tech to the Power of Us showcase.</li>
          <li>90% of testers said the app increased their awareness of expiry dates.</li>
          <li>
            Testers described recipe suggestions as a &quot;convenient way to use things
            up&quot; and avoid waste.
          </li>
        </ul>
      </section>

      {/* Reflection */}
      <section className="space-y-4">
        <SectionHeading>What I Learned</SectionHeading>
        <p className="text-sm text-slate-700 max-w">
          PantryPal taught me how tightly UX is connected to backend design.
          Working closely with Scott helped me design interfaces that reflect
          real data flows and technical constraints. It also cemented my
          interest in using psychology and behaviour change principles to help
          people live more sustainably.
        </p>
      </section>
    </article>
  );
}
