import { Photo } from "@/components/ui/Photo";

const images = [
  {
    id: "cc-gal-1",
    alt: "A creative at work",
    className: "col-span-2 row-span-2 rounded-[18px]",
    src: "/images/creative-connect/cc-gal-1.jpg",
  },
  {
    id: "cc-gal-2",
    alt: "A workshop in session",
    className: "col-span-2 rounded-[18px]",
    src: "/images/creative-connect/cc-gal-2.jpg",
  },
  {
    id: "cc-gal-3",
    alt: "Community artwork",
    className: "rounded-[18px]",
    src: "/images/creative-connect/cc-gal-3.jpg",
  },
  {
    id: "cc-gal-4",
    alt: "Portrait of a community member",
    className: "rounded-[18px]",
    src: "/images/creative-connect/cc-gal-4.jpg",
  },
];

export function CommunityGallery() {
  return (
    <section
      aria-labelledby="cc-gallery-heading"
      className="max-w-[1240px] mx-auto px-5 sm:px-10 py-14 sm:py-24"
    >
      <div className="max-w-[560px] mb-8 sm:mb-11">
        <p className="font-mono text-[12px] tracking-[1.5px] uppercase text-accent mb-3.5">
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
        {images.map(function (img) {
          return (
            <Photo
              key={img.id}
              src={img.src}
              alt={img.alt}
              className={img.className}
            />
          );
        })}
      </div>
    </section>
  );
}
