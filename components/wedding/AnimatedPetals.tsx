import type { CSSProperties } from "react";

export default function AnimatedPetals() {
  return (
    <div className="petal-layer" aria-hidden="true">
      {Array.from({ length: 22 }).map((_, i) => (
        <span
          key={i}
          className="css-petal"
          style={
            {
              "--left": `${(i * 11 + 7) % 100}%`,
              "--delay": `${(i % 9) * -1.7}s`,
              "--duration": `${13 + (i % 7) * 2}s`,
              "--size": `${9 + (i % 6) * 4}px`,
            } as CSSProperties
          }
        />
      ))}
    </div>
  );
}
