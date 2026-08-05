// import { Photo } from "@/components/ui/Photo";

// // Full pool of candid event photos. Flyer/graphic designs are excluded
// // since this section is meant to be candid "faces, work, moments" content.
// const imagePool = [
//   {
//     src: "/images/creative-connect/art-healing-session-2024.jpg",
//     alt: "Participants painting together at an Art and Healing session, Creative Connect Third Edition 2024",
//   },
//   {
//     src: "/images/creative-connect/audience-second-edition-2023.jpg",
//     alt: "Audience listening during Creative Connect Second Edition 2023",
//   },
//   {
//     src: "/images/creative-connect/director-opening-speech-2024.jpg",
//     alt: "Program Director giving the opening speech at Creative Connect Third Edition 2024",
//   },
//   {
//     src: "/images/creative-connect/group-photo-first-edition-2022.jpg",
//     alt: "Group photo from Creative Connect First Edition 2022",
//   },
//   {
//     src: "/images/creative-connect/group-photo-third-edition-2024-a.jpg",
//     alt: "Group photo from Creative Connect Third Edition 2024",
//   },
//   {
//     src: "/images/creative-connect/group-photo-third-edition-2024-b.jpg",
//     alt: "Attendees gathered at Creative Connect Third Edition 2024",
//   },
//   {
//     src: "/images/creative-connect/qa-session-2024.jpg",
//     alt: "Q&A session at Creative Connect Third Edition 2024",
//   },
//   {
//     src: "/images/creative-connect/team-photo.jpg",
//     alt: "The Creative Connect Africa team",
//   },
// ];

// // Grid position styling is fixed (the bento layout), while which photo
// // fills each position is randomized per render.
// const layoutClasses = [
//   "col-span-2 row-span-2 rounded-[18px]",
//   "col-span-2 rounded-[18px]",
//   "rounded-[18px]",
//   "rounded-[18px]",
// ];

// function pickRandomFour<T>(items: T[]): T[] {
//   const shuffled = [...items];
//   for (let i = shuffled.length - 1; i > 0; i--) {
//     const j = Math.floor(Math.random() * (i + 1));
//     const temp = shuffled[i];
//     shuffled[i] = shuffled[j];
//     shuffled[j] = temp;
//   }
//   return shuffled.slice(0, 4);
// }

// export function CommunityGallery() {
//   const selected = pickRandomFour(imagePool);

//   return (
//     <section
//       aria-labelledby="cc-gallery-heading"
//       className="max-w-[1240px] mx-auto px-5 sm:px-10 py-14 sm:py-24"
//     >
//       <div className="max-w-[560px] mb-8 sm:mb-11">
//         <p className="font-mono text-[12px] tracking-[1.5px] uppercase text-accent-light mb-3.5">
//           The community
//         </p>
//         <h2
//           id="cc-gallery-heading"
//           className="font-serif font-medium text-[26px] sm:text-[42px] leading-[1.06] tracking-[-0.02em]"
//         >
//           Faces, work, and moments.
//         </h2>
//       </div>

//       <div className="grid grid-cols-4 auto-rows-[110px] sm:auto-rows-[170px] gap-2.5 sm:gap-4">
//         {selected.map(function (img, i) {
//           return (
//             <Photo
//               key={img.src}
//               src={img.src}
//               alt={img.alt}
//               className={layoutClasses[i]}
//             />
//           );
//         })}
//       </div>
//     </section>
//   );
// }

"use client";

import { useEffect, useRef, useState } from "react";
import { Photo } from "@/components/ui/Photo";

// Full pool of candid event photos. Flyer/graphic designs are excluded
// since this section is meant to be candid "faces, work, moments" content.
const imagePool = [
  {
    src: "/images/creative-connect/art-healing-session-2024.jpg",
    alt: "Participants painting together at an Art and Healing session, Creative Connect Third Edition 2024",
  },
  {
    src: "/images/creative-connect/audience-second-edition-2023.jpg",
    alt: "Audience listening during Creative Connect Second Edition 2023",
  },
  {
    src: "/images/creative-connect/director-opening-speech-2024.jpg",
    alt: "Program Director giving the opening speech at Creative Connect Third Edition 2024",
  },
  {
    src: "/images/creative-connect/group-photo-first-edition-2022.jpg",
    alt: "Group photo from Creative Connect First Edition 2022",
  },
  {
    src: "/images/creative-connect/group-photo-third-edition-2024-a.jpg",
    alt: "Group photo from Creative Connect Third Edition 2024",
  },
  {
    src: "/images/creative-connect/group-photo-third-edition-2024-b.jpg",
    alt: "Attendees gathered at Creative Connect Third Edition 2024",
  },
  {
    src: "/images/creative-connect/qa-session-2024.jpg",
    alt: "Q&A session at Creative Connect Third Edition 2024",
  },
  {
    src: "/images/creative-connect/team-photo.jpg",
    alt: "The Creative Connect Africa team",
  },
];

// Grid position styling is fixed (the bento layout); which photo fills
// each position rotates over time.
const layoutClasses = [
  "col-span-2 row-span-2 rounded-[18px]",
  "col-span-2 rounded-[18px]",
  "rounded-[18px]",
  "rounded-[18px]",
];

const ROTATE_MS = 3000;

// Deterministic initial pick (first 4 in the pool) so server-rendered
// HTML and the first client render match exactly, no hydration mismatch.
// Real shuffling only starts after mount, in the browser.
function initialSlots() {
  return imagePool.slice(0, 4);
}

export function CommunityGallery() {
  const [slots, setSlots] = useState(initialSlots);
  const slotTurn = useRef(0);

  useEffect(function () {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (prefersReducedMotion) return;

    const interval = setInterval(function () {
      setSlots(function (current) {
        const slotIndex = slotTurn.current % 4;
        slotTurn.current += 1;

        const shown = current.map(function (img) {
          return img.src;
        });
        const candidates = imagePool.filter(function (img) {
          return !shown.includes(img.src);
        });
        if (candidates.length === 0) return current;

        const next = candidates[Math.floor(Math.random() * candidates.length)];

        const updated = [...current];
        updated[slotIndex] = next;
        return updated;
      });
    }, ROTATE_MS);

    return function () {
      clearInterval(interval);
    };
  }, []);

  return (
    <section
      aria-labelledby="cc-gallery-heading"
      className="max-w-[1240px] mx-auto px-5 sm:px-10 py-14 sm:py-24"
    >
      <div className="max-w-[560px] mb-8 sm:mb-11">
        <p className="font-mono text-[12px] tracking-[1.5px] uppercase text-accent-light mb-3.5">
          The community
        </p>
        <h2
          id="cc-gallery-heading"
          className="font-serif font-medium text-[26px] sm:text-[42px] leading-[1.06] tracking-[-0.02em]"
        >
          Faces, work, and moments.
        </h2>
      </div>

      <div className="grid grid-cols-4 auto-rows-[110px] sm:auto-rows-[170px] gap-2.5 sm:gap-4">
        {slots.map(function (img, i) {
          return (
            <Photo
              key={img.src}
              src={img.src}
              alt={img.alt}
              className={
                layoutClasses[i] + " animate-gallery-fade overflow-hidden"
              }
            />
          );
        })}
      </div>
    </section>
  );
}
