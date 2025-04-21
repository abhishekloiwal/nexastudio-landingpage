import { cn } from "@/lib/utils";
import Button from "@/polymet/components/button";
import { ArrowRightIcon } from "lucide-react";
import BackgroundGradient from "@/polymet/components/background-gradient";
import FloatingElements from "@/polymet/components/floating-elements";
import Animate from "@/polymet/components/animate";

interface HeroSectionProps {
  className?: string;
}

export default function HeroSection({ className }: HeroSectionProps) {
  return (
    <section
      className={cn(
        "relative overflow-hidden bg-gradient-to-br from-background to-background/80 py-20 md:py-32",
        className,
      )}
      data-pol-id="s975vr"
      data-pol-file-name="hero-section"
      data-pol-file-type="component"
    >
      {/* Abstract background elements */}
      <FloatingElements
        count={15}
        colors={["#0ea5e9", "#6366f1", "#8b5cf6", "#d946ef"]}
        minSize={20}
        maxSize={60}
        minSpeed={0.2}
        maxSpeed={0.6}
        minOpacity={0.03}
        maxOpacity={0.08}
        minBlur={3}
        maxBlur={8}
        data-pol-id="qr77ar"
        data-pol-file-name="hero-section"
        data-pol-file-type="component"
      />

      <div
        className="container mx-auto px-6"
        data-pol-id="8anq0n"
        data-pol-file-name="hero-section"
        data-pol-file-type="component"
      >
        <div
          className="flex flex-col items-center text-center"
          data-pol-id="xiy848"
          data-pol-file-name="hero-section"
          data-pol-file-type="component"
        >
          <Animate
            variant="fade-down"
            data-pol-id="zet8gr"
            data-pol-file-name="hero-section"
            data-pol-file-type="component"
          >
            <h1
              className="max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-6"
              data-pol-id="s9j9j6"
              data-pol-file-name="hero-section"
              data-pol-file-type="component"
            >
              Rapidly Build{" "}
              <span
                className="bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent"
                data-pol-id="7oth8k"
                data-pol-file-name="hero-section"
                data-pol-file-type="component"
              >
                Intelligent AI Solutions
              </span>{" "}
              Tailored to Your Business
            </h1>
          </Animate>

          <Animate
            variant="fade-up"
            delay={0.2}
            data-pol-id="kdis3g"
            data-pol-file-name="hero-section"
            data-pol-file-type="component"
          >
            <p
              className="max-w-2xl text-xl text-muted-foreground mb-10"
              data-pol-id="rwx901"
              data-pol-file-name="hero-section"
              data-pol-file-type="component"
            >
              Expert AI Integration | Fast Prototyping | Strategic Consulting
            </p>
          </Animate>

          <Animate
            variant="fade-up"
            delay={0.4}
            data-pol-id="l9x2ps"
            data-pol-file-name="hero-section"
            data-pol-file-type="component"
          >
            <div
              className="flex flex-col sm:flex-row gap-4"
              data-pol-id="aphghx"
              data-pol-file-name="hero-section"
              data-pol-file-type="component"
            >
              <Button
                size="lg"
                onClick={() => {
                  const contactSection = document.getElementById('contact');
                  contactSection?.scrollIntoView({ behavior: 'smooth' });
                }}
                data-pol-file-name="hero-section"
                data-pol-file-type="component"
                icon={
                  <ArrowRightIcon
                    size={18}
                    data-pol-id="5x3xda"
                    data-pol-file-name="hero-section"
                    data-pol-file-type="component"
                  />
                }
                iconPosition="right"
              >
                Schedule a call
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => {
                  const servicesSection = document.getElementById('services');
                  servicesSection?.scrollIntoView({ behavior: 'smooth' });
                }}
                data-pol-id="mz5xb2"
                data-pol-file-name="hero-section"
                data-pol-file-type="component"
              >
                View Our Services
              </Button>
            </div>
          </Animate>
        </div>
      </div>

      {/* Background gradient effect */}
      <div
        className="absolute inset-0 -z-10 overflow-hidden"
        data-pol-id="vnwvdy"
        data-pol-file-name="hero-section"
        data-pol-file-type="component"
      >
        <BackgroundGradient
          colors={["#0ea5e9", "#6366f1", "#8b5cf6", "#d946ef"]}
          containerClassName="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full"
          size="large"
          interactive={false}
          data-pol-id="94t1h9"
          data-pol-file-name="hero-section"
          data-pol-file-type="component"
        />
      </div>
    </section>
  );
}
