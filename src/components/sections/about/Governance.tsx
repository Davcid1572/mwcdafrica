import { governanceGroups } from "@/lib/data/governance";
import { GovernanceCard } from "./GovernanceCard";

export function Governance() {
  return (
    <section aria-labelledby="governance-heading" className="bg-muted">
      <div className="mx-auto max-w-[1240px] px-5 py-16 sm:px-12 sm:py-28">
        <div className="mb-9 max-w-[600px] sm:mb-14">
          <p className="mb-4 font-mono text-[12.5px] tracking-[1px] text-accent">
            (06) Governance
          </p>

          <h2
            id="governance-heading"
            className="font-serif text-[32px] font-medium leading-[1.02] tracking-[-0.02em] sm:text-[52px]"
          >
            The people who steward the work.
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {governanceGroups.map((group) => (
            <GovernanceCard key={group.name} group={group} />
          ))}
        </div>
      </div>
    </section>
  );
}
