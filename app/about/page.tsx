// app/about/page.tsx
import Image from "next/image";

export const metadata = {
  title: "About | Thanh Vo-Pham",
};

export default function AboutPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      <h1 className="text-3xl sm:text-4xl font-semibold text-center mb-12">
        About Me
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

        <div className="flex justify-center">
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

        <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed">
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
      </div>
    </div>
  );
}
