import Image from "next/image";

type PhoneMockupProps = {
  src: string;
  alt: string;
  className?: string;
};

export function PhoneMockup({ src, alt, className = "" }: PhoneMockupProps) {
  return (
    <div
      className={"relative w-full " + className}
      style={{ aspectRatio: "256 / 469" }}
    >
      {/* Frame asset: solid silhouette with a baked-in drop shadow, sits
          behind the screenshot so its rounded edge shows as a bezel border */}
      <Image
        src="/images/ui/phone-frame.png"
        alt=""
        fill
        className="object-contain pointer-events-none select-none"
      />

      {/* App screenshot, inset within the frame's bezel, on top so it's
          actually visible */}
      <div className="absolute inset-[5%] rounded-[20px] overflow-hidden">
        <Image src={src} alt={alt} fill className="object-cover object-center" />
      </div>
    </div>
  );
}
