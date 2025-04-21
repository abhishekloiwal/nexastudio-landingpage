import { cn } from "@/lib/utils";
import SectionTitle from "@/polymet/components/section-title";
import Button from "@/polymet/components/button";
import { UsersIcon, ArrowRightIcon } from "lucide-react";
import Animate from "@/polymet/components/animate";
import FloatingElements from "@/polymet/components/floating-elements";
import BackgroundGradient from "@/polymet/components/background-gradient";

interface TalentSectionProps {
  className?: string;
}

export default function TalentSection({ className }: TalentSectionProps) {
  return (
    <section
      className={cn(
        "py-20 bg-gradient-to-br from-primary/5 to-purple-500/5 relative overflow-hidden",
        className,
      )}
      data-pol-id="zqxkzm"
      data-pol-file-name="talent-section"
      data-pol-file-type="component"
    >
      <FloatingElements
        count={10}
        colors={["#0ea5e9", "#6366f1", "#8b5cf6", "#d946ef"]}
        minSize={10}
        maxSize={30}
        minSpeed={0.2}
        maxSpeed={0.5}
        minOpacity={0.03}
        maxOpacity={0.08}
        minBlur={3}
        maxBlur={8}
        data-pol-id="oj1dmv"
        data-pol-file-name="talent-section"
        data-pol-file-type="component"
      />

      <div
        className="container mx-auto px-6 relative z-10"
        data-pol-id="daffqs"
        data-pol-file-name="talent-section"
        data-pol-file-type="component"
      >
        <div
          className="flex flex-col md:flex-row md:items-center md:justify-between gap-12"
          data-pol-id="3viqbo"
          data-pol-file-name="talent-section"
          data-pol-file-type="component"
        >
          <div
            className="md:w-1/2"
            data-pol-id="myniis"
            data-pol-file-name="talent-section"
            data-pol-file-type="component"
          >
            <Animate
              variant="fade-right"
              data-pol-id="iisvqa"
              data-pol-file-name="talent-section"
              data-pol-file-type="component"
            >
              <SectionTitle
                title="Join Our Talent Network"
                subtitle="Collaborate with top talent and gain hands-on experience building cutting-edge AI solutions."
                className="mb-6"
                data-pol-id="q403jq"
                data-pol-file-name="talent-section"
                data-pol-file-type="component"
              />
            </Animate>

            <Animate
              variant="fade-up"
              delay={0.2}
              data-pol-id="yib5vr"
              data-pol-file-name="talent-section"
              data-pol-file-type="component"
            >
              <p
                className="text-muted-foreground mb-8"
                data-pol-id="7khjlh"
                data-pol-file-name="talent-section"
                data-pol-file-type="component"
              >
                We're always looking for talented developers, designers, and AI
                enthusiasts to join our network of collaborators. Whether you're
                a seasoned professional or a promising student, we'd love to
                connect.
              </p>
            </Animate>

            <Animate
              variant="fade-up"
              delay={0.4}
              data-pol-id="8os601"
              data-pol-file-name="talent-section"
              data-pol-file-type="component"
            >
              <div
                className="flex flex-col sm:flex-row gap-4"
                data-pol-id="czr2lb"
                data-pol-file-name="talent-section"
                data-pol-file-type="component"
              >
                <Button
                  size="lg"
                  icon={
                    <ArrowRightIcon
                      size={18}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                      data-pol-id="ew9m00"
                      data-pol-file-name="talent-section"
                      data-pol-file-type="component"
                    />
                  }
                  iconPosition="right"
                  className="group"
                  data-pol-id="o578hr"
                  data-pol-file-name="talent-section"
                  data-pol-file-type="component"
                >
                  <span
                    className="relative inline-block transition-transform duration-300 group-hover:translate-x-1"
                    data-pol-id="7yzkw7"
                    data-pol-file-name="talent-section"
                    data-pol-file-type="component"
                  >
                    Apply to Collaborate
                  </span>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="transition-all duration-300 hover:shadow-md"
                  data-pol-id="rkoh57"
                  data-pol-file-name="talent-section"
                  data-pol-file-type="component"
                >
                  Learn More
                </Button>
              </div>
            </Animate>
          </div>
          <div
            className="md:w-1/2 relative"
            data-pol-id="go5frk"
            data-pol-file-name="talent-section"
            data-pol-file-type="component"
          >
            <Animate
              variant="fade-left"
              delay={0.2}
              data-pol-id="l2brp5"
              data-pol-file-name="talent-section"
              data-pol-file-type="component"
            >
              <div
                className="aspect-square max-w-md mx-auto relative"
                data-pol-id="asrj7e"
                data-pol-file-name="talent-section"
                data-pol-file-type="component"
              >
                <BackgroundGradient
                  colors={["#0ea5e9", "#6366f1", "#8b5cf6", "#d946ef"]}
                  containerClassName="absolute inset-0 rounded-full"
                  data-pol-id="aniubk"
                  data-pol-file-name="talent-section"
                  data-pol-file-type="component"
                />

                <div
                  className="absolute inset-0 flex items-center justify-center"
                  data-pol-id="bq2dm0"
                  data-pol-file-name="talent-section"
                  data-pol-file-type="component"
                >
                  <UsersIcon
                    size={120}
                    className="text-primary/30 animate-pulse"
                    data-pol-id="5itd2b"
                    data-pol-file-name="talent-section"
                    data-pol-file-type="component"
                  />
                </div>
                <div
                  className="absolute top-1/4 -left-4 h-20 w-20 rounded-full bg-background shadow-lg flex items-center justify-center transition-transform duration-700 hover:scale-110 hover:rotate-6"
                  data-pol-id="0djvi2"
                  data-pol-file-name="talent-section"
                  data-pol-file-type="component"
                >
                  <img
                    src="https://github.com/kdrnp.png"
                    alt="Team member"
                    className="h-16 w-16 rounded-full"
                    data-pol-id="tqmkrb"
                    data-pol-file-name="talent-section"
                    data-pol-file-type="component"
                  />
                </div>
                <div
                  className="absolute top-1/2 -right-4 h-20 w-20 rounded-full bg-background shadow-lg flex items-center justify-center transition-transform duration-700 hover:scale-110 hover:rotate-6"
                  data-pol-id="t60t2k"
                  data-pol-file-name="talent-section"
                  data-pol-file-type="component"
                >
                  <img
                    src="https://github.com/yahyabedirhan.png"
                    alt="Team member"
                    className="h-16 w-16 rounded-full"
                    data-pol-id="ffvetn"
                    data-pol-file-name="talent-section"
                    data-pol-file-type="component"
                  />
                </div>
                <div
                  className="absolute bottom-1/4 left-1/4 h-20 w-20 rounded-full bg-background shadow-lg flex items-center justify-center transition-transform duration-700 hover:scale-110 hover:rotate-6"
                  data-pol-id="0j6mkg"
                  data-pol-file-name="talent-section"
                  data-pol-file-type="component"
                >
                  <img
                    src="https://github.com/buyuktas18.png"
                    alt="Team member"
                    className="h-16 w-16 rounded-full"
                    data-pol-id="05ml41"
                    data-pol-file-name="talent-section"
                    data-pol-file-type="component"
                  />
                </div>
              </div>
            </Animate>
          </div>
        </div>
      </div>
    </section>
  );
}
