// app/about/page.tsx
import Image from "next/image";
import { PageHeading } from "../components/Typography";

export const metadata = {
  title: "About | Thanh Vo-Pham",
};

export default function AboutPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      <div className="flex justify-left mb-10">
        <PageHeading align="left">About Me</PageHeading>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-[1.2fr_0.8fr] gap-y-10 md:gap-x-2 items-start">
        <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed bg-pink-50/70 border border-pink-100 rounded-3xl p-6 sm:p-8 shadow-sm">
          <p>
            Hi, I’m Thanh! I'm an aspiring UX/UI designer and front-end developer working at
            the intersection of design, psychology, and technology. I love
            creating calm, thoughtful digital experiences that help people feel
            empowered, understood, and supported.
          </p>

          <p>
            I’m currently studying Psychology and Information Technology at
            Macquarie University, where I explore how cognitive science,
            behaviour change, and accessibility can shape more inclusive digital
            products.
          </p>

          <p>
            My work blends visual design, interaction design, and front-end
            engineering. I’ve designed and built products ranging from
            sustainability apps like PantryPal, to safe-space discovery tools,
            to AI-powered knowledge systems.
          </p>

          <p>
            Outside of work, I love designing cute interfaces, reading romance,
            and drinking iced matcha while building side projects that make life
            a little nicer ✧.
          </p>
        </div>

        <div className="flex justify-center md:justify-end">
          <div className="w-64 h-64 sm:w-72 sm:h-72 rounded-3xl overflow-hidden border border-pink-200 shadow-sm bg-pink-50">
            <Image
              src="/images/me.png"
              alt="Portrait of Thanh Vo-Pham"
              width={600}
              height={600}
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
