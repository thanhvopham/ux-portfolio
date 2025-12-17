// app/contact/page.js
import { PageHeading } from "../components/Typography";

export const metadata = {
  title: "Contact | Thanh Vo-Pham",
};

export default function ContactPage() {
  return (
    <div className="space-y-6 max-w">
      <PageHeading>Contact</PageHeading>
      <p className="text-sm text-slate-800">
        I’m open to internships, junior roles, and collaborations in UX/UI,
        front-end development, and research-driven design.
      </p>

      <div className="space-y-3 text-sm">
        <p>
          <span className="font-medium text-slate-800">Email:</span>{' '}
          <a
            href="mailto:your.email@example.com"
            className="text-pink-500 hover:text-pink-500"
          >
            thanhthanh03@hotmail.com
          </a>
        </p>
        <p>
          <span className="font-medium text-slate-800">LinkedIn:</span>{' '}
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noreferrer"
            className="text-pink-500 hover:text-pink-500"
          >
            www.linkedin.com/in/thanh-thanh-vo-pham-aa1417269
          </a>
        </p>
      </div>
    </div>
  );
}
