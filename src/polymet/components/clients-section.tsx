import { cn } from "@/lib/utils";
import SectionTitle from "@/polymet/components/section-title";
import ClientSegmentCard from "@/polymet/components/client-segment-card";
import { UserIcon, BuildingIcon, LayoutIcon, UsersIcon } from "lucide-react";
import Animate from "@/polymet/components/animate";

interface ClientsSectionProps {
  className?: string;
}

export default function ClientsSection({ className }: ClientsSectionProps) {
  const clientSegments = [
    {
      title: "Solopreneurs & Startups",
      benefits: [
        "Quick, affordable MVP prototyping",
        "Scalable and maintainable codebases",
        "Technical guidance and mentorship",
      ],

      icon: (
        <UserIcon
          size={20}
          data-pol-id="fzj089"
          data-pol-file-name="clients-section"
          data-pol-file-type="component"
        />
      ),
    },
    {
      title: "Small & Medium Businesses",
      benefits: [
        "Workflow and task automation",
        "AI-enhanced productivity tools",
        "Integration with existing systems",
      ],

      icon: (
        <BuildingIcon
          size={20}
          data-pol-id="ausswo"
          data-pol-file-name="clients-section"
          data-pol-file-type="component"
        />
      ),
    },
    {
      title: "Tech/Product Leaders",
      benefits: [
        "Specialized AI capabilities",
        "Integration with existing product teams",
        "Technical consultation and implementation",
      ],

      icon: (
        <LayoutIcon
          size={20}
          data-pol-id="a732o4"
          data-pol-file-name="clients-section"
          data-pol-file-type="component"
        />
      ),
    },
    {
      title: "Innovation Departments",
      benefits: [
        "External innovation partners",
        "Fast and agile experimentation",
        "Proof of concept development",
      ],

      icon: (
        <UsersIcon
          size={20}
          data-pol-id="vuzbr7"
          data-pol-file-name="clients-section"
          data-pol-file-type="component"
        />
      ),
    },
  ];

  return (
    <section
      id="clients"
      className={cn("py-20", className)}
      data-pol-id="totj7w"
      data-pol-file-name="clients-section"
      data-pol-file-type="component"
    >
      <div
        className="container mx-auto px-6"
        data-pol-id="3rre2u"
        data-pol-file-name="clients-section"
        data-pol-file-type="component"
      >
        <Animate
          variant="fade-up"
          data-pol-id="9vuage"
          data-pol-file-name="clients-section"
          data-pol-file-type="component"
        >
          <SectionTitle
            title="Ideal Clients"
            subtitle="We work with a variety of clients across different industries and stages of growth."
            centered
            data-pol-id="fsmstl"
            data-pol-file-name="clients-section"
            data-pol-file-type="component"
          />
        </Animate>

        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12"
          data-pol-id="a5vyxe"
          data-pol-file-name="clients-section"
          data-pol-file-type="component"
        >
          {clientSegments.map((segment, index) => (
            <Animate
              key={index}
              variant="zoom-in"
              delay={0.1 * (index + 1)}
              threshold={0.1}
              data-pol-id={`7p72ea_${index}`}
              data-pol-file-name="clients-section"
              data-pol-file-type="component"
            >
              <ClientSegmentCard
                title={segment.title}
                benefits={segment.benefits}
                icon={segment.icon}
                data-pol-id={`jghipn_${index}`}
                data-pol-file-name="clients-section"
                data-pol-file-type="component"
              />
            </Animate>
          ))}
        </div>
      </div>
    </section>
  );
}
