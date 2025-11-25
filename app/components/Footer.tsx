// app/components/Footer.tsx
export default function Footer() {
  return (
    <footer className="border-t border-slate-800/60 mt-10">
      <div className="max-w-5xl mx-auto px-4 py-6 text-xs text-slate-400 flex flex-col sm:flex-row items-center justify-between gap-2">
        <p>© {new Date().getFullYear()} Thanh Vo-Pham. All rights reserved.</p>
        <p className="text-slate-500">
          Created by me using Next.js and Tailwind CSS.
        </p>
      </div>
    </footer>
  );
}
