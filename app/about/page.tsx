// app/about/page.js

export const metadata = {
  title: 'About | Thanh Vo-Pham'
};

export default function AboutPage() {
  return (
    <div className="space-y-6 max-w-2xl">
      <h1 className="text-2xl font-semibold">About</h1>

      <p className="text-sm text-slate-300">
        I’m Thanh, a UX/UI designer and front-end developer based in Sydney,
        currently studying Psychology and Information Technology. My work sits
        at the intersection of human behaviour, accessibility, and digital
        product design.
      </p>

      <p className="text-sm text-slate-300">
        I enjoy turning complex, messy problems into interfaces that feel
        intuitive and emotionally supportive. My background in psychology
        informs how I approach research, synthesis, and interaction design —
        especially around mental health, neurodiversity, and inclusive
        experiences.
      </p>

      <p className="text-sm text-slate-300">
        Outside of uni, I work in a leadership role at Krispy Kreme, where I’ve
        developed skills in team management, communication, and real-world
        customer experience — all of which feed back into my design work.
      </p>

      <p className="text-sm text-slate-300">
        I’m excited about projects that combine AI, behaviour change, and
        thoughtful UX to improve people’s everyday lives.
      </p>
    </div>
  );
}
