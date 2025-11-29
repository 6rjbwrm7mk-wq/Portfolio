"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "motion/react";
import { cn } from "@/lib/utils";

type EncryptedTextProps = {
  text: string;
  className?: string;
  revealDelayMs?: number; // ms per character reveal
  flipDelayMs?: number; // ms between unrevealed char flips
  charset?: string;
  encryptedClassName?: string;
  revealedClassName?: string;
};

const DEFAULT_CHARSET =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-={}[];:,.<>/?";

const getRandomChar = (charset: string) =>
  charset[Math.floor(Math.random() * charset.length)];

const generateGibberishPreservingSpaces = (text: string, charset: string) =>
  text.split("").map((ch) => (ch === " " ? " " : getRandomChar(charset)));

export const EncryptedText: React.FC<EncryptedTextProps> = ({
  text,
  className,
  revealDelayMs = 50,
  flipDelayMs = 50,
  charset = DEFAULT_CHARSET,
  encryptedClassName,
  revealedClassName,
}) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  const [revealCount, setRevealCount] = useState(0);
  const scrambleCharsRef = useRef<string[]>(
    generateGibberishPreservingSpaces(text, charset)
  );
  const animationFrameRef = useRef<number | null>(null);
  const lastFlipTimeRef = useRef<number>(0);

  useEffect(() => {
    if (!isInView) return;

    scrambleCharsRef.current = generateGibberishPreservingSpaces(text, charset);
    setRevealCount(0);
    const startTime = performance.now();
    lastFlipTimeRef.current = startTime;

    let isCancelled = false;

    const update = (now: number) => {
      if (isCancelled) return;

      const elapsed = now - startTime;
      const totalLength = text.length;
      const currentReveal = Math.min(
        totalLength,
        Math.floor(elapsed / revealDelayMs)
      );
      setRevealCount(currentReveal);

      if (currentReveal >= totalLength) return;

      // Update unrevealed characters
      if (now - lastFlipTimeRef.current >= flipDelayMs) {
        for (let i = currentReveal; i < totalLength; i++) {
          if (text[i] !== " ")
            scrambleCharsRef.current[i] = getRandomChar(charset);
        }
        lastFlipTimeRef.current = now;
      }

      animationFrameRef.current = requestAnimationFrame(update);
    };

    animationFrameRef.current = requestAnimationFrame(update);

    return () => {
      isCancelled = true;
      if (animationFrameRef.current !== null)
        cancelAnimationFrame(animationFrameRef.current);
    };
  }, [isInView, text, revealDelayMs, flipDelayMs, charset]);

  if (!text) return null;

  const chars = text.split("");

  return (
    <motion.span
      ref={ref}
      className={cn(className)}
      aria-label={text}
      role="text"
    >
      {chars.map((char, index) => {
        const isRevealed = index < revealCount;
        const displayChar = isRevealed ? char : scrambleCharsRef.current[index];

        return (
          <span
            key={index}
            className={cn(isRevealed ? revealedClassName : encryptedClassName)}
          >
            {displayChar}
          </span>
        );
      })}
    </motion.span>
  );
};
