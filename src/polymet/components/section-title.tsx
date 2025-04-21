import { cn } from "@/lib/utils";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
  subtitleClassName?: string;
}

export default function SectionTitle({
  title,
  subtitle,
  centered = false,
  className,
  subtitleClassName,
}: SectionTitleProps) {
  return (
    <div
      className={cn("mb-12", centered && "text-center", className)}
      data-pol-id="3s4bu4"
      data-pol-file-name="section-title"
      data-pol-file-type="component"
    >
      <h2
        className="text-3xl font-bold tracking-tight sm:text-4xl mb-4"
        data-pol-id="auwyn1"
        data-pol-file-name="section-title"
        data-pol-file-type="component"
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "text-lg text-muted-foreground max-w-3xl",
            centered && "mx-auto",
            subtitleClassName,
          )}
          data-pol-id="wxiynz"
          data-pol-file-name="section-title"
          data-pol-file-type="component"
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
