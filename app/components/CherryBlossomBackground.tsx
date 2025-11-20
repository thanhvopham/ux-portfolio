// app/components/CherryBlossomBackground.tsx
import type { CSSProperties } from "react";

const PETAL_COUNT = 26;

const PETAL_IMAGES = [
  "/petals/petal1.png",
  "/petals/petal2.png",
  "/petals/petal3.png",
    "/petals/petal4.png",
    "/petals/petal5.png",
];

const petals = Array.from({ length: PETAL_COUNT }, (_, i) => {
  const left = `${(i * 13) % 100}%`;
  const top = `${-10 - ((i * 7) % 70)}vh`; // start above viewport
  const duration = 18 + (i % 6) * 2; // 18–28s
  const delay = i * 0.7;
  const rotation = -20 + (i % 8) * 6; // -20deg to ~+20deg
  const image = PETAL_IMAGES[i % PETAL_IMAGES.length];

  return { left, top, duration, delay, rotation, image };
});

export default function CherryBlossomBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {petals.map((petal, index) => {
        const style: CSSProperties = {
          left: petal.left,
          top: petal.top,
          backgroundImage: `url(${petal.image})`,
          animationDuration: `${petal.duration}s, ${petal.duration / 2}s`,
          animationDelay: `${petal.delay}s, ${petal.delay / 2}s`,
          // pass rotation to CSS as a variable
          ["--rotation" as any]: `${petal.rotation}deg`,
        };

        return <div key={index} className="petal" style={style} />;
      })}
    </div>
  );
}
