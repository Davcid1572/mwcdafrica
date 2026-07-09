export type Person = {
  name: string;
  title: string;
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
        name: "Trustee name",
        title: "Chair",
      },
      {
        name: "Trustee name",
        title: "Trustee",
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
];
