// app/layout.tsx
import type { ReactNode } from "react";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import CherryBlossomBackground from "./components/CherryBlossomBackground";
import { Italiana, DM_Sans } from "next/font/google";

const italiana = Italiana({
  weight: "400",
  subsets: ["latin"],
});

const dmsans = DM_Sans({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

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
      <body className={`${dmsans.className} bg-white text-slate-900`}>
        <div className="relative min-h-screen flex flex-col">
          <Navbar />

          <CherryBlossomBackground />

          <main className="flex-1 w-full max-w-5xl mx-auto px-4 py-10">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
