import { ArrowLeftIcon, RocketIcon } from "lucide-react";
import Button from "@/polymet/components/button";
import Animate from "@/polymet/components/animate";
import LandingLayout from "@/polymet/layouts/landing-layout";
import { useNavigate } from "react-router-dom";

export default function StartupMVPPage() {
  const navigate = useNavigate();
  
  const handleBackClick = () => {
    navigate('/#use-cases');
  };

  return (
    <LandingLayout>
      <div className="container mx-auto px-6 py-20">
        <div className="flex items-center mb-8">
          <Button
            variant="ghost"
            onClick={handleBackClick}
            className="pl-0 hover:pl-2 transition-all duration-300 mb-6"
            icon={<ArrowLeftIcon size={16} />}
            iconPosition="left"
          >
            Back to Use Cases
          </Button>
        </div>

        <Animate variant="fade-up">
          <div className="flex items-center space-x-4 mb-6">
            <div className="h-12 w-12 flex items-center justify-center rounded-lg bg-primary/10 text-primary">
              <RocketIcon size={24} />
            </div>
            <h1 className="text-4xl font-bold">Startup MVPs</h1>
          </div>
        </Animate>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 mt-12">
          <div className="lg:col-span-3">
            <Animate variant="fade-up" delay={0.1}>
              <div className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Overview</h2>
                <p className="text-muted-foreground mb-4">
                  Turning innovative ideas into tangible products is the cornerstone of startup success. Our Startup MVP service focuses on getting your product from concept to customers rapidly and reliably, minimizing time-to-market while maximizing product-market fit.
                </p>
                <p className="text-muted-foreground">
                  We combine agile development methodologies with cutting-edge technology to deliver a minimal viable product that captures your vision's essence while providing a solid foundation for future growth and iteration.
                </p>
              </div>
            </Animate>

            <Animate variant="fade-up" delay={0.2}>
              <div className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Key Benefits</h2>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-primary/10 text-primary flex items-center justify-center mr-3 mt-1">1</div>
                    <div>
                      <h3 className="font-medium">Rapid Time-to-Market</h3>
                      <p className="text-muted-foreground">Launch your product in weeks, not months, allowing you to capture market opportunities before competitors.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-primary/10 text-primary flex items-center justify-center mr-3 mt-1">2</div>
                    <div>
                      <h3 className="font-medium">Cost-Effective Development</h3>
                      <p className="text-muted-foreground">Focus resources on essential features, validating your concept before significant investment.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-primary/10 text-primary flex items-center justify-center mr-3 mt-1">3</div>
                    <div>
                      <h3 className="font-medium">Scalable Architecture</h3>
                      <p className="text-muted-foreground">Built on solid technical foundations that can grow with your business needs.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-primary/10 text-primary flex items-center justify-center mr-3 mt-1">4</div>
                    <div>
                      <h3 className="font-medium">Data-Driven Iteration</h3>
                      <p className="text-muted-foreground">Leverage user feedback and analytics to rapidly refine your product.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </Animate>

            <Animate variant="fade-up" delay={0.3}>
              <div>
                <h2 className="text-2xl font-semibold mb-4">Our Approach</h2>
                <p className="text-muted-foreground mb-4">
                  We begin with a thorough discovery phase to understand your business goals, target users, and unique value proposition. Our team then designs and develops a streamlined version of your product that focuses on core functionality.
                </p>
                <p className="text-muted-foreground">
                  Throughout the development process, we maintain transparent communication and encourage continuous feedback, ensuring the final product aligns perfectly with your vision while meeting market demands.
                </p>
              </div>
            </Animate>
          </div>

          <div className="lg:col-span-2">
            <Animate variant="fade-left" delay={0.4}>
              <div className="sticky top-24 rounded-xl border border-border bg-card p-6">
                <h3 className="text-xl font-semibold mb-4">Get Started Today</h3>
                <p className="text-muted-foreground mb-6">
                  Ready to transform your idea into a market-ready MVP? Schedule a consultation with our team to discuss your project requirements and timeline.
                </p>
                <Button 
                  className="w-full" 
                  size="lg"
                  onClick={() => window.location.href = '/#contact'}
                >
                  Schedule Consultation
                </Button>

                <div className="mt-8 pt-8 border-t border-border">
                  <h4 className="font-medium mb-4">Common MVP Features</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-center"><div className="h-2 w-2 rounded-full bg-primary mr-2"></div>User authentication</li>
                    <li className="flex items-center"><div className="h-2 w-2 rounded-full bg-primary mr-2"></div>Core functionality</li>
                    <li className="flex items-center"><div className="h-2 w-2 rounded-full bg-primary mr-2"></div>Basic admin dashboard</li>
                    <li className="flex items-center"><div className="h-2 w-2 rounded-full bg-primary mr-2"></div>Analytics integration</li>
                    <li className="flex items-center"><div className="h-2 w-2 rounded-full bg-primary mr-2"></div>Payment processing</li>
                  </ul>
                </div>
              </div>
            </Animate>
          </div>
        </div>
      </div>
    </LandingLayout>
  );
}
