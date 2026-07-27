import Image from "next/image";

type PhotoProps = {
  src: string;
  alt: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
  objectPosition?: string;
};

// Standard content photo: fills its container with a plain cover crop and a
// gentle hover zoom (no blur -- that was tried and didn't land).
export function Photo({
  src,
  alt,
  className = "",
  sizes = "(max-width: 768px) 100vw, 50vw",
  priority = false,
  objectPosition = "center",
}: PhotoProps) {
  return (
    <div className={"photo-zoom relative overflow-hidden " + className}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        className="object-cover"
        style={{ objectPosition }}
      />
    </div>
  );
}
