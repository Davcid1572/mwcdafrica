"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { haptic } from "@/lib/haptics";

type Card = {
  src: string;
  alt: string;
};

type MagicianCardsProps = {
  cards: Card[];
  className?: string;
};

// Fans a small set of MICA screenshots out from a shared anchor point at the
// bottom center, like a magician fanning a hand of cards. Each card
// straightens and lifts to the front on hover/tap.
export function MagicianCards({ cards, className = "" }: MagicianCardsProps) {
  const count = cards.length;
  const mid = (count - 1) / 2;
  const spreadAngle = count > 3 ? 11 : 14;
  const spreadX = count > 3 ? 15 : 19;
  const cardWidth = count > 3 ? 30 : 36;

  // Each card's own aspect ratio is 900:1687 (roughly 1:1.874). The
  // container only needs to be tall enough to fit one card's height plus a
  // little headroom for the hover lift, not a generic square -- otherwise
  // it leaves dead space above the fan and the whole thing reads as
  // vertically offset from whatever sits next to it.
  const heightPercent = cardWidth * 1.874 + 10;

  return (
    <div
      className={"relative mx-auto " + className}
      style={{ aspectRatio: `100 / ${heightPercent}` }}
    >
      {/* Anchor glow, purely decorative */}
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-1/2 h-6 w-[60%] -translate-x-1/2 rounded-full bg-primary/20 blur-2xl"
      />

      {cards.map(function (card, i) {
        const rel = i - mid;
        const angle = rel * spreadAngle;
        const xOffset = rel * spreadX;
        const yOffset = Math.abs(rel) * 16;
        const zIndex = 10 - Math.round(Math.abs(rel) * 2);

        return (
          <motion.div
            key={card.src}
            className="absolute bottom-0 left-1/2 origin-bottom cursor-pointer drop-shadow-[0_18px_30px_rgba(20,20,15,0.28)]"
            style={{
              width: cardWidth + "%",
              zIndex,
              left: "calc(50% + " + xOffset + "%)",
            }}
            initial={{ x: "-50%", y: yOffset, rotate: angle }}
            whileHover={{
              x: "-50%",
              y: yOffset - 22,
              rotate: 0,
              scale: 1.06,
              zIndex: 20,
            }}
            whileTap={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 260, damping: 22 }}
            onHoverStart={function () {
              haptic(6);
            }}
            onTap={function () {
              haptic(10);
            }}
          >
            <Image
              src={card.src}
              alt={card.alt}
              width={900}
              height={1687}
              className="w-full h-auto select-none"
              draggable={false}
              sizes="(max-width: 640px) 45vw, 320px"
            />
          </motion.div>
        );
      })}
    </div>
  );
}
