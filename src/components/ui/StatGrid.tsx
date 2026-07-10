type Stat = {
  value: string;
  label: string;
  sublabel?: string;
};

type StatGridProps = {
  stats: Stat[];
  columns?: 2 | 4;
};

export function StatGrid({ stats, columns = 4 }: StatGridProps) {
  const colsClass = columns === 4 ? "sm:grid-cols-4" : "sm:grid-cols-2";

  return (
    <dl className={"grid grid-cols-2 " + colsClass + " gap-8 sm:gap-6"}>
      {stats.map(function (stat) {
        return (
          <div key={stat.label} className="border-t-2 border-accent-light pt-4">
            <dt className="sr-only">{stat.label}</dt>
            <dd className="font-serif font-bold text-[36px] sm:text-[48px] leading-none tracking-[-0.02em]">
              {stat.value}
            </dd>
            <p className="text-[14px] sm:text-[15px] font-semibold mt-3">
              {stat.label}
            </p>
            {stat.sublabel && (
              <p className="text-[12.5px] text-muted-foreground mt-1">
                {stat.sublabel}
              </p>
            )}
          </div>
        );
      })}
    </dl>
  );
}
