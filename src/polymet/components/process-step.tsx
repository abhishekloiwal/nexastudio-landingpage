import { cn } from "@/lib/utils";

interface ProcessStepProps {
  number: number;
  title: string;
  description: string;
  className?: string;
  isLast?: boolean;
}

export default function ProcessStep({
  number,
  title,
  description,
  className,
  isLast = false,
}: ProcessStepProps) {
  return (
    <div
      className={cn("flex group", className)}
      data-pol-id="6z9uzw"
      data-pol-file-name="process-step"
      data-pol-file-type="component"
    >
      <div
        className="flex flex-col items-center mr-6"
        data-pol-id="sdw7ek"
        data-pol-file-name="process-step"
        data-pol-file-type="component"
      >
        <div
          className="flex items-center justify-center h-10 w-10 rounded-full bg-primary text-primary-foreground font-semibold text-lg transition-all duration-500 group-hover:scale-110 group-hover:shadow-md group-hover:shadow-primary/20"
          data-pol-id="882m4n"
          data-pol-file-name="process-step"
          data-pol-file-type="component"
        >
          {number}
        </div>
        {!isLast && (
          <div
            className="w-px h-full bg-border mt-2 flex-grow transition-all duration-500 group-hover:bg-primary/30"
            data-pol-id="852ocp"
            data-pol-file-name="process-step"
            data-pol-file-type="component"
          ></div>
        )}
      </div>
      <div
        className="pt-1 pb-8"
        data-pol-id="2ptpt2"
        data-pol-file-name="process-step"
        data-pol-file-type="component"
      >
        <h3
          className="text-xl font-semibold mb-2 transition-colors duration-300 group-hover:text-primary"
          data-pol-id="1a27k2"
          data-pol-file-name="process-step"
          data-pol-file-type="component"
        >
          {title}
        </h3>
        <p
          className="text-muted-foreground transition-all duration-500 group-hover:text-muted-foreground/90"
          data-pol-id="maavun"
          data-pol-file-name="process-step"
          data-pol-file-type="component"
        >
          {description}
        </p>
      </div>
    </div>
  );
}
