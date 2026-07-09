import { useState } from "react";
import { categories } from "@/lib/data/blog";

export function CategoryPills() {
  const [active, setActive] = useState("All");

  return (
    <div className="flex flex-wrap gap-2 mt-2">
      {categories.map(function (cat) {
        const isActive = cat === active;
        return (
          <button
            key={cat}
            type="button"
            onClick={function () {
              setActive(cat);
            }}
            aria-pressed={isActive}
            className={
              "text-[13px] font-semibold px-[15px] py-[7px] rounded-full transition-colors " +
              (isActive
                ? "bg-primary-hover text-primary-foreground"
                : "bg-primary-foreground text-primary hover:bg-primary/16")
            }
          >
            {cat}
          </button>
        );
      })}
    </div>
  );
}
