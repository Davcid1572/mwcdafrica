type PlaceholderPhotoProps = {
  label: string;
  className?: string;
};

// Stands in for a photo slot that doesn't have real photography yet.
// Textured panel with a caption instead of a fake stock photo.
export function PlaceholderPhoto({ label, className = "" }: PlaceholderPhotoProps) {
  return (
    <div
      className={
        "relative flex items-center justify-center overflow-hidden bg-[repeating-linear-gradient(135deg,var(--brand-cream-2)_0_10px,var(--brand-cream)_10px_20px)] p-4 text-center " +
        className
      }
    >
      <span className="font-mono text-[11px] tracking-[0.5px] text-muted-foreground">
        {label}
      </span>
    </div>
  );
}
