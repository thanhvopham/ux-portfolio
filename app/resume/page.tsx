import type { JSX } from "react";
import { PageHeading, SectionHeading } from "../components/Typography";

export const metadata = {
  title: "Resume | Thanh Vo-Pham",
  description:
    "Resume for Thanh Vo-Pham — UX/UI designer and front-end developer with a background in psychology and technology.",
};

const experience = [
  {
    role: "Store Manager",
    company: "Krispy Kreme Miranda",
    timeframe: "Apr 2025 - Present",
    bullets: [
      "Managed daily operations, staff scheduling, and customer service in a high-volume retail environment.",
      "Led a cross-functional team, providing coaching and training to new and existing team members.",
      "Implemented workflow improvements that increased order processing efficiency and reduced waste.",
      "Developed leadership, communication, and conflict resolution skills transferable to technical team environments.",
    ],
  },
  {
    role: "Front End Lead and UX/UI Designer",
    company: "Macquarie University - PantryPal | Mobile App",
    timeframe: "Apr 2025 - Sep 2025",
    bullets: [
      "Owned end-to-end design and implementation of a cross-platform React app to track pantry items, waste & carbon, and AI-assisted recipes. Built the design system, reusable component library, and app theming.",
      "Led UX design from research to wireframes to high-fidelity mockups on Figma.",
      "Ran quick usability tests and iterated to reduce friction across key tasks.",
      "Implemented performant Flutter UI: custom painters (charts), bottom sheets/dialogs, responsive layouts, accessibility (contrast/labels), and smooth state updates via AnimatedBuilder and scoped stores.",
      "Set up Firebase Auth, Firestore converters, and platform builds to support Android and iOS implementations.",
    ],
  },
  {
    role: "Team Leader",
    company: "Krispy Kreme Miranda",
    timeframe: "Jul 2023 - Apr 2025",
    bullets: [
      "Led a team to ensure smooth operational performance in a fast-paced environment.",
      "Developed leadership, problem-solving, and communication skills applicable in agile software teams.",
      "Trained new team members and optimised workflows for better performance.",
    ],
  },
  {
    role: "IT Support Intern",
    company: "Krispy Kreme Australia",
    timeframe: "Feb 2024 - Apr 2024",
    bullets: [
      "Diagnosed and resolved hardware/software issues for 100+ end-users.",
      "Managed user devices, imaging, and software deployments with high accuracy.",
      "Conducted asset audits and maintained detailed documentation of hardware and support activities.",
      "Collaborated with internal teams to escalate and resolve critical incidents.",
      "Documented and standardised departmental processes and procedures.",
    ],
  },
];

const projects = [
  {
    title: "Research Lead, Macquarie University Incubator",
    subtitle: "Computing Industry Project",
    timeframe: "Feb 2025 - Jun 2025",
    bullets: [
      "Conducted user experience research to improve knowledge retrieval system usability.",
      "Designed and facilitated user research sessions, gathering insights to enhance system design.",
      "Assisted in developing and testing a user-friendly interface, improving accessibility for internal resources.",
      "Worked closely with technical teams to align system functionalities with user needs and security standards.",
    ],
  },
  {
    title: "Major Project",
    subtitle: "COMP3130 - Mobile App Development",
    timeframe: "Feb 2025 - Jun 2025",
    bullets: [
      "Developed a Flutter-based mobile application with user authentication, remote database integration and mobile device services features.",
      "Conducted user testing and feedback research to further optimise the application and design.",
      "Developed high-fidelity prototypes in Figma showcasing improved information architecture.",
    ],
  },
  {
    title: "Personal Home Lab",
    subtitle: "Independent",
    timeframe: "",
    bullets: [
      "Set up and maintained a home server to host applications and experiment with networking concepts such as port forwarding, DNS, firewall rules, and virtual machines.",
      "Regularly use CLI tools and configuration files to manage services.",
    ],
  },
];

const skills = [
  "Firebase",
  "Flutter",
  "GitHub",
  "UX/UI Design",
  "IT Support",
  "Java / SQL / Python",
];

export default function ResumePage(): JSX.Element {
  return (
    <article className="space-y-8">
      <header className="bg-pink-50/70 border border-pink-100 rounded-3xl p-6 sm:p-8 shadow-sm space-y-4">
        <PageHeading eyebrow="Resume">Thanh Thanh Vo-Pham</PageHeading>

        <p className="text-sm text-slate-700 leading-relaxed max-w-3xl">
          User-focused and detail-oriented student studying Information
          Technology and Psychology, currently studying at Macquarie University.
          Passionate about human-centered design, usability, and accessibility,
          with experience conducting user research, wireframing, prototyping,
          and front-end development. Strong problem-solving skills, technical
          knowledge, and ability to bridge the gap between user needs and
          product functionality.
        </p>
      </header>

      <section className="border border-slate-800/80 bg-pink-200/20 rounded-2xl p-6 sm:p-7 space-y-5">
        <SectionHeading label="Latest">Professional Experience</SectionHeading>

        <div className="space-y-6">
          {experience.map((item) => (
            <div key={`${item.role}-${item.timeframe}`} className="space-y-2">
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                <p className="font-semibold text-slate-900">
                  {item.role}
                  {", "}
                  <span className="font-normal text-slate-800">
                    {item.company}
                  </span>
                </p>
                <span className="text-xs uppercase tracking-wide text-slate-500">
                  {item.timeframe}
                </span>
              </div>

              <ul className="list-disc list-inside text-sm text-slate-700 space-y-1 max-w-4xl">
                {item.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="border border-slate-800/80 bg-pink-200/20 rounded-2xl p-6 sm:p-7 space-y-5">
        <SectionHeading label="Selected">Projects</SectionHeading>

        <div className="space-y-6">
          {projects.map((project) => (
            <div key={project.title} className="space-y-2">
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                <p className="font-semibold text-slate-900">
                  {project.title}
                  {project.subtitle ? (
                    <span className="font-normal text-slate-800">
                      {" "}
                      - {project.subtitle}
                    </span>
                  ) : null}
                </p>
                {project.timeframe ? (
                  <span className="text-xs uppercase tracking-wide text-slate-500">
                    {project.timeframe}
                  </span>
                ) : null}
              </div>

              <ul className="list-disc list-inside text-sm text-slate-700 space-y-1 max-w-4xl">
                {project.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-2">
        <div className="border border-slate-800/80 bg-pink-200/20 rounded-2xl p-6 sm:p-7 space-y-4">
          <SectionHeading>Skills</SectionHeading>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <span
                key={skill}
                className="px-3 py-1 rounded-full bg-white border border-pink-200 text-sm text-slate-800"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="border border-slate-800/80 bg-pink-200/20 rounded-2xl p-6 sm:p-7 space-y-3">
          <SectionHeading>Education</SectionHeading>
          <div className="space-y-1">
            <p className="font-semibold text-slate-900">
              Bachelor of Information Technology and Bachelor of Psychology
            </p>
            <div className="flex items-center justify-between text-sm text-slate-700">
              <span>Macquarie University</span>
              <span className="text-xs uppercase tracking-wide text-slate-500">
                Feb 2023 - Jul 2027
              </span>
            </div>
            <p className="text-sm text-slate-700">
              <span className="font-medium">Relevant Coursework:</span> Data
              Communications (Distinction), Mobile App Development, Software
              Engineering, Object-Oriented Programming Practices
            </p>
          </div>
        </div>
      </section>

      <section className="border border-slate-800/80 bg-pink-200/20 rounded-2xl p-6 sm:p-7 space-y-3">
        <SectionHeading>References</SectionHeading>
        <p className="text-sm text-slate-700">
          References provided upon request.
        </p>
      </section>
    </article>
  );
}
