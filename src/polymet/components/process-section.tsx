import { cn } from "@/lib/utils";
import SectionTitle from "@/polymet/components/section-title";
import ProcessStep from "@/polymet/components/process-step";
import Animate from "@/polymet/components/animate";

interface ProcessSectionProps {
  className?: string;
}

export default function ProcessSection({ className }: ProcessSectionProps) {
  const steps = [
    {
      number: 1,
      title: "Discover",
      description:
        "We thoroughly understand your goals, challenges, and business context.",
    },
    {
      number: 2,
      title: "Prototype",
      description:
        "We rapidly design and deliver a robust prototype to validate your ideas.",
    },
    {
      number: 3,
      title: "Iterate",
      description:
        "Continuous improvement based on real-world feedback and testing.",
    },
    {
      number: 4,
      title: "Launch",
      description: "Reliable, scalable deployment optimized for your users.",
    },
    {
      number: 5,
      title: "Support",
      description:
        "Long-term collaboration, proactive maintenance, and growth-focused improvements.",
    },
  ];

  return (
    <section
      id="process"
      className={cn("py-20", className)}
      data-pol-id="kiyikm"
      data-pol-file-name="process-section"
      data-pol-file-type="component"
    >
      <div
        className="container mx-auto px-6"
        data-pol-id="i2u3ht"
        data-pol-file-name="process-section"
        data-pol-file-type="component"
      >
        <Animate
          variant="fade-up"
          data-pol-id="8x592b"
          data-pol-file-name="process-section"
          data-pol-file-type="component"
        >
          <SectionTitle
            title="Our Process"
            subtitle="A proven methodology that delivers results efficiently and reliably."
            centered
            data-pol-id="swggr7"
            data-pol-file-name="process-section"
            data-pol-file-type="component"
          />
        </Animate>

        <div
          className="max-w-3xl mx-auto mt-16"
          data-pol-id="w9yiop"
          data-pol-file-name="process-section"
          data-pol-file-type="component"
        >
          {steps.map((step, index) => (
            <Animate
              key={index}
              variant="fade-left"
              delay={0.1 * (index + 1)}
              threshold={0.2}
              data-pol-id={`xiz8mo_${index}`}
              data-pol-file-name="process-section"
              data-pol-file-type="component"
            >
              <ProcessStep
                number={step.number}
                title={step.title}
                description={step.description}
                isLast={index === steps.length - 1}
                data-pol-id={`lq8apz_${index}`}
                data-pol-file-name="process-section"
                data-pol-file-type="component"
              />
            </Animate>
          ))}
        </div>
      </div>
    </section>
  );
}
