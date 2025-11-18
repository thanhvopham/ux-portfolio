// app/layout.tsx
import type { ReactNode } from "react";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const metadata = {
  title: "Thanh Vo-Pham | UX/UI Designer",
  description:
    "Portfolio of Thanh Vo-Pham, a UX/UI designer and front-end developer working at the intersection of psychology and technology.",
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className="bg-white text-slate-900">
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-1 w-full max-w-5xl mx-auto px-4 py-10">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
