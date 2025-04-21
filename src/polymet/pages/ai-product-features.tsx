import { ArrowLeftIcon, BrainIcon } from "lucide-react";
import Button from "@/polymet/components/button";
import Animate from "@/polymet/components/animate";
import LandingLayout from "@/polymet/layouts/landing-layout";
import { useNavigate } from "react-router-dom";

export default function AIProductFeaturesPage() {
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
              <BrainIcon size={24} />
            </div>
            <h1 className="text-4xl font-bold">AI Product Features</h1>
          </div>
        </Animate>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 mt-12">
          <div className="lg:col-span-3">
            <Animate variant="fade-up" delay={0.1}>
              <div className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Overview</h2>
                <p className="text-muted-foreground mb-4">
                  In today's competitive landscape, integrating AI capabilities into your product can create significant market differentiation. Our AI Product Features service helps you seamlessly incorporate advanced AI functionalities such as predictive analytics, natural language processing, recommendation engines, and computer vision into your existing or new products.
                </p>
                <p className="text-muted-foreground">
                  We handle the complex technical implementation while ensuring the AI features enhance user experience, provide actionable insights, and deliver measurable business value aligned with your product strategy.
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
                      <h3 className="font-medium">Product Differentiation</h3>
                      <p className="text-muted-foreground">Stand out from competitors with intelligent features that users love.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-primary/10 text-primary flex items-center justify-center mr-3 mt-1">2</div>
                    <div>
                      <h3 className="font-medium">Enhanced User Experience</h3>
                      <p className="text-muted-foreground">Create personalized, intuitive experiences that adapt to user preferences and behaviors.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-primary/10 text-primary flex items-center justify-center mr-3 mt-1">3</div>
                    <div>
                      <h3 className="font-medium">Data-Driven Insights</h3>
                      <p className="text-muted-foreground">Leverage user interactions to generate valuable insights for product improvement.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-primary/10 text-primary flex items-center justify-center mr-3 mt-1">4</div>
                    <div>
                      <h3 className="font-medium">Continuous Improvement</h3>
                      <p className="text-muted-foreground">Implement systems that learn and improve over time through user interactions.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </Animate>

            <Animate variant="fade-up" delay={0.3}>
              <div>
                <h2 className="text-2xl font-semibold mb-4">Our Approach</h2>
                <p className="text-muted-foreground mb-4">
                  We work closely with your product team to identify opportunities where AI can create the most impact. Our approach combines deep technical expertise with a strong focus on user experience and business outcomes.
                </p>
                <p className="text-muted-foreground">
                  From data strategy and model development to integration and monitoring, we provide end-to-end support to ensure your AI features deliver reliable, scalable performance while maintaining ethical AI practices.
                </p>
              </div>
            </Animate>
          </div>

          <div className="lg:col-span-2">
            <Animate variant="fade-left" delay={0.4}>
              <div className="sticky top-24 rounded-xl border border-border bg-card p-6">
                <h3 className="text-xl font-semibold mb-4">Get Started Today</h3>
                <p className="text-muted-foreground mb-6">
                  Ready to enhance your product with powerful AI capabilities? Schedule a consultation with our AI specialists to explore possibilities for your product.
                </p>
                <Button 
                  className="w-full" 
                  size="lg"
                  onClick={() => window.location.href = '/#contact'}
                >
                  Schedule Consultation
                </Button>

                <div className="mt-8 pt-8 border-t border-border">
                  <h4 className="font-medium mb-4">Popular AI Features</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-center"><div className="h-2 w-2 rounded-full bg-primary mr-2"></div>Intelligent search and recommendation</li>
                    <li className="flex items-center"><div className="h-2 w-2 rounded-full bg-primary mr-2"></div>Natural language interfaces and chatbots</li>
                    <li className="flex items-center"><div className="h-2 w-2 rounded-full bg-primary mr-2"></div>Predictive analytics</li>
                    <li className="flex items-center"><div className="h-2 w-2 rounded-full bg-primary mr-2"></div>Computer vision and image recognition</li>
                    <li className="flex items-center"><div className="h-2 w-2 rounded-full bg-primary mr-2"></div>Personalization engines</li>
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
