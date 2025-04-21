import { cn } from "@/lib/utils";
import { QuoteIcon } from "lucide-react";

interface TestimonialCardProps {
  quote: string;
  author: string;
  position: string;
  company: string;
  avatarUrl?: string;
  className?: string;
}

export default function TestimonialCard({
  quote,
  author,
  position,
  company,
  avatarUrl,
  className,
}: TestimonialCardProps) {
  return (
    <div
      className={cn(
        "flex flex-col p-6 rounded-xl border border-border bg-card shadow-sm transition-all duration-500 hover:shadow-md hover:border-primary/20 group",
        className,
      )}
      data-pol-id="we9tmb"
      data-pol-file-name="testimonial-card"
      data-pol-file-type="component"
    >
      <QuoteIcon
        size={32}
        className="text-primary/40 mb-4 transition-all duration-500 group-hover:scale-110 group-hover:text-primary/60"
        data-pol-id="0v6cek"
        data-pol-file-name="testimonial-card"
        data-pol-file-type="component"
      />

      <p
        className="text-lg italic mb-6 transition-all duration-300 group-hover:text-foreground"
        data-pol-id="silp8x"
        data-pol-file-name="testimonial-card"
        data-pol-file-type="component"
      >
        {quote}
      </p>
      <div
        className="flex items-center mt-auto"
        data-pol-id="hm9g23"
        data-pol-file-name="testimonial-card"
        data-pol-file-type="component"
      >
        {avatarUrl ? (
          <div
            className="relative overflow-hidden h-12 w-12 rounded-full mr-4"
            data-pol-id="b6au1r"
            data-pol-file-name="testimonial-card"
            data-pol-file-type="component"
          >
            <img
              src={avatarUrl}
              alt={author}
              className="h-12 w-12 object-cover transition-transform duration-500 group-hover:scale-110"
              data-pol-id="48j3lc"
              data-pol-file-name="testimonial-card"
              data-pol-file-type="component"
            />
          </div>
        ) : (
          <div
            className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-medium mr-4 transition-all duration-300 group-hover:bg-primary/20"
            data-pol-id="h9o0xy"
            data-pol-file-name="testimonial-card"
            data-pol-file-type="component"
          >
            {author.charAt(0)}
          </div>
        )}
        <div
          data-pol-id="chonri"
          data-pol-file-name="testimonial-card"
          data-pol-file-type="component"
        >
          <p
            className="font-semibold transition-colors duration-300 group-hover:text-primary"
            data-pol-id="sgdkxx"
            data-pol-file-name="testimonial-card"
            data-pol-file-type="component"
          >
            {author}
          </p>
          <p
            className="text-sm text-muted-foreground"
            data-pol-id="s11ft5"
            data-pol-file-name="testimonial-card"
            data-pol-file-type="component"
          >
            {position}, {company}
          </p>
        </div>
      </div>
    </div>
  );
}
