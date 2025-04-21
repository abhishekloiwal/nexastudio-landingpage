import { cn } from "@/lib/utils";
import SectionTitle from "@/polymet/components/section-title";
import ServiceCard from "@/polymet/components/service-card";
import { RocketIcon, BrainIcon, LightbulbIcon } from "lucide-react";
import Animate from "@/polymet/components/animate";

interface ServicesSectionProps {
  className?: string;
}

export default function ServicesSection({ className }: ServicesSectionProps) {
  const services = [
    {
      title: "Rapid Prototyping",
      description:
        "From idea to working prototype in weeks, not months. Quickly validate your business concepts with high-quality software.",
      icon: (
        <RocketIcon
          size={24}
          data-pol-id="xbxo10"
          data-pol-file-name="services-section"
          data-pol-file-type="component"
        />
      ),
    },
    {
      title: "Advanced AI Integration",
      description:
        "Harness cutting-edge AI to automate tasks, enhance your products, and empower data-driven decisions.",
      icon: (
        <BrainIcon
          size={24}
          data-pol-id="fn9n2o"
          data-pol-file-name="services-section"
          data-pol-file-type="component"
        />
      ),
    },
    {
      title: "Strategic AI Consulting",
      description:
        "Identify the most valuable AI opportunities and implement solutions strategically aligned with your business goals.",
      icon: (
        <LightbulbIcon
          size={24}
          data-pol-id="zvwspy"
          data-pol-file-name="services-section"
          data-pol-file-type="component"
        />
      ),
    },
  ];

  return (
    <section
      id="services"
      className={cn("py-20 bg-muted/30", className)}
      data-pol-id="oqmgas"
      data-pol-file-name="services-section"
      data-pol-file-type="component"
    >
      <div
        className="container mx-auto px-6"
        data-pol-id="75sihy"
        data-pol-file-name="services-section"
        data-pol-file-type="component"
      >
        <Animate
          variant="fade-up"
          data-pol-id="lhgtlq"
          data-pol-file-name="services-section"
          data-pol-file-type="component"
        >
          <SectionTitle
            title="Our Services"
            subtitle="We specialize in transforming your ideas into intelligent, scalable software solutions."
            centered
            data-pol-id="vfrnmo"
            data-pol-file-name="services-section"
            data-pol-file-type="component"
          />
        </Animate>

        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12"
          data-pol-id="q0ehkd"
          data-pol-file-name="services-section"
          data-pol-file-type="component"
        >
          {services.map((service, index) => (
            <Animate
              key={index}
              variant="fade-up"
              delay={0.1 * (index + 1)}
              data-pol-id={`cf9pfp_${index}`}
              data-pol-file-name="services-section"
              data-pol-file-type="component"
            >
              <ServiceCard
                title={service.title}
                description={service.description}
                icon={service.icon}
                data-pol-id={`yp48vz_${index}`}
                data-pol-file-name="services-section"
                data-pol-file-type="component"
              />
            </Animate>
          ))}
        </div>
      </div>
    </section>
  );
}
