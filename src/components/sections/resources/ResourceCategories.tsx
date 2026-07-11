const categories = [
  "Articles",
  "Toolkits",
  "Guides",
  "Downloads",
  "Videos",
  "Podcasts",
];

export function ResourceCategories() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-8 sm:mb-11">
      {categories.map(function (cat) {
        return (
          <span
            key={cat}
            className="text-center text-[14px] font-semibold text-primary bg-primary/10 py-3 rounded-xl"
          >
            {cat}
          </span>
        );
      })}
    </div>
  );
}
