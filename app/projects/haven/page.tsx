import type { JSX } from "react";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Haven – Safe Spaces Finder | Thanh Vo-Pham",
  description:
    "Haven is a concept app that helps users find psychologically safe, inclusive venues using community reviews.",
};

export default function HavenPage(): JSX.Element {
  return (
    <article className="space-y-10 p-6 sm:p-8 rounded-2xl border border-slate-800/80 bg-pink-200/20">
      <Link
        href="/projects"
        className="text-m text-pink-500 hover:text-pink-600"
      >
        ← Back to work
      </Link>

      <header className="space-y-4">
        <h1 className="text-3xl sm:text-4xl font-semibold">Haven – Safe Spaces Finder</h1>
        <p className="text-sm text-slate-700 max-w">
          Haven is a concept app that helps neurodivergent, queer, and other
          marginalised users find psychologically safe, inclusive venues.
          Instead of generic star ratings, Haven focuses on sensory environment,
          staff attitude, and feelings of safety.
        </p>

        <div className="flex flex-wrap gap-3 text-xs text-slate-700">
          <span className="px-2 py-1 rounded-full bg-pink-50 border border-pink-200">
            Role: UX/UI · Product Thinking
          </span>
          <span className="px-2 py-1 rounded-full bg-pink-50 border border-pink-200">
            Tools: Figma, Flutter, Firebase, Google APIs
          </span>
        </div>
      </header>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Problem</h2>
        <p className="text-sm text-slate-700 max-w">
          Many people feel anxious about going to new places because they don’t
          know if the environment will be overwhelming, safe, or affirming.
          Existing review platforms rarely talk about noise levels, lighting, or
          how staff respond to access needs.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Approach</h2>
        <p className="text-sm text-slate-700 max-w">
          I explored how UX, psychology, and community reporting could come
          together to create a &quot;safe spaces&quot; layer on top of cities. The app
          prioritises:
        </p>
        <ul className="text-sm text-slate-700 list-disc list-inside space-y-1 max-w">
          <li>Clear expectations of sensory environment (noise, lighting, crowding).</li>
          <li>
            Ratings for staff attitude, accessibility and inclusivity rather than just
            &quot;vibes&quot;.
          </li>
          <li>
            A calm, supportive interface for people who already feel overloaded.
          </li>
        </ul>
      </section>

      {/* UI design */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">UI & Interaction Design</h2>
        <p className="text-sm text-slate-700 max-w">
          The UI uses soft colours, rounded shapes, and clear hierarchy to feel
          reassuring rather than stimulating. Map pins and venue cards use
          iconography for sensory cues (e.g., quiet, dim, spacious) so users
          can quickly scan for safe options.
        </p>
        <div className="w-full aspect-video rounded-2xl overflow-hidden border border-pink-200">
    <iframe
      style={{ border: "none" }}
      width="100%"
      height="100%"
      src="https://embed.figma.com/design/AaITXuwY3e9BFw4ztzOtD7/Haven-Wireframe?node-id=1-2&embed-host=share"
      allowFullScreen
    ></iframe>
  </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Reflection</h2>
        <p className="text-sm text-slate-700 max-w">
          Haven let me explore how UX can support psychological safety,
          especially for neurodivergent users. It reinforced the importance of
          clear expectations, trauma-informed design, and giving people more
          control over their environments.
        </p>
      </section>
    </article>
  );
}
