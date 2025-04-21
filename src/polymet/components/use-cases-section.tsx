import { cn } from "@/lib/utils";
import SectionTitle from "@/polymet/components/section-title";
import UseCaseCard from "@/polymet/components/use-case-card";
import { RocketIcon, BotIcon, BrainIcon, BarChartIcon } from "lucide-react";
import Animate from "@/polymet/components/animate";
import { useNavigate } from "react-router-dom";

interface UseCasesSectionProps {
  className?: string;
}

export default function UseCasesSection({ className }: UseCasesSectionProps) {
  const navigate = useNavigate();
  const useCases = [
    {
      title: "Startup MVPs",
      description:
        "Get your product from concept to customers rapidly and reliably.",
      icon: (
        <RocketIcon
          size={20}
          data-pol-id="kazad8"
          data-pol-file-name="use-cases-section"
          data-pol-file-type="component"
        />
      ),
      imageUrl: "https://raw.githubusercontent.com/abhishekloiwal/AI-studio-landingpage/main/images/1.png",
      path: "/use-cases/startup-mvp"
    },
    {
      title: "Workspace Automation",
      description:
        "Automate boring tasks and free your team to focus on what matters most.",
      icon: (
        <BotIcon
          size={20}
          data-pol-id="h1nblq"
          data-pol-file-name="use-cases-section"
          data-pol-file-type="component"
        />
      ),
      imageUrl: "https://raw.githubusercontent.com/abhishekloiwal/AI-studio-landingpage/main/images/2.png",
      path: "/use-cases/workspace-automation"
    },
    {
      title: "AI Product Features",
      description:
        "Seamlessly add AI capabilities like chat interfaces, voice, and analytics.",
      icon: (
        <BrainIcon
          size={20}
          data-pol-id="0qmwx4"
          data-pol-file-name="use-cases-section"
          data-pol-file-type="component"
        />
      ),
      imageUrl: "https://raw.githubusercontent.com/abhishekloiwal/AI-studio-landingpage/main/images/3.png",
      path: "/use-cases/ai-product-features"
    },
    {
      title: "Operational Intelligence",
      description:
        "Empower your business decisions with data-driven, predictive insights.",
      icon: (
        <BarChartIcon
          size={20}
          data-pol-id="e89mey"
          data-pol-file-name="use-cases-section"
          data-pol-file-type="component"
        />
      ),
      imageUrl: "https://raw.githubusercontent.com/abhishekloiwal/AI-studio-landingpage/main/images/4.png",
      path: "/use-cases/operational-intelligence"
    },
  ];

  return (
    <section
      id="use-cases"
      className={cn("py-20 bg-muted/30", className)}
      data-pol-id="ba2hlm"
      data-pol-file-name="use-cases-section"
      data-pol-file-type="component"
    >
      <div
        className="container mx-auto px-6"
        data-pol-id="uyxeax"
        data-pol-file-name="use-cases-section"
        data-pol-file-type="component"
      >
        <Animate
          variant="fade-up"
          data-pol-id="o7mxx7"
          data-pol-file-name="use-cases-section"
          data-pol-file-type="component"
        >
          <SectionTitle
            title="Use Cases"
            subtitle="Discover how our solutions can transform different aspects of your business."
            centered
            data-pol-id="gu6d2l"
            data-pol-file-name="use-cases-section"
            data-pol-file-type="component"
          />
        </Animate>

        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12"
          data-pol-id="1qm63g"
          data-pol-file-name="use-cases-section"
          data-pol-file-type="component"
        >
          {useCases.map((useCase, index) => (
            <Animate
              key={index}
              variant={index % 2 === 0 ? "fade-right" : "fade-left"}
              delay={0.1 * (index + 1)}
              threshold={0.1}
              data-pol-id={`93er13_${index}`}
              data-pol-file-name="use-cases-section"
              data-pol-file-type="component"
            >
              <UseCaseCard
                title={useCase.title}
                description={useCase.description}
                icon={useCase.icon}
                imageUrl={useCase.imageUrl}
                onLearnMore={() => navigate(useCase.path)}
                data-pol-id={`degm1j_${index}`}
                data-pol-file-name="use-cases-section"
                data-pol-file-type="component"
              />
            </Animate>
          ))}
        </div>
      </div>
    </section>
  );
}
