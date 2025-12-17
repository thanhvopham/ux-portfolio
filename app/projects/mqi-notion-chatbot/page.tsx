import type { JSX } from "react";
import Link from "next/link";
import { PageHeading, SectionHeading } from "../../components/Typography";

export const metadata = {
  title: "MQI Notion AI Chatbot | Thanh Vo-Pham",
  description:
    "An AI-powered chat interface that lets incubator staff and founders query internal Notion documentation.",
};

export default function MQIChatbotPage(): JSX.Element {
  return (
    <article className="space-y-10 p-6 sm:p-8 rounded-2xl border border-slate-800/80 bg-pink-200/20">
      <Link
        href="/projects"
        className="text-m text-pink-500 hover:text-pink-600"
      >
        ← Back to work
      </Link>

      <header className="space-y-4">
        <PageHeading eyebrow="Case Study">MQI Notion AI Chatbot</PageHeading>
        <p className="text-sm text-slate-700 max-w">
          An AI-powered interface that lets Macquarie University Incubator staff
          and founders query internal Notion documentation conversationally.
          Instead of hunting through pages, users can ask natural-language
          questions and get answers with links back to the source.
        </p>

        <div className="flex flex-wrap gap-3 text-xs text-slate-700">
          <span className="px-2 py-1 rounded-full bg-pink-50 border border-pink-200">
            Role: UX/UI · Product Design · Documentation
          </span>
          <span className="px-2 py-1 rounded-full bg-pink-50 border border-pink-200">
            Tools: Figma, Notion
          </span>
        </div>
      </header>

      <section className="space-y-4">
        <SectionHeading>Problem</SectionHeading>
        <p className="text-sm text-slate-700 max-w">
          The incubator team had a growing Notion workspace full of processes,
          FAQs and resources. New staff and founders struggled to know where to
          look, and often asked the same questions repeatedly. Valuable
          documentation existed, but felt hard to access in the moment.
        </p>
      </section>

      <section className="space-y-4">
        <SectionHeading>My Role</SectionHeading>
        <ul className="text-sm text-slate-700 list-disc list-inside space-y-1 max-w">
          <li>Mapped key user journeys for staff and founders.</li>
          <li>
            Designed the chat interface and results layout, including threading,
            follow-up prompts and source links.
          </li>
          <li>
            Created functional requirements and documentation with the backend
            developer.
          </li>
          <li>
            Helped shape how embeddings, context windows and retrieval would
            impact UX.
          </li>
        </ul>
      </section>

      {/* UI design */}
      <section className="space-y-4">
        <SectionHeading>UI Design</SectionHeading>
        <p className="text-sm text-slate-700 max-w">
          The interface is intentionally simple: a focused chat panel, clear
          answer blocks, and subtle highlighting of the most important sentence.
          Links back to the original Notion pages help users build a mental map
          of where information lives.
        </p>

        <div className="w-full aspect-video rounded-2xl overflow-hidden border border-pink-200">
    <iframe
      style={{ border: "none" }}
      width="100%"
      height="100%"
      src="https://embed.figma.com/design/eoGa22852NoXNvnNzRdsJ7/Notion-AI?node-id=0-1&embed-host=share"
      allowFullScreen
    ></iframe>
  </div>
      </section>

      <section className="space-y-4">
        <SectionHeading>Reflection</SectionHeading>
        <p className="text-sm text-slate-700 max-w-2xl">
          This project strengthened my ability to think across UX, information
          architecture, and AI behaviour. I learned how retrieval decisions
          shape user trust, and how important it is to design for transparency
          when AI is summarising internal knowledge.
        </p>
      </section>
    </article>
  );
}
