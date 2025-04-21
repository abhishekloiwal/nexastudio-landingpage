import { cn } from "@/lib/utils";
import { ArrowRightIcon } from "lucide-react";
import Button from "@/polymet/components/button";

interface UseCaseCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  className?: string;
  imageUrl?: string;
  onLearnMore?: () => void;
}

export default function UseCaseCard({
  title,
  description,
  icon,
  className,
  imageUrl,
  onLearnMore,
}: UseCaseCardProps) {
  return (
    <div
      className={cn(
        "group overflow-hidden rounded-xl border border-border bg-card transition-all duration-300 hover:shadow-lg",
        className,
      )}
      data-pol-id="21fm6r"
      data-pol-file-name="use-case-card"
      data-pol-file-type="component"
    >
      {imageUrl && (
        <div
          className="relative h-48 overflow-hidden"
          data-pol-id="zk63oq"
          data-pol-file-name="use-case-card"
          data-pol-file-type="component"
        >
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            data-pol-id="oqjdlj"
            data-pol-file-name="use-case-card"
            data-pol-file-type="component"
          />

          <div
            className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"
            data-pol-id="rzdi84"
            data-pol-file-name="use-case-card"
            data-pol-file-type="component"
          />
        </div>
      )}
      <div
        className="p-6"
        data-pol-id="zasn2l"
        data-pol-file-name="use-case-card"
        data-pol-file-type="component"
      >
        <div
          className="flex items-center mb-4"
          data-pol-id="nuk3al"
          data-pol-file-name="use-case-card"
          data-pol-file-type="component"
        >
          <div
            className="h-10 w-10 flex items-center justify-center rounded-lg bg-primary/10 text-primary mr-3"
            data-pol-id="bscpou"
            data-pol-file-name="use-case-card"
            data-pol-file-type="component"
          >
            {icon}
          </div>
          <h3
            className="text-xl font-semibold"
            data-pol-id="df2mg7"
            data-pol-file-name="use-case-card"
            data-pol-file-type="component"
          >
            {title}
          </h3>
        </div>
        <p
          className="text-muted-foreground mb-6"
          data-pol-id="be71o1"
          data-pol-file-name="use-case-card"
          data-pol-file-type="component"
        >
          {description}
        </p>
        <Button
          variant="ghost"
          className="pl-0 hover:pl-2 transition-all duration-300"
          icon={
            <ArrowRightIcon
              size={16}
              data-pol-id="gvdkq3"
              data-pol-file-name="use-case-card"
              data-pol-file-type="component"
            />
          }
          iconPosition="right"
          onClick={onLearnMore}
          data-pol-id="mxllxs"
          data-pol-file-name="use-case-card"
          data-pol-file-type="component"
        >
          Learn More
        </Button>
      </div>
    </div>
  );
}
