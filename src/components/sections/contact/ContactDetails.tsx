import { Photo } from "@/components/ui/Photo";
import { Tap } from "@/components/ui/Tap";

const socials = [
  { label: "Instagram", short: "IG", href: "#" },
  { label: "X (Twitter)", short: "X", href: "#" },
  { label: "LinkedIn", short: "LI", href: "#" },
];

export function ContactDetails() {
  return (
    <div className="flex-1 min-w-[250px] flex flex-col gap-6">
      <div>
        <p className="font-mono text-[11px] tracking-[1.5px] uppercase text-accent mb-2">
          Email
        </p>
        <a
          href="mailto:hello@mwcdafrica.org"
          className="text-[17px] font-medium hover:text-primary transition-colors"
        >
          hello@mwcdafrica.org
        </a>
      </div>

      <div>
        <p className="font-mono text-[11px] tracking-[1.5px] uppercase text-accent mb-2">
          Phone
        </p>
        <span className="text-[17px] font-medium">+000 000 0000</span>
      </div>

      <div>
        <p className="font-mono text-[11px] tracking-[1.5px] uppercase text-accent mb-2">
          Office
        </p>
        <span className="text-[15px] text-muted-foreground leading-[1.5]">
          [ City, Country ]
          <br />
          Address line placeholder
        </span>
      </div>

      <div>
        <p className="font-mono text-[11px] tracking-[1.5px] uppercase text-accent mb-3">
          Follow
        </p>
        <div className="flex gap-2.5">
          {socials.map(function (s) {
            return (
              <Tap key={s.label} hapticPattern={8}>
                <a
                  href={s.href}
                  aria-label={s.label}
                  className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-[12px] font-semibold hover:bg-accent hover:text-white hover:border-accent active:scale-95 transition-all"
                >
                  {s.short}
                </a>
              </Tap>
            );
          })}
        </div>
      </div>

      <Photo
        src="/images/contact/office-map.jpg"
        alt="Map showing MWCDAFRICA office location"
        className="aspect-[16/9] rounded-2xl"
      />
    </div>
  );
}
