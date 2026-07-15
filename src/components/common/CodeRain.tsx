"use client";

import { useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

const SNIPPETS: string[] = [
  `const deployApp = async () => {
  const build = await qua.compile(src);
  await registry.push(build);
  return status.ok;
};`,
  `import { Engine } from "@core/runtime";

const engine = new Engine({ mode: "cloud" });
engine.on("ready", () => engine.start());`,
  `POST /api/v1/build
{
  "project": "atlas",
  "target": "production",
  "cache": true
}`,
  `$ qua deploy --env prod
✓ bundle optimized (312 kb)
✓ edge nodes updated
done in 4.2s`,
  `export function useUptime() {
  const [uptime, setUptime] = useState(0);
  useEffect(() => trackUptime(setUptime), []);
  return uptime;
}`,
  `services:
  api:
    image: qua/api:1.8
    replicas: 3
    healthcheck: /ping`,
  `SELECT id, status FROM deployments
WHERE env = 'prod'
ORDER BY created_at DESC
LIMIT 10;`,
  `test("ships without regressions", async () => {
  const result = await runPipeline();
  expect(result.failures).toBe(0);
});`,
  `type Deployment = {
  id: string;
  region: "us" | "eu" | "apac";
  status: "live" | "building";
};`,
  `git commit -m "feat: zero-downtime deploys"
git push origin main
# CI: build → test → release`,
];

const HOLD_MS = 2600;
const FADE_MS = 700;

type Phase = "typing" | "holding" | "fading";

type TypingBlockProps = {
  /** Which snippet this block starts with (blocks rotate through all of them). */
  startIndex: number;
  /** Per-character delay in ms; vary per block so columns never sync up. */
  charDelay: number;
  /** Delay before this block types its first character. */
  startDelay: number;
  className?: string;
  reduced: boolean;
};

function TypingBlock({
  startIndex,
  charDelay,
  startDelay,
  className = "",
  reduced,
}: TypingBlockProps) {
  const [snippetIndex, setSnippetIndex] = useState(startIndex);
  const [charCount, setCharCount] = useState(0);
  const [phase, setPhase] = useState<Phase>("typing");

  const fullText = SNIPPETS[snippetIndex % SNIPPETS.length];

  useEffect(() => {
    if (reduced) return;

    let timer: ReturnType<typeof setTimeout>;

    if (phase === "typing") {
      if (charCount < fullText.length) {
        // Small extra pause every few characters mimics human typing rhythm.
        const jitter = charCount % 9 === 0 ? 110 : 0;
        const delay = charCount === 0 ? startDelay : charDelay + jitter;
        timer = setTimeout(() => setCharCount((count) => count + 1), delay);
      } else {
        // Zero-delay timeout keeps the phase change async (no synchronous
        // setState inside the effect body).
        timer = setTimeout(() => setPhase("holding"), 0);
      }
    } else if (phase === "holding") {
      timer = setTimeout(() => setPhase("fading"), HOLD_MS);
    } else {
      timer = setTimeout(() => {
        setSnippetIndex((index) => (index + 1) % SNIPPETS.length);
        setCharCount(0);
        setPhase("typing");
      }, FADE_MS);
    }

    return () => clearTimeout(timer);
  }, [phase, charCount, fullText.length, charDelay, startDelay, reduced]);

  const visibleText = reduced ? fullText : fullText.slice(0, charCount);

  return (
    <pre
      style={{ fontFamily: "var(--font-jetbrains), ui-monospace, monospace" }}
      className={`absolute whitespace-pre text-[10px] leading-[1.7] text-[#9ac8ff] light:text-[#1648ff] transition-opacity duration-700 ${
        phase === "fading" ? "opacity-0" : "opacity-100"
      } ${className}`}
    >
      {visibleText}
      {!reduced && phase === "typing" && charCount > 0 && (
        <span className="code-cursor text-[#80b4ff]">▊</span>
      )}
    </pre>
  );
}

/**
 * Ambient "someone is coding" background for the hero. Sits behind the
 * headline/CTA layer, non-interactive, and intentionally very dim.
 */
export default function CodeRain() {
  const reduced = useReducedMotion() ?? false;

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-0 select-none overflow-hidden opacity-[0.11] light:opacity-[0.18]"
    >
      <TypingBlock startIndex={0} charDelay={58} startDelay={300} reduced={reduced} className="left-[3%] top-[14%]" />
      <TypingBlock startIndex={3} charDelay={72} startDelay={1600} reduced={reduced} className="left-[5%] top-[60%] hidden md:block" />
      <TypingBlock startIndex={5} charDelay={50} startDelay={900} reduced={reduced} className="right-[4%] top-[12%] hidden sm:block" />
      <TypingBlock startIndex={7} charDelay={66} startDelay={2400} reduced={reduced} className="right-[7%] top-[62%] hidden lg:block" />
      <TypingBlock startIndex={9} charDelay={62} startDelay={1200} reduced={reduced} className="left-[43%] top-[76%] hidden xl:block" />
    </div>
  );
}
