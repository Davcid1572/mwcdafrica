import { GovernanceGroup } from "@/lib/data/governance";

type GovernanceCardProps = {
  group: GovernanceGroup;
};

export function GovernanceCard({ group }: GovernanceCardProps) {
  return (
    <article className="rounded-2xl bg-background p-7 shadow-sm">
      <h3 className="mb-1 font-serif text-[22px] font-semibold">
        {group.name}
      </h3>

      <p className="mb-6 text-[13.5px] text-muted-foreground">{group.role}</p>

      <div className="flex flex-col gap-4">
        {group.people.map((person) => (
          <div
            key={`${person.name}-${person.title}`}
            className="flex items-center gap-3.5"
          >
            <div
              aria-hidden="true"
              className="h-[50px] w-[50px] shrink-0 rounded-full bg-[repeating-linear-gradient(135deg,#E7DCC9_0_8px,#EFE6D5_8px_16px)]"
            />

            <div>
              <p className="text-[15px] font-semibold">{person.name}</p>

              <p className="text-[13px] text-muted-foreground">
                {person.title}
              </p>
            </div>
          </div>
        ))}
      </div>
    </article>
  );
}
