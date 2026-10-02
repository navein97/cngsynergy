import type { CSSProperties } from "react";
import { ScrollProgress } from "@/components/ScrollProgress";

/**
 * A paragraph that lights up word by word as the visitor scrolls through it.
 * Screen readers and reduced-motion visitors get the plain paragraph.
 */
export function LitText({ text, className = "" }: { text: string; className?: string }) {
  const words = text.split(" ");
  return (
    <ScrollProgress from={0.85} to={0.5}>
      <p className={`lit ${className}`} style={{ "--n": words.length } as CSSProperties}>
        {words.map((word, index) => (
          <span key={index} style={{ "--i": index } as CSSProperties}>
            {word}{" "}
          </span>
        ))}
      </p>
    </ScrollProgress>
  );
}
