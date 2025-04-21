import { cn } from "@/lib/utils";
import { LinkedinIcon, GithubIcon, TwitterIcon } from "lucide-react";

interface SocialLink {
  platform: "linkedin" | "github" | "twitter";
  url: string;
}

interface TeamMemberCardProps {
  name: string;
  position: string;
  bio: string;
  imageUrl: string;
  socialLinks?: SocialLink[];
  className?: string;
}

export default function TeamMemberCard({
  name,
  position,
  bio,
  imageUrl,
  socialLinks,
  className,
}: TeamMemberCardProps) {
  const getSocialIcon = (platform: string) => {
    switch (platform) {
      case "linkedin":
        return (
          <LinkedinIcon
            size={18}
            data-pol-id="fucdre"
            data-pol-file-name="team-member-card"
            data-pol-file-type="component"
          />
        );
      case "github":
        return (
          <GithubIcon
            size={18}
            data-pol-id="f42oop"
            data-pol-file-name="team-member-card"
            data-pol-file-type="component"
          />
        );
      case "twitter":
        return (
          <TwitterIcon
            size={18}
            data-pol-id="iapjsx"
            data-pol-file-name="team-member-card"
            data-pol-file-type="component"
          />
        );
      default:
        return null;
    }
  };

  return (
    <div
      className={cn(
        "flex flex-col rounded-xl overflow-hidden bg-card border border-border transition-all duration-500 hover:shadow-md hover:border-primary/20 group",
        className,
      )}
      data-pol-id="emd5xj"
      data-pol-file-name="team-member-card"
      data-pol-file-type="component"
    >
      <div
        className="relative h-64 overflow-hidden"
        data-pol-id="0cfsrh"
        data-pol-file-name="team-member-card"
        data-pol-file-type="component"
      >
        <img
          src={imageUrl}
          alt={name}
          className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
          data-pol-id="9ze6yp"
          data-pol-file-name="team-member-card"
          data-pol-file-type="component"
        />

        <div
          className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          data-pol-id="n64pnb"
          data-pol-file-name="team-member-card"
          data-pol-file-type="component"
        ></div>
      </div>
      <div
        className="p-6"
        data-pol-id="88gyxh"
        data-pol-file-name="team-member-card"
        data-pol-file-type="component"
      >
        <h3
          className="text-xl font-semibold transition-colors duration-300 group-hover:text-primary"
          data-pol-id="2tk25n"
          data-pol-file-name="team-member-card"
          data-pol-file-type="component"
        >
          {name}
        </h3>
        <p
          className="text-primary font-medium mb-3"
          data-pol-id="y1rjph"
          data-pol-file-name="team-member-card"
          data-pol-file-type="component"
        >
          {position}
        </p>
        <p
          className="text-muted-foreground mb-4"
          data-pol-id="11cyl3"
          data-pol-file-name="team-member-card"
          data-pol-file-type="component"
        >
          {bio}
        </p>
        {socialLinks && socialLinks.length > 0 && (
          <div
            className="flex space-x-3"
            data-pol-id="qcv21g"
            data-pol-file-name="team-member-card"
            data-pol-file-type="component"
          >
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors duration-300 transform hover:scale-110"
                data-pol-id={`57hos4_${index}`}
                data-pol-file-name="team-member-card"
                data-pol-file-type="component"
              >
                {getSocialIcon(link.platform)}
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
