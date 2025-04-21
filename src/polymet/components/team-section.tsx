import { cn } from "@/lib/utils";
import SectionTitle from "@/polymet/components/section-title";
import TeamMemberCard from "@/polymet/components/team-member-card";
import Animate from "@/polymet/components/animate";

interface TeamSectionProps {
  className?: string;
}

export default function TeamSection({ className }: TeamSectionProps) {
  // Explicitly type the team members to match the TeamMemberCard component's expected types
  const teamMembers: {
    name: string;
    position: string;
    bio: string;
    imageUrl: string;
    socialLinks: { platform: "linkedin" | "github" | "twitter"; url: string; }[];
  }[] = [
    {
      name: "Abhishek Loiwal",
      position: "Founder & CEO",
      bio: "Former High Frequency Trading Strategist at Optiver Amsterdam, Abhishek transitioned his computational expertise to AI after leading multiple fintech innovations. His blend of financial markets knowledge and machine learning mastery drives our strategic vision.",
      imageUrl: "/abhishek-compressed.png",
      socialLinks: [
        { platform: "linkedin", url: "https://linkedin.com" },
        { platform: "github", url: "https://github.com" },
        { platform: "twitter", url: "https://twitter.com" },
      ],
    },
    {
      name: "Sharad Mirani",
      position: "Co-Founder & CTO",
      bio: "Beginning his career as a quantitative developer at Optiver Amsterdam, Sharad evolved into an AI infrastructure pioneer. After architecting trading systems processing billions daily, he now focuses on creating enterprise-grade AI solutions that merge performance with accessibility.",
      imageUrl: "/sharad-compressed.png",
      socialLinks: [
        { platform: "linkedin", url: "https://linkedin.com" },
        { platform: "github", url: "https://github.com" },
      ],
    },
  ];

  return (
    <section
      id="team"
      className={cn("py-20", className)}
      data-pol-id="xzncot"
      data-pol-file-name="team-section"
      data-pol-file-type="component"
    >
      <div
        className="container mx-auto px-6"
        data-pol-id="hpsp0u"
        data-pol-file-name="team-section"
        data-pol-file-type="component"
      >
        <Animate
          variant="fade-up"
          data-pol-id="kz6ca5"
          data-pol-file-name="team-section"
          data-pol-file-type="component"
        >
          <SectionTitle
            title="Our Team"
            subtitle="Meet the experts behind our innovative solutions."
            centered
            data-pol-id="yv1s5z"
            data-pol-file-name="team-section"
            data-pol-file-type="component"
          />
        </Animate>

        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mt-12 max-w-4xl mx-auto"
          data-pol-id="blp8lp"
          data-pol-file-name="team-section"
          data-pol-file-type="component"
        >
          {teamMembers.map((member, index) => (
            <Animate
              key={index}
              variant={index % 2 === 0 ? "fade-right" : "fade-left"}
              delay={0.2 * (index + 1)}
              threshold={0.1}
              data-pol-id={`g6l8cs_${index}`}
              data-pol-file-name="team-section"
              data-pol-file-type="component"
            >
              <TeamMemberCard
                name={member.name}
                position={member.position}
                bio={member.bio}
                imageUrl={member.imageUrl}
                socialLinks={member.socialLinks}
                data-pol-id={`k9p5rd_${index}`}
                data-pol-file-name="team-section"
                data-pol-file-type="component"
              />
            </Animate>
          ))}
        </div>
      </div>
    </section>
  );
}
