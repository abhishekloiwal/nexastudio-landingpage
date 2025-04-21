import { cn } from "@/lib/utils";
import Button from "@/polymet/components/button";
import { ArrowRightIcon } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  className?: string;
  onLearnMore?: () => void;
}

export default function ServiceCard({
  title,
  description,
  icon,
  className,
  onLearnMore,
}: ServiceCardProps) {
  return (
    <div
      className={cn(
        "flex flex-col p-6 rounded-xl border border-border bg-card shadow-sm transition-all duration-300 hover:shadow-md",
        className,
      )}
      data-pol-id="dxtfv5"
      data-pol-file-name="service-card"
      data-pol-file-type="component"
    >
      <div
        className="h-12 w-12 flex items-center justify-center rounded-lg bg-primary/10 text-primary mb-4"
        data-pol-id="eb94cx"
        data-pol-file-name="service-card"
        data-pol-file-type="component"
      >
        {icon}
      </div>
      <h3
        className="text-xl font-semibold mb-3"
        data-pol-id="49ez2k"
        data-pol-file-name="service-card"
        data-pol-file-type="component"
      >
        {title}
      </h3>
      <p
        className="text-muted-foreground mb-6 flex-grow"
        data-pol-id="50pct5"
        data-pol-file-name="service-card"
        data-pol-file-type="component"
      >
        {description}
      </p>
      <Button
        variant="outline"
        className="mt-auto self-start"
        icon={
          <ArrowRightIcon
            size={16}
            data-pol-id="nsycrl"
            data-pol-file-name="service-card"
            data-pol-file-type="component"
          />
        }
        iconPosition="right"
        onClick={onLearnMore}
        data-pol-id="4sivt4"
        data-pol-file-name="service-card"
        data-pol-file-type="component"
      >
        Learn More
      </Button>
    </div>
  );
}
