export type Person = {
  name: string;
  title: string;
  image?: string;
};

export type GovernanceGroup = {
  name: string;
  role: string;
  people: Person[];
};

export const governanceGroups: GovernanceGroup[] = [
  {
    name: "Board of Trustees",
    role: "Governance & accountability",
    people: [
      {
        name: "John Eloka",
        title: "Chairman",
        image: "/images/about/john-eloka.jpg",
      },
      {
        name: "Martin Eloka",
        title: "Secretary",
        image: "/images/about/martin-eloka.jpg",
      },
    ],
  },
  {
    name: "Advisory Board",
    role: "Expertise & guidance",
    people: [
      {
        name: "Advisor name",
        title: "Clinical advisor",
      },
      {
        name: "Advisor name",
        title: "Community advisor",
      },
    ],
  },
  {
    name: "Management Team",
    role: "Day-to-day leadership",
    people: [
      {
        name: "Team member",
        title: "Executive Director",
      },
      {
        name: "Team member",
        title: "Programs Lead",
      },
    ],
  },
  {
    name: "Engineering Team",
    role: "Product development & maintenance",
    people: [
      {
        name: "Team member",
        title: "Frontend Engineer",
      },
      {
        name: "Team member",
        title: "Backend Engineer",
      },
    ],
  },
];
