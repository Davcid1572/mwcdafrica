import Image from "next/image";
import Link from "next/link";

export function CCHero() {
  return (
    <section className="relative overflow-hidden min-h-[560px] sm:min-h-[720px] flex flex-col justify-end bg-[#1B2A20]">
      <Image
        src="/images/creative-connect/hero.jpg"
        alt="Creative Connect Africa community members at work"
        fill
        priority
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/32 via-black/10 to-black/85" />

      <div className="relative z-10 max-w-[1240px] w-full mx-auto px-5 sm:px-10 pb-10 sm:pb-18">
        {/* <nav
          aria-label="Breadcrumb"
          className="font-mono text-[12px] text-white/70 mb-5"
        >
          <Link href="/" className="hover:text-white transition-colors">
            Home
          </Link>{" "}
          /{" "}
          <Link
            href="/initiatives"
            className="hover:text-white transition-colors"
          >
            Initiatives
          </Link>{" "}
          / Creative Connect
        </nav> */}

        <p className="font-mono text-[12px] tracking-[1.5px] uppercase text-[#E7C9B6] mb-4">
          Creative Connect Africa
        </p>

        <h1 className="font-serif font-medium text-[36px] sm:text-[64px] lg:text-[76px] leading-[1.0] tracking-[-0.02em] max-w-[16ch] text-balance text-[#F7F2EA]">
          Where creativity becomes{" "}
          <span className="italic text-[#E7C9B6]">community</span>, and
          community heals.
        </h1>

        <p className="text-[16px] sm:text-[18.5px] leading-[1.6] text-[#F7F2EA]/86 max-w-[560px] mt-6 mb-7">
          A creative ecosystem for learning, collaboration and empowerment,
          connecting talent, mentors and opportunity across Africa.
        </p>

        <a
          href="#join"
          className="inline-block bg-[#F7F2EA] text-[#1B2A20] font-semibold text-[15px] px-7 py-3.5 rounded-full hover:-translate-y-0.5 transition-transform"
        >
          Join the community &rarr;
        </a>
      </div>
    </section>
  );
}
