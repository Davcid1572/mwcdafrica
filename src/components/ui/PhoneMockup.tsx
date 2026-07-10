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
      {/* Frame asset: solid bezel shape with baked-in drop shadow */}
      <Image
        src="/images/ui/phone-frame.png"
        alt=""
        fill
        className="object-contain pointer-events-none select-none z-10"
      />

      {/* App screenshot, inset within the frame's bezel */}
      {/* <div className="absolute inset-[3%] rounded-[22px] overflow-hidden">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover object-center"
        />
      </div> */}
    </div>
  );
}
