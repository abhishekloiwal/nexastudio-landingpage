import { cn } from "@/lib/utils";
import { CheckIcon } from "lucide-react";

interface ClientSegmentCardProps {
  title: string;
  benefits: string[];
  icon: React.ReactNode;
  className?: string;
}

export default function ClientSegmentCard({
  title,
  benefits,
  icon,
  className,
}: ClientSegmentCardProps) {
  return (
    <div
      className={cn(
        "flex flex-col p-6 rounded-xl border border-border bg-card shadow-sm transition-all duration-500 hover:shadow-md hover:border-primary/30 group",
        className,
      )}
      data-pol-id="7ryewe"
      data-pol-file-name="client-segment-card"
      data-pol-file-type="component"
    >
      <div
        className="flex items-center mb-4"
        data-pol-id="803hlp"
        data-pol-file-name="client-segment-card"
        data-pol-file-type="component"
      >
        <div
          className="h-10 w-10 flex items-center justify-center rounded-lg bg-primary/10 text-primary mr-3 transition-all duration-300 group-hover:scale-110 group-hover:bg-primary/20 group-hover:rotate-3"
          data-pol-id="1i5wrz"
          data-pol-file-name="client-segment-card"
          data-pol-file-type="component"
        >
          {icon}
        </div>
        <h3
          className="text-xl font-semibold transition-colors duration-300 group-hover:text-primary"
          data-pol-id="iky3d0"
          data-pol-file-name="client-segment-card"
          data-pol-file-type="component"
        >
          {title}
        </h3>
      </div>
      <ul
        className="space-y-2 mt-2"
        data-pol-id="7gk0av"
        data-pol-file-name="client-segment-card"
        data-pol-file-type="component"
      >
        {benefits.map((benefit, index) => (
          <li
            key={index}
            className="flex items-start"
            data-pol-id={`yqtdlw_${index}`}
            data-pol-file-name="client-segment-card"
            data-pol-file-type="component"
          >
            <CheckIcon
              size={18}
              className="text-green-500 mr-2 mt-1 flex-shrink-0 opacity-80 transition-all duration-300 group-hover:opacity-100 group-hover:scale-110"
              data-pol-id={`gea6kq_${index}`}
              data-pol-file-name="client-segment-card"
              data-pol-file-type="component"
            />

            <span
              className="text-muted-foreground transition-colors duration-300 group-hover:text-muted-foreground/90"
              data-pol-id={`pe85sl_${index}`}
              data-pol-file-name="client-segment-card"
              data-pol-file-type="component"
            >
              {benefit}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
