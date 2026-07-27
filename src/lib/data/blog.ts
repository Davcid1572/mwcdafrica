export const categories = [
  "All",
  "Mental Health",
  "Community",
  "Creativity",
  "Innovation",
  "Development",
  "Stories",
];

export const featuredPost = {
  slug: "why-community-is-underrated",
  category: "Mental Health",
  date: "Jun 2026",
  title: "Why community is the most underrated mental-health intervention",
  excerpt:
    "A look at how belonging and connection do quiet, powerful work, and what it means for how we design care.",
  body: [
    "When people picture mental health support, they usually picture a room with two chairs, a therapist, and an hour on the clock. That picture isn't wrong, but it's incomplete. Across the communities we work in, some of the most consistent, measurable shifts in wellbeing haven't come from a clinical setting at all. They've come from someone showing up to the same weekly gathering for six months straight, from a neighbour checking in unprompted, from simply not being the only one carrying something heavy.",
    "Belonging is not a soft add-on to care, it is a form of care. Isolation is one of the strongest predictors of poor mental health outcomes we see in the field, and it compounds quietly. Someone can be managing a diagnosis, taking their medication, doing everything a treatment plan asks of them, and still be unravelling because no one around them knows what they're carrying.",
    "This is part of why our community programs are not positioned as a supplement to clinical work, they're designed as a parallel track. A support circle that meets weekly does something a monthly appointment structurally cannot: it normalises checking in on each other as a habit, not an event. People start to notice when someone in the group goes quiet. They start to ask. That kind of ambient attention is difficult to manufacture in a clinical setting, but it's exactly what community, done well, produces on its own.",
    "None of this replaces professional care where professional care is needed, and we're careful never to suggest otherwise. But we've learned to stop treating community as the thing that happens before or after \"real\" support. For a lot of the people we work alongside, it is the real support, and everything else builds on top of it.",
  ],
};

export const posts = [
  {
    slug: "building-local-leadership",
    category: "Community",
    date: "May 2026",
    title: "Building local leadership that lasts",
    badgeColor: "#2E5141",
    excerpt:
      "Programs fade when they depend on outside staff. Ours are built to be run by the people who live there.",
    body: [
      "A program that only works while an outside team is in the room isn't a program, it's a visit. We learned this the expensive way early on: a workshop series we were proud of quietly stopped happening within a few months of us stepping back, because we had never actually handed it to anyone.",
      "Since then, every community initiative we run is built around a simple test: could this continue if we left tomorrow? That question changes how a program gets designed from day one. Instead of delivering a finished workshop, we co-design it with local facilitators. Instead of running every session ourselves, we train and pair with someone from the community who eventually runs it without us in the room at all.",
      "It's slower. Co-designing takes longer than simply arriving with a curriculum, and handing over facilitation means tolerating a session that doesn't go exactly the way we would have run it. But slower and durable beats fast and temporary, every time we've tested it.",
      "The clearest sign this is working isn't attendance, it's succession. When a facilitator we trained starts training someone else without being asked to, that's the point where a program stops being ours and starts being theirs, which is exactly where it was always supposed to end up.",
    ],
  },
  {
    slug: "art-and-grief",
    category: "Creativity",
    date: "May 2026",
    title: "How making art helps us process grief",
    badgeColor: "#C06B45",
    excerpt:
      "Grief doesn't always have words. In our creative sessions, it often finds a shape before it finds a sentence.",
    body: [
      "Ask someone to describe their grief and you'll often get silence, or a sentence that trails off. Hand that same person a piece of clay, or a brush, and something different tends to happen. Not always a breakthrough, sometimes just a shape, a colour, a mark repeated until it feels finished. But something moves.",
      "In our Creative Connect Africa sessions focused on loss, we don't ask participants to explain their work. That's a deliberate choice. The moment art becomes something you have to justify in words, it starts operating under the same pressure as talking about grief directly, and for a lot of people, that pressure is exactly what kept the grief locked in place to begin with.",
      "What we see instead is process doing the work that explanation can't. Someone reworking the same motif across several sessions. Someone choosing colours that, without ever being named, clearly track a mood shifting week to week. A facilitator's job in these sessions is less about teaching technique and more about holding space, staying present without steering.",
      "We're careful not to overstate this. Creative expression isn't a substitute for grief counselling when that's what's needed, and we make sure participants know both are available. But for many people, especially in contexts where talking openly about loss carries stigma, a wordless practice is often the first door that opens. Everything else can follow from there.",
    ],
  },
  {
    slug: "designing-mica-low-bandwidth",
    category: "Innovation",
    date: "Apr 2026",
    title: "Designing MICA for low-bandwidth realities",
    badgeColor: "#2E5141",
    excerpt:
      "Most mental-health apps are designed for reliable, fast connections. We had to design for the opposite.",
    body: [
      "A lot of mental health technology is built and tested in places with dependable broadband, then quietly assumes that experience is universal. It isn't. Across many of the communities MICA is being built for, connectivity is intermittent, data is expensive relative to income, and a lower-end device with limited storage is the norm rather than the exception. If we built for the demo environment instead of the real one, we'd be building something people simply couldn't use.",
      "So the brief for MICA inverted the usual priorities. Instead of asking \"what features can we fit in\", we asked \"what's the smallest, lightest version of this that still does something real\". Mood tracking and journaling load and save locally first, syncing quietly whenever a connection is available, rather than requiring one to function at all. Every screen is designed to be legible and useful even when images and richer content haven't finished loading.",
      "This shaped decisions that never show up in a features list. We chose simpler, smaller illustration assets over the more elaborate versions we originally designed. We built the AI check-in to work meaningfully on a poor connection instead of assuming a constant one. None of that is exciting on a slide, but it's the difference between an app that works for the person it's meant for, and one that only works for the person demoing it.",
      "We'd rather MICA be a little less flashy and genuinely usable on the phone someone actually owns, in the place they actually live, than beautiful in a pitch and useless in the field.",
    ],
  },
];
