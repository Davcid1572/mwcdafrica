import Image from "next/image";

const resources = [
  {
    slug: "starter-guide-everyday-wellbeing",
    type: "Toolkit",
    title: "A starter guide to everyday mental wellbeing",
  },
  {
    slug: "supporting-loved-one-hard-season",
    type: "Guide",
    title: "Supporting a loved one through a hard season",
  },
  {
    slug: "conversations-community-care",
    type: "Podcast",
    title: "Conversations on community & care",
  },
];

export function ResourceCards() {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {resources.map(function (r) {
        return (
          <a
            key={r.slug}
            href="#"
            className="group flex flex-col bg-background border border-border rounded-[18px] overflow-hidden hover:border-primary transition-colors"
          >
            <div className="relative aspect-[16/10]">
              <Image
                src={"/images/resources/" + r.slug + ".jpg"}
                alt=""
                fill
                className="object-cover object-center"
              />
            </div>
            <div className="p-5 sm:p-[22px]">
              <span className="text-[11.5px] font-semibold uppercase tracking-[0.4px] text-accent-light">
                {r.type}
              </span>
              <h3 className="font-serif font-semibold text-[18px] leading-[1.3] mt-2 group-hover:text-primary transition-colors">
                {r.title}
              </h3>
            </div>
          </a>
        );
      })}
    </div>
  );
}
