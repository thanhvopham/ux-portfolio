// app/contact/page.js

export const metadata = {
  title: 'Contact | Thanh Vo-Pham'
};

export default function ContactPage() {
  return (
    <div className="space-y-6 max-w-xl">
      <h1 className="text-2xl font-semibold">Contact</h1>
      <p className="text-sm text-slate-300">
        I’m open to internships, junior roles, and collaborations in UX/UI,
        front-end development, and research-driven design.
      </p>

      <div className="space-y-3 text-sm">
        <p>
          <span className="font-medium text-slate-200">Email:</span>{' '}
          <a
            href="mailto:your.email@example.com"
            className="text-emerald-300 hover:text-emerald-200"
          >
            your.email@example.com
          </a>
        </p>
        <p>
          <span className="font-medium text-slate-200">LinkedIn:</span>{' '}
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noreferrer"
            className="text-emerald-300 hover:text-emerald-200"
          >
            Your LinkedIn profile
          </a>
        </p>
      </div>
    </div>
  );
}
