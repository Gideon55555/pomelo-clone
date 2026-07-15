import type { ElementType } from "react";

type SplitTextProps = {
  text: string;
  /** Class applied to every character span (targeted by GSAP via a stable selector). */
  charClassName?: string;
  /** Class applied to each word wrapper. */
  wordClassName?: string;
  as?: ElementType;
  className?: string;
};

/**
 * Span-wraps `text` into words and characters so GSAP can stagger them.
 * Screen readers get the plain string via aria-label; the spans are hidden.
 */
export default function SplitText({
  text,
  charClassName = "split-char",
  wordClassName = "",
  as: Tag = "span",
  className = "",
}: SplitTextProps) {
  const words = text.split(" ");

  return (
    <Tag aria-label={text} className={className}>
      {words.map((word, wordIndex) => (
        <span
          key={`${word}-${wordIndex}`}
          aria-hidden="true"
          className={`inline-block whitespace-pre ${wordClassName}`}
        >
          {Array.from(word).map((char, charIndex) => (
            <span
              key={charIndex}
              className={`inline-block will-change-transform ${charClassName}`}
            >
              {char}
            </span>
          ))}
          {wordIndex < words.length - 1 ? " " : ""}
        </span>
      ))}
    </Tag>
  );
}
